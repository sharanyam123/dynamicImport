import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import SideMenu from '../components/SideMenu/SideMenu'

export default function Home() {
  return (
    <div className={styles.container}>
       <div>Welcome to Landing!!</div>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}