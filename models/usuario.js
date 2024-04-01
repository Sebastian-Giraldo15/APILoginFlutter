const {Schema, model} = require('mongoose')//Crear una coleccion o acceder a colecciones en mongo 

const proyecto_Schema = ({
    correoUsuario:{
        type:String,
        unique:true,
        required:[true, 'El correo es requerido']
    },

    password:{
        type:String,
        required:[true, 'El password es requerido'],
    },
})


module.exports = model('Usuario', proyecto_Schema)
