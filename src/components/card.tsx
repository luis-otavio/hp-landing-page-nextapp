import Image from "next/image"
import Link from 'next/link'
import { Calendar, Castle, CircleUserRound, Crown, ImageOff } from "lucide-react";

import { CharactersType } from "@/types/characters";
import { formatDate } from "@/utils/formatDate";

import styles from "@/styles/card.module.scss";

export function Card(
  { character, layout }: { character: CharactersType, layout: boolean },
) {
  if (!character) return;

  const iconSettings = {
    size: 20,
    strokeWidth: 2.5,
  };

  return (
    <Link
      href={`/character/${character.id}`}
      className={`${styles.characterCard} ${
        !character.alive ? styles.isDeceased : ""
      } ${layout ? styles.gridLayout : styles.listLayout}`}
    >
      {character.image ? (
        <Image
          priority
          width={160}
          height={100}
          quality={100}
          src={character.image}
          alt={character.name}
          className={`${styles.characterImage} opacity-0`}
          onLoad={(image) => image.currentTarget.classList.remove("opacity-0")}
        />
      ) : (
        <div className={styles.iconContainer}>
          <ImageOff size={40} strokeWidth={1} />
        </div>
      )}
      <div className={styles.characterInfo}>
        <h2>{character.name}</h2>
        {character.house && (
          <div className={styles.characterField}>
            <Castle {...iconSettings} />
            <strong> House:</strong>
            <p>{character.house}</p>
          </div>
        )}
        {character.dateOfBirth && (
          <div className={styles.characterField}>
            <Calendar {...iconSettings} />
            <strong> Date Of Birth:</strong>
            <p>{formatDate(character.dateOfBirth)}</p>
          </div>
        )}
        {character.patronus && (
          <div className={styles.characterField}>
            <Crown {...iconSettings} />
            <strong> Patronus:</strong>
            <p>{character.patronus}</p>
          </div>
        )}
        {character.actor && (
          <div className={styles.characterField}>
            <CircleUserRound {...iconSettings} />
            <strong> Actor:</strong>
            <p>{character.actor}</p>
          </div>
        )}
      </div>
    </Link>
  );
}
