const product = require("../models/provider");


const create = (req, res) => {
    const newProvider = {
      name: req.body.name,
      lastName: req.body.lastName,
      adress: req.body.adress,
      phone: req.body.phone,
      email: req.body.email,
      typeProvider: req.body.typeProvider
    };
    providers.create(newProvider)
      .then((data) => res.json({ msg: "Profile added: ", data }))
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  };

const getAll = (req, res) => {
    product.find({ isDeleted: false })
    .then((data) => res.json({ data }))
    .catch((err) => res.status(500).json({ msg: `Error: ${err}` })); 
  }

const remove = (req, res) => {
    const { id } = req.params;
    product.findByIdAndUpdate(id, { isDeleted: true }, { new: true })
      .then((data) => {
        if (data.length === 0) return res.status(404).json({ msg: `Product not found by ID: ${id}` });
        return res.json({ msg: "Product deleted", data });
      })
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  };
const update = (req, res) => {
    const { id } = req.params;
    product.findByIdAndUpdate(id, req.body, { new: true })
      .then((data) => {
        if (data.length === 0) return res.status(404).json({ msg: `Product not found by ID: ${id}` });
        return res.json({ msg: "Product updated", data });
      })
      .catch((err) => res.status(500).json({ msg: `Error: ${err}` }));
  };
  module.exports = {
    create,
    getAll,
    remove,
    update 
  };