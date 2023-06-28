import { FaRegularSquareCaretDown } from 'solid-icons/fa';
import { FaRegularClock } from 'solid-icons/fa';

function CourseTopics({etapa, descripcion, tiempo}) {
    return (
      <div class="flex  p-4 flex-col">
        <div class="flex flex-row">
          <FaRegularSquareCaretDown class="self-left " />
          <div class="flex flex-col ">
            <p class="text-xl font-bold">{etapa}</p>
            <div class="flex flex-row items-center">
              {descripcion}
              <FaRegularClock class="mx-2" />
              {tiempo}
            </div>
          </div>
          <button class="bg-black text-white p-2 ml-2"><a href="/cursos">Continuar</a></button>
        </div>
      </div>
    );
}

export default CourseTopics;