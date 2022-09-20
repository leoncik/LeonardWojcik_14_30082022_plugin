import React, { useEffect, useState } from 'react';
// import './SelectMenu.css';

export interface selectMenuProps {
    options: Array<string>;
    customMenuRef: any;
    handleSelectOption: any;
    width?: number | boolean;
    customButtonRef: any;
    saveOption: any;
    saveOptionIndex: any;
    maxHeight: number;
    scrollable: boolean;
    offsetX: number;
    offsetY: number;
}

const CustomMenu = ({
    options,
    customMenuRef,
    handleSelectOption,
    width,
    customButtonRef,
    saveOption,
    saveOptionIndex,
    maxHeight,
    scrollable,
    offsetX,
    offsetY,
}: selectMenuProps) => {
    // Get height of the custom button to set menu position
    const [customButtonHeight, setCustomButtonHeight] = useState(0);
    useEffect(() => {
        setCustomButtonHeight(customButtonRef.current.offsetHeight);
    }, []);

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
                saveOption(e);
                saveOptionIndex(e);
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
            style={{
                width: `${width}px`,
                top: `${customButtonHeight + offsetY}px`,
                left: `${0 + offsetX}px`,
            }}
        >
            <ul
                ref={customMenuRef}
                className="menu"
                style={{
                    width: `${width}px`,
                    maxHeight: scrollable ? `${maxHeight}px` : 'auto',
                }}
            >
                {options.map((option: string, index: number) => (
                    <li
                        tabIndex={0}
                        onKeyDown={(e: any) => {
                            handleMenuNavigation(e);
                        }}
                        onClick={(e) => {
                            handleSelectOption(e);
                            saveOption(e);
                            saveOptionIndex(e);
                        }}
                        onMouseOver={(e: any) => e.target.focus()}
                        className="menu-item"
                        key={index}
                        style={{ width: `${width}px` }}
                    >
                        {option}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CustomMenu;
