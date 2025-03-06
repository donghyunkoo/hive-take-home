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
    onSelect?: (event: React.ChangeEvent<{ value: string }>) => void;
    selected?: Set<string>;
    placeholder?: string;
    renderedText?: string;
    multiple?: boolean;
}


export const Dropdown: React.FC<DropdownProps> = ({
    children,
    placeholder,
    renderedText,
    selected,
    multiple = false,
    onSelect,
}) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <>
            <div className="dropdown">
                {/*     Text Field    */}
                <div
                    className={"dropdown-button" + (isActive ? " active" : "")}
                     onClick={() => setIsActive(!isActive)}
                >
                    {/*     Placeholder no rendered text    */}
                    {renderedText
                        ? placeholder
                        : placeholder}
                    {isActive
                        ? <img src={CaretUp} alt="Caret Up"/>
                        : <img src={CaretDown} alt="Caret Down"/>}
                </div>

                {/*     Dropdown Menu Items     */}
                {isActive &&
                    <ul className="dropdown-content">
                        {React.Children.map(children, (child: any) =>
                            React.cloneElement(child, { onClick: onSelect, isSelected: selected?.has(child.props.value) })
                        )}
                    </ul>
                }
            </div>
        </>
    )
}