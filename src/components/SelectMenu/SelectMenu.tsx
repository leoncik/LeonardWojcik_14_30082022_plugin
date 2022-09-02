import React from "react";
import "./SelectMenu.css";

export interface selectMenuProps {
  label: string;
}

const SelectMenu = ({label}: selectMenuProps) => {
  return <button>{label}</button>;
};

export default SelectMenu;