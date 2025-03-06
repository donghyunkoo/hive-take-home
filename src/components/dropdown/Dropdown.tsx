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

interface DropdownProps {
    children?: React.ReactNode;
    // onSelect?: (event: React.ChangeEvent<{ value: string }>) => void;
    onChange?: any; // TODO: need to think of a better name for this
    selected?: Set<string>;
    placeholder?: string;
    multiple?: boolean;
}


export const Dropdown: React.FC<DropdownProps> = ({
    children,
    placeholder,
    selected,
    multiple = false,
    // onSelect,
    onChange,
}) => {
    const [isActive, setIsActive] = useState<boolean>(false);
    const [renderedText, setRenderedText] = useState<string>('');

    const onSelectMultiple = (event: any) => {
        const value = event.target.getAttribute('value');

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
        if (selected?.has(value)){
            onChange(new Set())
            setRenderedText('')
        } else {
            onChange(new Set(value));
            setRenderedText(label);
        }
    }

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
                        // : Array.from(selected ?? []).join(", ")}
                        : renderedText}
                    {isActive
                        ? <img src={CaretUp} alt="Caret Up"/>
                        : <img src={CaretDown} alt="Caret Down"/>}
                </div>

                {/*     Dropdown Menu Items     */}
                {isActive &&
                    <ul className="dropdown-content">
                        {React.Children.map(children, (child: any) =>
                            React.cloneElement(child, {
                                onClick: multiple
                                    ? onSelectMultiple
                                    : onSelect,
                                isSelected: selected?.has(child.props.value),
                            })
                        )}
                    </ul>
                }
            </div>
        </>
    )
}