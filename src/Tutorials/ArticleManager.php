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

    public function addArticle(
        string $title,
        string $category,
        string $author,
        string $imgUrl,
        string $shortDescription,
        string $mainContent
    ): array {

        $tutorialEntity = new TutorialArticle();
        $entityMenager = $this->doctrineManager->getManager();

        $tutorialEntity->setTitle($title);
        $tutorialEntity->setCategory($category);
        $tutorialEntity->setAuthor($author);
        $currentDate = new \DateTime('now');
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
            ->getRepository(TutorialArticle::class)
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

    public function findSameTopics(array $valuesToFind, Int $currentlyViewedArticleId, $persistentObject): array
    {
        $CategoryList = [];
        foreach ($valuesToFind as $key => $value) {
            $sameCategory = $this->doctrineManager
                ->getRepository($persistentObject)
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
            if ($value->getID() === $currentlyViewedArticleId) {
                unset($simplerCategoryList[$key]);
            }
        }

        //kasowanie duplikatów
        $validator = new HandlingDuplicates();
        $similarTopics = $validator->deleteObjDuplicateFromArray($simplerCategoryList);

        return $similarTopics;
    }

    public function showArticle(Int $Id, $persistentObject): array
    {
        $tutorialArticle = $this->doctrineManager
            ->getRepository($persistentObject)
            ->find($Id);

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

        $simimarTopics = $this->findSameTopics($tutorialCategoryArray, $tutorialID, TutorialArticle::class);

        return [
            'tutorialTitle' => $tutorialTitle,
            'tutorialCategory' => $tutorialCategoryArray,
            'tutorialAuthor' => $tutorialAuthor,
            'tutorialDate' => $tutorialDate,
            'tutorialImg' => $tutorialImg,
            'tutorialShortDescription' => $tutorialShortDescription,
            'tutorialMainContent' => $tutorialMainContent,
            'categoryList' => $simimarTopics,
            'ID' => $Id
        ];
    }

    public function editArticle(
        int $articleId,
        string $title = null,
        string $category = null,
        string $author = null,
        string $URLImg = null,
        string $shortDescription = null,
        string $mainTopic = null
    ) {
        $articleToEdit = $this->doctrineManager->getRepository(TutorialArticle::class)->find($articleId);

        if (!is_null($title)) {
            $articleToEdit->setTitle($title);
            $articleToEdit->setCategory($category);
            $articleToEdit->setAuthor($author);
            $articleToEdit->setURLImg($URLImg);
            $articleToEdit->setShortDescription($shortDescription);
            $articleToEdit->setMainTopic($mainTopic);

            $validationErrors = $this->validator->validate($articleToEdit);

            if (count($validationErrors) > 0) {
                return [
                    'view' => 'tutorials/alertAndChoicePanel.html.twig',
                    'message' => 'You entered incorrect changes',
                    'option1' => 'Home',
                    'option2' => 'Back',
                    'href1' => 'home',
                    'href2' => 'tutorialArticleEdit',
                    'ID' => $articleId,
                    'errors' => $validationErrors
                ];

            } else {
                $entityManager = $this->doctrineManager->getManager();
                $entityManager->persist($articleToEdit);
                $entityManager->flush();

                return [
                    'view' => 'tutorials/alertAndChoicePanel.html.twig',
                    'message' => "<span class='text-success alert-success'>Success!</span>",
                    'option1' => 'Home',
                    'option2' => 'Show topic',
                    'href1' => 'home',
                    'href2' => 'tutorialShow',
                    'ID' => $articleId
                ];
            }
        }
        return [
            'view' => 'tutorials/addNewTutorialArticle.html.twig',
            'article' => [
                'title' => $articleToEdit->getTitle(),
                'category' => $articleToEdit->getCategory(),
                'author' => $articleToEdit->getAuthor(),
                'creationDate' => $articleToEdit->getCreationDate(),
                'URLImg' => $articleToEdit->getURLImg(),
                'shortDescription' => $articleToEdit->getShortDescription(),
                'mainTopic' => $articleToEdit->getMainTopic()
            ],
            'pathToRouteWhereFormSend' => 'tutorialArticleEdit',
            'ID' => $articleId
        ];
    }

    public function deleteArticle(int $articleId, bool $confirm)
    {
        if ($confirm === true) {
            $articleToDelete = $this->doctrineManager->getRepository(TutorialArticle::class)->find($articleId);
            $entityManager = $this->doctrineManager->getManager();
            $entityManager->remove($articleToDelete);
            $entityManager->flush();

            return [
                'view' => 'tutorials/alertAndChoicePanel.html.twig',
                'message' => "<span class='text-success'>Success! Article deleted.</span>",
                'option1' => 'home',
                'option2' => 'Back to articles',
                'href1' => 'home',
                'href2' => 'tutorials'
            ];
        }

        return [
            'view' => 'tutorials/alertAndChoicePanel.html.twig',
            'message' => "<span class='text-success'>Are you sure?</span>",
            'option1' => 'NO!',
            'option2' => 'YES',
            'href1' => 'home',
            'href2' => 'tutorialDelete',
            'ID' => $articleId,
            'confirm' => true
        ];
    }
}