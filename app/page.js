

import styles from "./page.module.css";
import { AddPost } from "./components/AddPost";
import { PostList } from "./components/PostList";
import { Header } from "./components/Header";
import { getAllPosts } from "@/api";

export default async function Home() {

  const posts = await getAllPosts();



  return (
    <main className={styles.main}>
      <Header />
      <AddPost />
      <PostList Posts={posts} />
    </main>
  );
}
