"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import UsedThreadListItem from "@app/components/UsedThreadListItem";

export default function Used() {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    const fetchThreads = async () => {
      const res = await fetch(`${process.env.API_URL}/used/`).then((res) =>
        res.json(),
      );
      const data = res.data[0];

      const _threads = [];
      data.forEach((thread) => {
        _threads.push(thread);
      });
      _threads.reverse();
      setThreads(_threads);
    };
    fetchThreads();
  }, []);

  return (
    <>
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
      {threads === [] ? (
        <progress />
      ) : (
        <table className="striped">
          <thead>
            <tr>
              <th scope="row">글</th>
              <th scope="row">제목</th>
              <th scope="row">작성자</th>
              <th scope="row">작성일시</th>
            </tr>
          </thead>
          <tbody>
            {threads.map((thread, index) => (
              <UsedThreadListItem key={index} index={index} thread={thread} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
