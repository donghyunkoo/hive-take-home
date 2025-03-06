/**
 * @fileoverview a custom dropdown component
 * allows single and multi select
 */
import React, {
    useState,
    useEffect,
} from 'react';
import '../../App.css';
import CaretDown from '../../assets/icons/caret-down.svg';
import CaretUp from '../../assets/icons/caret-up.svg';
import {FixedSizeList as List} from "react-window";
import { DropdownItem } from "./DropdownItem";

interface DropdownProps {
    children?: React.ReactNode;
    // onSelect?: (event: React.ChangeEvent<{ value: string }>) => void;
    onChange?: any; // TODO: need to think of a better name for this
    selected?: Set<string>;
    placeholder?: string;
    multiple?: boolean;
    format?: any;
}


export const Dropdown: React.FC<DropdownProps> = ({
    children,
    placeholder,
    selected,
    multiple = false,
    onChange,
    format,
}) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [renderedText, setRenderedText] = useState<string>('');

    const onSelectMultiple = (event: any) => {
        // const value = event.target.getAttribute('value');
        const value = event.target;

        onChange((prevSelected: Iterable<unknown> | null | undefined) => {
            const newSelected = new Set(prevSelected);

            if (newSelected.has(value)) {
                // Remove the element "deselect"
                newSelected.delete(value);
            } else {
                // Add the element "select"
                newSelected.add(value);
            }

            return newSelected;
        });
    }

    const onSelect = (event: any) => {
        const value = event.target.getAttribute('value');
        const label = event.target.textContent;
        if (selected?.has(value)) {
            onChange(new Set())
            setRenderedText('')
        } else {
            onChange(new Set(value));
            setRenderedText(label);
        }
    }

    const onSelectAll = (event: any) => {
        const isAllSelected = selected?.size === allDropdownItems?.length - 1;

        if (isAllSelected) {
            onChange(new Set());
        } else {
            const allValues = allDropdownItems.map((item) => {
                // TODO: need to figure out what is going on with the typing
                if (!React.isValidElement(item)) {
                    // If the item is not a valid React element, return null
                    return null;
                }
                const itemObj: any = item.props;
                return itemObj.value;
            });

            onChange(new Set(
                multiple
                    ? allValues.slice(1)
                    : allValues
            ));
        }
    }

    const allDropdownItems = (() => {
        if (multiple) {
            // add the select/deselect all option and make it an array
            const allOption = (
                <DropdownItem
                    key={""}
                    value={""}
                    label={"All"}
                />
            );
            return [allOption, ...React.Children.toArray(children)];
        } else {
            // else just convert children to an array
            return React.Children.toArray(children);
        }
    })();

    // format the text for
    useEffect(() => {
        if (format) {
            // custom formatter
            setRenderedText(format(selected));
        } else {
            // default comma-separated
            setRenderedText(Array.from(selected ?? []).join(", "));
        }
    }, [selected]);


    // row render function for FixedSizeList
    const renderRow = ({index, style}: { index: number; style: React.CSSProperties }) => {
        // get the item at the index
        const item = allDropdownItems[index];

        if (!React.isValidElement(item)) {
            // If the item is not a valid React element, return null or handle it accordingly
            return null;
        }

        // TODO: check this. typing is weird.
        const itemObj: any = item.props;

        if (itemObj?.value === "") {
            return (
                <div style={style}>
                    {React.cloneElement(item as React.ReactElement<any>, {
                        onClick: onSelectAll,
                        isSelected: allDropdownItems.length - 1 === selected?.size,
                    })}
                </div>
            );
        } else {
            return (
                <div style={style}>
                    {React.cloneElement(item as React.ReactElement<any>, {
                        onClick: multiple ? onSelectMultiple : onSelect,
                        isSelected: selected?.has(itemObj.value),
                    })}
                </div>
            );
        }
    };

    return (
        <>
            <div className="dropdown">
                {/*     Text Field    */}
                <div
                    className={"dropdown-button" + (isActive ? " active" : "")}
                    onClick={() => setIsActive(!isActive)}
                >
                    {/*     Placeholder no rendered text    */}
                    {selected?.size === 0
                        ? placeholder
                        : renderedText}
                    {isActive
                        ? <img src={CaretUp} alt="Caret Up"/>
                        : <img src={CaretDown} alt="Caret Down"/>}

                    {/* Tooltip showing values on hover */}
                    {selected && selected.size > 0 && !isActive && (
                        <div className="tooltip">
                            {Array.from(selected).join(", ")}
                        </div>
                    )}
                </div>

                {/*     Dropdown Menu Items     */}
                {isActive &&
                    <ul className="dropdown-content">
                        <List
                            height={300} // The height of the viewport (visible area)
                            itemCount={React.Children.count(children)} // Total number of items (children)
                            itemSize={40} // The height of each item in pixels
                            width="100%" // The width of the dropdown
                        >
                            {renderRow}
                        </List>
                    </ul>
                }
            </div>
        </>
    )
}