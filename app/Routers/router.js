let express = require("express");
let router = express.Router();

////Prestamos
const prestamo = require("../Controllers/prestamo.controller.js");
router.post("/prestamo/crear", prestamo.create);
router.get("/prestamo/obtenerTodos", prestamo.retrieveAllPrestamo);
router.get("/prestamo/obtenerporid/:num_pedido", prestamo.getPrestamoById);
router.put("/prestamo/actualizar/:num_pedido", prestamo.updateById);
router.delete("/prestamo/eliminar/:num_pedido", prestamo.deleteById);

////Libros
const libro = require("../Controllers/libro.controller.js");
router.post("/libro/crear", libro.Crear);
router.get("/libro/obtenerTodos", libro.retrieveAllLibro);
router.get("/libro/obtenerlibro/:id", libro.ObtenerLibroId);
router.put("/libro/actualizarlibro/:id", libro.ActualizarLibro);
router.delete("/libro/eliminarlibro/:id", libro.EliminarLibro);


module.exports = router;
