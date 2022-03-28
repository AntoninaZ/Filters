import { fireEvent, render, screen } from '@testing-library/react';
import SortingList from './SortingList';

const ITEMS = [
  {
    displayName: 'По умолчанию',
    name: 'default',
  },
  {
    displayName: 'Самые загружаемые',
    name: 'downloads',
  },
  {
    displayName: 'Название (А - Я)',
    name: 'productNameDescending',
  },
];

describe('<SortingList />', () => {
  it('is rendered with no errors', () => {
    render(<SortingList items={[]} />);
  });

  it('renderes given items', () => {
    const { container } = render(<SortingList items={ITEMS} />);

    expect(container.querySelectorAll('.ant-radio-wrapper').length).toBe(
      ITEMS.length
    );
  });

  it('calls onChange callback with the udpated value', () => {
    const handleClick = jest.fn();

    render(<SortingList items={ITEMS} onChange={handleClick} />);
    fireEvent.click(screen.getByText(ITEMS[1].displayName));

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).lastCalledWith(ITEMS[1].name);
  });
});
