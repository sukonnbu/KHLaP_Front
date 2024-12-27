export default function Comment({ username, content, updated_at }) {
  const date = new Date();

  if (
    updated_at !== null &&
    updated_at.includes(
      `${date.getMonth() + 1}/${date.getDate().toString().padStart(2, "0")}`,
    )
  ) {
    updated_at = updated_at.slice(5, 11);
  }

  return (
    <tr>
      <th>{username}</th>
      <th>{content}</th>
      <th>{updated_at}</th>
    </tr>
  );
}
