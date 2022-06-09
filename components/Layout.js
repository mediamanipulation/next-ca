import Nav from './Nav'
import Meta from './Meta'
import Header from './Header'
import Footer from './footer'
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
        <Footer />
      </div>
  
    </>
  )
}

export default Layout
