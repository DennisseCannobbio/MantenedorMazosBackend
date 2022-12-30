const { response } = require('express');
const bcrypt = require('bcryptjs')
const Mazo = require('../models/Mazos');
// const { generarJWT } = require('../helpers/jwt');

const getMazos = async (req, res = response) => {

    const mazos = await Mazo.find();

    res.json({
        ok: true,
        mazos
    })
}

const crearMazo = async (req, res = response) => {

    console.log(req.body)

    const mazo = new Mazo({
        ...req.body
    })

    try {
        
        const mazoCreate = await mazo.save();

        res.json({
            ok: true,
            data: mazoCreate
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error inesperado'
        });
    }
}

const actualizarMazo = async (req, res = response) => {

}

const borrarMazo = async (req, res = response) => {


}

module.exports = {
    getMazos,
    crearMazo,
    actualizarMazo,
    borrarMazo
}