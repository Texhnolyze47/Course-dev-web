

export default function Card({ title, description, image, category }) {


  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
      <img className="h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <div className="flex flex-col">
          <p className="mt-2 text-gray-600">{category}</p>
          <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        </div>
        <p className="mt-2 text-gray-600">{description}</p>
        <div className="flex">
          <p className="self-center float-left">$200.0</p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 float-right rounded">
            Click me
          </button>
        </div>

      </div>
    </div>
  );
}