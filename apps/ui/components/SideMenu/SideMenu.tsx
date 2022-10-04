import * as React from 'react';
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function SideMenu() {
  return (
    <div className={styles.container} style={{minWidth:"160px"}}>
      <div style={{color: "blue"}}>
          <a href={"/"}> Home </a>
       </div>
       <div style={{color: "blue"}}>
          <Link href={"/page1"} as="/page1"> Go to page1 </Link>
       </div>
       <div style={{color: "blue"}}>
          <Link href={"/page2"} as="/page2"> Go to page2 </Link>
       </div>
       <div style={{color: "blue"}}>
          <Link href={"/page3"} as="/page3"> Go to page3 </Link>
       </div>
       <div style={{color: "blue"}}>
          <Link href={"/page4"} as="/page4"> Go to page4 </Link>
       </div>
       <div style={{color: "blue"}}>
          <Link href={"/page5"} as="/page5"> Go to page5 </Link>
       </div>
       <div style={{color: "blue"}}>
          <Link href={"/page6"} as="/page6"> Go to page6 </Link>
       </div>
    </div>
  )
}
