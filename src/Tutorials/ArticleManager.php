<?php

namespace App\Tutorials;


use Doctrine\Common\Persistence\ManagerRegistry;

class ArticleManager implements ArticleManagerInterface
{
    private $doctrineManager;

    private $allTutorialsArticleID;
    private $listOfPagesIdToFind;
    private $countPagination;

    public function __construct(ManagerRegistry $doctrineManager)
    {
        $this->doctrineManager = $doctrineManager;
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

}