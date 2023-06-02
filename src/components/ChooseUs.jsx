import PointPlataform from './PointsPlataform'
function Choose_us(){
    return(
        <div className="flex">
            <div className='w-3/5 justify-center'>
                <h1 className="text-5xl">Why Choose Us</h1>
                <p className="text-xl">Our platform is designed to help you learn and grow.</p>
                <img src="src/assets/images/landing-page/group-work-2.jpg" alt="" className="" />
            </div>
            <div className="w-2/5">
                <div className="">
                <p className="text-gray-500	">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Provident tenetur ad porro modi in illo distinctio perspiciatis similique soluta aperiam et, 
                        eaque itaque voluptatibus, 
                        cum quisquam ab eius obcaecati! Aliquam?</p>
                <PointPlataform />
                <PointPlataform />
                <PointPlataform />
                <PointPlataform />
                </div>
            </div>
        </div>
    )
}

export default Choose_us;