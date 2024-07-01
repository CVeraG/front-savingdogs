import Header from "./Header"
import HeaderLeft from "./HeaderLeft";


interface PetProps{
    raza?: string;
    color?: string;
    Sexo?:string;
    Caracteristicas?:string;
    Calle?:string;
    Colonia?: string;
    Postal?: string;
    Delegación?: string; 
    Estado?: string;
    Correo?: string;
}
export default function PetAppear(props:PetProps) {
    return (
        <>
 
                    <div className="flex flex-col  items-start font-poppins_regular">
                        <span>Raza: {props.raza} </span>
                        <span>Color: {props.color}</span>
                        <span>Sexo:{props.Sexo}</span>
                        <span>Características Especiales:{props.Caracteristicas}</span>
                        <span>Lugar de Desaparción:</span>
                        <span>Calle: {props.Calle}</span>
                        <span>Colonia: {props.Colonia}</span>
                        <span>Código Postal: {props.Postal}</span>
                        <span>Delegación o Municipio: {props.Delegación}</span>
                        <span>Estado: {props.Estado}</span>
                        <span>Correo Electrónico:{props.Correo}</span>

                    </div>
         


        </>

    );
}