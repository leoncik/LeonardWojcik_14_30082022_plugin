import React from "react";

export interface selectMenuProps {
  label: string;
}

const SelectMenu = ({label}: selectMenuProps) => {
  return <button>{label}</button>;
};

export default SelectMenu;