import Task from '../models/Task.js';

class TaskService {
    async createTask(req) {
        const { name, priority } = req.body;
        Task.create(name, priority);
    }

    async showTask() {
        let listOfTasks = await Task.find();
        return (listOfTasks);
    }

    async deleteTask(req) {
        const {id} = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);

        return deletedTask;
    }

    async completeTask(req) {
        const {id} = req.params;
        let completedTask = await Task.findById(id)

        completedTask.status = true;
        await completedTask.save();

        return (completedTask);
    }
}

export default new TaskService();