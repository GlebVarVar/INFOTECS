import { FC } from 'react';
import { Divider } from 'antd';
import TodoItem from '../ToDoItem';
import NotFound from './NotFound';
import { Task } from '../../App';

import style from './ToDoList.module.css';


interface ToDoListProps {
  taskList: Task[],
  onDelete: (id: number) => void,
  onCompleteTask: (id: number, status: string) => void,
  setCurrentToDo: (id: number) => void,
}

// компонент для вывода списка задач
const TodoList: FC<ToDoListProps> = ({ taskList, onDelete, onCompleteTask, setCurrentToDo }) => {
  return (
    <>
      {/* если массив приходит пустой */}
      {taskList.length === 0 ? (
        <NotFound />
        
      ) 
      : (
        <div>
          <>
            {taskList
              .filter((task) => task.status !== 'Done')
              .map((task, i) => {
                return <TodoItem key={task.id} task={task} onDelete={onDelete} onCompleteTask={onCompleteTask} setCurrentToDo={setCurrentToDo}/>;
              })}
          </>
          <Divider className={style.divider} />
          <>
            {taskList
              .filter((task) => task.status === 'Done')
              .map((task, i) => {
                return <TodoItem key={task.id} task={task} onDelete={onDelete} onCompleteTask={onCompleteTask} setCurrentToDo={setCurrentToDo}/>;
              })}
          </>
        </div>
      )}
    </>
  );
};

export default TodoList;
