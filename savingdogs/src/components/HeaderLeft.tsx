import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

export default function HeaderLeft(){
    const navigate = useNavigate();

const handleLogout = () => {
  // Aquí puedes agregar la lógica para cerrar la sesión del usuario
  localStorage.removeItem("user");
  // Redirigir al usuario a la página principal después de cerrar sesión
  navigate("/");
  // Por ejemplo, puedes llamar a una función o método que maneje el cierre de sesión.
  console.log('Cerrar sesión'); // Ejemplo: Imprimir un mensaje en la consola
};

    
    return(
        <div className="font-poppins_regular text-2xl font-bold bg-blue text-white h-[5rem] flex justify-between items-center">
            <div>
                <p className="ml-5">Saving Dogs</p>
            </div>
            <div className='mr-5'>
                <IconButton color="warning" className='p-2 rounded-md w-[3rem]' onClick={handleLogout}>
                    <LogoutIcon className=''/>
                </IconButton>
            </div>
            
            
        </div>
    );
}