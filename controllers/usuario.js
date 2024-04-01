const {response} = require('express')

 const Usuario = require('../models/usuario')

const getUsuario = async(req, res) => {
    const Usuarios = await Usuario.find(); //Obtener todos los dococumentos de una coleccion
    res.json({
        msg: Usuarios
    })
}

const postUsuario = async(req, res) => {
    const datos = req.body //Capturar datos de la URL-postman
    let mensaje = 'Insercion exitosa'
    try {
        const Usuarios = new Usuario(datos) //Instanciar el objeto
        await Usuarios.save()//Guardar en la base de dato  
        // console.log(Usuario) 
    } catch(error) {
        mensaje = error
        // console.log(error)
    }

    res.json({
        msg: mensaje
    })
}

const putUsuario = async(req, res) =>{
    const {correoUsuario, password} = req.body
    try {
        const Usuarios = await Usuario.findOneAndUpdate({correoUsuario: correoUsuario},
            {password: password})
            mensaje = 'Actualizacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}

const deleteUsuario = async(req, res) =>{
    const {correoUsuario} = req.body //Desestructurar
    try {
        const Usuarios = await Usuario.findOneAndDelete({correoUsuario})
            mensaje = 'Eliminacion exitosa'
    } catch(error) {
        mensaje = error
    }
    res.json({
        msg:mensaje
    })
    
}


module.exports = {
    getUsuario,
    postUsuario,
    putUsuario,
    deleteUsuario
}
