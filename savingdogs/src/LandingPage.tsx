import Data from "./components/Data";
import HeaderLeft from "./components/HeaderLeft";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface DataProps {
    name?: string;
}

export default function LandingPage(data:DataProps) {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [dog, setDog] = useState<any>({
    nombre: "",
    encontrados: [],
    perdidos: []
    })
    useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) {
        navigate("/");
    }
    let data = JSON.parse(user!);
    if (data !== null) {
        navigate("/landing");
    }
    (async () => {
        try {
            let respuesta = await fetch(`http://localhost:4000/landing/${data.user.id}`);
            if (respuesta.ok) {
                let res = await respuesta.json();
                console.log(JSON.stringify(res));
                setDog(res);
            }
        } catch (error) {
            console.error("Error fetching student data:", error);
        }
    })();
}, [navigate]);

    const handleClickPerroPerdido = (dog: string) => {
        navigate(`/infoappear/${dog}`);
    }

    const handleClickPerroEncontrado = (dog: string) => {
        navigate(`/infodesappear/${dog}`);
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
                        Bienvenido {dog?.user?.nombre}
                        {dog?.user?.arrays?.encontrado?.nombrecompleto}
                        
                    </span>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="w-[40%] h-[25rem] flex flex-col  ml-28 ">
                        <div className="border-2 flex flex-col h-[25rem]  justify-center items-center p-5 pt-3">
                            <span className="font-dmsans mb-5 text-[1.5rem]">
                                Posibles personas que cuenten con su perro
                            </span>

                            <div className="flex flex-col items-center overflow-y-auto max-h-[70%] w-full h-full">
                                {/*Aqui se cambiaria a lo de la BD */}
                                {dog?.arrays?.perdidos && dog?.arrays?.perdidos.map((perdido: any, i: number) => {
                            return (<Data key={i} text={perdido.nombrecompleto} onClick={() => handleClickPerroPerdido(perdido.id_perro)} color="#d2ff8c" />);
                        })}
                        {dog?.arrays?.perdidos.length === 0 && (<span>NO HAY PERSONAS QUE CUENTEN CON SU PERRO</span>)}
                            </div>

                        </div>
                    </div>
                    <div className="w-[40%] h-[25rem] flex flex-col mr-28 ">
                        <div className="border-2 flex flex-col h-[25rem] justify-center items-center p-5 pt-3">
                            <span className="font-dmsans mb-5 text-[1.5rem]">
                                Personas que deseen contactarse con usted
                            </span>

                            <div className="flex flex-col items-center overflow-y-auto max-h-[70%] w-full h-full">
                                {/*Aqui se cambiaria a lo de la BD */}
                                {dog?.arrays?.encontrados && dog?.arrays?.encontrados.map((encontrado: any, i: number) => {
                            return (<Data key={i} text={encontrado.nombrecompleto} onClick={() => handleClickPerroEncontrado(encontrado.id_perro)} color="#d2ff8c" />);
                        })}
                        {dog?.arrays?.encontrados.length === 0 && (<span>NO HAY PERSONAS QUE PODRIAN SER DUEÑAS DEL PERRO QUE REGISTRO</span>)}
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