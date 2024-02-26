

import React from 'react'
import styles from "../page.module.css";
import { Post } from './Post';

export const PostList = (Posts) => {


  return (
    <div>
      <ul>
        {Posts.Posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
};
