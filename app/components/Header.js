import React from 'react'
import styles from "../page.module.css";

export const Header = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.title}>
        <h1>
          クローンX（旧Twitter）
        </h1>
      </div>
      <div>
        <nav className={styles.headerNav}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">My page</a></li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
