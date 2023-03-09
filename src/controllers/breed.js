const Breed = require('../models/breed');

exports.allBreeds = async (req, res) => {
    try {
        const breeds = await Breed.find();
        res.status(200).json(breeds);
    } catch (error) {
        res.status(500).json({ msg: 'Error al buscar todas las razas' });
    }
}
exports.createBreed = async (req, res) => {
    try {
        const breed = new Breed(req.body);
        await breed.save();
        res.status(200).json(breed);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear la raza' });
    }
}

exports.updateBreed = async (req, res) => {
    try {
        const { name } = req.body;
        let breed = await Breed.findById(req.params.id);
        if (!breed) {
            res.status(404).json({ msg: 'no existe la raza' });
        }
        breed.name = name;
        breed = await Breed.findOneAndUpdate({ _id: req.params.id }, breed, { new: true });
        res.status(200).json(breed);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar la raza' });
    }
}

exports.deleteBreed = async (req, res) => {
    try {
        await Breed.findOneAndRemove({ _id: req.params.id });
        res.status(200).json({ msg: 'Raza eliminada' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar la raza' });
    }
}