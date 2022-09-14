import React, { useRef, useState } from 'react';
import './SelectMenu.css';

export interface selectMenuProps {
    label: string;
    options: Array<string>;
    id: string;
    inputRef: any;
}

const SelectMenu = ({ label, id, options, inputRef }: selectMenuProps) => {
    // Refs
    const customButtonRef: any = useRef();
    const selectedOptionRef: any = useRef();
    const customMenuRef: any = useRef();
    const hiddenSelectRef: any = useRef();
    // const hiddenOptionRef: any = useRef()

    // Values
    const firstOption = options[0];

    // Local states
    const [selectedOption, setSelectedOption] = useState(firstOption);

    const handleTriggerMenu = () => {
        triggerMenu();
    };

    const triggerMenu = () => {
        if (!customButtonRef.current.classList.contains('menu-expanded')) {
            customButtonRef.current.className = 'custom-button menu-expanded';
            customMenuRef.current.className = 'menu menu-open';
        } else if (
            customButtonRef.current.classList.contains('menu-expanded')
        ) {
            customButtonRef.current.className = 'custom-button menu-unexpanded';
            customMenuRef.current.className = 'menu menu-close';
        }
    };

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
        <div className="select-menu">
            <span
                ref={customButtonRef}
                onClick={handleTriggerMenu}
                className="custom-button menu-unexpanded ui-selectmenu-button"
            >
                <span ref={selectedOptionRef} className="custom-button-text">
                    {label ? label : firstOption}
                </span>
                <span className="custom-button-icon">▼</span>
            </span>

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

            <select
                ref={hiddenSelectRef}
                name="hidden-select"
                id={id}
                style={{ display: 'none' }}
            >
                <option ref={inputRef} value={selectedOption}>
                    {selectedOption}
                </option>
            </select>
        </div>
    );
};

export default SelectMenu;
