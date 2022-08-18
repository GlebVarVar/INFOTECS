import * as React from 'react';
import { Divider } from 'antd';
import style from './ToDoList.module.css';
import TodoItem from '../ToDoItem';
import { Task } from '../../App';
// import { Category, TodoCompleted, TodoContent, TodoId, TodoPriorityEnum } from "../../api";
// import { ExclamationCircleOutlined } from '@ant-design/icons';

interface ToDoListProps {
  taskList: Task[];
}

const TodoList: React.FC<ToDoListProps> = ({ taskList }) => {
  return (
    <div>
      <>
        {taskList
          .filter((task) => task.status !== 'Done')
          .map((task, i) => {
            return <TodoItem key={task.id} task={task} />;
          })}
      </>

      <Divider className={style.divider} />
      <>
        {taskList
          .filter((task) => task.status === 'Done')
          .map((task, i) => {
            return <TodoItem key={task.id} task={task} />;
          })}
      </>
    </div>
  );
};

export default TodoList;
