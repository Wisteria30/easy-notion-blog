import DocumentHead from '../components/document-head'
import ExtLink from '../components/ext-link'
import styles from '../styles/page.module.css'

const RenderPage = () => (
  <div className={styles.container}>
    <DocumentHead />

    <div>
      <h2>ブログです。</h2>
      <p>私、<ExtLink href="https://twitter.com/kakka_q">かっか</ExtLink>が通った道を書いていくことで知の高速道路を目指します。</p>
    </div>
  </div>
)

export default RenderPage
