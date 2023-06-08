import { createSignal } from 'solid-js';
import  imageUrl  from '../assets/images/courses/course_image_1.png'
export default function Card({ title, description, category }) {

    const handleClick = () => {
        // Handle button click event
      };
    
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden">
      <img className="h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <span className="text-gray-500 text-sm">{category}</span>
        <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Click me</button>
      </div>
    </div>
  );
}