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
    options?: Array<string>;
    optionsValues?: Array<string> | undefined;
    label?: string;
    id?: string;
    inputRef?: React.RefObject<HTMLOptionElement> | undefined;
    width?: number;
    className?: string;
    disabled?: boolean;
    maxHeight?: number;
    scrollable?: boolean;
    offsetX?: number;
    offsetY?: number;
    buttonIconPath?: string;
    showButtonIcon?: boolean;
    rotateButtonIcon?: boolean;
    optionsFontSize?: string | undefined;
    mainColor?: string;
    optionTextColor?: string;
    optionTextFocus?: string;
    buttonTextColor?: string;
    buttonTextHoverColor?: string;
    buttonBackgroundHoverColor?: string;
    buttonTextActiveColor?: string;
}

const SelectMenu = ({
    label,
    id,
    options = [],
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
    optionsFontSize,
    mainColor = '#007fff',
    optionTextColor = 'black',
    optionTextFocus = 'white',
    buttonBackgroundHoverColor = '#ededed',
    buttonTextColor = '#454545',
    buttonTextHoverColor = '#2b2b2b',
    buttonTextActiveColor = 'white',
}: selectMenuProps) => {
    // Refs
    const customButtonRef = useRef<HTMLSpanElement>(null);
    const selectedOptionRef = useRef<HTMLSpanElement>(null);
    const customMenuRef = useRef<HTMLUListElement>(null);
    const hiddenSelectRef = useRef<HTMLSelectElement>(null);

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
    const [isIconRotated, setIsIconRotated] = useState(false);

    // Functions

    // Open / Close functions
    const closeSelectMenu = () => {
        customButtonRef?.current?.classList.remove('menu-expanded');
        customButtonRef?.current?.classList.add('menu-unexpanded');
        // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
        customMenuRef.current!.className = 'menu menu-close';
        rotateButtonIcon && setIsIconRotated(false);
        customButtonRef?.current?.setAttribute('aria-expanded', 'false');
    };

    const openSelectMenu = () => {
        customButtonRef?.current?.classList.add('menu-expanded');
        // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
        customMenuRef.current!.className = 'menu menu-open';
        rotateButtonIcon && setIsIconRotated(true);
        customButtonRef?.current?.setAttribute('aria-expanded', 'true');
    };

    // Close select menu if clicked outside and if the menu is opened.
    useEffect(() => {
        const closeSelectMenuOnOutsideClick = (e: any) => {
            // The "path" property is not supported on every brothers. Using "composedPath" as fallback.
            if (e.path) {
                if (
                    e.path[0] !== customButtonRef.current &&
                    customButtonRef?.current?.classList.contains(
                        'menu-expanded'
                    )
                ) {
                    closeSelectMenu();
                }
            } else {
                if (
                    e.composedPath()[0] !== customButtonRef.current &&
                    customButtonRef?.current?.classList.contains(
                        'menu-expanded'
                    )
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
    /**
     * Saves the selected option (as HTMLLIElement)
     * @param {HTMLLIElement} e Keyboard or mouse event.
     */
    const saveOption = (e: any) => {
        setSelectedOption(e.target);
    };

    /**
     * Update the text content of the button and the value of the hidden select
     * when selecting an option.
     * @param e
     */
    const handleSelectOption = (e: any) => {
        // eslint-disable-next-line  @typescript-eslint/no-non-null-assertion
        selectedOptionRef.current!.textContent = e.target.textContent;
        setHiddenOptionText(e.target.textContent);
        if (optionsValues) {
            setHiddenOptionValue(e.target.getAttribute('data-option-value'));
        }
        // Close menu if opened
        if (customButtonRef?.current?.classList.contains('menu-expanded')) {
            closeSelectMenu();
        }
        customButtonRef?.current?.focus();
    };

    // Functions to handle keyboard navigation
    /**
     * Set option index to selected option (for keyboard navigation)
     * @param {HTMLLIElement} e
     */
    const saveOptionIndex = (e: any) => {
        setOptionIndex(
            Array.from(e.target.parentNode.children).indexOf(e.target)
        );
    };
    /**
     * Increment option index (for keyboard navigation)
     */
    const incrementOptionIndex = () => {
        setOptionIndex(optionIndex + 1);
    };
    /**
     * Decrement option index (for keyboard navigation)
     */
    const decrementOptionIndex = () => {
        setOptionIndex(optionIndex - 1);
    };
    /**
     * Set option index to last option (for keyboard navigation)
     */
    const setToLastOptionIndex = () => {
        setOptionIndex(options.length - 1);
    };
    /**
     * Set option index to first option (for keyboard navigation)
     */
    const setToLFirstOptionIndex = () => {
        setOptionIndex(0);
    };

    /**
     * Saves the next option (as HTMLLIElement)
     * @param {HTMLLIElement} e
     */
    const updateNextOptionWithIndex = (e: any) => {
        setSelectedOption(
            e.target.nextElementSibling.firstChild.children[optionIndex + 1]
        );
    };
    /**
     * Saves the previous option (as HTMLLIElement)
     * @param {HTMLLIElement} e
     */
    const updatePreviousOptionWithIndex = (e: any) => {
        setSelectedOption(
            e.target.nextElementSibling.firstChild.children[optionIndex - 1]
        );
    };
    /**
     * Saves the last option (as HTMLLIElement)
     * @param {HTMLLIElement} e
     */
    const updateLastOptionWithIndex = (e: any) => {
        setSelectedOption(e.target.nextElementSibling.firstChild.lastChild);
    };
    /**
     * Saves the first option (as HTMLLIElement)
     * @param {HTMLLIElement} e
     */
    const updateFirstOptionWithIndex = (e: any) => {
        setSelectedOption(e.target.nextElementSibling.firstChild.firstChild);
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
                updateLastOptionWithIndex={updateLastOptionWithIndex}
                setToLastOptionIndex={setToLastOptionIndex}
                setToLFirstOptionIndex={setToLFirstOptionIndex}
                updateFirstOptionWithIndex={updateFirstOptionWithIndex}
                decrementOptionIndex={decrementOptionIndex}
                updatePreviousOptionWithIndex={updatePreviousOptionWithIndex}
                showButtonIcon={showButtonIcon}
                optionsValues={optionsValues}
                isIconRotated={isIconRotated}
                closeSelectMenu={closeSelectMenu}
                openSelectMenu={openSelectMenu}
                mainColor={mainColor}
                buttonTextColor={buttonTextColor}
                buttonTextActiveColor={buttonTextActiveColor}
                buttonTextHoverColor={buttonTextHoverColor}
                buttonBackgroundHoverColor={buttonBackgroundHoverColor}
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
                closeSelectMenu={closeSelectMenu}
                optionsFontSize={optionsFontSize}
                mainColor={mainColor}
                optionTextColor={optionTextColor}
                optionTextFocus={optionTextFocus}
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
