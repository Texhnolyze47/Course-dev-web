import { createSignal } from 'solid-js';
import Card from './Card.jsx';
import cardData from '../components/cardData.js';


export default function CardList() {
  const [categoryFilter, setCategoryFilter] = createSignal('');

  function handleFilterChange(event) {
    console.log('handleFilterChange called');
    const newFilter = event.target.value;
    setCategoryFilter(newFilter);
  }

  const filteredCards = cardData.filter((card) => {
    console.log('categoryFilter:', categoryFilter());
    console.log('card.category:', card.category);
    console.log('filter called');

    if (categoryFilter() === '') {
      return true;
    } else {
      return card.category === categoryFilter();
    }
  });

  return (
    <div className="p-4">
      <select
        className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value={categoryFilter()}
        onChange={handleFilterChange}
      >
        <option value="">All</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        <option value="category3">Category 3</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredCards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            category={card.category}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}