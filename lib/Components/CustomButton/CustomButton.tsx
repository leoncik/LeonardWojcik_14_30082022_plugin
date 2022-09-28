// React Hooks
import React from 'react';

// Styled components
import styled from 'styled-components';
const Button = styled.span<{
    activeBackgroundColor: string;
    hoverBackgroundColor: string;
    textColor: string;
    textHoverColor: string;
    textActiveColor: string;
}>`
    color: ${({ textColor }) => textColor};
    &:hover {
        color: ${({ textHoverColor }) => textHoverColor};
        background: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
    }
    &:active {
        background: ${({ activeBackgroundColor }) => activeBackgroundColor};
        color: ${({ textActiveColor }) => textActiveColor};
    }
`;

export interface selectMenuProps {
    options: Array<string>;
    label?: string;
    customButtonRef?: React.RefObject<HTMLSpanElement>;
    customMenuRef: any;
    selectedOptionRef: React.RefObject<HTMLSpanElement>;
    width?: number | boolean;
    selectedOption: any;
    optionIndex: number;
    incrementOptionIndex: any;
    updateNextOptionWithIndex: any;
    updateLastOptionWithIndex: any;
    setToLastOptionIndex: any;
    setToLFirstOptionIndex: any;
    updateFirstOptionWithIndex: any;
    decrementOptionIndex: any;
    updatePreviousOptionWithIndex: any;
    disabled: boolean;
    buttonIconPath: string;
    showButtonIcon: boolean;
    hiddenSelectRef: any;
    optionsValues: Array<string> | undefined;
    openSelectMenu: any;
    closeSelectMenu: any;
    isIconRotated: boolean;
    mainColor: string;
    buttonTextColor: string;
    buttonTextHoverColor: string;
    buttonBackgroundHoverColor: string;
    buttonTextActiveColor: string;
}

