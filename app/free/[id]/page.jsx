import Freeboard from "@app/components/Freeboard";
import WriteFreeboard from "@app/components/WriteFreeboard";

export async function generateStaticParams() {
  const threads = await fetch(`${process.env.API_URL}/freeborad/`, {cache: "force-cache"});

  return threads.map((thread) => ({
    id: thread["id"]
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
