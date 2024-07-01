import Header from "./components/Header";
import SignIn from "./components/forms/SignIn";
import SignUp from "./components/forms/SignUp";

export default function Registro(){
    return(
        <>
            <Header/>
            <div className="flex flex-col justify-center items-center h-[80%]">
                <SignUp/>
            </div>
            
        </>
    );
}