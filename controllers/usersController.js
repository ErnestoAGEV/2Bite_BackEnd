const User = require("../models/user");

module.exports = {
  register(req, res) {
    const user = req.body; //se capturan los datos que el cliente manda
    User.create(user, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: "Hubo un error con el registro del usuario",
          errror: err,
        });
      }

      return res.status(201).json({
        success: true,
        message: "El registro se realizo correctamente",
        data: data, // el id del nuevo usario
      });
    });
  }
}
