const User = require('../models/user');

exports.allUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ msg: 'Error al buscar todas los usuarios' });
    }
}

exports.createUser = async (req, res) => {
    try {
        let user = new User(req.body);
        await user.save();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear el usuario' });
    }
}

exports.updateUser = async (req, res) => {
    try {
        const { name, address, phone, email } = req.body;
        let user = await User.findById(req.params.id);
        if (!user) {
            res.status(404).json({ msg: 'no existe el usuario' });
        }
        user.name = name;
        user.address = address;
        user.phone = phone;
        user.email = email;
        user = await User.findOneAndUpdate({ _id: req.params.id }, user, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar el usuario' });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        await User.findOneAndRemove({ _id: req.params.id });
        res.status(200).json({ msg: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar el usuario' });
    }
}