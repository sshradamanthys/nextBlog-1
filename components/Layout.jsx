import Head from 'next/head'
import Nav from './Nav'
import styles from '../styles/Layout.module.css'

export default function Layout({ children, title, description }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name='description' description={description} />
      </Head>
      <Nav />
      <main>{children}</main>
      <footer>Footer here!</footer>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Next.js | Bluuweb',
  description: 'Insert a description here'
}
