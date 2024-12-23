"use client";

import Link from "next/link";

export default function ThreadListItem({ thread, index }) {
  const date = new Date();
  let updated_at;
  if (
    thread["updated_at"].includes(
      `${date.getMonth() + 1}/${date.getDate().toString().padStart(2, "0")}`,
    )
  ) {
    updated_at = thread["updated_at"].slice(5, 11);
  } else {
    updated_at = thread["updated_at"];
  }
  return (
    <tr>
      <th>{index}</th>
      <th>
        <Link href={`/free/${thread["id"]}`}>{thread["title"]}</Link>
      </th>
      <th>{thread["username"]}</th>
      <th>{updated_at}</th>
    </tr>
  );
}
