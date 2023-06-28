import PointPlataform from "./PointsPlataform.jsx";
function Choose_us() {
  return (
    <div class="flex px-4">
      <div class="w-3/5 justify-center">
        <h1 class="text-5xl pb-10">¿Por que escogernos?</h1>
        <img
          class="w-2/3"
          src="src/assets/images/landing-page/group-work-2.jpg"
          alt=""
        />
      </div>
      <div class="w-2/5">
        <div class="flex flex-col">
          <p class="text-gray-500	">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            tenetur ad porro modi in illo distinctio perspiciatis similique
            soluta aperiam et, eaque itaque voluptatibus, cum quisquam ab eius
            obcaecati! Aliquam?
          </p>
          <div class="grid grid-cols-2 p-2">
            <PointPlataform />
            <PointPlataform />
            <PointPlataform />
            <PointPlataform />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose_us;
