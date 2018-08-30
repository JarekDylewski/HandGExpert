<?php

namespace App\Tutorials;


use App\Entity\TutorialArticle;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ArticleManager implements ArticleManagerInterface
{
    private $doctrineManager;
    private $validator;

    private $allTutorialsArticleID;
    private $listOfPagesIdToFind;
    private $countPagination;

    public function __construct(ManagerRegistry $doctrineManager, ValidatorInterface $validator)
    {
        $this->doctrineManager = $doctrineManager;
        $this->validator = $validator;
    }

    public function getPaginatedArticlesMenuList(int $page, $persistentObject): array
    {
        $this->allTutorialsArticleID = $this->doctrineManager
            ->getRepository($persistentObject)
            ->select('id');

        $pagination = new Pagination($this->allTutorialsArticleID, 5);
        $this->listOfPagesIdToFind = $pagination->paginate($page);
        $this->countPagination = $pagination->getNumberPagination();
        $content = $this->doctrineManager
            ->getRepository($persistentObject)
            ->findBy(array('id' => $this->listOfPagesIdToFind));

        return $content;
    }

    public function getAllTutorialsArticleID()
    {
        return $this->allTutorialsArticleID;
    }

    public function getListOfPagesIdToFind()
    {
        return $this->listOfPagesIdToFind;
    }

    public function getCountPagination()
    {
        return $this->countPagination;
    }

    public function addArticle($title, $category, $author, $imgUrl, $shortDescription, $mainContent, $persistentObject)
    {
        $currentDate = new \DateTime('now');

        $tutorialEntity = new TutorialArticle();
        $entityMenager = $this->doctrineManager->getManager();

        $tutorialEntity->setTitle($title);
        $tutorialEntity->setCategory($category);
        $tutorialEntity->setAuthor($author);
        $tutorialEntity->setCreationDate($currentDate);
        $tutorialEntity->setURLImg($imgUrl);
        $tutorialEntity->setShortDescription($shortDescription);
        $tutorialEntity->setMainTopic($mainContent);

        $validationErrors = $this->validator->validate($tutorialEntity);

        if (count($validationErrors) > 0) {
            $failureMessage = 'Something is wrong! Please complete the fields with <span style="color:red;font-size: 30px;">*';
            return [
                'message' => $failureMessage,
                'option1' => 'Home',
                'option2' => 'Back to editor',
                'href1' => 'home',
                'href2' => 'addNewArticle',
                'errors' => $validationErrors,
            ];
        }

        $entityMenager->persist($tutorialEntity);
        $entityMenager->flush();
        $succesMessage = 'Added successfully!';

        $allTutorialsArticleID = $this->doctrineManager
            ->getRepository($persistentObject)
            ->select('id');
        $lastTopic = count($allTutorialsArticleID);

        return [
            'message' => $succesMessage,
            'option1' => 'Back to tutorials',
            'option2' => 'Show topic',
            'href1' => 'tutorials',
            'href2' => 'tutorialShow',
            'ID' => $lastTopic
        ];
    }

}