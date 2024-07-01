import HeaderLeft from "./components/HeaderLeft";
import DogFound from "./components/forms/DogFound";

export default function RegistroEncontrado() {
    return (
        <div >
            <HeaderLeft />
            <div className="w-full flex items-center flex-col">
                <div className="mb-5 font-dmsans font-bold text-3xl p-5">
                    <span>Registrar Perro Encontrado</span>
                </div>
                <div className="w-full px-[5rem]">
                    <DogFound />
                </div>
                
            </div>

        </div>
    );
}