const CustomButton = ({
    options,
    optionsValues,
    label,
    customButtonRef,
    customMenuRef,
    selectedOptionRef,
    width,
    selectedOption,
    optionIndex,
    incrementOptionIndex,
    updateNextOptionWithIndex,
    updateLastOptionWithIndex,
    setToLastOptionIndex,
    setToLFirstOptionIndex,
    updateFirstOptionWithIndex,
    decrementOptionIndex,
    updatePreviousOptionWithIndex,
    disabled,
    buttonIconPath,
    showButtonIcon,
    hiddenSelectRef,
    isIconRotated,
    openSelectMenu,
    closeSelectMenu,
    mainColor,
    buttonTextColor,
    buttonTextHoverColor,
    buttonBackgroundHoverColor,
    buttonTextActiveColor,
}: selectMenuProps) => {
    // Values
    const firstOption = options?.[0] || '';
    // const iconPathTest = require("../../assets/chevron-down.svg") as string;

    const triggerMenu = () => {
        if (!customButtonRef?.current?.classList.contains('menu-expanded')) {
            openSelectMenu();
        } else if (
            customButtonRef?.current?.classList.contains('menu-expanded')
        ) {
            closeSelectMenu();
        }
        // Set focus on selected option or on first option (if using a custom label or if for some reason the option could not be selected)
        selectedOption
            ? selectedOption.focus()
            : customMenuRef.current.firstChild.focus();
    };

    const selectNextOption = (e: any) => {
        // If there is another option available after the one that is currently active, select this option.
        // Note : we check "selectedOptionRef.current" for typing reasons.
        if (
            e.target.nextElementSibling.firstChild.children[optionIndex + 1] &&
            selectedOptionRef.current
        ) {
            selectedOptionRef.current.textContent =
                e.target.nextElementSibling.firstChild.children[
                    optionIndex + 1
                ].textContent;
            updateNextOptionWithIndex(e);
            incrementOptionIndex();
            // Save option in hidden select (use optionsValues if available. Else use option text content)
            hiddenSelectRef.current.firstChild.textContent =
                e.target.nextElementSibling.firstChild.children[
                    optionIndex + 1
                ].textContent;
            if (optionsValues) {
                hiddenSelectRef.current.firstChild.value =
                    e.target.nextElementSibling.firstChild.children[
                        optionIndex + 1
                    ].getAttribute('data-option-value');
            } else {
                hiddenSelectRef.current.firstChild.value =
                    e.target.nextElementSibling.firstChild.children[
                        optionIndex + 1
                    ].textContent;
            }
        }
    };

    const selectPreviousOption = (e: any) => {
        // If there is another option available before the one that is currently active, select this option.
        // Note : we check "selectedOptionRef.current" for typing reasons.
        if (
            e.target.nextElementSibling.firstChild.children[optionIndex - 1] &&
            selectedOptionRef.current
        ) {
            selectedOptionRef.current.textContent =
                e.target.nextElementSibling.firstChild.children[
                    optionIndex - 1
                ].textContent;
            updatePreviousOptionWithIndex(e);
            decrementOptionIndex();
            // Save option in hidden select (use optionsValues if available. Else use option text content)
            hiddenSelectRef.current.firstChild.textContent =
                e.target.nextElementSibling.firstChild.children[
                    optionIndex - 1
                ].textContent;
            if (optionsValues) {
                hiddenSelectRef.current.firstChild.value =
                    e.target.nextElementSibling.firstChild.children[
                        optionIndex - 1
                    ].getAttribute('data-option-value');
            } else {
                hiddenSelectRef.current.firstChild.value =
                    e.target.nextElementSibling.firstChild.children[
                        optionIndex - 1
                    ].textContent;
            }
        }
    };

    const selectLastOption = (e: any) => {
        // Select the last option.
        // Note : we check "selectedOptionRef.current" for typing reasons.
        if (selectedOptionRef.current) {
            selectedOptionRef.current.textContent =
                e.target.nextElementSibling.firstChild.lastChild.textContent;
            updateLastOptionWithIndex(e);
            setToLastOptionIndex();
            // Save option in hidden select (use optionsValues if available. Else use option text content)
            hiddenSelectRef.current.firstChild.textContent =
                e.target.nextElementSibling.firstChild.lastChild.textContent;
            if (optionsValues) {
                hiddenSelectRef.current.firstChild.value =
                    e.target.nextElementSibling.firstChild.lastChild.textContent.getAttribute(
                        'data-option-value'
                    );
            } else {
                hiddenSelectRef.current.firstChild.value =
                    e.target.nextElementSibling.firstChild.lastChild.textContent;
            }
        }
    };

    const selectFirstOption = (e: any) => {
        // Select the first option.
        // Note : we check "selectedOptionRef.current" for typing reasons.
        if (selectedOptionRef.current) {
            selectedOptionRef.current.textContent =
                e.target.nextElementSibling.firstChild.firstChild.textContent;
            updateFirstOptionWithIndex(e);
            setToLFirstOptionIndex();
            // Save option in hidden select (use optionsValues if available. Else use option text content)
            hiddenSelectRef.current.firstChild.textContent =
                e.target.nextElementSibling.firstChild.firstChild.textContent;
            if (optionsValues) {
                hiddenSelectRef.current.firstChild.value =
                    e.target.nextElementSibling.firstChild.firstChild.textContent.getAttribute(
                        'data-option-value'
                    );
            } else {
                hiddenSelectRef.current.firstChild.value =
                    e.target.nextElementSibling.firstChild.firstChild.textContent;
            }
        }
    };

    const handleMenuNavigation = (e: any) => {
        switch (e.code) {
            case 'Enter':
            case 'Space':
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

            case 'PageDown':
            case 'End':
                selectLastOption(e);
                break;

            case 'PageUp':
            case 'Home':
                selectFirstOption(e);
                break;

            default:
                break;
        }
    };

    /**
     * Indicates what option has been selected,
     * else indicates the custom label (if selected),
     * else indicates the first option (that is selected by default).
     * @returns {string} Returns the aria-label of the custom button
     */
    const getAriaLabel = (): string => {
        if (selectedOptionRef?.current?.textContent)
            return `Option sélectionnée : ${selectedOptionRef.current.textContent}`;
        if (label) return label;
        return firstOption;
    };

    return (
        <Button
            activeBackgroundColor={mainColor}
            hoverBackgroundColor={buttonBackgroundHoverColor}
            textColor={buttonTextColor}
            textHoverColor={buttonTextHoverColor}
            textActiveColor={buttonTextActiveColor}
            tabIndex={disabled ? -1 : 0}
            onKeyDown={(e) => {
                options.length > 0 && handleMenuNavigation(e);
            }}
            ref={customButtonRef}
            onClick={() => options.length > 0 && triggerMenu()}
            className={
                disabled
                    ? 'button-disabled custom-button menu-unexpanded ui-selectmenu-button'
                    : 'custom-button menu-unexpanded ui-selectmenu-button'
            }
            style={{ width: `${width}px` }}
            role="combobox"
            aria-expanded="false"
            aria-autocomplete="list"
            aria-haspopup="true"
            aria-live="polite"
            aria-label={getAriaLabel()}
        >
            <span ref={selectedOptionRef} className="custom-button-text">
                {label ? label : firstOption}
            </span>
            <img
                alt=""
                aria-hidden="true"
                src={showButtonIcon ? buttonIconPath : ''}
                className={`custom-button-icon ${
                    isIconRotated ? 'custom-button-icon_rotated' : ''
                }`}
            />
        </Button>
    );
};

export default CustomButton;
