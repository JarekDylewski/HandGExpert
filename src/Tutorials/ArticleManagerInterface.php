<?php

namespace App\Tutorials;


interface ArticleManagerInterface
{
    public function getPaginatedArticlesMenuList(int $page, $persistentObject): array;
}