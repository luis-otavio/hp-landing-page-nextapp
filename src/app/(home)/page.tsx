'use client'

import { SectionInfo } from "@/components/sectionInfo"

import { CharactersType } from "@/types/characters"
import { getCharacters } from "@/utils/api"

export default async function Home() {
  const characters: CharactersType[] = await getCharacters()

  return (
    <>
      <SectionInfo characters={characters}/>
    </>
  )
}
