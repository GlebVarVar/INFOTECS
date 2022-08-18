import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FC } from 'react';
import './Nav.scss';

const onNavClick = (url: string) => {
  window.open(url, '_blank');
};

const Navigation: FC = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <span className="gradient-text-logo" onClick={() => onNavClick('https://academy.infotecs.ru/')}>
          INFOTECS
        </span>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text >
            Created by: 😉<span className="gradient-text-creator" onClick={() => onNavClick('https://github.com/GlebVarVar')}>Kostrov Gleb </span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
