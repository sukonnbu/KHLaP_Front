import Link from "next/link";
import React from "react";

export default function Study() {
  return (
    <nav>
      <ul>
        <li>
          <h1>공부방</h1>
        </li>
      </ul>
      <ul>
        <li>
          <button className={"outline"}>
            <Link href="/study/write">글 작성</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
