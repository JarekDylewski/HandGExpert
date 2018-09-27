<?php

namespace App\Repository;

use App\Entity\WeaponStorage;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method WeaponStorage|null find($id, $lockMode = null, $lockVersion = null)
 * @method WeaponStorage|null findOneBy(array $criteria, array $orderBy = null)
 * @method WeaponStorage[]    findAll()
 * @method WeaponStorage[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WeaponStorageRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, WeaponStorage::class);
    }

//    /**
//     * @return WeaponStorage[] Returns an array of WeaponStorage objects
//     */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('w.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?WeaponStorage
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
