"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
class UserRouter {
    constructor() {
        this.userController = new userController_1.UserController();
        this.router = express_1.Router();
        this.init();
    }
    init() {
        this.router.post('/', this.userController.addUser);
        this.router.get('/', this.userController.findOne);
        this.router.get('/:id', this.userController.findUserById);
        this.router.get('/:id/config', this.userController.findConfigByUser);
        this.router.put('/:id/config', this.userController.updateUserConfig);
        this.router.put('/progress', this.userController.updateProgress);
    }
}
exports.UserRouter = UserRouter;
const authRoutes = new UserRouter();
authRoutes.init();
exports.default = authRoutes.router;

//# sourceMappingURL=UserRouter.js.map
