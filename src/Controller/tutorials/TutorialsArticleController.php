<?php

namespace App\Controller\tutorials;

use App\Tutorials\ArticleManager;
use App\Tutorials\Pagination;
use App\Entity\TutorialArticle;
use App\Tutorials\HandlingDuplicates;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class TutorialsArticleController extends Controller
{
    private $articleManager;

    public function __construct(ArticleManager $articleManager)
    {
        $this->articleManager = $articleManager;
    }

    /**
     * @Route("/Tutorials/{page}",name="tutorials",defaults={"page":1})
     * @Cache(expires="tomorrow", public=true)
     */
    public function tutorials($page)
    {
        $content = $this->articleManager->getPaginatedArticlesMenuList($page, TutorialArticle::class);

        return $this->render('tutorials/tutorials.html.twig', [
            'ID' => $this->articleManager->getAllTutorialsArticleID(),
            'countPagination' => $this->articleManager->getCountPagination(),
            'currentPage' => $page,
            'content' => $content,
            'pagesIDToView' => $this->articleManager->getListOfPagesIdToFind()
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
    public function approvalTutorialArticle(ValidatorInterface $validator, Request $request)
    {
        $currentDate = new \DateTime('now');

        $title = $request->request->get('tutorial_title');
        $category = $request->request->get('tutorial_category');
        $author = $request->request->get('tutorial_author');
        $imgUrl = $request->request->get('tutorial_img');
        $shortDescription = $request->request->get('ckeditorShortDesciption');
        $mainContent = $request->request->get('ckeditorMainContent');

        $tutorialEntity = new TutorialArticle();
        $entityMenager = $this->getDoctrine()->getManager();

        $tutorialEntity->setTitle($title);
        $tutorialEntity->setCategory($category);
        $tutorialEntity->setAuthor($author);
        $tutorialEntity->setCreationDate($currentDate);
        $tutorialEntity->setURLImg($imgUrl);
        $tutorialEntity->setShortDescription($shortDescription);
        $tutorialEntity->setMainTopic($mainContent);

        $validationErrors = $validator->validate($tutorialEntity);

        if (count($validationErrors) > 0) {
            $failureMessage = 'Something is wrong! Please complete the fields with <span style="color:red;font-size: 30px;">*';
            return $this->render('tutorials/tutorialArticleAddedNotAdded.html.twig', [
                'message' => $failureMessage,
                'option1' => 'Home',
                'option2' => 'Back to editor',
                'href1' => 'home',
                'href2' => 'addNewArticle',
                'errors' => $validationErrors,
            ]);
        }

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
        $validator = new HandlingDuplicates();
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