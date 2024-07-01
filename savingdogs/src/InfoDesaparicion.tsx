import Data from "./components/Data";
import HeaderLeft from "./components/HeaderLeft";
import PetDissapear from "./components/PetDissapear";
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface StuProps {
    name?: string;
    hability1?: string;
    hability2?: string;
    //Aqui agregas las variables necesarias para mostrar.
}



export default function InfoDesaparicion(){
    const navigate = useNavigate();
    const { dog } = useParams<any>()
    const [error, setError] = useState<string | null>(null);
    const [dogs, setDogs] = useState<any>({
        nombre: "",
        ap: "",
        am: "",
        raza: "",
        sexo: "",
        color: "",
        car_esp:"",
        calle:"",
        colonia:"",
        delegacion:"",
        estado:"",
        cp:""
        })
        useEffect(() => {
        let user = localStorage.getItem("user");
        if (!user) {
            navigate("/");
        }
        let data = JSON.parse(user!);
        (async () => {
            try {
                let respuesta = await fetch(`http://localhost:4000/informacionperdido/${dog}`);
                if (respuesta.ok) {
                    let res = await respuesta.json();
                    console.log(JSON.stringify(res));
                    setDogs(res);
                }
            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        })();
    }, [navigate]);

    const handleClickRegresar = () => {
        navigate(`/landing`);
    }
    return(
        <div>

<HeaderLeft />
            <div className=" flex flex-col items-center justify-center px-10 py-7 ">
                <div className="flex w-full font-poppins_regular text-[3rem] mb-5">
                {dogs?.user?.nombre + " " + dogs?.user?.ap + " " + dogs?.user?.am}
                </div>
                <div className="flex justify-between items-center w-full border-2 mx-16 p-7 py-7">
                    <div className="flex w-[35%]">
                        <img className="w-full h-full" src="https://www.zooplus.es/magazine/wp-content/uploads/2019/06/franz%C3%B6sische-bulldogge-1024x683.jpg" alt="" />
                    </div>
                    <div className="flex flex-col w-[60%] items-start">
                        <PetDissapear 
                            raza={dogs?.perro?.raza}
                            color={dogs?.perro?.color}
                            Sexo={dogs?.perro?.sexo}
                            Caracteristicas={dogs?.perro?.car_esp}
                            Calle={dogs?.direccion?.calle}
                            Colonia={dogs?.direccion?.colonia}
                            Postal={dogs?.direccion?.cp}
                            Delegación={dogs?.direccion?.delegacion}
                            Estado={dogs?.direccion?.estado}
                            Correo= {dogs?.perro?.correo}
                        />

                    </div>
                </div>
                <div className="w-[50%] mt-5 flex items-end text-white">
                    <Data text="Regresar" color="#F0138A" onClick={handleClickRegresar}/>
                </div>
            </div>
        </div>
    );

}