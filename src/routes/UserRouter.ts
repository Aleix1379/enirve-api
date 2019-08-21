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
        this.router.get('/', this.userController.findOne);
        this.router.put('/progress', this.userController.updateProgress)
    }
}

const authRoutes = new UserRouter();
authRoutes.init();

export default authRoutes.router;
