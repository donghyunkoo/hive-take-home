/**
 * @fileOverview an option in a dropdown menu
 */
import React from 'react';


interface DropdownItemProps {
    key?: string;
    label?: string;
    value?: string;
    isSelected?: boolean;
    disabled?: boolean;
    onClick?: (event: any) => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
    key,
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
                key={key}
                value={value}
                onClick={disabled ? undefined : onClick}
            >
                {label}
            </li>
        </>
    )
}