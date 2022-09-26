// React
import React, { useEffect, useRef, useState } from 'react';

// CSS
import './SelectMenu.css';

// Components
import CustomButton from '../CustomButton/CustomButton';
import CustomMenu from '../CustomMenu/CustomMenu';
import HiddenSelect from '../HiddenSelect/HiddenSelect';

// Assets
import defaultButtonIcon from '../../assets/chevron-down.svg';

export interface selectMenuProps {
    options: Array<string>;
    optionsValues?: Array<string> | undefined;
    label?: string;
    id?: string;
    inputRef?: HTMLOptionElement | undefined;
    width?: number | boolean;
    className?: string;
    disabled?: boolean;
    maxHeight?: any;
    scrollable?: boolean;
    offsetX?: number;
    offsetY?: number;
    buttonIconPath?: string;
    showButtonIcon?: boolean;
    rotateButtonIcon?: boolean;
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
    offsetX = 0,
    offsetY = 0,
    buttonIconPath = defaultButtonIcon,
    showButtonIcon = true,
    optionsValues,
    rotateButtonIcon = true,
}: selectMenuProps) => {
    // Refs
    const customButtonRef: any = useRef();
    const selectedOptionRef: any = useRef();
    const customMenuRef: any = useRef();
    const hiddenSelectRef: any = useRef();

    // Values
    const firstOption = options?.[0] || '';
    const firstOptionValue = optionsValues
        ? optionsValues?.[0]
        : options?.[0] || '';

    // Local states
    const [hiddenOptionText, setHiddenOptionText] = useState(firstOption);
    const [hiddenOptionValue, setHiddenOptionValue] =
        useState(firstOptionValue);
    const [selectedOption, setSelectedOption] = useState();
    const [optionIndex, setOptionIndex] = useState(0);

    // Functions

    // Open / Close functions
    const closeSelectMenu = () => {
        customButtonRef.current.classList.remove('menu-expanded');
        customButtonRef.current.classList.add('menu-unexpanded');
        customMenuRef.current.className = 'menu menu-close';
        customButtonRef.current.setAttribute('aria-expanded', false);
    };

    const openSelectMenu = () => {
        customButtonRef.current.classList.add('menu-expanded');
        customMenuRef.current.className = 'menu menu-open';
        customButtonRef.current.setAttribute('aria-expanded', true);
    };

    // Close select menu if clicked outside and if the menu is opened.
    useEffect(() => {
        const closeSelectMenuOnOutsideClick = (e: any) => {
            // The "path" property is not supported on every brothers. Using "composedPath" as fallback.
            if (e.path) {
                if (
                    e.path[0] !== customButtonRef.current &&
                    customButtonRef.current.classList.contains('menu-expanded')
                ) {
                    closeSelectMenu();
                }
            } else {
                if (
                    e.composedPath()[0] !== customButtonRef.current &&
                    customButtonRef.current.classList.contains('menu-expanded')
                ) {
                    closeSelectMenu();
                }
            }
        };

        document.body.addEventListener('click', closeSelectMenuOnOutsideClick);
        return () =>
            document.body.removeEventListener(
                'click',
                closeSelectMenuOnOutsideClick
            );
    }, []);

    // Save option functions
    const saveOption = (e: any) => {
        setSelectedOption(e.target);
    };

    const handleSelectOption = (e: any) => {
        selectOption(e);
    };

    const selectOption = (e: any) => {
        selectedOptionRef.current.textContent = e.target.textContent;
        setHiddenOptionText(e.target.textContent);
        if (optionsValues) {
            setHiddenOptionValue(e.target.getAttribute('data-option-value'));
        }
        // Close menu if opened
        if (customButtonRef.current.classList.contains('menu-expanded')) {
            closeSelectMenu();
        }
        customButtonRef.current.focus();
    };

    // Functions to handle keyboard navigation
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

    return (
        <div
            className={className ? `select-menu ${className}` : 'select-menu'}
            style={{ width: `${width}px` }}
        >
            <CustomButton
                options={options}
                label={label ? label : firstOption}
                customButtonRef={customButtonRef}
                customMenuRef={customMenuRef}
                selectedOptionRef={selectedOptionRef}
                hiddenSelectRef={hiddenSelectRef}
                width={width}
                disabled={disabled}
                selectedOption={selectedOption}
                optionIndex={optionIndex}
                buttonIconPath={buttonIconPath}
                incrementOptionIndex={incrementOptionIndex}
                updateNextOptionWithIndex={updateNextOptionWithIndex}
                decrementOptionIndex={decrementOptionIndex}
                updatePreviousOptionWithIndex={updatePreviousOptionWithIndex}
                showButtonIcon={showButtonIcon}
                optionsValues={optionsValues}
                rotateButtonIcon={rotateButtonIcon}
                closeSelectMenu={closeSelectMenu}
                openSelectMenu={openSelectMenu}
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
                offsetX={offsetX}
                offsetY={offsetY}
                optionsValues={optionsValues}
            />

            <HiddenSelect
                id={id}
                hiddenOptionText={hiddenOptionText}
                hiddenOptionValue={hiddenOptionValue}
                hiddenSelectRef={hiddenSelectRef}
                inputRef={inputRef}
                optionsValues={optionsValues}
            />
        </div>
    );
};

export default SelectMenu;
