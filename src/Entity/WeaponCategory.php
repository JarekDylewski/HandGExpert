<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\WeaponCategoryRepository")
 */
class WeaponCategory
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=191)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\WeaponStorage", mappedBy="weaponCategory")
     */
    private $weaponStorages;

    public function __construct()
    {
        $this->weaponStorages = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|WeaponStorage[]
     */
    public function getWeaponStorages(): Collection
    {
        return $this->weaponStorages;
    }

    public function addWeaponStorage(WeaponStorage $weaponStorage): self
    {
        if (!$this->weaponStorages->contains($weaponStorage)) {
            $this->weaponStorages[] = $weaponStorage;
            $weaponStorage->setWeaponCategory($this);
        }

        return $this;
    }

    public function removeWeaponStorage(WeaponStorage $weaponStorage): self
    {
        if ($this->weaponStorages->contains($weaponStorage)) {
            $this->weaponStorages->removeElement($weaponStorage);
            // set the owning side to null (unless already changed)
            if ($weaponStorage->getWeaponCategory() === $this) {
                $weaponStorage->setWeaponCategory(null);
            }
        }

        return $this;
    }
}
