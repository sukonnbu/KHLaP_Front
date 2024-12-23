"use client";

import Link from "next/link";
import LION from "public/lion.svg";
import PANDA from "public/panda.svg";
import MENU from "public/menu.svg";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav
      className="container-fluid"
      style={{
        height: "10vh",
        borderBottom: "1px solid #013e92",
      }}
    >
      <ul>
        <li>
          <Link href="/">
            <Image src={LION} alt="LION" width="50" height="50" />
            <Image src={PANDA} alt="PANDA" width="50" height="50" />
          </Link>
        </li>
      </ul>
      {screenWidth > 700 ? (
        <ul>
          <li>
            <Link href="/free">
              <b>자유게시판</b>
            </Link>
          </li>
          <li>
            <Link href="/used">
              <b>중고장터</b>
            </Link>
          </li>
          <li>
            <Link href="/study">
              <b>공부방</b>
            </Link>
          </li>
          {/*<li>*/}
          {/*  <details className="dropdown">*/}
          {/*    <summary role="button">내 정보</summary>*/}
          {/*    <ul dir="rtl">*/}
          {/*      <li>마이페이지</li>*/}
          {/*      <li>내 게시물</li>*/}
          {/*      <li>내가 쓴 글</li>*/}
          {/*      <li>내가 쓴 댓글</li>*/}
          {/*    </ul>*/}
          {/*  </details>*/}
          {/*</li>*/}
        </ul>
      ) : (
        <ul>
          <details className="dropdown">
            <summary>
              <Image src={MENU} alt="MENU" width="30" height="30" />
            </summary>
            <nav>
              <ul>
                <li>
                  <Link href="/free">자유게시판</Link>
                </li>
                <li>
                  <Link href="/used">중고장터</Link>
                </li>
                <li>
                  <Link href="/study">공부방</Link>
                </li>
              </ul>
            </nav>
          </details>
        </ul>
      )}
    </nav>
  );
}
