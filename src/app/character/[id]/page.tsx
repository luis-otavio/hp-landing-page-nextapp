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
          <h2 className={styles.contentInfoName}>{character.name}</h2>
          <ul className={styles.contentInfoList}>
            {character.alternate_names.length !== 0 && (
              <li className={styles.contentInfoItem}>
                <strong>Alternate Names:</strong>{" "}
                {character.alternate_names.join(", ")}
              </li>
            )}
            {character.species && (
              <li className={styles.contentInfoItem}>
                <strong>Species:</strong> {character.species}
              </li>
            )}
            {character.gender && (
              <li className={styles.contentInfoItem}>
                <strong>Gender:</strong> {character.gender}
              </li>
            )}
            {character.house && (
              <li className={styles.contentInfoItem}>
                <strong>House:</strong> {character.house}
              </li>
            )}
            {character.dateOfBirth && (
              <li className={styles.contentInfoItem}>
                <strong>Date of Birth:</strong> {character.dateOfBirth}
              </li>
            )}
            {character.yearOfBirth && (
              <li className={styles.contentInfoItem}>
                <strong>Year of Birth:</strong> {character.yearOfBirth}
              </li>
            )}
            {character.wizard && (
              <li className={styles.contentInfoItem}>
                <strong>Wizard:</strong> {character.wizard ? "Yes" : "No"}
              </li>
            )}
            {character.ancestry && (
              <li className={styles.contentInfoItem}>
                <strong>Ancestry:</strong> {character.ancestry}
              </li>
            )}
            {character.eyeColour && (
              <li className={styles.contentInfoItem}>
                <strong>Eye Colour:</strong> {character.eyeColour}
              </li>
            )}
            {character.hairColour && (
              <li className={styles.contentInfoItem}>
                <strong>Hair Colour:</strong> {character.hairColour}
              </li>
            )}
            {character.wand.wood && character.wand.core && (
              <li className={styles.contentInfoItem}>
                <strong>Wand:</strong>{" "}
                {`${character.wand.wood} wood, ${character.wand.core} core, ${character.wand.length} inches`}
              </li>
            )}
            {character.patronus && (
              <li className={styles.contentInfoItem}>
                <strong>Patronus:</strong> {character.patronus}
              </li>
            )}
            {character.hogwartsStudent !== undefined && (
              <li className={styles.contentInfoItem}>
                <strong>Hogwarts Student:</strong>{" "}
                {character.hogwartsStudent ? "Yes" : "No"}
              </li>
            )}
            {character.hogwartsStaff !== undefined && (
              <li className={styles.contentInfoItem}>
                <strong>Hogwarts Staff:</strong>{" "}
                {character.hogwartsStaff ? "Yes" : "No"}
              </li>
            )}
            {character.actor && (
              <li className={styles.contentInfoItem}>
                <strong>Actor:</strong> {character.actor}
              </li>
            )}
            {character.alternate_actors.length !== 0 && (
              <li className={styles.contentInfoItem}>
                <strong>Alternate Actors:</strong>{" "}
                {character.alternate_actors.join(", ")}
              </li>
            )}
            {character.alive !== undefined && (
              <li className={styles.contentInfoItem}>
                <strong>Alive:</strong> {character.alive ? "Yes" : "No"}
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}