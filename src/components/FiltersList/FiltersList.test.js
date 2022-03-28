import { fireEvent, render, screen } from '@testing-library/react';
import FiltersList from './FiltersList';

const ITEMS = [
  {
    displayName: 'Пакет дополнений',
    key: 'ADD-ON_PACK',
  },
  {
    displayName: 'Уровень',
    key: 'LEVEL',
  },
  {
    displayName: 'Виртуальная валюта',
    key: 'VIRTUAL_CURRENCY',
  },
];

describe('<FiltersList />', () => {
  beforeAll(() => {
    delete window.matchMedia;
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListene: jest.fn(),
      dispatchEvent: jest.fn(),
    });
  });
  it('is rendered with no errors', () => {
    render(<FiltersList items={[]} activeItem={{}} onChange={() => {}} />);
  });

  it('renderes given items', () => {
    const { container } = render(<FiltersList items={ITEMS} activeItem={{}} />);

    expect(container.querySelectorAll('.ant-list-item').length).toBe(
      ITEMS.length
    );
  });

  it('calls onChange callback with the udpated value', () => {
    const handleClick = jest.fn();

    render(
      <FiltersList items={ITEMS} activeItem={{}} onChange={handleClick} />
    );
    fireEvent.click(screen.getByText(ITEMS[1].displayName));

    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).lastCalledWith(ITEMS[1].key);
  });
});
