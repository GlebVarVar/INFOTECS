import { FC } from 'react';
import Split from 'react-split';
import { useState } from 'react';
import { ToDoDescription, AddToDo, TodoList, SearchPanel, ResponsiveAppBar } from './components';
import './App.scss';



interface Task {
  id: number;
  taskName: string;
  taskDescription: string;
  categories: string[];
  status: string;
}

const App: FC = () => {
  const [todoList, setTodoList] = useState<Task[]>([
    {
      id: 1,
      taskName: 'Task 1hfdhfhsdkgfjksjkgjkdfjgghrtdhrehytdye',
      taskDescription: 'Description 1',
      categories: [],
      status: 'In process',
    },
    {
      id: 2,
      taskName: 'Task 2',
      taskDescription: 'Description 2',
      categories: ['lego'],
      status: 'Ready',
    },
    {
      id: 3,
      taskName: 'Task 3',
      taskDescription: 'Description 3',
      categories: ['games'],
      status: 'Done',
    },
    {
      id: 4,
      taskName: 'Task 4',
      taskDescription: 'Description 4',
      categories: ['lego', 'games'],
      status: 'Ready',
    },
  ]);

  return (
    <>
      <ResponsiveAppBar />
      <div className="App">
        <Split className="split" sizes={[25, 75]} minSize={[400, 400]}>
          <div style={{ padding: '1.5vw' }}>
            <SearchPanel />
            <TodoList taskList={todoList} />
          </div>
          <div style={{ padding: '1.5vw' }}>
            <AddToDo />
            <ToDoDescription/>
          </div>
        </Split>
      </div>
    </>
  );
};

export { type Task };

export default App;
