import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function DogLost() {
  const [name, setName] = useState('');
  const [paName, setPaName] = useState('');
  const [maName, setMaName] = useState('');
  const [petName, setPetName] = useState('');
  const [color, setColor] = useState('');
  const [raza, setRaza] = useState('');
  const [sexo, setSexo] = useState('');
  const [email, setEmail] = useState('');
  const [calle, setCalle] = useState('');
  const [caracteristicas, setCaracteristicas] = useState('');
  const [colonia, setColonia] = useState('');
  const [estado, setEstado] = useState('');
  const [delegacion, setDelegacion] = useState('');
  const [codigo, setCodigo] = useState('');
  const [fotoFilePath, setFotoFilePath] = useState<string>('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    let user = localStorage.getItem('user');
    if (!user) {
      navigate('/');
    } else {
      let data = JSON.parse(user);
      console.log(data);
      navigate('/perdido');
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const payload = {
      raza,
      sexo,
      color,
      car_esp: caracteristicas,
      correo: email,
      nombre: name,
      ap: paName,
      am: maName,
      calle,
      colonia,
      delegacion,
      estado,
      cp: codigo,
      nombrePerro: petName,
      foto: fotoFilePath,
    };
  
    try {
      const response = await fetch('http://localhost:8482/apiPerroperdido/registroPerdido', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      const data = await response.json();
      console.log(data);
  
      if (data.result === true) {
        setError('El usuario se registró correctamente');
        navigate('/landing');
      } else {
        setError('No se pudo registrar al usuario');
      }
    } catch (error) {
      setError('Hubo un error al comunicarse con el servidor');
    }
  };
  
  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} action="" className="flex flex-col">
        <div className="mt-5 w-auto flex flex-row justify-between">
          <div className="h-auto flex flex-col w-[30%]">
            <input
              type="file"
              onChange={(e) => setFotoFilePath(e.target.files?.[0]?.name || '')}
            />
            <span className="mb-5 w-auto">
              <TextField
                size="small"
                label="Raza"
                className="w-full"
                value={raza}
                onChange={(e) => setRaza(e.target.value)}
              />
            </span>
            <span className="mb-5 w-auto">
              <TextField
                size="small"
                label="Sexo"
                className="w-full"
                value={sexo}
                onChange={(e) => setSexo(e.target.value)}
              />
            </span>
            <span className="mb-5 w-auto">
              <TextField
                size="small"
                label="Correo"
                className="w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>
          </div>
          <div className="h-auto flex flex-col w-[30%] pt-11">
            <span className="mb-5">
              <TextField
                size="small"
                label="Nombre"
                className="w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </span>
            <span className="mb-5">
              <TextField
                size="small"
                label="Apellido Paterno"
                className="w-full"
                value={paName}
                onChange={(e) => setPaName(e.target.value)}
              />
            </span>
            <span className="mb-5">
              <TextField
                size="small"
                label="Apellido Materno"
                className="w-full"
                value={maName}
                onChange={(e) => setMaName(e.target.value)}
              />
            </span>
            <span className="mb-5">
              <TextField
                size="small"
                label="Nombre de la mascota"
                className="w-full"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
              />
            </span>
            <span className="mb-5">
              <TextField
                size="small"
                label="Color"
                className="w-full"
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </span>
            <span className="mb-5">
              <TextField
                size="small"
                label="Características Especiales"
                className="w-full"
                value={caracteristicas}
                onChange={(e) => setCaracteristicas(e.target.value)}
              />
            </span>
          </div>
          <div className="h-auto flex flex-col w-[35%] border-2 py-5 px-3">
            <span className="font-sifonn mb-5">
              Dirección de Extravío del Perro
            </span>
            <span className="mb-5">
              <TextField
                size="small"
                label="Calle"
                className="w-full"
                value={calle}
                onChange={(e) => setCalle(e.target.value)}
              />
            </span>
            <span className="mb-5">
              <TextField
                size="small"
                label="Colonia"
                className="w-full"
                value={colonia}
                onChange={(e) => setColonia(e.target.value)}
              />
            </span>
            <span className="mb-5">
              <TextField
                size="small"
                label="Delegación o Municipio"
                className="w-full"
                value={delegacion}
                onChange={(e) => setDelegacion(e.target.value)}
              />
            </span>
            <span className="mb-5">
              <TextField
                size="small"
                label="Estado"
                className="w-full"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
              />
            </span>
            <span className="mb-5">
              <TextField
                size="small"
                label="Código Postal"
                className="w-full"
                value={codigo}
                onChange={(e) => setCodigo(e.target.value)}
              />
            </span>
          </div>
        </div>
        <div className="flex items-end mt-5 justify-end">
          <Button
            className="w-[10rem]"
            style={{ backgroundColor: '#4199FF' }}
            type="submit"
            variant="contained"
            sx={{ mt: 2 }}
          >
            Registrar
          </Button>
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
}
