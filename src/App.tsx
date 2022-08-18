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
  const [currentId, setCurrentId] = useState(4);
  const [currentToDo, setCurrentToDo] = useState<number>(1);
  const [currentSearch, setCurrentSearch] = useState<string>('');

  const [taskList, setTaskList] = useState<Task[]>([
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

  function onDeleteTask(id: number, taskList: Task[]) {
    if (taskList.length > 1) {
      const newTaskList = taskList.filter((todo) => todo.id !== id);
      setCurrentToDo(newTaskList[0].id);
      setTaskList(newTaskList);
    } else {
      setCurrentToDo(0);
      setTaskList([]);
    }
  }

  function onAddTask(task: Task, taskList: Task[]) {
    const newTaskList = [...taskList, task];

    setCurrentId(currentId + 1);
    setTaskList(newTaskList);
  }

  function onCompleteTask(id: number, status: string, taskList: Task[]) {
    const newTaskList = taskList.map((todo) => {
      if (todo.id === id) {
        todo.status = status;
      }
      return todo;
    });

    setTaskList(newTaskList);
  }

  function onChangetaskInfo(task: Task, taskList: Task[]) {
    let newTaskList:Task[] = [];
    taskList.forEach((todo) => {
      if (todo.id !== task.id) {
        newTaskList.push(todo);
      } else {
        newTaskList.push(task);

      }
    });

    setTaskList(newTaskList);
  }

  return (
    <>
    {console.log(currentToDo)}
      <ResponsiveAppBar />
      <div className="App">
        <Split className="split" sizes={[25, 75]} minSize={[400, 400]}>
          <div style={{ padding: '1.5vw' }}>
            <SearchPanel currentSearch={currentSearch} setCurrentSearch={setCurrentSearch} />
            <TodoList
              taskList={taskList.filter((task) => {
                return task.taskName.toLocaleLowerCase().includes(currentSearch);
              })}
              onDelete={(index) => onDeleteTask(index, taskList)}
              onCompleteTask={(index, status) => onCompleteTask(index, status, taskList)}
              setCurrentToDo={setCurrentToDo}
            />
          </div>
          <div style={{ padding: '1.5vw' }}>
            <AddToDo onAddTask={(task) => onAddTask(task, taskList)} currentId={currentId} />
            <ToDoDescription
              task={taskList.filter((task) => task.id == currentToDo)[0]}
              onDelete={(index) => onDeleteTask(index, taskList)}
              onChangetaskInfo={(task) => onChangetaskInfo(task, taskList)}
            />
          </div>
        </Split>
      </div>
    </>
  );
};

export { type Task };

export default App;
