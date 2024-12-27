import Image from "next/image";
import LION from "public/lion.ico";
import WriteComment from "@app/components/WriteComment"; // for dev

export default async function UsedItem(params) {
  const { id } = params;
  const fetchThread = async () => {
    const res = await fetch(`${process.env.API_URL}/used/${id}/`);

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
      <div className="grid">
        <div>
          <Image
            src={LION}
            alt={thread["itemname"]}
            width={0}
            height={0}
            style={{ width: "40vw" }}
          />
        </div>
        <div>
          <h2>상세정보</h2>
          <ul>
            <li>물품명: {thread["itemname"]}</li>
            <li>가격: {thread["price"]}</li>
            {thread["others"] !== "" && <li>기타 사항: {thread["others"]}</li>}
          </ul>
        </div>
      </div>
      <footer>
        <h4>댓글</h4>
        <WriteComment thread={thread} board="used" />
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
