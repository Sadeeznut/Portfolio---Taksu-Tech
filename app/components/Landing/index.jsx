"use client"
import styles from './style.module.scss'
import { slideUp } from './animation';
import { motion } from 'framer-motion';


export default function Home() {

  return (
    <motion.main variants={slideUp} initial="initial" animate="enter" className={styles.landing} id="landing">
      <img src="/heroos.png" className='object-cover w-full h-full'/>
    </motion.main>
  )
}
