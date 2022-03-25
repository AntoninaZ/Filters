import { Card } from "antd";

const { Meta } = Card;

export default function GameList({ item }) {
  const souce = item.media.find((i) => i.role === "MASTER").url;

  return (
    <Card cover={<img alt={item.name} src={souce} />}>
      <Meta
        title={item.name}
        description={`${item.price.basePrice} | ${item.price.discountedPrice}`}
      />
      <div>{item.price.discountText}</div>
    </Card>
  );
}
