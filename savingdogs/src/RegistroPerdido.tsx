import HeaderLeft from "./components/HeaderLeft";
import DogLost from "./components/forms/DogsLost";

export default function RegistroPerdido() {
    return (
        <div >
            <HeaderLeft />
            <div className="w-full flex items-center flex-col">
                <div className="mb-5 font-dmsans font-bold text-3xl p-5">
                    <span>Registrar Perro Perdido</span>
                </div>
                <div className="w-full px-[5rem]">
                    <DogLost />
                </div>
                
            </div>

        </div>
    );
}