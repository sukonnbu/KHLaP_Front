import Image from "next/image";

export default async function Freeboard({ id }) {
  const fetchThread = async () => {
    const res = await fetch(process.env.API_URL + "/freeboard/" + id, {
      cache: "force-cache",
    });

    const res_json = await res.json();

    return res_json.data[0];
  };

  const thread = await fetchThread();

  return (
    <article>
      <header>
        <h1>{thread["title"]}</h1>
        <small>{thread["username"]}</small>
      </header>
      {thread["image"] !== "" && (
        <Image
          src={thread["image"]}
          width={500}
          height={500}
          alt={`image${thread["title"]}`}
          objectFit={"contain"}
        />
      )}
      <p>{thread["content"]}</p>
      <footer>
        <h4>댓글</h4>
      </footer>
    </article>
  );
}
