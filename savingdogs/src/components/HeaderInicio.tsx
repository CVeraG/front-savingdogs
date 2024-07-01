import { Link } from "react-router-dom";

export default function HeaderInicio(){
    return(
        <div className="font-poppins_regular text-2xl font-bold bg-blue text-white h-[5rem] flex justify-between items-center fixed w-full">
            <div>
                <p className="font-poppins_regular ml-10">Saving Dogs</p>
            </div>
            <div className='mr-5 font-dmsans text-lg'>
                <div className="">
                    <Link to="/Signin" className='mr-5'>Iniciar Sesión</Link>
                    <Link to="/Signup" className='mr-5'>Registrate</Link>
                </div>
            </div>
            
            
        </div>
    );
}