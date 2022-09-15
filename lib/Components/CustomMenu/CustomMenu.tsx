import React from 'react';
// import './SelectMenu.css';

export interface selectMenuProps {
    options: Array<string>;
    customMenuRef: any;
    handleSelectOption: any;
    width?: number | boolean;
}

const CustomMenu = ({
    options,
    customMenuRef,
    handleSelectOption,
    width,
}: selectMenuProps) => {
    return (
        <div
            className="menu-wrapper"
            style={{ width: `${width ? width : 210}px` }}
        >
            <ul
                ref={customMenuRef}
                className="menu"
                style={{ width: `${width ? width : 210}px` }}
            >
                {options.map((option: string, index: number) => (
                    <li
                        onClick={handleSelectOption}
                        className="menu-item"
                        key={index}
                        style={{ width: `${width ? width : 210}px` }}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomMenu;
