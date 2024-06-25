const express = require('express');
const router = express.Router();
const identityManagerController = require('../Controller/identityManagerController');

/**
 * @swagger
 * tags:
 *   name: IdentityManager
 *   description: API endpoints for user authentication
 */

/**
 * @swagger
 * /api/IdentityManager/Login:
 *   post:
 *     summary: Authenticate user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PhoneNumber:
 *                 type: string
 *                 example: 09121111111
 *               Password:
 *                 type: string
 *                 example: 123456789
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT token for authenticated user
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       description: User ID
 *                       example: 60f0b81a5e4ab03f18ad1b2c
 *                     name:
 *                       type: string
 *                       description: User's name
 *                       example: John Doe
 *                     email:
 *                       type: string
 *                       format: email
 *                       example: johndoe@example.com
 *       401:
 *         description: Authentication failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Authentication failed
 */

router.post('/Login', identityManagerController.login);


/**
 * @swagger
 * /api/IdentityManager/Register:
 *   post:
 *     summary: Register user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               PhoneNumber:
 *                 type: string
 *                 example: 09121111111
 *               UserName:
 *                 type: string
 *                 example: nameExample
 *               Password:
 *                 type: string
 *                 example: 123456789
 *     responses:
 *       200:
 *         description: Successful Register
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *
 *       401:
 *         description: Register failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Register failed
 */
router.post('/Register',identityManagerController.Register);

module.exports = router;
