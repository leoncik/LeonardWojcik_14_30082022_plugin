import React, { useRef } from "react";
import "./SelectMenu.css";

export interface selectMenuProps {
  label: string;
  options: Array<string>;
}

const SelectMenu = ({label, options}: selectMenuProps) => {

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

  const handleSelectOption = () => {
    console.log("option selected!");
  }

  return (
    <>
    <span ref={customButtonRef} onClick={handleTriggerMenu} className="custom-button menu-unexpanded ui-selectmenu-button">
      <span className="custom-button-text">{label}</span>
      <span className="custom-button-icon">▼</span>
    </span>
    <div className="menu-wrapper">
      <ul ref={customMenuRef} className="menu">
        {options.map((option: string, index: number) => <li onClick={handleSelectOption} className="menu-item" key={index}>{option}</li> )}
      </ul>
    </div>
    </>)
};

export default SelectMenu;