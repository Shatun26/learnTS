import React, { FC, useState, ChangeEvent } from 'react';
import TodoTask from './components/todoTask';
import { ITask } from './interfaces';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadLine, setDeadLine] = useState<number>(1);
  const [todoList, setTodoList] = useState<ITask[]>([]);

  
  const handlechange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === 'task') {
      setTask(e.target.value);
    } else setDeadLine(Number(e.target.value));
  };

  const addTask = (): void => {
    if (task !== '') {
      const newTask = {
        taskName: task,
        deadLine: deadLine,
      };
      setTodoList([...todoList, newTask]);
    }
    setTask('');
    setDeadLine(1);
  };
  const deleteTask = (taskNameToDelete: string): void => {
    setTodoList(todoList.filter((elem) => (elem.taskName !== taskNameToDelete)));
  };
  return (
    <div className="app">
      <div className="navContainer">
        <input
          value={task}
          type="text"
          placeholder="Task..."
          onChange={handlechange}
          name="task"
        />
        <input
          value={deadLine}
          min={0}
          type="number"
          placeholder="Deadline (in Days)..."
          onChange={handlechange}
          name="deadline"
        />
        <button onClick={addTask}>Add task</button>
      </div>
      <div className="taskList">
        {todoList.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} deleteTask={deleteTask} />;
        })}
      </div>
    </div>
  );
};
export default App;
