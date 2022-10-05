// React Hooks
import React, { useEffect, useState } from 'react';

// Styled components
import styled from 'styled-components';
const Option = styled.li<{
    initialTextColor: string;
    activeBackgroundColor: string;
    hoverTextColor: string;
    optionWidth: number;
    optionFontSize: string | undefined;
}>`
    color: ${({ initialTextColor }) => initialTextColor};
    width: ${({ optionWidth }) => `${optionWidth}px`};
    font-size: ${({ optionFontSize }) =>
        optionFontSize ? `${optionFontSize}` : ''};
    &:hover,
    &:focus {
        color: ${({ hoverTextColor }) => hoverTextColor};
        background: ${({ activeBackgroundColor }) => activeBackgroundColor};
    }
`;

export interface selectMenuProps {
    options: Array<string> | undefined;
    customMenuRef: React.RefObject<HTMLUListElement>;
    handleSelectOption: any;
    width: number;
    id?: string;
    customButtonRef: React.RefObject<HTMLSpanElement>;
    saveOption: any;
    saveOptionIndex: any;
    maxHeight: number;
    scrollable: boolean;
    offsetX: number;
    offsetY: number;
    optionsValues: Array<string> | undefined;
    closeSelectMenu: any;
    optionsFontSize: string | undefined;
    mainColor: string;
    optionTextColor: string;
    optionTextFocus: string;
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
    optionsValues,
    closeSelectMenu,
    optionsFontSize,
    mainColor,
    optionTextColor,
    optionTextFocus,
    id,
}: selectMenuProps) => {
    // Observe height of the custom button to set menu position.
    const [customButtonHeight, setCustomButtonHeight] = useState(0);
    useEffect(() => {
        if (customButtonRef.current) {
            const heightObserver = new ResizeObserver(() => {
                customButtonRef.current &&
                    setCustomButtonHeight(customButtonRef.current.offsetHeight);
            });
            heightObserver.observe(customButtonRef.current);

            return () => {
                if (customButtonRef.current) {
                    heightObserver.unobserve(customButtonRef.current);
                } else {
                    heightObserver.disconnect();
                }
            };
        }
    }, []);

    const closeMenu = () => {
        if (customButtonRef?.current?.classList.contains('menu-expanded')) {
            closeSelectMenu();
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

            case 'PageDown':
            case 'End':
                // Set focus to last option
                e.target.parentNode.lastChild.focus();
                break;

            case 'PageUp':
            case 'Home':
                // Set focus to first option
                e.target.parentNode.firstChild.focus();
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
                data-testid="menu"
                className="menu"
                id={id ? `${id}-menu` : ''}
                style={{
                    width: `${width}px`,
                    maxHeight: scrollable ? `${maxHeight}px` : 'auto',
                }}
            >
                {options?.map((option: string, index: number) => (
                    <Option
                        initialTextColor={optionTextColor}
                        activeBackgroundColor={mainColor}
                        hoverTextColor={optionTextFocus}
                        optionWidth={width}
                        optionFontSize={optionsFontSize}
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
                        data-option-value={
                            optionsValues ? optionsValues[index] : option
                        }
                        data-testid="menu-item"
                    >
                        {option}
                    </Option>
                ))}
            </ul>
        </div>
    );
};

export default CustomMenu;
