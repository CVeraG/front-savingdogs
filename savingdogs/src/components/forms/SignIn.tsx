import { FormEvent, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    const data = { correo: email, password: password }; // Cambiado a 'correo' según tu API
    try {
      const response = await fetch('http://localhost:8482/apiUsuario/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const userData = await response.json();

        localStorage.setItem('user', JSON.stringify(userData));

        if (userData !== null) {
          console.log('Entre aqui'); // Imprime los datos que estás enviando

          if (userData.result === true) {  
            navigate('/landing');
          } else {
            setError('Credenciales incorrectas');
          }
        }
      } else {
        setError('Error al iniciar sesión');
      }
    } catch (error) {
      setError('Error interno del servidor');
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-5 py-10 my-10 w-[35rem] border-2">
      <p className="font-thin text-[2rem]">Inicio de Sesión</p>
      <img src="logo.jpg" alt="" className="w-[7rem]" />
      <form onSubmit={handleSubmit} className="mt-5 w-[80%] flex flex-col justify-center items-center">
        <span className="mb-5">
          <TextField
            size="small"
            label="Correo Electrónico"
            className="w-[20rem]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </span>
        <span className="mb-5">
          <TextField
            size="small"
            label="Contraseña"
            type="password"
            className="w-[20rem]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </span>
        <Button variant="contained" type="submit">
          Iniciar Sesión
        </Button>
        {error && <p>{error}</p>}

        <Link to="/signup" className="mt-5">
          ¿No tienes cuenta? Crear Cuenta
        </Link>
      </form>
    </div>
  );
}
