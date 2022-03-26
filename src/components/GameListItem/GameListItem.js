import { Card, Badge } from 'antd';
import moment from 'moment';
import GameImage from './GameImage';

const { Meta } = Card;

export default function GameList({ item }) {
  return (
    <Card key={item.id} cover={<GameImage item={item} />}>
      <Meta
        title={item.name}
        description={`${item.price.basePrice} | ${item.price.discountedPrice}`}
      />
      <div></div>
      <div>{`${moment(item.releaseDate, 'DD-MM-YYYY').format(
        'MMM Do YY'
      )}    downloads:${item.downloadsCount}`}</div>
      <Badge count={item.price.discountText}></Badge>
    </Card>
  );
}
