"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function SellUsedItem() {
  const router = useRouter();
  const fileRef = useRef(null);
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [others, setOthers] = useState("");
  const [itemName, setItemName] = useState("");
  const [userName, setUserName] = useState("");
  let updated_at;

  function handleClick() {
    fileRef?.current?.click();
  }

  function handleChange(e) {
    const targetFile = Array.from(e.target.files)[0];
    const selectedFile = URL.createObjectURL(targetFile);
    setImage(selectedFile);
  }

  async function onSubmit(event) {
    event.preventDefault();
    const image_base64 = await fetch(image, { cache: "force-cache" })
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          }),
      );
    const date = new Date();
    updated_at = `${date.getMonth() + 1}/${date.getDate().toString().padStart(2, "0")} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
    const response = await fetch(`${process.env.API_URL}/used/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        itemname: itemName,
        username: userName,
        image: image_base64,
        price: price,
        others: others,
        sold: False,
        updated_at: updated_at,
        comments: [],
      }),
    });

    router.push("/free/");
  }

  return (
    <fieldset>
      <form method="post" onSubmit={onSubmit}>
        <fieldset role="group" style={{ display: "flex", alignItems: "end" }}>
          {image !== "" && (
            <div onClick={handleClick}>
              <Image
                src={image}
                alt={`image${image}`}
                width={500}
                height={500}
                objectFit={"contain"}
              />
            </div>
          )}
          <label htmlFor="file">
            사진 선택:
            <input
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
          </label>
          <input
            type="text"
            name="username"
            placeholder="닉네임"
            onChange={(event) => setUserName(event.target.value)}
          />
        </fieldset>
        <input
          type="text"
          name="title"
          placeholder="제목"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="text"
          name="itemname"
          placeholder="상품명"
          onChange={(event) => setItemName(event.target.value)}
        />
        <textarea
          name="others"
          placeholder="기타 | 줄바꿈으로 구분"
          aria-label="text"
          onChange={(event) => setOthers(event.target.value)}
        />
        <button type="submit">글 작성</button>
      </form>
    </fieldset>
  );
}
