import { createSignal, createEffect } from "solid-js";
import { FaSolidArrowLeft, FaSolidArrowRight } from 'solid-icons/fa';
import Card  from "./Card";


const categories = [
  { name: "All", filter: () => true },
  { name: "Web Design", filter: (item) => item.category === "Web Design" },
  { name: "UI/UX", filter: (item) => item.category === "UI/UX" },
  { name: "Coding", filter: (item) => item.category === "Coding" }
];

function CardList() {
  const [selectedCategory, setSelectedCategory] = createSignal(categories[0]);
  const [items, setItems] = createSignal([
    { name: "Item 1", category: "Web Design", price: 200, image: "https://picsum.photos/200" },
    { name: "Item 2", category: "UI/UX", price: 300, image: "https://picsum.photos/200" },
    { name: "Item 3", category: "Web Design", price: 400, image: "https://picsum.photos/200" },
    { name: "Item 4", category: "Coding", price: 500, image: "https://picsum.photos/200" },
    { name: "Item 5", category: "UI/UX", price: 600, image: "https://picsum.photos/200" },
    { name: "Item 6", category: "Coding", price: 700, image: "https://picsum.photos/200" },
    { name: "Item 7", category: "Web Design", price: 800, image: "https://picsum.photos/200" },
    { name: "Item 8", category: "UI/UX", price: 900, image: "https://picsum.photos/200" },
    { name: "Item 9", category: "Coding", price: 1000, image: "https://picsum.photos/200" },
    { name: "Item 10", category: "Web Design", price: 1100, image: "https://picsum.photos/200" },
  ]);

  const [currentPage, setCurrentPage] = createSignal(1);
  const itemsPerPage = 3;

  createEffect(() => {
    setCurrentPage(1);
  });

  function handleClick(category) {
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  function filteredItems(items) {
    const startIndex = (currentPage() - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.filter(selectedCategory().filter).slice(startIndex, endIndex);
  }

  return (
    <div>
      <div class="space-x-2 px-2 py-4">
        {categories.map((category) => (
          <button
            classList={{
             "px-2 py-1 rounded text-black	": true,
            "opacity-50 font-extrabold": category === selectedCategory()
            }}
            onclick={() => handleClick(category)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div class="grid grid-cols-3 gap-4	px-4" >
        {filteredItems(items()).map((item) => (
          <Card
            title={item.name}
            description={`$${item.price}`}
            image={item.image}
            category={item.category}
          />
        ))}
      </div>

      <div class="flex flex-row items-center justify-center py-2 ">
        <FaSolidArrowLeft class="mr-2"
          disabled={currentPage() === 1}
          onclick={() => setCurrentPage(currentPage() - 1)}
        >
        </FaSolidArrowLeft>
        <span>
          Page {currentPage()} of{" "}
          {Math.ceil(
            items().filter(selectedCategory().filter).length / itemsPerPage
          )}
        </span>
        <FaSolidArrowRight class="ml-2"
          disabled={
            currentPage() ===
            Math.ceil(
              items().filter(selectedCategory().filter).length / itemsPerPage
            )
          }
          onclick={() => setCurrentPage(currentPage() + 1)}
        >
          Next Page
        </FaSolidArrowRight>
      </div>
    </div>
  );
}


export default CardList;
