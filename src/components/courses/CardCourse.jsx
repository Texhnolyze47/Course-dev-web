import { FaBrandsPython } from 'solid-icons/fa';
import {FaSolidStar}  from 'solid-icons/fa';

function CardCourse(){
    return(
        <div className="p-4 w-80 h-40">
            <a href="../cursos/info-course.jsx">
            <img src="src/assets/images/courses/course_image_1.png" className="w-24"></img>
            <div className='flex flex-row'>
            <FaBrandsPython size={20} color="#308446" />
            <p className='float-right'>Esta aprendiendo</p>
            <FaSolidStar className="place-self-end" size={20} color="#308446" />
            <p className='place-self-end'>4.2</p>
            </div>
            <h1>Card Course</h1>
            <p>Teacher</p>
            </a>
        </div>
        )
}

export default CardCourse;