import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FC } from 'react';

interface DeleteTaskModalProps {
  show: boolean;
  onHide: () => void;
  taskName: string;
}

const DeleteTaskModal: FC<DeleteTaskModalProps> = ({ show, onHide, taskName }) => {

  const deleteTask = () => {
    onHide();
  }


  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Deleting a task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Are you sure to delete task "{taskName}"?</h4>
        <p>
          When a task is deleted, the data is not saved. Creator (Kostrov Gleb) does not bear any
          responsibility for the lost data. Good luck and have a nice day!
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>
          Cancel
        </Button>
        <Button onClick={deleteTask} variant="danger">
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default DeleteTaskModal;
