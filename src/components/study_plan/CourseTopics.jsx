import { FaRegularSquareCaretDown } from 'solid-icons/fa';
import { FaRegularClock } from 'solid-icons/fa';
import { FaSolidBriefcase } from 'solid-icons/fa';

function CourseTopics() {
    return (
        <div className="flex flex-col">
            <div className='flex flex-row'>
                <FaRegularSquareCaretDown className="self-left" />
                <div className='flex flex-col'>
                    <p className="text-xl font-bold">Etapa 1/7: HTML, CSS y javascript</p>
                    <div className='flex flex-row'>
                        <p>Descripcion de la etapa</p>
                        <FaRegularClock />
                        <p>Tiempo estimado</p>
                    </div>
                </div>
                <button>Continuar</button>

            </div>

        </div>
    )
}

export default CourseTopics;