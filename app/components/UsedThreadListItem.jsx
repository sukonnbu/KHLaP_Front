import Link from "next/link";

export default function UsedThreadListItem({ index, thread }) {
  const date = new Date();
  let updated_at;
  if (
    thread["updated_at"] !== null &&
    thread["updated_at"].includes(
      `${date.getMonth() + 1}/${date.getDate().toString().padStart(2, "0")}`,
    )
  ) {
    updated_at = thread["updated_at"].slice(5, 11);
  } else {
    updated_at = thread["updated_at"];
  }
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <th>
        <Link href={`/used/${thread["id"]}`}>
          {thread["sold"] && "판매완료"}
          {thread["title"]}
        </Link>
      </th>
      <th>{thread["username"]}</th>
      <th>{updated_at}</th>
    </tr>
  );
}
