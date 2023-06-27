import Mentor from "./Mentor";

function ListMentors() {
    return (
        <div className="flex flex-col">
            <div className="py-2 px-2">
            <h1 >Conoce a nuestros mentores de alta calidad</h1>
            <p className="float-right">Ellos te ayudarán a alcanzar tus metas</p>
            </div>
            <div className="flex flex-row">
            <Mentor />
                  <Mentor />
                  <Mentor />
                  <Mentor />
            </div>
              
        </div>
    )
}

export default ListMentors;