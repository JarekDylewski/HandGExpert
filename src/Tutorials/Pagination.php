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
     * @param Int $currentPage
     * @param Int $limit
     * @return array $listOfPagesIdToFind[]
     */
    public function paginate(Int $currentPage): array
    {
        $pageMenu = array_chunk($this->articlesId, $this->pageLimit);

        $pagesForCurrentPage = $pageMenu[$currentPage - 1];
        $listOfPagesIdToFind = [];
        foreach ($pagesForCurrentPage as $key => $value) {
            $listOfPagesIdToFind[] = $value['id'];
        }

        return array_reverse($listOfPagesIdToFind);
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
}