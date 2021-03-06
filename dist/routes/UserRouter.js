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
        this.router.put('/:id/progress', this.userController.updateProgress);
        this.router.put('/:id', this.userController.updateUser);
        this.router.get('/', this.userController.findOne);
        this.router.get('/:id', this.userController.findUserById);
        this.router.get('/:id/friends', this.userController.getFriendsByUser);
        this.router.post('/:id/friends', this.userController.addFriend);
        this.router.delete('/:id/friends/:friendId', this.userController.deleteFriend);
        this.router.get('/:id/config', this.userController.findConfigByUser);
        this.router.put('/:id/config', this.userController.updateUserConfig);
    }
}
exports.UserRouter = UserRouter;
const authRoutes = new UserRouter();
authRoutes.init();
exports.default = authRoutes.router;

//# sourceMappingURL=UserRouter.js.map
