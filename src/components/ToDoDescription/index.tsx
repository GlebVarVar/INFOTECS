import * as React from 'react';
import Form from 'react-bootstrap/Form';
import style from './ToDoDecription.module.css';
// компонент для поиска задач
const ToDoDescription: React.FC = () => {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <div className={style.search}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        value={inputValue}
        onChange={(e) => {setInputValue(e.target.value)}}
      />
    </div>
  );
};

export default ToDoDescription;
