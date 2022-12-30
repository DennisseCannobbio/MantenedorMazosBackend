const { Schema, model} = require('mongoose');

const MazoSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    colores: {
        type: String,
        required: true
    },
    poseeForro: {
        type: Boolean,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
    },
    tipo: {
        type: String,
        required: true
    },
    ubicacion: {
        type: String,
        required: true
    },
}, { collection : 'Mazos '});

MazoSchema.method('toJSON', function () {
    const {__v,...object} = this.toObject();
    return object;
})

module.exports = model('Mazo', MazoSchema);