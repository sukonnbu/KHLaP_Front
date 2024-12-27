import UsedItem from "@app/components/UsedItem";
import SellUsedItem from "@app/components/SellUsedItem";

export default function UsedThread({ params: { id } }) {
  if (id === "sell") {
    return <SellUsedItem />;
  } else {
    return <UsedItem id={id} />;
  }
}
