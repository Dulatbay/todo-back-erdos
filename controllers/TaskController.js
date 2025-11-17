import TaskService from '../services/TaskService.js';

class TaskController {
    async getAllTask(req, res) {
        try{
            const tasks = await TaskService.showTask()
            return res.json(tasks)
        }catch(err){
            res.status(500).json(err.message)
        }
    }

    async createTask(req, res) {
        try{
            await TaskService.createTask(req.body);
            const tasks = await TaskService.showTask()
            return res.json(tasks)
        }
        catch(err){
            res.status(500).json(err.message);
        }
    }

    async deleteTask(req, res) {
        try{
            const deletedTask = await TaskService.deleteTask(req)
            if(deletedTask == null){
                return res.status(404).json({message: 'Task not found'});
            }

            const tasks = await TaskService.showTask()
            return res.json(tasks)
        }catch(err){
            res.status(500).json(err.message);
        }
    }

    async completeTask(req, res) {
        try{
            const completedTask = await TaskService.completeTask(req)
            if(completedTask == null){
                return res.status(404).json({message: 'Task not found'});
            }

            const tasks = await TaskService.showTask()
            return res.json(tasks)
        }catch(err){
            res.status(500).json(err.message);
        }
    }
}

export default new TaskController();