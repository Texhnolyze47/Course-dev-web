import { createSignal } from "solid-js";
import { FaSolidDiagramProject } from 'solid-icons/fa';

function StudyPlanTitle() {

  const [course, setCourse] = createSignal('Desarrollo Web');
  const [bool, setBool] = createSignal(true);
  const [project,setProject] = createSignal('Calculadora de propinas');
  const [number,setNumber] = createSignal(1);


  setTimeout(() => {
    setCourse('Desarrollo de Software');
  }, 1000);

  setTimeout(() => {
    setBool(false);
  }, 2000);

  return (
    <div class="flex p-4 flex-col">
      <div class=" flex flex-row">
        <h1 class="text-2xl">Plan de Estudios </h1>
        <span class="pl-2 self-center">{" para " + course()}</span>
      </div>
      <div class="flex">
        <FaSolidDiagramProject className="self-center" />
        <span class="px-1">{number() + " proyecto completado, Estas trabajando en"} </span>
        <p>{project()}</p>
      </div>
    </div>
  );
}

export default StudyPlanTitle;