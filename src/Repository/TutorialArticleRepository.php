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
     * @param $category
     * @return TutorialArticle[]
     */
    public function findSameCategory($category,$queryLimit): array
    {
        $queryBuilder = $this->createQueryBuilder('c')
            ->andWhere('c.category LIKE :category')
            ->setParameter('category', '%'.$category.'%')
            ->setMaxResults($queryLimit)
            ->orderBy('c.category', 'ASC')
            ->getQuery();

        return $queryBuilder->execute();
    }
    /**
     * @param $what {string} - what you want find SELECT $what FROM (...)
     * @return TutorialArticle[]
     */
    public function select($what,$order = 'DESC'): array
    {
        $queryBuilder = $this->createQueryBuilder('w')
            ->select('w.'.$what)
            ->orderBy('w.'.$what,$order)
            ->getQuery();

        return $queryBuilder->execute();
    }

//    /**
//     * @return TutorialArticle[] Returns an array of TutorialArticle objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TutorialArticle
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
