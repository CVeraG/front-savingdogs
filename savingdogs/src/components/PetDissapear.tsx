import Header from "./Header"
import HeaderLeft from "./HeaderLeft";


interface PetProps{
    name?: string; 
    raza?: string;
    color?: string;
    peso?:string;
    Altura?: string;
    Sexo?:string;
    Caracteristicas?:string;
    Personalidad?: string;
    Calle?:string;
    Colonia?: string;
    Postal?: string;
    Delegación?: string; 
    Estado?: string;
    Correo?: string;
}
export default function PetDissapear(props:PetProps) {
    return (
        <>
 
                    <div className="flex flex-col  items-start font-poppins_regular">
                        <span>Raza: {props.raza} </span>
                        <span>Color: {props.color}</span>
                        <span>Sexo:{props.Sexo}</span>
                        <span>Características Especiales: {props.Caracteristicas}</span>
                        <span className="font-bold">Lugar de Aparición</span>
                        <span>Calle: {props.Calle}</span>
                        <span>Colonia: {props.Colonia}</span>
                        <span>Código Postal: {props.Postal}</span>
                        <span>Delegación o Municipio: {props.Delegación}</span>
                        <span>Estado: {props.Estado}</span>
                        <span>Correo: {props.Correo}</span>

                    </div>
         


        </>

    );
}