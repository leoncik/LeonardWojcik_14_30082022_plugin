import React from 'react';
// import './SelectMenu.css';

export interface selectMenuProps {
    options: Array<string>;
    label?: string;
    customButtonRef?: any;
    customMenuRef?: any;
    selectedOptionRef?: any;
    width?: number | boolean;
    selectedOption: any;
    optionIndex: number;
    incrementOptionIndex: any;
    updateNextOptionWithIndex: any;
    decrementOptionIndex: any;
    updatePreviousOptionWithIndex: any;
    disabled: boolean;
    buttonIconPath: string;
    showButtonIcon: boolean;
}

const CustomButton = ({
    options,
    label,
    customButtonRef,
    customMenuRef,
    selectedOptionRef,
    width,
    selectedOption,
    optionIndex,
    incrementOptionIndex,
    updateNextOptionWithIndex,
    decrementOptionIndex,
    updatePreviousOptionWithIndex,
    disabled,
    buttonIconPath,
    showButtonIcon,
}: selectMenuProps) => {
    // Values
    const firstOption = options?.[0] || '';
    // const iconPathTest = require("../../assets/chevron-down.svg") as string;

    const triggerMenu = () => {
        if (!customButtonRef.current.classList.contains('menu-expanded')) {
            customButtonRef.current.classList.add('menu-expanded');
            customMenuRef.current.className = 'menu menu-open';
        } else if (
            customButtonRef.current.classList.contains('menu-expanded')
        ) {
            customButtonRef.current.classList.remove('menu-expanded');
            customButtonRef.current.classList.add('menu-unexpanded');
            customMenuRef.current.className = 'menu menu-close';
        }
        // Set focus on selected option or on first option (if using a custom label or if for some reason the option could not be selected)
        selectedOption
            ? selectedOption.focus()
            : customMenuRef.current.firstChild.focus();
    };

    const selectNextOption = (e: any) => {
        // If there is another option available after the one that is currently active, select this option.
        if (e.target.nextElementSibling.firstChild.children[optionIndex + 1]) {
            selectedOptionRef.current.textContent =
                e.target.nextElementSibling.firstChild.children[
                    optionIndex + 1
                ].textContent;
            updateNextOptionWithIndex(e);
            incrementOptionIndex();
        }
    };

    const selectPreviousOption = (e: any) => {
        // If there is another option available before the one that is currently active, select this option.
        if (e.target.nextElementSibling.firstChild.children[optionIndex - 1]) {
            selectedOptionRef.current.textContent =
                e.target.nextElementSibling.firstChild.children[
                    optionIndex - 1
                ].textContent;
            updatePreviousOptionWithIndex(e);
            decrementOptionIndex();
        }
    };

    const handleMenuNavigation = (e: any) => {
        switch (e.code) {
            case 'Enter':
                triggerMenu();
                break;

            // Item selection when the menu is closed
            case 'ArrowUp':
            case 'ArrowLeft':
                // Select previous option if It exists
                selectPreviousOption(e);
                break;

            case 'ArrowDown':
            case 'ArrowRight':
                // Select next option if It exists
                selectNextOption(e);
                break;

            default:
                break;
        }
    };

    return (
        <span
            tabIndex={disabled ? -1 : 0}
            onKeyDown={(e) => {
                handleMenuNavigation(e);
            }}
            ref={customButtonRef}
            onClick={triggerMenu}
            className={
                disabled
                    ? 'button-disabled custom-button menu-unexpanded ui-selectmenu-button'
                    : 'custom-button menu-unexpanded ui-selectmenu-button'
            }
            style={{ width: `${width}px` }}
        >
            <span ref={selectedOptionRef} className="custom-button-text">
                {label ? label : firstOption}
            </span>
            <img
                src={showButtonIcon ? buttonIconPath : ''}
                className="custom-button-icon"
            />
        </span>
    );
};

export default CustomButton;
