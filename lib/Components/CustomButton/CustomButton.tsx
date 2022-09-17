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
}

const CustomButton = ({
    options,
    label,
    customButtonRef,
    customMenuRef,
    selectedOptionRef,
    width,
    selectedOption,
}: selectMenuProps) => {
    // Values
    const firstOption = options[0];

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
        // Set focus on selected option or on first option (if using a custom label or if for some reason the option could not be selected)
        selectedOption
            ? selectedOption.focus()
            : customMenuRef.current.firstChild.focus();
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
                // ...
                break;

            case 'ArrowDown':
            case 'ArrowRight':
                // Select next option if It exists
                // ...
                break;

            default:
                break;
        }
    };

    return (
        <span
            tabIndex={0}
            onKeyDown={(e) => {
                handleMenuNavigation(e);
            }}
            ref={customButtonRef}
            onClick={triggerMenu}
            className="custom-button menu-unexpanded ui-selectmenu-button"
            style={{ width: `${width ? width : 210}px` }}
        >
            <span ref={selectedOptionRef} className="custom-button-text">
                {label ? label : firstOption}
            </span>
            <span className="custom-button-icon">▼</span>
        </span>
    );
};

export default CustomButton;
