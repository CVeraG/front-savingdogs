import Footer from "./components/Footer";
import HeaderInicio from "./components/HeaderInicio";

export default function InicioPage() {
    return (
        <>
            <HeaderInicio />
            <img src="perros.jpg" alt="" className="w-[100%]" />
            <div className="pt-5 w-full flex flex-col items-center justify-center mb-16">
                <div className="w-[50%] font-dmsans  text-center my-14">
                    <div className="w-full text-5xl font-bold p-3">Objetivo</div>
                    <div className="w-full p-3">
                        Crear una comunidad interactiva que promueva la responsabilidad y el cuidado de las
                        mascotas al ofrecer herramientas tecnológicas que faciliten la reunión de mascotas perdidas
                        con sus propietarios, impactando de manera positiva en el bienestar animal y fortaleciendo los
                        lazos entre los amantes de los animales.
                    </div>
                </div>
                <div className="w-full p-0">
                    <img src="perrosjugando.png" alt="" className="w-full" />
                </div>
                <div className="flex space-between text-center w-[90%] pt-5 mb-10">

                    <div className="w-[50%] p-3 font-dmsans">
                        <div className="w-full text-5xl font-dmsans p-3 font-bold ">Visión</div>
                        Ser la plataforma líder a nivel global que une a mascotas perdidas con sus dueños, promoviendo la responsabilidad en la tenencia de mascotas y creando una red solidaria de amantes de los animales que impacte positivamente en la sociedad.
                    </div>

                    <div className="w-[50%] p-3 font-dmsans">
                        <div className="w-full text-5xl p-3 font-bold ">Misión</div>
                        Facilitar la reunión efectiva de mascotas extraviadas con sus dueños al proporcionar una plataforma innovadora y colaborativa que permita reportar mascotas perdidas y encontradas, utilizando la tecnología para fomentar la conciencia sobre la responsabilidad en el cuidado de las mascotas.
                    </div>
                </div>
            </div>
        </>
    );
}