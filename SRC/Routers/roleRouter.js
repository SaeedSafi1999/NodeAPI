const express = require('express');
const router = express.Router();
const RoleController = require('../Controller/RoleController');
const AuthToken = require('../Middlewares/JWTMiddleware')

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: API endpoints for managing roles
 */

/**
 * @swagger
 * /api/Role/Create:
 *   post:
 *     summary: Create a new Role
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               Name:
 *                 type: string
 *                 example: admin
 *     responses:
 *       200:
 *         description: Role created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       400:
 *         description: Bad request
 */
router.post('/Create', RoleController.CreateRole);

/**
 * @swagger
 * /api/Role/GetAll:
 *   get:
 *     summary: Retrieve all Roles
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: A list of Roles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Role'
 *       500:
 *         description: Internal server error
 */
router.get('/GetAll',AuthToken ,RoleController.GetAllRoles);

module.exports = router;
