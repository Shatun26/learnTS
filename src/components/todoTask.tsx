import React from 'react';
import { ITask } from '../interfaces';

interface Props {
  task: ITask;
  deleteTask(taskNameToDelete: string): void;
}

const TodoTask = ({ task, deleteTask }: Props) => {
  return (
    <div className="task">
      <h1>{task.taskName}</h1>
      <h2>{task.deadLine}</h2>
      <button
        onClick={() => {
          deleteTask(task.taskName);
        }}
      >
        delete
      </button>
    </div>
  );
};

export default TodoTask;
