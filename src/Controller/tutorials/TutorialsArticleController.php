<?php

namespace App\Controller\tutorials;

use App\Tutorials\ArticleManager;
use App\Entity\TutorialArticle;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Cache;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

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
        return $this->render('tutorials/addNewTutorialArticle.html.twig', ['pathToRouteWhereFormSend' => 'approvalTutorialArticle']);
    }

    /**
     * @Route("/Tutorials/newArticle/approval", name="approvalTutorialArticle")
     *
     */
    public function approvalTutorialArticle(Request $request)
    {

        $content = $this->articleManager->addArticle(
            $request->request->get('tutorial_title'),
            $request->request->get('tutorial_category'),
            $request->request->get('tutorial_author'),
            $request->request->get('tutorial_img'),
            $request->request->get('ckeditorShortDesciption'),
            $request->request->get('ckeditorMainContent')
        );

        return $this->render('tutorials/tutorialArticleAddedNotAdded.html.twig', $content);

    }

    /**
     * @Route("/Tutorials/article/{ID}", name="tutorialShow")
     * @Cache(expires="tomorrow", public=true)
     */
    public function showTutorialArticle($ID)
    {
        $articleToShow = $this->articleManager->showArticle($ID, TutorialArticle::class);

        return $this->render('tutorials/tutorialTopic.html.twig', $articleToShow);
    }

    /**
     * @Security("has_role('ROLE_ADMIN')")
     * @Route("/Tutorials/article/{ID}/edit", name="tutorialArticleEdit")
     */
    public function editArticle($ID, Request $request)
    {
        $editArticle = $this->articleManager->editArticle(
            $ID,
            $request->get('tutorial_title'),
            $request->get('tutorial_category'),
            $request->get('tutorial_author'),
            $request->get('tutorial_img'),
            $request->get('ckeditorShortDesciption'),
            $request->get('ckeditorMainContent')
        );

        return $this->render($editArticle['view'], $editArticle);
    }
}