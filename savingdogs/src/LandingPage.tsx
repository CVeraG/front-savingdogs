import Data from "./components/Data";
import HeaderLeft from "./components/HeaderLeft";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface DataProps {
    name?: string;
}

export default function LandingPage(data: DataProps) {
    const navigate = useNavigate();
    const [error, setError] = useState<string | null>(null);
    const [dog, setDog] = useState<any>({
        nombre: "",
        perrosPerdidos: []
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                let user = localStorage.getItem("user");
                if (!user) {
                    navigate("/");
                    return;
                }
                let userData = JSON.parse(user);
                if (userData === null || !userData.user || !userData.user.id) {
                    navigate("/");
                    return;
                }
                
                let respuesta = await fetch(`http://localhost:8482/apiUsuario/usuario/${userData.user.id}`);
                if (respuesta.ok) {
                    let res = await respuesta.json();
                    setDog(res);
                    console.log(res);
                } else {
                    setError("Error al obtener los datos del usuario");
                }
            } catch (error) {
                console.error("Error fetching student data:", error);
                setError("Error al obtener los datos del usuario");
            }
        };

        fetchUserData();
    }, [navigate]);

    const handleClickPerroPerdido = (dogId: string) => {
        navigate(`/infoappear/${dogId}`);
    }

    const handleClickPerroEncontrado = (dogId: string) => {
        navigate(`/infodesappear/${dogId}`);
    }

    const handleClickRegistroPerdido = () => {
        navigate('/perdido');
    }

    const handleClickRegistroEncontrado = () => {
        navigate('/encontrado');
    }

    return (
        <>
            <HeaderLeft />
            <div className="flex flex-col justify-center items-center">
                <div className="py-5">
                    <span className="font-dmsans text-[2rem]">
                        Bienvenido {dog?.nombre}
                    </span>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="w-[40%] h-[25rem] flex flex-col ml-28">
                        <div className="border-2 flex flex-col h-[25rem] justify-center items-center p-5 pt-3">
                            <span className="font-dmsans mb-5 text-[1.5rem]">
                                Posibles personas que cuenten con su perro
                            </span>

                            <div className="flex flex-col items-center overflow-y-auto max-h-[70%] w-full h-full">
                                {dog?.perrosPerdidos && dog?.perrosPerdidos.map((perdido: any, i: number) => (
                                    <Data key={i} text={`${perdido.nombre}`} onClick={() => handleClickPerroPerdido(perdido.id_perdido)} color="#d2ff8c" />
                                ))}
                                {dog?.perrosPerdidos.length === 0 && (<span>NO HAY PERSONAS QUE CUENTEN CON SU PERRO</span>)}
                            </div>
                        </div>
                    </div>
                    <div className="w-[40%] h-[25rem] flex flex-col mr-28">
                        <div className="border-2 flex flex-col h-[25rem] justify-center items-center p-5 pt-3">
                            <span className="font-dmsans mb-5 text-[1.5rem]">
                                Personas que deseen contactarse con usted
                            </span>

                            <div className="flex flex-col items-center overflow-y-auto max-h-[70%] w-full h-full">
                                {dog?.perrosEncontrados && dog?.perrosEncontrados.map((encontrado: any, i: number) => (
                                        <Data key={i} text={`${encontrado.nombre}`} onClick={() => handleClickPerroPerdido(encontrado.id_encontrado)} color="#d2ff8c" />
                                    ))}
                                {dog?.perrosEncontrados && dog?.perrosEncontrados.length === 0 && (<span>TODAVIA NO APARECE EL DUEÑO</span>)}
                            </div>
                            </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                    <div className="w-[40%] border-2 mt-5 pt-5 ml-28">
                        <Data text="Registrar perro perdido" color="#C6E5B1" onClick={handleClickRegistroPerdido}></Data>
                    </div>
                    <div className="w-[40%] border-2 mt-5 pt-5 mr-28">
                        <Data text="Registrar perro encontrado" color="#DBC4D8" onClick={handleClickRegistroEncontrado}></Data>
                    </div>
                    {error && <p>{error}</p>}
                </div>
            </div>
        </>
    );
}
