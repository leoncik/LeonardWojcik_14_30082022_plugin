import React from 'react';
// import './SelectMenu.css';

export interface selectMenuProps {
    options: Array<string>;
    customMenuRef: any;
    handleSelectOption: any;
}

const CustomMenu = ({
    options,
    customMenuRef,
    handleSelectOption,
}: selectMenuProps) => {
    return (
        <div className="menu-wrapper">
            <ul ref={customMenuRef} className="menu">
                {options.map((option: string, index: number) => (
                    <li
                        onClick={handleSelectOption}
                        className="menu-item"
                        key={index}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomMenu;
