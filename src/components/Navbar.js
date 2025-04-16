import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaPaw } from 'react-icons/fa'
import styles from '@/styles/Navbar.module.css'

const Navbar = () => {
  const router = useRouter();
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_brand}>
        <FaPaw className={styles.navbar_icon} />
        <span className={styles.navbar_title}>Help dogs</span>
      </div>
      <div className={styles.navbar_links}>
        <Link 
          href="/" 
          className={`${styles.nav_link} ${router.pathname === '/' ? styles.active : ''}`}
        >
          Home
        </Link>
        <Link 
          href="/dogfacts" 
          className={`${styles.nav_link} ${router.pathname === '/dogfacts' ? styles.active : ''}`}
        >
          DogFacts
        </Link>
        <Link 
          href="/about" 
          className={`${styles.nav_link} ${router.pathname === '/about' ? styles.active : ''}`}
        >
          About
        </Link>
        <Link 
          href="/contact" 
          className={`${styles.nav_link} ${router.pathname === '/contact' ? styles.active : ''}`}
        >
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar 