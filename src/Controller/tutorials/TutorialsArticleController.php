<?php

namespace App\Controller\tutorials;

use App\Entity\TutorialArticle;
use App\Tutorials\TopicValidator;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class TutorialsArticleController extends Controller
{
    /**
     * @Route("/Tutorials/{page}",name="tutorials",defaults={"page":1})
     * @Cache(expires="tomorrow", public=true)
     */
    public function tutorials($page)
    {
        $currentPage = $page;
        $allTutorialsArticleID = $this->getDoctrine()
            ->getRepository(TutorialArticle::class)
            ->select('id');
        $numberPagination = count($allTutorialsArticleID) / 5;
        //zaokrąglenie w górę
        if (is_float($numberPagination)) {
            $numberPagination = ceil($numberPagination);
        };
        $countAllTutorialsArticleID = count($allTutorialsArticleID);
        $pagesToFindStart = $countAllTutorialsArticleID - ($page * 5) + 1; // 5  //59
        $pageToFindEnd = $countAllTutorialsArticleID - ($page * 5) + 6; // 0 //63
        $pagesToFind = [];
        for ($i = $pagesToFindStart; $i < $pageToFindEnd; $i++) {
            $pageToFind[] = $i;
        }

        $content = $this->getDoctrine()
            ->getRepository(TutorialArticle::class)
            ->findBy(array('id' => $pageToFind));
        return $this->render('tutorials/tutorials.html.twig', [
            'ID' => $allTutorialsArticleID,
            'numberPagination' => $numberPagination,
            'currentPage' => $currentPage,
            'content' => $content,
            'pagesIDToView' => $pageToFind

        ]);
    }

    /**
     * @Security("has_role('ROLE_ADMIN')")
     * @Route("/Tutorials-Add-New-Article",name="addNewArticle")
     */
    public function addNewTutorialArticle()
    {
        return $this->render('tutorials/addNewTutorialArticle.html.twig', []);
    }

    /**
     * @Route("/Tutorials/newArticle/approval", name="approvalTutorialArticle")
     *
     */
    public function approvalTutorialArticle()
    {
        $dataValidate = true;
        $currentDate = new \DateTime('now');
        if ($currentDate === null) {
            $dataValidate = false;
        }
        $title = $_POST['tutorial_title'];
        $titleLen = strlen($title);
        if ($title === "" || !isset($title) || is_null($title) || $titleLen > 60) {
            $dataValidate = false;
        }
        $category = $_POST['tutorial_category'];
        $categoryLen = strlen($category);
        if ($category === "" || !isset($category) || is_null($category) || $categoryLen > 45) {
            $dataValidate = false;
        }
        $author = $_POST['tutorial_author'];
        $authorLen = strlen($author);
        if ($authorLen > 40) {
            $dataValidate = false;
        }
        $imgUrl = $_POST['tutorial_img'];
        $imgUrlLen = strlen($imgUrl);
        if ($imgUrlLen > 255) {
            $dataValidate = false;
        }
        $shortDescription = $_POST['ckeditorShortDesciption'];
        $mainContent = $_POST['ckeditorMainContent'];
        if ($mainContent === "" || !isset($mainContent) || is_null($mainContent)) {
            $dataValidate = false;
        }
        if ($dataValidate === true) {
            $tutorialEntity = new TutorialArticle();
            $entityMenager = $this->getDoctrine()->getManager();

            $tutorialEntity->setTitle($title);
            $tutorialEntity->setCategory($category);
            $tutorialEntity->setAuthor($author);
            $tutorialEntity->setCreationDate($currentDate);
            $tutorialEntity->setURLImg($imgUrl);
            $tutorialEntity->setShortDescription($shortDescription);
            $tutorialEntity->setMainTopic($mainContent);

            $entityMenager->persist($tutorialEntity);
            $entityMenager->flush();
            $succesMessage = 'Added successfully!';

            $allTutorialsArticleID = $this->getDoctrine()
                ->getRepository(TutorialArticle::class)
                ->select('id');
            $lastTopic = count($allTutorialsArticleID);

            return $this->render('tutorials/tutorialArticleAddedNotAdded.html.twig', [
                'message' => $succesMessage,
                'option1' => 'Back to tutorials',
                'option2' => 'Show topic',
                'href1' => 'tutorials',
                'href2' => 'tutorialShow',
                'ID' => $lastTopic
            ]);

        } else if ($dataValidate === false) {
            $failureMessage = 'Something is wrong! Please complete the fields with *';
            return $this->render('tutorials/tutorialArticleAddedNotAdded.html.twig', [
                'message' => $failureMessage,
                'option1' => 'Home',
                'option2' => 'Back to editor',
                'href1' => 'home',
                'href2' => 'addNewArticle'
            ]);
        }
    }

    /**
     * @Route("/Tutorials/article/{ID}", name="tutorialShow")
     * @Cache(expires="tomorrow", public=true)
     */
    public function showTutorialArticle($ID)
    {
        $tutorialArticle = $this->getDoctrine()
            ->getRepository(TutorialArticle::class)
            ->find($ID);
        if (!$tutorialArticle) {
            throw $this->createNotFoundException(
                'not found article ' . $ID
            );
        }
        $tutorialID = $tutorialArticle->getID();
        $tutorialTitle = $tutorialArticle->getTitle();
        $tutorialCategory = $tutorialArticle->getCategory();
        $tutorialCategoryArray = explode(",", $tutorialCategory);
        foreach ($tutorialCategoryArray as $key => $value) {
            $tutorialCategoryArray[$key] = trim($value);
        }
        $tutorialAuthor = $tutorialArticle->getAuthor();
        $tutorialDate = $tutorialArticle->getCreationDate();
        $tutorialImg = $tutorialArticle->getURLImg();
        $tutorialShortDescription = $tutorialArticle->getShortDescription();
        $tutorialMainContent = $tutorialArticle->getMainTopic();

        $CategoryList = [];
        foreach ($tutorialCategoryArray as $key => $value) {
            $sameCategory = $this->getDoctrine()
                ->getRepository(TutorialArticle::class)
                ->findSameCategory($value, 6);
            $CategoryList[] = $sameCategory;
        }
        //rozbicie na prostszą tablice
        $simplerCategoryList = [];
        foreach ($CategoryList as $key => $value) {
            foreach ($value as $k => $v) {
                $simplerCategoryList[] = $value[$k];
            }
        }

        //kasowanie tematu który aktualnie przegląda użytkownik
        foreach ($simplerCategoryList as $key => $value) {
            if ($value->getID() === $tutorialID) {
                unset($simplerCategoryList[$key]);
            }
        }

        //kasowanie duplikatów
        $validator = new TopicValidator();
        $simplerCategoryList = $validator->deleteObjDuplicateFromArray($simplerCategoryList);

        return $this->render('tutorials/tutorialTopic.html.twig', [
            'tutorialTitle' => $tutorialTitle,
            'tutorialCategory' => $tutorialCategoryArray,
            'tutorialAuthor' => $tutorialAuthor,
            'tutorialDate' => $tutorialDate,
            'tutorialImg' => $tutorialImg,
            'tutorialShortDescription' => $tutorialShortDescription,
            'tutorialMainContent' => $tutorialMainContent,
            'categoryList' => $simplerCategoryList
        ]);
    }

}