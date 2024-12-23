import Freeboard from "@app/components/Freeboard";
import WriteFreeboard from "@app/components/WriteFreeboard";

export default function FreeThread({ params: { id } }) {
  if (id === "write") {
    return (
      <div className="container-fluid">
        <WriteFreeboard />
      </div>
    );
  } else {
    return <Freeboard id={id} />;
  }
}
