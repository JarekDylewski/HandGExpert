<?php

namespace App\Repository;

use App\Entity\TutorialArticle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method TutorialArticle|null find($id, $lockMode = null, $lockVersion = null)
 * @method TutorialArticle|null findOneBy(array $criteria, array $orderBy = null)
 * @method TutorialArticle[]    findAll()
 * @method TutorialArticle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TutorialArticleRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, TutorialArticle::class);
    }

    /**
     * @param String $categoryName
     * @param Int $queryLimit
     * @return array
     */
    public function findSameCategory(String $categoryName, Int $queryLimit): array
    {
        $queryBuilder = $this->createQueryBuilder('c')
            ->andWhere('c.category LIKE :category')
            ->setParameter('category', '%' . $categoryName . '%')
            ->setMaxResults($queryLimit)
            ->orderBy('c.category', 'ASC')
            ->getQuery();

        return $queryBuilder->execute();
    }

    /**
     * @param String $whatSelect - what you want find SELECT $what FROM (...)
     * @param String $order - ASC or DESC
     * @return array
     */
    public function select(String $whatSelect, String $order = 'DESC'): array
    {
        $queryBuilder = $this->createQueryBuilder('w')
            ->select('w.' . $whatSelect)
            ->orderBy('w.' . $whatSelect, $order)
            ->getQuery();

        return $queryBuilder->execute();
    }
}
