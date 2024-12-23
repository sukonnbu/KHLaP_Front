import Freeboard from "@app/components/Freeboard";
import WriteFreeboard from "@app/components/WriteFreeboard";

export async function generateStaticParams() {
  const ids = await fetchIds();

  return ids.map(id => ({
    id: id.toString(),
  }));
}

export default async function FreeThread({ params }) {
  const { id } = params;

  if (id === "write") {
    return (
      <div className="container-fluid">
        <WriteFreeboard
          titleHolder="제목을 입력하세요"
          textHolder="본문을 입력하세요"
        />
      </div>
    );
  } else {
    return <Freeboard id={id} />;
  }
}
