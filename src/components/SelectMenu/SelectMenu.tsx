import React, { useRef } from "react";
import "./SelectMenu.css";

export interface selectMenuProps {
  label: string;
}

const SelectMenu = ({label}: selectMenuProps) => {

  // Refs
  const customButtonRef: any = useRef()
  const customMenuRef: any = useRef()

  const handleTriggerMenu = () => {

    if (! customButtonRef.current.classList.contains('menu-expanded')) {
      customButtonRef.current.className = "custom-button menu-expanded"
      customMenuRef.current.className = "menu menu-open"
    } else if (customButtonRef.current.classList.contains('menu-expanded')) {
      customButtonRef.current.className = "custom-button menu-unexpanded"
      customMenuRef.current.className = "menu menu-close"
    }
  }

  return (
    <>
    <span ref={customButtonRef} onClick={handleTriggerMenu} className="custom-button menu-unexpanded ui-selectmenu-button">
      <span className="custom-button-text">{label}</span>
      <span className="custom-button-icon">▼</span>
    </span>
    <div className="menu-wrapper">
      <ul ref={customMenuRef} className="menu">
        <li className="option">Option 1</li>
        <li className="option">Option 2</li>
        <li className="option">Option 3</li>
      </ul>
    </div>
    </>)
};

export default SelectMenu;