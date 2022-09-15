import React from 'react';
// import './SelectMenu.css';

export interface selectMenuProps {
    id: string | undefined;
    hiddenSelectRef: any;
    selectedOption: any;
    inputRef: any;
}

const HiddenSelect = ({
    hiddenSelectRef,
    id,
    selectedOption,
    inputRef,
}: selectMenuProps) => {
    return (
        <select
            ref={hiddenSelectRef}
            name="hidden-select"
            id={id}
            style={{ display: 'none' }}
        >
            <option ref={inputRef} value={selectedOption}>
                {selectedOption}
            </option>
        </select>
    );
};

export default HiddenSelect;
