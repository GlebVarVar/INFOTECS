import { FC, useState } from 'react';
import Form from 'react-bootstrap/Form';
import style from './AddToDo.module.css';
import {InputGroup} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import {Task} from '../../App';

interface AddToDoProps {
  onAddTask: (task: Task) => void;
  currentId: number;
}


// компонент для добавления новой задачи
const AddToDo: FC<AddToDoProps> = ({onAddTask, currentId}) => {
  const [inputValue, setInputValue] = useState<string>('');


  function onAddTaskWrapper(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    onAddTask({
      id: currentId + 1,
      taskName: inputValue,
      taskDescription: '',
      categories: [],
      status: 'Ready',
    });
    setInputValue('');
  }

  return (
    <div className={style.addToDo}>
      <InputGroup>
        <Form.Control
          placeholder="Task name"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={inputValue}  
            onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="primary" id="button-addon2" onClick={(e) => onAddTaskWrapper(e)}>
          Add task
        </Button>
      </InputGroup>
    </div>
  );
};

export default AddToDo;
