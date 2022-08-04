import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href='/'>
        <a>home</a>
      </Link>
      <Link href='/blog'>
        <a>blog</a>
      </Link>
      <Link href='/about'>
        <a>about</a>
      </Link>
      <Link href='/contact'>
        <a>contact</a>
      </Link>
    </nav>
  )
}
