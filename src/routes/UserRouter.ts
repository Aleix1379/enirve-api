import {Router} from 'express';
import {UserController} from '../controllers/userController';


export class UserRouter {
    userController: UserController = new UserController();
    router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    init(): void {
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

const authRoutes = new UserRouter();
authRoutes.init();

export default authRoutes.router;
