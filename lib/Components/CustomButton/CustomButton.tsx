import React, { useRef } from 'react';
// import './SelectMenu.css';

export interface selectMenuProps {
    options: Array<string>;
    label?: string;
    customButtonRef?: any;
    customMenuRef?: any;
    selectedOptionRef?: any;
    width?: number | boolean;
}

const CustomButton = ({
    options,
    label,
    customButtonRef,
    customMenuRef,
    selectedOptionRef,
    width,
}: selectMenuProps) => {
    // Values
    const firstOption = options[0];

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

    return (
        <span
            ref={customButtonRef}
            onClick={handleTriggerMenu}
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
