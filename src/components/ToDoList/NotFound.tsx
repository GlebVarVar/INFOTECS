import { FC } from 'react';

import style from './ToDoList.module.css';

// если задачи не нашлись
const NotFound: FC = () => {
  return (
    <div className={style.notFound}>
      <h1 style={{ color: 'white', textAlign: 'center' }}>NOT FOUND 404</h1>
    </div>
  );
};

export default NotFound;
