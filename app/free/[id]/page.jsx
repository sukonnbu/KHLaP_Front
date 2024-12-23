import Freeboard from "@app/components/Freeboard";
import WriteFreeboard from "@app/components/WriteFreeboard";

export default function FreeThread({ params: { id } }) {
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
