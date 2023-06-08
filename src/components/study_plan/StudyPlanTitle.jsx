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
    <div className="flex p-4 flex-col">
      <div className=" flex flex-row">
        <h1 className="text-2xl">Plan de Estudios </h1>
        <span className="pl-2 self-center">{" para " + course()}</span>
      </div>
      <div className="flex">
        <FaSolidDiagramProject className="self-center" />
        <span>{number() + " proyecto completado, Estas trabajando en"} </span>
        <p>{project()}</p>
      </div>
    </div>
  );
}

export default StudyPlanTitle;