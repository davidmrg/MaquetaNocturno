// archivo controlador de rutas

const express = require('express');
var router = express.Router();

// importar modelo de bdd (models)
const Alumnos = require('../models/alumnos');


// callbacks de control de las rutas

// callback ruta test: Lee archivos de la base de datos
router.get('/', async (req, res) => {
    const listaRegistros = await Alumnos.find();
    //console.log('los registros:' + listaRegistros);
    res.render('index', {
        listaRegistros
    });
});

// callback ruta formulario:
router.get('/formulario', (req, res) => {
    res.render('formulario',{
        mensaje: ''
    });

});

// callback para controlar la ruta /add
router.post('/add', async (req, res) => {
    console.log(new Alumnos(req.body));
    const objAlumnos = new Alumnos(req.body);
    await objAlumnos.save();

    res.render('formulario', {
        mensaje: 'Los datos han sido guardados'
    });
});

// callback para editar (1)

router.get('/edit', async (req, res) => {
    const listaRegistros = await Alumnos.find();
    res.render('edit', {
        listaRegistros
    });
});

// callback para editar (2)
router.get('/edit/:id', async(req, res)=>{
    const { id } = req.params;
    // const listaRegistros = await Alumnos.find();
    const alumno = await Alumnos.findById({ _id: id });
    res.render('updateForm', {
        alumno
    });
});

// callback para editar (3)
router.post('/edit/:id', async(req, res) => {
    const { id } = req.params;
    await Alumnos.updateOne({ _id: id}, req.body);
    res.redirect('/');
});

// exportar
module.exports = router;

