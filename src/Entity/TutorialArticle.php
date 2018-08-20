<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\TutorialArticleRepository")
 */
class TutorialArticle
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $category;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $author;

    /**
     * @ORM\Column(type="date")
     */
    private $creationDate;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $URLImg;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $shortDescription;

    /**
     * @ORM\Column(type="text")
     */
    private $mainTopic;

    public function getId()
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getAuthor(): ?string
    {
        return $this->author;
    }

    public function setAuthor(string $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getCreationDate(): ?\DateTimeInterface
    {
        return $this->creationDate;
    }

    public function setCreationDate(\DateTimeInterface $creationDate): self
    {
        $this->creationDate = $creationDate;

        return $this;
    }

    public function getURLImg(): ?string
    {
        return $this->URLImg;
    }

    public function setURLImg(?string $URLImg): self
    {
        $this->URLImg = $URLImg;

        return $this;
    }

    public function getShortDescription(): ?string
    {
        return $this->shortDescription;
    }

    public function setShortDescription(?string $shortDescription): self
    {
        $this->shortDescription = $shortDescription;

        return $this;
    }

    public function getMainTopic(): ?string
    {
        return $this->mainTopic;
    }

    public function setMainTopic(string $mainTopic): self
    {
        $this->mainTopic = $mainTopic;

        return $this;
    }
}
