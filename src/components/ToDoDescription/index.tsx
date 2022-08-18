import { FC, useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import style from './ToDoDecription.module.css';

import Button from 'react-bootstrap/Button';

import { Task } from '../../App';

interface ToDoDescription {
  task: Task;
  onChangetaskInfo: (task: Task) => void;
  onDelete: (id: number) => void;
}

// компонент для поиска задач
const ToDoDescription: FC<ToDoDescription> = ({ task, onDelete, onChangetaskInfo }) => {
  console.log(task);
  if (!task) {
    return (
      <div className={style.description}>
        <h1 style={{ color: 'white', textAlign: 'center' }}>No task selected</h1>
      </div>
    );
  }

  const { id, status, taskName, taskDescription, categories }: Task = task;

  function onDeleteTask(e: React.MouseEvent<HTMLElement>, id: number) {
    e.preventDefault();
    onDelete(id);
  }

  return (
    <>
      <div className={style.description}>
        <div className={style.todoContainerMain}>
          <h3>Task name</h3>
          <input
            type="text"
            className={style.input}
            value={taskName}
            onChange={(e) => {
              console.log(e.target);
              onChangetaskInfo({
                id: id,
                taskName: e.target.value,
                taskDescription: taskDescription,
                categories: categories,
                status: status,
              });
            }}
          />
        </div>

        <div className={style.todoContainerMain}>
          <h3>Task description</h3>
          <input
            type="textarea"
            className={style.input}
            value={taskDescription}
            onChange={(e) =>
              onChangetaskInfo({
                id: id,
                taskName: taskName,
                taskDescription: e.target.value,
                categories: categories,
                status: status,
              })
            }
          />
        </div>

        <>
          <Button
            variant="primary"
            type="submit"
            style={{ margin: '3vh 3vw' }}
            onClick={() => {
              const newTask: Task = {
                id: id,
                taskName: taskName,
                taskDescription: taskDescription,
                categories: categories,
                status: status,
              };
              onChangetaskInfo(newTask);
            }}>
            Save
          </Button>
          <Button
            style={{ margin: '3vh 3vw' }}
            variant="danger"
            type="submit"
            onClick={(e) => {
              onDeleteTask(e, id);
            }}>
            Delete
          </Button>
        </>
      </div>
    </>
  );
};

export default ToDoDescription;
