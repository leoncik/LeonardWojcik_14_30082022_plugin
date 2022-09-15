// React
import React, { useEffect, useRef, useState } from 'react';

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
    width?: number | boolean;
}

const SelectMenu = ({
    label,
    id,
    options,
    inputRef,
    width,
}: selectMenuProps) => {
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

    // Close select menu if clicked outside and if the menu is opened.
    useEffect(() => {
        const closeSelectMenu = (e: any) => {
            if (
                e.path[0] !== customButtonRef.current &&
                customButtonRef.current.classList.contains('menu-expanded')
            ) {
                customButtonRef.current.className =
                    'custom-button menu-unexpanded';
                customMenuRef.current.className = 'menu menu-close';
            }
        };

        document.body.addEventListener('click', closeSelectMenu);
        return () =>
            document.body.removeEventListener('click', closeSelectMenu);
    }, []);

    return (
        <div
            className="select-menu"
            style={{ width: `${width ? width : 210}px` }}
        >
            <CustomButton
                options={options}
                label={label ? label : firstOption}
                customButtonRef={customButtonRef}
                customMenuRef={customMenuRef}
                selectedOptionRef={selectedOptionRef}
                width={width}
            />

            <CustomMenu
                options={options}
                handleSelectOption={handleSelectOption}
                customMenuRef={customMenuRef}
                width={width}
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
