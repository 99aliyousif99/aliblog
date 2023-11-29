import styles from './Header.module.css'
import Link from 'next/link'
const Header = () => {
  return (
    <div className={styles.Header}>
      <h1>Aon todo</h1>
      <ul className={styles.ul}>
        <li>
          <a href='#'>hello</a>
        </li>
        <li>
          <a href='#'>hello</a>
        </li>
        <li>
          <a href='#'>hello</a>
        </li>
      </ul>

    </div>
  )
}

export default Header