import CardCourse from "./CardCourse.jsx";

function GridCourses(){
    return(
        <div className="grid gap-4 grid-cols-3 grid-rows-3">
            <CardCourse />
            <CardCourse />
            <CardCourse />
        </div>
    )
}

export default GridCourses;