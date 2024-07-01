import Button from "@mui/material/Button";

interface DataProps {
    onClick?: (e:any)=>void;
    text?: string;
    color?: string;
}

export default function Data(props: DataProps){
    return(
        <div className="flex justify-center items-center bg-${props.color} w-full">
            <Button className='w-[60%]' style={{
            backgroundColor: props.color,
            marginBottom: 20,
            color: '#000000',
            fontFamily: 'Roboto, sans-serif',
            fontSize: 17,
        }}
        onClick={props.onClick} // Manejo de clics 
        >

            {props.text} {/*Aqui va el texto ya sea aptitud o Servicio Social al que aplicas*/}
        </Button>
            
        </div>
    );
}