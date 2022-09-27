import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';

const TaskList = () => {

    const defaultTask = new Task('Example','Default description', false, LEVELS.NORMAL);

    return (
        <div>
            <div> Your task:</div>        
            <TaskComponent task={defaultTask}></TaskComponent>
        </div>
    );
};

export default TaskList;
