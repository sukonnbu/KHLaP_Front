import Image from "next/image";
import WriteComment from "@app/components/WriteComment";
import Comment from "@app/components/Comment";

export default async function Freeboard(params) {
  const { id } = params;
  const fetchThread = async () => {
    const res = await fetch(`${process.env.API_URL}/freeboard/${id}/`, {
      cache: "reload",
    });

    const res_json = await res.json();

    return res_json.data[0];
  };
  const thread = await fetchThread();
  return (
    <article>
      <header>
        <h1>{thread["title"]}</h1>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <small>{thread["username"]}</small>
          <small>{thread["updated_at"]}</small>
        </div>
      </header>
      {thread["image"] !== "" && (
        <Image
          src={thread["image"]}
          width={0}
          height={0}
          alt={`image${thread["title"]}`}
          style={{ width: "90vw" }}
        />
      )}
      <p>{thread["content"]}</p>
      <footer>
        <h4>댓글</h4>
        <WriteComment thread={thread} board="free" />
        <table className="striped">
          <tbody>
            {thread["comments"] !== undefined &&
              thread["comments"].map((comment) => {
                return <Comment key={comment["updated_at"]} {...comment} />;
              })}
          </tbody>
        </table>
      </footer>
    </article>
  );
}
