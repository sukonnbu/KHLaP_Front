"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function WriteComment({ thread, board }) {
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [content, setContent] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const date = new Date();
    const updated_at = `${date.getMonth() + 1}/${date.getDate().toString().padStart(2, "0")} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
    const comment = {
      content: content,
      username: userName,
      updated_at: updated_at,
    };
    const comments = thread["comments"] !== undefined ? thread["comments"] : [];
    comments.push(comment);

    const response =
      board === "free"
        ? await fetch(`${process.env.API_URL}/freeboard/${thread["id"]}/`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: thread["title"],
              content: thread["content"],
              username: thread["username"],
              image: thread["image"],
              updated_at: thread["updated_at"],
              comments: comments,
            }),
          })
        : await fetch(`${process.env.API_URL}/used/${thread["id"]}/`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title: thread["title"],
              itemname: thread["itemname"],
              sold: thread["sold"],
              price: thread["price"],
              username: thread["username"],
              image: thread["image"],
              updated_at: thread["updated_at"],
              others: thread["others"],
              comments: comments,
            }),
          });
    setUserName("");
    setContent("");
    router.push(`/used/${thread["id"]}/`);
  };

  return (
    <form method="post" onSubmit={onSubmit}>
      <fieldset role="group">
        <input
          type="text"
          name="username"
          placeholder="닉네임"
          onChange={(event) => setUserName(event.target.value)}
        />
        <input
          type="text"
          name="content"
          placeholder="내용"
          onChange={(event) => setContent(event.target.value)}
        />
        <input type="submit" value="댓글 작성" />
      </fieldset>
    </form>
  );
}
