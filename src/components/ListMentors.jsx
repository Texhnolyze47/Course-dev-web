import Mentor from "./Mentor";

function ListMentors() {
  return (
    <div class="flex flex-col">
      <div class="flex flex-row py-2  flex-nowrap">
        <h1 class="text-4xl	w-2/3 px-4">
          Conoce a nuestros mentores de alta calidad
        </h1>
        <p class="grow-0 px-4">
          Ellos te ayudarán a alcanzar tus metas Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Esse, ea expedita? Alias, sint. Ex illum
          quisquam iusto tempora consequatur molestiae ut non eligendi quam enim
          similique aliquam, voluptates perferendis nihil?
        </p>
      </div>
      <div class="flex flex-row">
        <Mentor />
        <Mentor />
        <Mentor />
        <Mentor />
      </div>
    </div>
  );
}

export default ListMentors;
