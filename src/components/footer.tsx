import ExtLink from './ext-link'

import styles from '../styles/footer.module.css'

const Footer = () => (
  <footer className={styles.footer}>
    <div>
      <span>&copy; 2022 kakka</span>
    </div>
    <div>
      <span>Powered by </span>
      <ExtLink href="https://github.com/otoyo/easy-notion-blog">
        easy-notion-blog
      </ExtLink>
    </div>
  </footer>
)

export default Footer
