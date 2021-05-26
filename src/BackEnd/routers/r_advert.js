const router = require('express').Router();

const { table1 } = require('../db');

router.get('/', async (req, res) => {
    const resul = await table1.findAll();
    res.json(resul);
})

router.get('/:Id', async (req, res) => {
    const resul= await table1.findOne({where: { id: req.params.Id }});
    res.json(resul);
});

router.post('/', async (req, res) => {
    const resul = await table1.create(req.body);
    res.json(resul);
});

router.put('/:Id', async (req, res) => {
    await table1.update(req.body, {
        where: { id: req.params.Id }
    });
    res.json({ success: 'Registro actualizado'});
});

router.delete('/:Id', async (req, res) => {
    await table1.destroy({
        where: { id: req.params.Id }
    });
    res.json({ success: 'Registro eliminado'});
});


module.exports = router;