
import Header from './components/header/Header'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
    <div className={styles.cover}></div>
      <Header/>
    </main>
  )
}
