/**
 * @fileOverview an option in a dropdown menu
 */
import React from 'react';


interface DropdownItemProps {
    id?: string;
    label?: string;
    value?: string | number;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
    id,
    label,
    value,
}) => {
    return (
        <>
            <li
                className="dropdown-item"
                id={id}
                value={value}
            >
                {label}
            </li>
        </>
    )
}