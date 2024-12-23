import Image from "next/image";

export default async function Freeboard({ id }) {
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
        <small>{thread["username"]}</small>
      </header>
      {thread["image"] !== "" && (
        <Image
          src={thread["image"]}
          width={0}
          height={0}
          alt={`image${thread["title"]}`}
          objectFit={"contain"}
          style={{ width: "90vw" }}
        />
      )}
      <p>{thread["content"]}</p>
      <footer>
        <h4>댓글</h4>
        <table className="striped">
          <tbody>
            {thread["comments"] !== undefined &&
              thread["comments"].map((comment) => (
                <tr>
                  <th>{comment["username"]}</th>
                  <th>{comment["content"]}</th>
                  <th>{comment["updated_at"]}</th>
                </tr>
              ))}
          </tbody>
        </table>
      </footer>
    </article>
  );
}
