'use client'

import { RingLoader } from "react-spinners";
import styles from "@/styles/loading.module.scss"

export default function HomeLoading() {
  return (
    <div className={styles.container}>
      <RingLoader color="#FFFFFF" speedMultiplier={2} />
    </div>
  );
}
