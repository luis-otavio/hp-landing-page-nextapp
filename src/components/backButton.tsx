import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import styles from "@/styles/backButton.module.scss"

export function BackButton() {
  return (
    <Link href={"/"} className={styles.button}>
      <ArrowLeft />
    </Link>
  )
} 