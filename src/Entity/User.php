<?php

namespace App\Entity;


use App\Security\WarningPointsInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;


/**
 * @ORM\Table(name="app_users")
 * @ORM\Entity(repositoryClass="App\Repository\UserRepository")
 * @UniqueEntity(fields="email", message="Email already taken")
 * @UniqueEntity(fields="username", message="Username already taken")
 */
class User implements UserInterface, \Serializable, WarningPointsInterface
{
    /**
     * @ORM\Column(type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=191, unique=true)
     * @Assert\NotBlank()
     * @Assert\Length(min = 3, max = 20)
     */
    private $username;

    /**
     * @Assert\NotBlank()
     * @Assert\Length(min = 5, max = 40)
     */
    private $plainPassword;

    /**
     * @Assert\Length(min = 5, max = 40)
     * @ORM\Column(type="string", length=64)
     */
    private $password;

    /**
     * @ORM\Column(type="string", length=191, unique=true)
     * @Assert\NotBlank()
     * @Assert\Email()
     * @Assert\Length(min = 5, max = 60)
     */
    private $email;

    /**
     * @ORM\Column(name="is_active", type="boolean")
     */
    private $isActive;

    /**
     * @param mixed $username
     */
    public function setUsername($username): void
    {
        $this->username = $username;
    }

    /**
     * @return mixed
     */
    public function getPlainPassword()
    {
        return $this->plainPassword;
    }

    /**
     * @param mixed $plainPassword
     */
    public function setPlainPassword($plainPassword): void
    {
        $this->plainPassword = $plainPassword;
    }

    /**
     * @param mixed $password
     */
    public function setPassword($password): void
    {
        $this->password = $password;
    }

    /**
     * @param mixed $email
     */
    public function setEmail($email): void
    {
        $this->email = $email;
    }

    /**
     * @ORM\Column(type="array")
     */
    private $roles;

    /**
     * @return mixed
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\WeaponStorage", mappedBy="user")
     */
    private $weaponStorages;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $lastSensitiveActivity;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $warningPoints;

    /**
     * @return mixed
     */
    public function getEmail()
    {
        return $this->email;
    }

    public function __construct()
    {
        $this->roles = array('ROLE_USER');
        $this->isActive = true;
        $this->weaponStorages = new ArrayCollection();
    }

    public function getUsername()
    {
        return $this->username;
    }

    public function getSalt()
    {
        return null;
    }

    public function getPassword()
    {
        return $this->password;
    }

    public function getRoles()
    {
        return $this->roles;
    }

    public function eraseCredentials()
    {
    }

    /** @see \Serializable::serialize() */
    public function serialize()
    {
        return serialize(array(
            $this->id,
            $this->username,
            $this->email,
            $this->password,
            $this->roles
        ));
    }

    /** @see \Serializable::unserialize() */
    public function unserialize($serialized)
    {
        list (
            $this->id,
            $this->username,
            $this->email,
            $this->password,
            $this->roles
            ) = unserialize($serialized, array('allowed_classes' => false));
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
            $weaponStorage->setUser($this);
        }

        return $this;
    }

    public function removeWeaponStorage(WeaponStorage $weaponStorage): self
    {
        if ($this->weaponStorages->contains($weaponStorage)) {
            $this->weaponStorages->removeElement($weaponStorage);
            // set the owning side to null (unless already changed)
            if ($weaponStorage->getUser() === $this) {
                $weaponStorage->setUser(null);
            }
        }

        return $this;
    }

    public function getLastSensitiveActivity(): \DateTime
    {
        return $this->lastSensitiveActivity;
    }

    public function setLastSensitiveActivity(\DateTime $lastSensitiveActivity): void
    {
        $this->lastSensitiveActivity = $lastSensitiveActivity;
    }

    public function getWarningPoints(): int
    {
        return $this->warningPoints;
    }

    public function setWarningPoints(int $warningPoints): void
    {
        $this->warningPoints = $warningPoints;
    }
}