'use client'

import { LayoutGrid, StretchHorizontal } from 'lucide-react';

import styles from "@/styles/switchLayout.module.scss";

interface SwitchLayoutProps {
  toggleLayout: () => void;
  isGrid: boolean
}

export function SwitchLayout({ toggleLayout, isGrid }: SwitchLayoutProps ) {
  return (
    <button onClick={toggleLayout} className={styles.toggleLayoutButton}>
      {isGrid ? (
        <StretchHorizontal size={22} strokeWidth={1} />
      ) : (
        <LayoutGrid size={22} strokeWidth={1} />
      )}
    </button>
  )
}