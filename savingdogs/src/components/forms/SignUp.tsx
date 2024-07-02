import Button from "@mui/material/Button";
import Header from "../Header";
import TextField from '@mui/material/TextField';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom';
import { FormEvent, useState } from 'react';

export default function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [fName, setfName] = useState('');
    const [sName, setsName] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ubicacion, setUbicacion] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        // Concatenar nombre, apellido paterno y apellido materno en un solo campo
        
        const data1 = { nombre: name,ap: fName, am: sName, correo: email, password: password, ubicacion: ubicacion, telefono: telefono };
        
        try {
            const response = await fetch('http://localhost:8482/apiUsuario/usuarios', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data1),
            });

            const data = await response.json();
            console.log(data)

            if (data.result == true) {
                setError('El usuario se registró correctamente');
                navigate('/signin');
            } else {
                setError('No se pudo registrar al usuario');
            }
        } catch (error) {
            setError('Hubo un error al comunicarse con el servidor');
        }
    };

    return (
        <div className="flex flex-col justify-center items-center px-5 py-5 my-10 w-[35rem] border-2">
            <p className="font-thin text-[2rem]">Crear Cuenta</p>
            <img src="logo.jpg" alt="" className="w-[5rem]" />
            <form onSubmit={handleSubmit} className="mt-5 w-[80%] flex flex-col justify-center items-center">
                <span className="mb-5">
                    <TextField size="small" label="Nombre" className="w-[20rem]" value={name} onChange={(e) => setName(e.target.value)}/>
                </span>
                <span className="mb-5">
                    <TextField size="small" label="Apellido Paterno" className="w-[20rem]" value={fName} onChange={(e) => setfName(e.target.value)}/>
                </span>
                <span className="mb-5">
                    <TextField size="small" label="Apellido Materno" className="w-[20rem]" value={sName} onChange={(e) => setsName(e.target.value)}/>
                </span>
                <span className="mb-5">
                    <TextField size="small" label="Telefono" className="w-[20rem]" value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                </span>
                <span className="mb-5">
                    <TextField size="small" label="Correo Electrónico" className="w-[20rem]" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </span>
                <span className="mb-5">
                    <TextField size="small" label="Ubicacion" className="w-[20rem]" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)}/>
                </span>
                <span className="mb-5">
                    <TextField size="small" type='password' label="Contraseña" className="w-[20rem]" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </span>
                <Button variant="contained" type="submit">
                    Crear Cuenta
                </Button>
                {error && <p>{error}</p>}
                <Link to="/signin" className="mt-5">¿Ya tienes cuenta? Iniciar Sesión</Link>
            </form>
        </div>            
    );
}
