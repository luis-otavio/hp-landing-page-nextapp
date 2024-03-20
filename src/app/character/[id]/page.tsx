import Image from "next/image"
import { ImageOff } from "lucide-react"

import { CharactersType } from "@/types/characters"
import { BASE_URL } from '@/utils/api'
import { BackButton } from "@/components/backButton"

import styles from '@/styles/character.module.scss'

interface CharacterProps {
  params: {
    id: string
  }
}

async function getCharacter(id: string) {
  const response = await fetch(`${BASE_URL}/character/${id}`, {
    next: {
      revalidate: 60 * 60,
    },
  });

  const character = await response.json();

  return character[0];
}

export default async function CharacterPage({ params }: CharacterProps) {
  const character: CharactersType = await getCharacter(params.id);

  console.log('character', character)

  return (
    <div className={styles.container}>
      <BackButton />
      <div className={styles.characterInfo}>
        <div className={styles.contentImage}>
          {character.image ? (
            <Image
              priority
              width={250}
              height={300}
              quality={100}
              src={character.image}
              alt={character.name}
              className={styles.characterImage}
            />
          ) : (
            <div className={styles.iconContainer}>
              <ImageOff size={40} strokeWidth={1} />
            </div>
          )}
        </div>
        <div className={styles.contentInfo}>
          <h2>{character.name}</h2>
          <ul className={styles.contentInfoList}>
            {character.alternate_names.length !== 0 && (
              <li>
                <strong>Alternate Names:</strong>{" "}
                {character.alternate_names.join(", ")}
              </li>
            )}
            {character.species && (
              <li>
                <strong>Species:</strong> {character.species}
              </li>
            )}
            {character.gender && (
              <li>
                <strong>Gender:</strong> {character.gender}
              </li>
            )}
            {character.house && (
              <li>
                <strong>House:</strong> {character.house}
              </li>
            )}
            {character.dateOfBirth && (
              <li>
                <strong>Date of Birth:</strong> {character.dateOfBirth}
              </li>
            )}
            {character.yearOfBirth && (
              <li>
                <strong>Year of Birth:</strong> {character.yearOfBirth}
              </li>
            )}
            {character.wizard && (
              <li>
                <strong>Wizard:</strong> {character.wizard ? "Yes" : "No"}
              </li>
            )}
            {character.ancestry && (
              <li>
                <strong>Ancestry:</strong> {character.ancestry}
              </li>
            )}
            {character.eyeColour && (
              <li>
                <strong>Eye Colour:</strong> {character.eyeColour}
              </li>
            )}
            {character.hairColour && (
              <li>
                <strong>Hair Colour:</strong> {character.hairColour}
              </li>
            )}
            {character.wand.wood && character.wand.core && (
              <li>
                <strong>Wand:</strong>{" "}
                {`${character.wand.wood} wood, ${character.wand.core} core, ${character.wand.length} inches`}
              </li>
            )}
            {character.patronus && (
              <li>
                <strong>Patronus:</strong> {character.patronus}
              </li>
            )}
            {character.hogwartsStudent !== undefined && (
              <li>
                <strong>Hogwarts Student:</strong>{" "}
                {character.hogwartsStudent ? "Yes" : "No"}
              </li>
            )}
            {character.hogwartsStaff !== undefined && (
              <li>
                <strong>Hogwarts Staff:</strong>{" "}
                {character.hogwartsStaff ? "Yes" : "No"}
              </li>
            )}
            {character.actor && (
              <li>
                <strong>Actor:</strong> {character.actor}
              </li>
            )}
            {character.alternate_actors.length !== 0 && (
              <li>
                <strong>Alternate Actors:</strong>{" "}
                {character.alternate_actors.join(", ")}
              </li>
            )}
            {character.alive !== undefined && (
              <li>
                <strong>Alive:</strong> {character.alive ? "Yes" : "No"}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}