/**
 * @fileoverview a custom dropdown component
 * allows single and multi select
 */
import React, {
    useState
} from 'react';
import '../../App.css';
import CaretDown from '../../assets/icons/caret-down.svg';
import CaretUp from '../../assets/icons/caret-up.svg';
import { DropdownItem } from './DropdownItem';

interface DropdownProps {
    children?: React.ReactNode;
}


export const Dropdown: React.FC<DropdownProps> = ({
    children,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selected, setSelected] = useState<string[]>([]);


    return (
        <>
            <div className="dropdown">
                {/*     Text Field    */}
                <div className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                    {/*     Placeholder if empty    */}
                    {selected.length === 0
                        ? "Choose One"
                        : selected.toString()}
                    {isOpen
                        ? <img src={CaretUp} alt="Caret Up"/>
                        : <img src={CaretDown} alt="Caret Down"/>}
                </div>

                {/*     Dropdown Menu Items     */}
                {isOpen &&
                    <ul className="dropdown-content">
                        <DropdownItem
                            id={"A"}
                            value={"A"}
                            label={"Option A"}
                        />
                        <DropdownItem
                            id={"B"}
                            value={"B"}
                            label={"Option B"}
                        />
                        <DropdownItem
                            id={"C"}
                            value={"C"}
                            label={"Option C"}
                        />
                        <DropdownItem
                            id={"D"}
                            value={"D"}
                            label={"Option D"}
                        />
                        <DropdownItem
                            id={"E"}
                            value={"E"}
                            label={"Option E"}
                        />
                        <DropdownItem
                            id={"F"}
                            value={"F"}
                            label={"Option F"}
                        />
                        <DropdownItem
                            id={"G"}
                            value={"G"}
                            label={"Option G"}
                        />
                    </ul>
                }
            </div>
        </>
    )
}