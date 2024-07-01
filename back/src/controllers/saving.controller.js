const {getConnection} = require("./../database/mysql"); 
const path = require("path");
const spawn = require('child_process').spawn;
const fs = require('fs');
const { param } = require("../routes/saving.routes");

const registro = async(req, res) =>{
    try{
        const {correo, nombre, ap, am, password} = req.body;
        console.log(nombre);

        const connection = await getConnection();
        const max = await connection.query("SELECT max(id_user) as maximo FROM user");
        const user = {correo, nombre, ap, am, password, id_user: max[0].maximo+1};
        console.log("Usuario a agregar: ", user)
        const insertar = await connection.query("INSERT INTO user SET ?", user);
        res.json({message: "Usuario guardado correctamente", result: true});
    }catch(error){
        res.status(500);
        res.json({message: error.message, result: false});
    }
};


const login = async(req, res)=>{
    try{
        const {user, password} = req.body;
        const connection = await getConnection();        
        const consultaUser = await connection.query("SELECT password FROM user where correo = ?", user);
        
        if(consultaUser.length > 0){
            if(consultaUser[0].password == password){
                const consultaDatos = await connection.query("SELECT nombre, ap, am, id_user FROM user where correo = ?", user);
                res.json({user:{nombre: consultaDatos[0].nombre, ap: consultaDatos[0].ap, am: consultaDatos[0].am, id: consultaDatos[0].id_user}, result: true});
                console.log();
            }else{
                res.json({message: "Contrasena incorrecta", result: false})
            }
        }
        else{
            res.json({result: false})
        }
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
};

    const landing = async (req, res) =>{
        try{
            let encontrados = [];
            let perdidos = [];
            const{id} = req.params;
            const connection = await getConnection();
            const user = await connection.query("SELECT nombre, correo FROM user where id_user = ?",id);
            // Obtener información de perros perdidos que coinciden con el correo del usuario
            const perrosPerdidos = await connection.query("SELECT nombrecompleto, id_perro FROM contactar_registro_encontrado WHERE correoperdido = ?", user[0].correo);
            // Agregar la información de perros perdidos al arreglo perdidos
            for (const perdido of perrosPerdidos) {
                perdidos.push({
                    nombrecompleto : perdido.nombrecompleto,
                    id_perro: perdido.id_perro
                });
            }

            const perrosEncontrados = await connection.query("SELECT nombrecompleto, id_perro FROM contactar_registro_perdido WHERE correoencontrado = ?", user[0].correo);
            // Agregar la información de perros perdidos al arreglo perdidos
            for (const encontrado of perrosEncontrados) {
                encontrados.push({
                    nombrecompleto : encontrado.nombrecompleto,
                    id_perro: encontrado.id_perro
                });
            }
            
            res.json({ user: { nombre: user[0].nombre }, arrays:{perdidos: perdidos, encontrados: encontrados}});

        }catch(error){
            res.status(500);
            res.json({message: error.message, result: false});
        }
    };

    const registroPerdido = async (req,res) => {
        try{
            const {nombrePerro,raza, sexo, color, car_esp, correo, nombre, ap, am, calle, colonia, delegacion,estado,cp} = req.body;
            const nombrecompleto = nombre + " " + ap + " " + am;
            const connection = await getConnection();
            const max = await connection.query("SELECT max(id_perdido) as maximo FROM perroperdido");
            const perro = {nombrePerro, raza, sexo, color, car_esp, correo, nombre, ap, am, calle, colonia, delegacion,estado,cp, foto: req.file.filename, id_perdido: max[0].maximo+1};
            const insertar = await connection.query("INSERT INTO perroperdido SET ?", perro);
            const perrosEncontrados = await connection.query("SELECT correo, id_encontrado FROM perroencontrado WHERE color = ? AND raza = ?", [color, raza]);
            for (const encontrado of perrosEncontrados) {
                const contacto = { nombrecompleto: nombrecompleto, correoperdido: correo, correoencontrado: encontrado.correo, id_perro: perro.id_perdido };
                await connection.query("INSERT INTO contactar_registro_perdido SET ?", contacto);
            }
            res.json({message: "Perro perdido guardado correctamente", result: true});

        }
        catch(error){
            res.status(500);
            res.json({message: error.message, result: false});
        }
    }

    const getPerdido = async (req,res) => {

        try{
            const{id} = req.params;
            console.log("ID",id)
            const connection = await getConnection();
            const perro = await connection.query("SELECT raza, sexo, color, car_esp, correo, nombre, ap, am, calle, colonia, delegacion,estado,cp, foto FROM perroencontrado where id_encontrado = ? ", id);
            res.json({user:{nombre:perro[0].nombre, ap:perro[0].ap, am:perro[0].am},  perro:{raza: perro[0].raza, correo: perro[0].correo, sexo: perro[0].sexo, color: perro[0].color, car_esp: perro[0].car_esp, foto: perro[0].foto}, direccion:{calle: perro[0].calle, colonia: perro[0].colonia, delegacion: perro[0].delegacion, estado:perro[0].estado, cp: perro[0].cp}} );
            console.log(perro[0].foto)

        }catch(error){
            res.status(500);
            res.json({message: error.message, result: false});
        }

    }

    
    const registroEncontrado = async (req,res) => {
        try{
            const {raza, sexo, color, car_esp, correo, nombre, ap, am, calle, colonia, delegacion,estado,cp} = req.body;
            const nombrecompleto = nombre + " " + ap + " " + am;
            const connection = await getConnection();
            const max = await connection.query("SELECT max(id_encontrado) as maximo FROM perroencontrado");
            const perro = {raza, sexo, color, car_esp, correo, nombre, ap, am, calle, colonia, delegacion,estado,cp, foto: req.file.filename, id_encontrado: max[0].maximo+1};
            const insertar = await connection.query("INSERT INTO perroencontrado SET ?", perro);
            const perrosPerdidos = await connection.query("SELECT correo, id_perdido FROM perroperdido WHERE color = ? AND raza = ?", [color, raza]);
            for (const perdido of perrosPerdidos) {
                const contacto = { nombrecompleto: nombrecompleto, correoencontrado: correo, correoperdido: perdido.correo, id_perro: perro.id_encontrado };
                await connection.query("INSERT INTO contactar_registro_encontrado SET ?", contacto);
            }
            res.json({message: "Perro encontrado guardado correctamente", result: true});



        }
        catch(error){
            res.status(500);
            res.json({message: error.message, result: false});
        }
    }

    const getEncontrado = async (req,res) => {

        try{
            const{id} = req.params;
            const connection = await getConnection();
            const perro = await connection.query("SELECT raza, sexo, color, car_esp, correo, nombre, ap, calle, colonia, delegacion, estado, cp, correo, foto FROM perroperdido where id_perdido = ? ", id);
            res.json({user:{nombre:perro[0].nombre, ap:perro[0].ap}, perro:{raza: perro[0].raza, sexo: perro[0].sexo, color: perro[0].color, car_esp: perro[0].car_esp, correo: perro[0].correo, foto: perro[0].foto}, direccion:{calle: perro[0].calle, colonia: perro[0].colonia, delegacion: perro[0].delegacion, estado:perro[0].estado, cp: perro[0].cp}} );
            console.log(perro[0].foto)
        }catch(error){
            res.status(500);
            res.json({message: error.message, result: false});
        }

    }




module.exports = {
    registro,
    login,
    landing, 
    registroPerdido,
    getPerdido,
    registroEncontrado,
    getEncontrado

};

