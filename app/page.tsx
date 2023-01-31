import Link from 'next/link'
import { NEXT_PUBLIC_SITE_TITLE } from './server-constants'
import GoogleAnalytics from '../components/google-analytics'
import styles from '../styles/page.module.css'

const RootPage = () => (
  <>
    <GoogleAnalytics pageTitle={NEXT_PUBLIC_SITE_TITLE} />
    <div className={styles.container}>
      <div>
        <h2>ブログです。</h2>
        <p><Link href="https://twitter.com/kakka_q">かっか</Link>が通った道を書いていくことで知の高速道路を目指します。</p>
      </div>
    </div>
  </>
)

export default RootPage
