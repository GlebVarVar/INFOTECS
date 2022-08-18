import * as React from 'react';
import Form from 'react-bootstrap/Form';
import style from './AddToDo.module.css';
import {InputGroup} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


// компонент для поиска задач
const SearchPanel: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');

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
        <Button variant="primary" id="button-addon2" >
          Add task
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchPanel;
