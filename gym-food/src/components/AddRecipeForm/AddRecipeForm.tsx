import { Modal, Form, Button } from "react-bootstrap";
import { useState} from "react"
type AddRecipeFormProps = {
    state: {
      isOpen: boolean;
    };
    closeModal: () => void;
    handleSubmit: (name: string) => void;
  };
const AddRecipeForm = function (props: AddRecipeFormProps) {
    const [name, setName] = useState("");
    //@ts-expect-error This is necessary to suppress the TypeScript error for the missing type annotation on the handleChange function.
    const handleChange = (e) => {
        setName(e.target.value);
    };
  return (
    <Modal show={props.state.isOpen} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>Modal Form Title</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group>
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type="text"
            onChange={handleChange}
            value={name}
            placeholder="name input"
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="primary"
          type="submit"
          onClick={() => props.handleSubmit(name)}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddRecipeForm;