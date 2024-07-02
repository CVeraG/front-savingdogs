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
        cp:"",
        fotoFilePath: ""
        })
        useEffect(() => {
        let user = localStorage.getItem("user");
        if (!user) {
            navigate("/");
        }
        let data = JSON.parse(user!);
        (async () => {
            try {
                let respuesta = await fetch(`http://localhost:8482/apiPerroperdido/perroperdido/${dog}`);
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

    const miImagen = `/images/${dogs.fotoFilePath}`;

    return(
        <div>

<HeaderLeft />
            <div className=" flex flex-col items-center justify-center px-10 py-7 ">
                <div className="flex w-full font-poppins_regular text-[3rem] mb-5">
                {dogs?.nombre + " " + dogs?.ap + " " + dogs?.am}
                </div>
                <div className="flex justify-between items-center w-full border-2 mx-16 p-7 py-7">
                    <div className="flex w-[35%]">
                        <img className="w-full h-full" src={miImagen} alt="" />
                    </div>
                    <div className="flex flex-col w-[60%] items-start">
                        <PetDissapear 
                            raza={dogs?.raza}
                            color={dogs?.color}
                            Sexo={dogs?.sexo}
                            Caracteristicas={dogs?.car_esp}
                            Calle={dogs?.calle}
                            Colonia={dogs?.colonia}
                            Postal={dogs?.cp}
                            Delegación={dogs?.delegacion}
                            Estado={dogs?.estado}
                            Correo= {dogs?.correo}
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