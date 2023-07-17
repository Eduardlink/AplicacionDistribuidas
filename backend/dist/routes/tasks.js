"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _tasks = require("../controllers/tasks");
var router = (0, _express.Router)();

/**
 * @swagger
 * tags:
 *  name: Persona
 *  description: Todo el CRUD de persona
 */

/**
 * @swagger
 * tags:
 *  name: Equipos
 *  description: Todo el CRUD de equipos
 */

/**
 * @swagger
 * tags:
 *  name: Solicitudes
 *  description: Todo servicio de solicitudes
 */

/**
 * @swagger
 * tags:
 *  name: Custodia
 *  description: Todo servicio de custodia
 */

/**
 * @swagger
 * tags:
 *  name: Devoluciones
 *  description: Todo servicio de devoluciones
 */

/**
 * @swagger
 * /persona:
 *  get:
 *      summary: Obtiene todas las personas
 *      tags: [Persona]
 */
router.get('/persona', _tasks.getPersonas);

/** 
 * @swagger
 * /equipos:
 *  get:
 *      summary: Obtiene todos los equipos
 *      tags: [Equipos]
*/
router.get('/equipos', _tasks.getEquipos);

/** 
 * @swagger
 * /solicitudes:
 *  get:
 *      summary: Obtiene todas las solicitudes
 *      tags: [Solicitudes]
*/
router.get('/solicitudes', _tasks.getSolicitudes);

/** 
 * @swagger
 * /custodia:
 *  get:
 *      summary: Obtiene todas las custodias
 *      tags: [Custodia]
*/
router.get('/custodia', _tasks.getCustodia);

/** 
 * @swagger
 * /devoluciones:
 *  get:
 *      summary: Obtiene todas las devoluciones
 *      tags: [Devoluciones]
*/
router.get('/devoluciones', _tasks.getDevoluciones);

/** 
 * @swagger
 * /persona/si:
 *  get:
 *      summary: Obtiene todas las personas si
 *      tags: [Persona]
*/
router.get('/persona/si', _tasks.getPersonasSi);

/** 
 * @swagger
 * /equipos/si:
 *  get:
 *      summary: Obtiene todos los equipos si
 *      tags: [Equipos]
*/
router.get('/equipos/si', _tasks.getEquiposSi);

/** 
 * @swagger
 * /solicitudes/si:
 *  get:
 *      summary: Obtiene todas las solicitudes si
 *      tags: [Solicitudes]
*/
router.get('/solicitudes/si', _tasks.getSolicitudesSi);

/** 
 * @swagger
 * /custodia/si:
 *  get:
 *      summary: Obtiene todas las custodias si
 *      tags: [Custodia]
*/
router.get('/custodia/si', _tasks.getCustodiaSi);

/** 
 * @swagger
 * /devoluciones/si:
 *  get:
 *      summary: Obtiene todas las devoluciones si
 *      tags: [Devoluciones]
*/
router.get('/devoluciones/si', _tasks.getDevolucionesSi);

/** 
 * @swagger
 * /persona/count:
 *  get:
 *      summary: Obtiene total de las personas
 *      tags: [Persona]
*/
router.get('/persona/count', _tasks.getPersonasCount);

/** 
 * @swagger
 * /equipos/count:
 *  get:
 *      summary: Obtiene total del equipos
 *      tags: [Equipos]
*/
router.get('/equipos/count', _tasks.getEquiposCount);

/** 
 * @swagger
 * /solicitudes/count:
 *  get:
 *      summary: Obtiene total de las solicitudes
 *      tags: [Solicitudes]
*/
router.get('/solicitudes/count', _tasks.getSolicitudesCount);

/** 
 * @swagger
 * /custodia/count:
 *  get:
 *      summary: Obtiene total de las custodias
 *      tags: [Custodia]
*/
router.get('/custodia/count', _tasks.getCustodiasCount);

/** 
 * @swagger
 * /devoluciones/count:
 *  get:
 *      summary: Obtiene total de las devoluciones
 *      tags: [Devoluciones]
*/
router.get('/devoluciones/count', _tasks.getDevolucionesCount);

/** 
 * @swagger
 * /persona:
 *  get:
 *      summary: Obtiene persona por cedula
 *      tags: [Persona]
*/
router.get('/persona/:cedula_per', _tasks.getPersonasCedula);

/** 
 * @swagger
 * /equipos:
 *  get:
 *      summary: Obtiene equipos por id
 *      tags: [Equipos]
*/
router.get('/equipos/:id_equ', _tasks.getEquiposId);

/** 
 * @swagger
 * /solicitudes:
 *  get:
 *      summary: Obtiene solicitudes por id
 *      tags: [Solicitudes]
*/
router.get('/solicitudes/:id_sol', _tasks.getSolicitudesId);

/** 
 * @swagger
 * /custodia:
 *  get:
 *      summary: Obtiene custodia por id
 *      tags: [Custodia]
*/
router.get('/custodia/:id_cus', _tasks.getCustodiaId);

/** 
 * @swagger
 * /devoluciones:
 *  get:
 *      summary: Obtiene devoluciones por id
 *      tags: [Devoluciones]
*/
router.get('/devoluciones/:id_dev', _tasks.getDevolucionesId);

