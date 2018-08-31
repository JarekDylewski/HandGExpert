<?php

namespace App\Tutorials;


interface ArticleManagerInterface
{
    public function getPaginatedArticlesMenuList(int $page, $persistentObject): array;

    public function addArticle(
        string $title,
        string $category,
        string $author,
        string $imgUrl,
        string $shortDescription,
        string $mainContent,
        $persistentObject
    ): array;

    public function showArticle(Int $Id, $persistentObject): array;

    public function findSameTipics(array $valuesToFind, Int $currentlyViewedArticleId, $persistentObject): array;
}