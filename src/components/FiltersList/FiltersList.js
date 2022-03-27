import { List, Checkbox } from 'antd';

export default function FiltersList({ items, activeItem, onChange }) {
  return (
    <List
      dataSource={items}
      renderItem={(item) => (
        <List.Item>
          <Checkbox
            id={item.key}
            checked={activeItem[item.key]}
            onChange={(e) => onChange(e.target.id)}
          >
            {item.displayName}
          </Checkbox>
        </List.Item>
      )}
    />
  );
}
