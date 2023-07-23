import React from "react";
import { Modal, Input, Button, Text, css } from "@nextui-org/react";
import ActivityDropDown from "../ActivityDropDown";
import styles from '/Users/learnacademy/Desktop/capstone/front-end/src/styles/AddActivityModal.css';



const AddActivityModal = () => {
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <div>

      <Button className="button" auto color="#FFCD4E"  shadow onPress={handler}>
        <p className="plus">+</p>
      </Button>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
        className="open-modal"
        
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            CREATE AN ACTIVITY
          </Text>
        </Modal.Header>
        <Modal.Body>
          <ActivityDropDown  className="modal-dropdown"/>

          <Input
            className="input-field"
            clearable
            bordered
            fullWidth
            color="red"
            size="lg"
            placeholder="EVENT"
            contentLeft={<Text fill="red" />}
   
          />
          <Input
            className="input-field"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="TIME"
            contentLeft={<Text fill="red" />}
          />
          <Input
            className="input-field"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="LOCATION"
            contentLeft={<Text fill="currentColor" />}
          />
          <Input
            className="input-field"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="INFO"
            contentLeft={<Text fill="currentColor" />}
          />
          <Input
            className="input-field"
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="DURATION"
            contentLeft={<Text fill="currentColor" />}
          />
        </Modal.Body>
        <Modal.Footer justify="space-around">
          <Button className="modal-buttons" auto flat onPress={closeHandler}>
            CLOSE
          </Button>
          <Button className="modal-buttons" auto flat onPress={closeHandler}>
            CREATE ACTIVITY
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddActivityModal