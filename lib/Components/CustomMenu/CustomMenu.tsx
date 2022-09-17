import React from 'react';
// import './SelectMenu.css';

export interface selectMenuProps {
    options: Array<string>;
    customMenuRef: any;
    handleSelectOption: any;
    width?: number | boolean;
    customButtonRef: any;
}

const CustomMenu = ({
    options,
    customMenuRef,
    handleSelectOption,
    width,
    customButtonRef,
}: selectMenuProps) => {
    const closeMenu = () => {
        if (customButtonRef.current.classList.contains('menu-expanded')) {
            customButtonRef.current.className = 'custom-button menu-unexpanded';
            customMenuRef.current.className = 'menu menu-close';
            customButtonRef.current.focus();
        }
    };

    const handleMenuNavigation = (e: any) => {
        switch (e.code) {
            case 'Escape':
            case 'Tab':
                closeMenu();
                // Prevents focus to leave custom button
                e.preventDefault();
                break;

            case 'Enter':
            case 'Space':
                handleSelectOption(e);
                break;

            case 'ArrowUp':
            case 'ArrowLeft':
                // Set focus to previous sibling if It exists
                e.target.previousElementSibling &&
                    e.target.previousElementSibling.focus();
                break;

            case 'ArrowDown':
            case 'ArrowRight':
                // Set focus to next sibling if It exists
                e.target.nextElementSibling &&
                    e.target.nextElementSibling.focus();
                break;

            default:
                break;
        }
    };

    return (
        <div
            className="menu-wrapper"
            style={{ width: `${width ? width : 210}px` }}
        >
            <ul
                ref={customMenuRef}
                className="menu"
                style={{ width: `${width ? width : 210}px` }}
            >
                {options.map((option: string, index: number) => (
                    <li
                        tabIndex={0}
                        onKeyDown={(e: any) => {
                            handleMenuNavigation(e);
                        }}
                        onClick={handleSelectOption}
                        className="menu-item"
                        key={index}
                        style={{ width: `${width ? width : 210}px` }}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomMenu;
