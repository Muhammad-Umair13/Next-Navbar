import React from "react";
import Image from "next/image";
import Link from "next/link";
import Css_Styles from "./CSS module/style.module.css"

export default function Home() {
  return (
    <>
      <div>
        <ul>
          <li className={Css_Styles.styles}><Link href="/Home" target="_blank" >Home</Link></li>
          <li className={Css_Styles.styles}><Link href="/About" target="_blank">About</Link></li>
          <li className={Css_Styles.styles}><Link href="/Contact" target="_blank">Contact</Link></li>
          <li className={Css_Styles.styles}><Link href="/Services" target="_blank">Services</Link></li>
        </ul>
      </div>

      {/* this is nested page */}
      <div><Link href="./nested/nested_page" target="_blank"><u>Nested Page is Here!</u></Link></div>
    </>

  )
}