import Header from "./components/Header";
import SignIn from "./components/forms/SignIn";

export default function InicioSesion(){
    return(
        <>
            <Header/>
            <div className="flex flex-col justify-center items-center h-[80%]">
                <SignIn/>
            </div>
            
        </>
    );
}