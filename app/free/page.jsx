"use client";

import Link from "next/link";
import FreeThreadListItem from "@app/components/FreeThreadListItem";
import React, { useEffect, useState } from "react";

export default function Free() {
  const [threads, setThreads] = useState([]);
  useEffect(() => {
    const fetchThreads = async () => {
      const res = await fetch(`${process.env.API_URL}/freeboard/`).then((res) =>
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
            <h1>자유게시판</h1>
          </li>
        </ul>
        <ul>
          <li>
            <button className={"outline"}>
              <Link href="/free/write">글 작성</Link>
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
            {threads.map((thread, i) => (
              <FreeThreadListItem
                key={thread["id"]}
                index={threads.length - i}
                thread={thread}
              />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
