import { createSignal } from 'solid-js';

function CardList() {
  const [selectedCategory, setSelectedCategory] = createSignal('all');

  // Sample data
  const items = [
    { id: 1, name: 'Item 1', category: 'cat1' },
    { id: 2, name: 'Item 2', category: 'cat2' },
    { id: 3, name: 'Item 3', category: 'cat1' },
    { id: 4, name: 'Item 4', category: 'cat3' },
    { id: 5, name: 'Item 5', category: 'cat2' },
  ];

  const filteredItems = selectedCategory() === 'all'
    ? items
    : items.filter(item => item.category === selectedCategory());

  return (
    <div>
      <div class="space-x-2">
        <button
          class="px-2 py-1 rounded bg-blue-500 text-white"
          onClick={() => setSelectedCategory('all')}
          classList={{ 'bg-blue-700': selectedCategory() === 'all' }}
        >
          All
        </button>
        <button
          class="px-2 py-1 rounded bg-blue-500 text-white"
          onClick={() => setSelectedCategory('cat1')}
          classList={{ 'bg-blue-700': selectedCategory() === 'cat1' }}
        >
          Category 1
        </button>
        <button
          class="px-2 py-1 rounded bg-blue-500 text-white"
          onClick={() => setSelectedCategory('cat2')}
          classList={{ 'bg-blue-700': selectedCategory() === 'cat2' }}
        >
          Category 2
        </button>
        <button
          class="px-2 py-1 rounded bg-blue-500 text-white"
          onClick={() => setSelectedCategory('cat3')}
          classList={{ 'bg-blue-700': selectedCategory() === 'cat3' }}
        >
          Category 3
        </button>
      </div>

      <ul class="mt-4">
        {filteredItems.map(item => (
          <li key={item.id} class="py-2">
            {item.name}
            {console.log(item.name)}

          </li>
        ))}
        {console.log(filteredItems)}
      </ul>
    </div>
  );
}

export default CardList;