/** 
 * @swagger
 * /persona:
 *  post:
 *      summary: Crea persona
 *      tags: [Persona]
*/
router.post('/persona', _tasks.createPersona);

/** 
 * @swagger
 * /equipos:
 *  post:
 *      summary: Crea equipos
 *      tags: [Equipos]
*/
router.post('/equipos', _tasks.createEquipo);

/** 
 * @swagger
 * /solicitudes:
 *  post:
 *      summary: Crea solicitudes
 *      tags: [Solicitudes]
*/
router.post('/solicitudes', _tasks.createSolicitudes);

/** 
 * @swagger
 * /persona:
 *  put:
 *      summary: Editar persona
 *      tags: [Persona]
*/
router.put('/persona/:cedula_per', _tasks.updatePersona);

/** 
 * @swagger
 * /equipos:
 *  put:
 *      summary: Editar equipos
 *      tags: [Equipos]
*/
router.put('/equipos/:id_equ', _tasks.updateEquipo);

/** 
 * @swagger
 * /solicitudes:
 *  put:
 *      summary: Editar solicitudes
 *      tags: [Solicitudes]
*/
router.put('/solicitudes/:id_sol', _tasks.updateSolicitudes);

/** 
 * @swagger
 * /devoluciones:
 *  put:
 *      summary: Editar devoluciones
 *      tags: [Devoluciones]
*/
router.put('/devoluciones/:id_dev', _tasks.updateDevoluciones);

/** 
 * @swagger
 * /persona/delete:
 *  put:
 *      summary: Eliminar persona
 *      tags: [Persona]
*/
router.put('/persona/delete/:cedula_per', _tasks.deletePersona);

/** 
 * @swagger
 * /equipos/delete:
 *  put:
 *      summary: Eliminar equipos
 *      tags: [Equipos]
*/
router.put('/equipos/delete/:id_equ', _tasks.deleteEquipo);

/** 
 * @swagger
 * /solicitudes/delete:
 *  put:
 *      summary: Eliminar solicitudes
 *      tags: [Solicitudes]
*/
router.put('/solicitudes/delete/:id_sol', _tasks.deleteSolicitudes);

/** 
 * @swagger
 * /custodia/delete:
 *  put:
 *      summary: Eliminar custodia
 *      tags: [Custodia]
*/
router.put('/custodia/delete/:id_cus', _tasks.deleteCustodia);

/** 
 * @swagger
 * /devoluciones/delete:
 *  put:
 *      summary: Eliminar devoluciones
 *      tags: [Devoluciones]
*/
router.put('/devoluciones/delete/:id_dev', _tasks.deleteDevoluciones);

/** 
 * @swagger
 * /persona/activate:
 *  put:
 *      summary: Activar persona
 *      tags: [Persona]
*/
router.put('/persona/activate/:cedula_per', _tasks.activatePersona);

/** 
 * @swagger
 * /equipos/activate:
 *  put:
 *      summary: Activar equipos
 *      tags: [Equipos]
*/
router.put('/equipos/activate/:id_equ', _tasks.activateEquipo);

/** 
 * @swagger
 * /solicitudes/activate:
 *  put:
 *      summary: Activar solicitudes
 *      tags: [Solicitudes]
*/
router.put('/solicitudes/activate/:id_sol', _tasks.activateSolicitudes);

/** 
 * @swagger
 * /custodia/activate:
 *  put:
 *      summary: Activar custodia
 *      tags: [Custodia]
*/
router.put('/custodia/activate/:id_cus', _tasks.activateCustodia);

/** 
 * @swagger
 * /devoluciones/activate:
 *  put:
 *      summary: Activar devoluciones
 *      tags: [Devoluciones]
*/
router.put('/devoluciones/activate/:id_dev', _tasks.activateDevoluciones);

/**
 * @swagger
 * /login:
 *  post:
 *      summary: Inicio de sesión
 *      tags: [Autenticación]
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                cedula:
 *                  type: string
 *                contrasenia:
 *                  type: string
 *              required:
 *                - cedula
 *                - contrasenia
 *      responses:
 *        200:
 *          description: Inicio de sesión exitoso
 *        401:
 *          description: Credenciales inválidas
 */
router.post('/login', _tasks.login);

/**
 * @swagger
 * /persona:
 *  get:
 *      summary: Obtiene solicitudes x cedula
 *      tags: [Solicitudes]
 */
router.get('/solicitudes/buscar/:cedula_per', _tasks.getSolicitudesByCedula);

/**
 * @swagger
 * /persona:
 *  get:
 *      summary: Obtiene custodia x cedula
 *      tags: [Custodia]
 */
router.get('/custodia/buscar/:cedula_per', _tasks.getCustodiaByCedula);

/**
 * @swagger
 * /persona:
 *  get:
 *      summary: Obtiene devoluciones x cedula
 *      tags: [Devoluciones]
 */
router.get('/devoluciones/buscar/:cedula_per', _tasks.getDevolucionesByCedula);
var _default = router;
exports["default"] = _default;