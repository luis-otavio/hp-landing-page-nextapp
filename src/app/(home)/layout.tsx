import { ReactNode } from "react"
import styles from "@/styles/home.module.scss"

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )
}