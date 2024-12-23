import Link from "next/link";
import React from "react";

export const metadata = {
  title: "중고장터",
};

export default function Used() {
  return (
    <nav>
      <ul>
        <li>
          <h1>중고 장터</h1>
        </li>
      </ul>
      <ul>
        <li>
          <button className={"outline"}>
            <Link href="/used/sell">물건 팔기</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
}
