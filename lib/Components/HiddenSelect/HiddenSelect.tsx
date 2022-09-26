import React from 'react';

export interface selectMenuProps {
    id: string | undefined;
    hiddenSelectRef: any;
    hiddenOptionText: any;
    hiddenOptionValue: any;
    inputRef: any;
    optionsValues: any;
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
