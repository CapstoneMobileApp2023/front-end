import { Dropdown } from "@nextui-org/react";
import styles from '../styles/ActivityDropDown.css'

const ActivityDropDown = () => {
  return (
    <>
    <Dropdown>
      <Dropdown.Button className="modal-dropdown" color="warning" flat>CATEGORY</Dropdown.Button>
      <Dropdown.Menu className="dropdown-background" aria-label="Static Actions">
        <Dropdown.Item className="text-gold" key="weight lifting">WEIGHT LIFTING</Dropdown.Item>
        <Dropdown.Item  className="text-gold" key="running">RUNNING</Dropdown.Item>
        <Dropdown.Item  className="text-gold" key="basketball">BASKETBALL</Dropdown.Item>
        <Dropdown.Item  className="text-gold" key="yoga">YOGA</Dropdown.Item>
        <Dropdown.Item  className="text-gold" key="soccer">SOCCER</Dropdown.Item>
        <Dropdown.Item  className="text-gold" key="hiking">HIKING</Dropdown.Item>
        <Dropdown.Item  className="text-gold" key="edit">CYCLING</Dropdown.Item>
        <Dropdown.Item  className="text-gold" key="dancing">DANCING</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
}
export default ActivityDropDown