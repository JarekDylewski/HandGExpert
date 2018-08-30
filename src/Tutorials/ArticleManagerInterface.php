<?php

namespace App\Tutorials;


interface ArticleManagerInterface
{
    public function getPaginatedArticlesMenuList(int $page, $persistentObject): array;

    public function addArticle($title, $category, $author, $imgUrl, $shortDescription, $mainContent, $persistentObject);
}