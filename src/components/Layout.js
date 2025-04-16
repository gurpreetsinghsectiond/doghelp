import React from 'react'
import Navbar from '@/components/Navbar'
import styles from '@/styles/Home.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main_content}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Help Dogs. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Layout 