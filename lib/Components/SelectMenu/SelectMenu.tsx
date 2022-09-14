import React, { useRef, useState } from 'react';
import './SelectMenu.css';

import '../CustomButton/CustomButton';
import CustomButton from '../CustomButton/CustomButton';

export interface selectMenuProps {
    options: Array<string>;
    label?: string;
    id?: string;
    inputRef?: any;
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
            <CustomButton
                options={options}
                label={label ? label : firstOption}
                customButtonRef={customButtonRef}
                customMenuRef={customMenuRef}
                selectedOptionRef={selectedOptionRef}
            />

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
