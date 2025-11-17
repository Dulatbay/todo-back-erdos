import Router from 'express';
import taskController from '../controllers/TaskController.js';

const router = new Router();

router.get('/', taskController.getAllTask);
router.post('/', taskController.createTask);
router.delete('/:id', taskController.deleteTask);
router.put('/:id', taskController.completeTask)

export default router;