import React from 'react'
import styles from "../page.module.css";
import { post } from './Post';

export const Post = ({ post }) => {
  return (
    <div>
      <li
        key={post.id}
        className={styles.post}>
        <div className={styles.postUser}>
          <span>{post.userName}</span>
        </div>
        <div className={styles.postText}>
          <span>{post.text}</span>
        </div>

        <div>
          <button>edit</button>
          <button>Delete</button>
        </div>
      </li>
    </div>
  )
}
