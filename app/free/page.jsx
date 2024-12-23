import Link from "next/link";
import ThreadListItem from "@app/components/ThreadListItem";

export default async function Free() {
  const fetchThreads = async () => {
    const res = await fetch(process.env.API_URL + "/freeboard", {
      cache: "force-cache",
    });
    const res_json = await res.json();

    return res_json.data[0];
  };

  const threads = [];
  const threads_obj = await fetchThreads();
  threads_obj.forEach((thread) => {
    threads.push(thread);
  });
  threads.reverse();

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
            <ThreadListItem
              key={thread["id"]}
              index={threads.length - i}
              thread={thread}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
