// React
import React, { useRef, useState } from 'react';

// CSS
import './SelectMenu.css';

// Components
import CustomButton from '../CustomButton/CustomButton';
import CustomMenu from '../CustomMenu/CustomMenu';
import HiddenSelect from '../HiddenSelect/HiddenSelect';

export interface selectMenuProps {
    options: Array<string>;
    label?: string;
    id?: string;
    inputRef?: HTMLOptionElement | undefined;
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

            <CustomMenu
                options={options}
                handleSelectOption={handleSelectOption}
                customMenuRef={customMenuRef}
            />

            <HiddenSelect
                id={id}
                selectedOption={selectedOption}
                hiddenSelectRef={hiddenSelectRef}
                inputRef={inputRef}
            />
        </div>
    );
};

export default SelectMenu;
