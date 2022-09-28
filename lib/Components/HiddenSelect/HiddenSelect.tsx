import React from 'react';

export interface selectMenuProps {
    id: string | undefined;
    hiddenSelectRef: React.RefObject<HTMLSelectElement>;
    hiddenOptionText: string;
    hiddenOptionValue: string;
    inputRef: React.RefObject<HTMLOptionElement> | undefined;
    optionsValues: Array<string> | undefined;
}

const HiddenSelect = ({
    hiddenSelectRef,
    id,
    hiddenOptionText,
    hiddenOptionValue,
    inputRef,
    optionsValues,
}: selectMenuProps) => {
    return (
        <select
            ref={hiddenSelectRef}
            name="hidden-select"
            id={id}
            style={{ display: 'none' }}
        >
            <option
                ref={inputRef}
                value={optionsValues ? hiddenOptionValue : hiddenOptionText}
            >
                {hiddenOptionText}
            </option>
        </select>
    );
};

export default HiddenSelect;
