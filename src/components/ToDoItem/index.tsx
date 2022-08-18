import * as React from 'react';
import { Checkbox, Tag, Typography} from 'antd';

import CloseIcon from '../../resources/icons/CloseIcon';
import style from './ToDoItem.module.css';

import DeleteTaskModal from '../DeleteTaskModal';
// Импортируем интерфэйс задания(toDoItem)
import { Task } from '../../App';

interface ToDoItemProps {
  task: Task,
  onDelete: (id: number) => void,
  onCompleteTask: (id: number, status: string) => void,
  setCurrentToDo: (id: number) => void,
}

// компонент для отображения одной задачи
const TodoItem: React.FC<ToDoItemProps> = ({ task, onDelete,  onCompleteTask, setCurrentToDo}) => {
  const [modalShow, setModalShow] = React.useState(false);

  const { id, taskName, status }: Task = task;

  let priorityColor: string;
  let borderStyle = '4px solid ';
  let opacity = "100%";

  if (status === 'In process') {
    priorityColor = '#035ed8';
  } else if (status === 'Done') {
    priorityColor = '#22bb33';
    opacity = '50%';
  } else {
    priorityColor = '#1b2024';
  }

  return (
    <>
      <DeleteTaskModal
      id={id}
        show={modalShow}
        onHide={() => setModalShow(false)}
        taskName={taskName}
        onDelete={onDelete}
      />
      <div
        className={style.todoContainer}
        style={{ border: borderStyle + priorityColor, opacity: opacity }}
        onClick={() => setCurrentToDo(id)}
        >
        <div className={style.titleRow}>
          <CloseIcon className={style.removeBtn} onClick={() => setModalShow(true)} />
          <Typography.Text className={style.titleText}>{taskName}</Typography.Text>
          <div className={style.checkbox}>
            <Checkbox
              checked={status === 'Done'}
              disabled={status === 'Done'}
              onClick={() => onCompleteTask(id, 'Done')}
            />
          </div>
        </div>

        <div className={style.priorityRow}>
          <Tag className={style.status} color={priorityColor} onClick={() => {
            if (status === 'In process') {
              onCompleteTask(id, 'Done');
            } else if(status === 'Ready'){
              onCompleteTask(id, 'In process');
            }
          } }>
            {status}
          </Tag>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
