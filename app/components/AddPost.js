"use client"

import { addPosts } from '@/api';
import React from 'react'
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


export const AddPost = () => {

  const [postText, setPostText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await addPosts({ id: uuidv4(), userName: "太郎", text: postText });


    setPostText("");
    console.log(setPostText);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(e) => setPostText(e.target.value)}
        value={postText}
      >
      </input>
      <button>AddPost</button>
    </form>
  )
}
