import React, { useRef, useState } from 'react';
// import './SelectMenu.css';

export interface selectMenuProps {
    options: Array<string>;
}

const CustomMenu = ({ options }: selectMenuProps) => {
    // Refs
    const customButtonRef: any = useRef();
    const selectedOptionRef: any = useRef();
    const customMenuRef: any = useRef();

    // Values
    const firstOption = options[0];

    // Local states
    const [selectedOption, setSelectedOption] = useState(firstOption);

    const handleSelectOption = (e: any) => {
        selectOption(e);
    };

    const selectOption = (e: any) => {
        selectedOptionRef.current.textContent = e.target.textContent;
        setSelectedOption(e.target.textContent);
        // Close menu if opened
        if (customButtonRef.current.classList.contains('menu-expanded')) {
            customButtonRef.current.className = 'custom-button menu-unexpanded';
            customMenuRef.current.className = 'menu menu-close';
        }
    };

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
