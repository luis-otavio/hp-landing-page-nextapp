import { ReactNode } from "react"
import { Header } from "@/components/header"
import styles from "@/styles/home.module.scss"

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  )
}