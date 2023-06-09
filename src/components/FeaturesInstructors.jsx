import { FaSolidPersonChalkboard } from "solid-icons/fa";
function FeaturesInstructors() {
  return (
    <div class="flex flex-row">
      <FaSolidPersonChalkboard className="bg-stone-100 w-24 h-16 m-0.5 self-center p-2 rounded-lg " />
      <div class="flex flex-col pl-4">
        <h2 class="font-semibold text-2xl font-mono pb-3 ">Mejores instructores</h2>
        <p>
          Nosotros tenemos los mejores calificados y con una gran experencia en
          todo el mundo
        </p>
      </div>
    </div>
  );
}

export default FeaturesInstructors;
