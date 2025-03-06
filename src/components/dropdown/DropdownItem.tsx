/**
 * @fileOverview an option in a dropdown menu
 */
import React from 'react';


interface DropdownItemProps {
    id?: string;
    label?: string;
    value?: string;
    isSelected?: boolean;
    disabled?: boolean;
    onClick?: (event: any) => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
    id,
    value,
    label = value,
    disabled = false,
    isSelected = false,
    onClick,
}) => {
    // console.log(id, isSelected);
    return (
        <>
            <li
                className={"dropdown-item" + (isSelected ? " selected" : "")}
                id={id}
                value={value}
                onClick={disabled ? undefined : onClick}
            >
                {label}
            </li>
        </>
    )
}