import React from 'react';
// import './SelectMenu.css';

export interface selectMenuProps {
    id: string | undefined;
    hiddenSelectRef: any;
    hiddenOption: any;
    inputRef: any;
}

const HiddenSelect = ({
    hiddenSelectRef,
    id,
    hiddenOption,
    inputRef,
}: selectMenuProps) => {
    return (
        <select
            ref={hiddenSelectRef}
            name="hidden-select"
            id={id}
            style={{ display: 'none' }}
        >
            <option ref={inputRef} value={hiddenOption}>
                {hiddenOption}
            </option>
        </select>
    );
};

export default HiddenSelect;
