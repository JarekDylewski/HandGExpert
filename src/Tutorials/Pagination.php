<?php

namespace App\Tutorials;


class Pagination
{
    private $articlesId;
    private $pageLimit;

    public function __construct(array $articlesId, Int $pageLimit)
    {
        $this->articlesId = $articlesId;
        $this->pageLimit = $pageLimit;
    }

    /**
     * @param Int $page
     * @param Int $limit
     * @return array $listOfPagesIdToFind[]
     */
    public function paginate(Int $page): array
    {
        $countAllTutorialsArticlesID = count($this->articlesId);
        $pagesToFindStart = $countAllTutorialsArticlesID - ($page * $this->pageLimit) + 1; // 5  //59
        $pageToFindEnd = $countAllTutorialsArticlesID - ($page * $this->pageLimit) + 6; // 0 //63
        $listOfPagesIdToFind = [];
        for ($i = $pagesToFindStart; $i < $pageToFindEnd; $i++) {
            $listOfPagesIdToFind[] = $i;
        }
        return $listOfPagesIdToFind;
    }

    public function getNumberPagination(): int
    {
        $numberPagination = count($this->articlesId) / $this->pageLimit;
        //zaokrąglenie w górę
        if (is_float($numberPagination)) {
            $numberPagination = ceil($numberPagination);
        };
        return $numberPagination;
    }
    // podaje tablicę z id stron do znalezienia
//$content = $this->getDoctrine()
//->getRepository(TutorialArticle::class)
//->findBy(array('id' => $pageToFind));
}