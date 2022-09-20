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
    className?: string;
    disabled?: boolean;
    maxHeight?: any;
    scrollable?: boolean;
}

const SelectMenu = ({
    label,
    id,
    options,
    inputRef,
    width = 210,
    className,
    disabled = false,
    maxHeight = 200,
    scrollable = true,
}: selectMenuProps) => {
    // Refs
    const customButtonRef: any = useRef();
    const selectedOptionRef: any = useRef();
    const customMenuRef: any = useRef();
    const hiddenSelectRef: any = useRef();

    // Values
    const firstOption = options?.[0] || '';

    // Local states
    const [hiddenOption, setHiddenOption] = useState(firstOption);
    const [selectedOption, setSelectedOption] = useState();
    const [optionIndex, setOptionIndex] = useState(0);

    const saveOption = (e: any) => {
        setSelectedOption(e.target);
    };

    const saveOptionIndex = (e: any) => {
        setOptionIndex(
            Array.from(e.target.parentNode.children).indexOf(e.target)
        );
    };
    const incrementOptionIndex = () => {
        setOptionIndex(optionIndex + 1);
    };
    const decrementOptionIndex = () => {
        setOptionIndex(optionIndex - 1);
    };
    // Todo : refactor update functions inside a single function.
    const updateNextOptionWithIndex = (e: any) => {
        setSelectedOption(
            e.target.nextElementSibling.firstChild.children[optionIndex + 1]
        );
    };
    const updatePreviousOptionWithIndex = (e: any) => {
        setSelectedOption(
            e.target.nextElementSibling.firstChild.children[optionIndex - 1]
        );
    };

    const handleSelectOption = (e: any) => {
        selectOption(e);
    };

    const selectOption = (e: any) => {
        selectedOptionRef.current.textContent = e.target.textContent;
        setHiddenOption(e.target.textContent);
        // Close menu if opened
        if (customButtonRef.current.classList.contains('menu-expanded')) {
            customButtonRef.current.classList.remove('menu-expanded');
            customButtonRef.current.classList.add('menu-unexpanded');
            customMenuRef.current.className = 'menu menu-close';
        }
        customButtonRef.current.focus();
    };

    // Close select menu if clicked outside and if the menu is opened.
    useEffect(() => {
        const closeSelectMenu = (e: any) => {
            if (
                e.path[0] !== customButtonRef.current &&
                customButtonRef.current.classList.contains('menu-expanded')
            ) {
                customButtonRef.current.classList.remove('menu-expanded');
                customButtonRef.current.classList.add('menu-unexpanded');
                customMenuRef.current.className = 'menu menu-close';
            }
        };

        document.body.addEventListener('click', closeSelectMenu);
        return () =>
            document.body.removeEventListener('click', closeSelectMenu);
    }, []);

    return (
        <div
            className={className ? 'select-menu ' + className : 'select-menu'}
            style={{ width: `${width}px` }}
        >
            <CustomButton
                options={options}
                label={label ? label : firstOption}
                customButtonRef={customButtonRef}
                customMenuRef={customMenuRef}
                selectedOptionRef={selectedOptionRef}
                width={width}
                disabled={disabled}
                selectedOption={selectedOption}
                optionIndex={optionIndex}
                incrementOptionIndex={incrementOptionIndex}
                updateNextOptionWithIndex={updateNextOptionWithIndex}
                decrementOptionIndex={decrementOptionIndex}
                updatePreviousOptionWithIndex={updatePreviousOptionWithIndex}
            />

            <CustomMenu
                options={options}
                handleSelectOption={handleSelectOption}
                customMenuRef={customMenuRef}
                width={width}
                customButtonRef={customButtonRef}
                saveOption={saveOption}
                saveOptionIndex={saveOptionIndex}
                maxHeight={maxHeight}
                scrollable={scrollable}
            />

            <HiddenSelect
                id={id}
                hiddenOption={hiddenOption}
                hiddenSelectRef={hiddenSelectRef}
                inputRef={inputRef}
            />
        </div>
    );
};

export default SelectMenu;
