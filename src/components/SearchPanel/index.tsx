import * as React from 'react';
import Form from 'react-bootstrap/Form';
import style from './SearchPanel.module.css';



interface SearchPanelProps {
  currentSearch: string,
  setCurrentSearch: (search: string) => void,
}

// компонент для поиска задач
const SearchPanel: React.FC<SearchPanelProps> = ({currentSearch, setCurrentSearch}) => {

  return (
    <div className={style.search}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        value={currentSearch}
        onChange={(e) => {setCurrentSearch(e.target.value.toLowerCase())}}
      />
    </div>
  );
};

export default SearchPanel;
