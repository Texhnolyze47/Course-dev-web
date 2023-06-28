import { FaSolidHeadset } from "solid-icons/fa";
function FeaturesSupport() {
    return (
      <div class="flex flex-row">
        <FaSolidHeadset className="bg-stone-100  w-24 h-16 m-0.5 self-center p-2 rounded-lg" />
        <div class="flex flex-col pl-4">
          <h2 class="font-semibold text-2xl font-mono pb-3 ">Support 24/7</h2>
          <p>
            Nosotros tenemos los mejores calificados y con una gran experencia
            en todo el mundo
          </p>
        </div>
      </div>
    );

}

export default FeaturesSupport;