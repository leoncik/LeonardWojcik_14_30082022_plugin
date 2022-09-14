import React, { useRef, useState } from 'react';
// import './SelectMenu.css';

export interface selectMenuProps {
    id?: string;
    inputRef?: any;
    options?: Array<string>;
}

const HiddenSelect = ({ id, inputRef, options }: selectMenuProps) => {
    // Refs
    const customButtonRef: any = useRef();
    const selectedOptionRef: any = useRef();
    const customMenuRef: any = useRef();
    const hiddenSelectRef: any = useRef();
    // const hiddenOptionRef: any = useRef()

    // Values
    const firstOption = options![0];

    // Local states
    const [selectedOption, setSelectedOption] = useState(firstOption);

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
