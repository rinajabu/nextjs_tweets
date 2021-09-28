import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Post from '../components/Post'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          My Posts
        </h1>

        <ul className={styles.ul}>
          <li>
            <Post 
              content="I am a new Post!" 
              date="9/30/2021" 
            />
          </li>
          <li>
            <Post 
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti, eum rerum amet perferendis ipsum voluptate qui vel voluptas maiores." 
              date="9/28/2021" 
            />
          </li>
          <li>
            <Post 
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti, eum rerum amet perferendis ipsum voluptate qui vel voluptas maiores." 
              date="9/28/2021" 
            />
          </li>
          <li>
            <Post 
              content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat corrupti, eum rerum amet perferendis ipsum voluptate qui vel voluptas maiores." 
              date="9/28/2021" 
            />
          </li>
        </ul>

        <form>
          <textarea className={styles.formInput}></textarea>
          <button className={styles.formButton}>Add New Post</button>
        </form>

      </main>
    </div>
  )
}
