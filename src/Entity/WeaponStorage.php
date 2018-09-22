<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\WeaponStorageRepository")
 */
class WeaponStorage
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\WeaponCategory", inversedBy="weaponStorages")
     * @ORM\JoinColumn(nullable=false)
     */
    private $weaponCategory;

    /**
     * @ORM\Column(type="integer")
     */
    private $gunId;

    /**
     * @ORM\Column(type="integer")
     */
    private $ammoId;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $crosshairId;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $triggerId;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $springId;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $barrelId;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="weaponStorages")
     */
    private $user;

    /**
     * @ORM\Column(type="string", length=40, nullable=true)
     */
    private $shareLink;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getWeaponCategory(): ?WeaponCategory
    {
        return $this->weaponCategory;
    }

    public function setWeaponCategory(?WeaponCategory $weaponCategory): self
    {
        $this->weaponCategory = $weaponCategory;

        return $this;
    }

    public function getGunId(): ?int
    {
        return $this->gunId;
    }

    public function setGunId(int $gunId): self
    {
        $this->gunId = $gunId;

        return $this;
    }

    public function getAmmoId(): ?int
    {
        return $this->ammoId;
    }

    public function setAmmoId(int $ammoId): self
    {
        $this->ammoId = $ammoId;

        return $this;
    }

    public function getCrosshairId(): ?int
    {
        return $this->crosshairId;
    }

    public function setCrosshairId(?int $crosshairId): self
    {
        $this->crosshairId = $crosshairId;

        return $this;
    }

    public function getTriggerId(): ?int
    {
        return $this->triggerId;
    }

    public function setTriggerId(?int $triggerId): self
    {
        $this->triggerId = $triggerId;

        return $this;
    }

    public function getSpringId(): ?int
    {
        return $this->springId;
    }

    public function setSpringId(?int $springId): self
    {
        $this->springId = $springId;

        return $this;
    }

    public function getBarrelId(): ?int
    {
        return $this->barrelId;
    }

    public function setBarrelId(?int $barrelId): self
    {
        $this->barrelId = $barrelId;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getShareLink(): ?string
    {
        return $this->shareLink;
    }

    public function setShareLink(?string $shareLink): self
    {
        $this->shareLink = $shareLink;

        return $this;
    }
}
