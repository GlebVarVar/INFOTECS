import * as React from 'react';
import { Checkbox, Tag, Typography} from 'antd';

import CloseIcon from '../../resources/icons/CloseIcon';
import style from './ToDoItem.module.css';

import MyVerticallyCenteredModal from '../DeleteTaskModal';
// Импортируем интерфэйс задания(toDoItem)
import { Task } from '../../App';

interface ToDoItemProps {
  task: Task;
}

// компонент для отображения одной задачи
const TodoItem: React.FC<ToDoItemProps> = ({ task }) => {
  const [modalShow, setModalShow] = React.useState(false);

  const { taskName, status }: Task = task;

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
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        taskName={taskName}
      />
      <div
        className={style.todoContainer}
        style={{ border: borderStyle + priorityColor, opacity: opacity }}>
        <div className={style.titleRow}>
          <CloseIcon className={style.removeBtn} onClick={() => setModalShow(true)} />
          <Typography.Text className={style.titleText}>{taskName}</Typography.Text>
          <div className={style.checkbox}>
            <Checkbox
              checked={status === 'Done'}
              //   onClick={() => (id)}
            />
          </div>
        </div>

        <div className={style.priorityRow}>
          <Tag className={style.status} color={priorityColor}>
            {status}
          </Tag>
        </div>
      </div>
    </>
  );
};

export default TodoItem;
