
export default function Card({ title, price, image, category }) {

  return (
    <div class="flex flex-col bg-white round-lg shadow-md px-0 rounded-lg">
      <img class="h-48 w-full object-cover" src={image} alt={title} />
      <div class="p-4 ">
        <div class="flex flex-col">
          <p class="mt-2 text-gray-600">{category}</p>
          <h2 class="text-lg font-medium text-gray-900">{title}</h2>
        </div>
        <p class="mt-2 text-gray-600">{price}</p>
        <div class="flex justify-between items-center mt-0">
          <p class="">$200.0</p>
          <button class="bg-stone-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Comienza
          </button>
        </div>
      </div>
    </div>
  );
}