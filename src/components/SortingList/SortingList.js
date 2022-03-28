import { Radio } from 'antd';

export default function SortingList({ items, activeItem, onChange }) {
  return (
    <Radio.Group onChange={(e) => onChange(e.target.value)} value={activeItem}>
      {items.map((item) => (
        <Radio key={item.name} value={item.name}>
          {item.displayName}
        </Radio>
      ))}
    </Radio.Group>
  );
}
