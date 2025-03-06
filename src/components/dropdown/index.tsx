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

interface DropdownProps {
    children?: React.ReactNode;
}


const Dropdown: React.FC<DropdownProps> = ({
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
                    <div className="dropdown-content">
                        <div className="dropdown-item">
                            option A
                        </div>
                        <div className="dropdown-item">
                            option B
                        </div>
                        <div className="dropdown-item">
                            option C
                        </div>
                        <div className="dropdown-item">
                            A super duper long option that should not fit
                            if it is not handled properly
                        </div>
                        <div className="dropdown-item">
                            option D
                        </div>
                        <div className="dropdown-item">
                            option E
                        </div>
                        <div className="dropdown-item">
                            option F
                        </div>
                        <div className="dropdown-item">
                            option G
                        </div>
                        <div className="dropdown-item">
                            option H
                        </div>
                        <div className="dropdown-item">
                            option I
                        </div>
                        <div className="dropdown-item">
                            option J
                        </div>
                        <div className="dropdown-item">
                            option K
                        </div>
                        <div className="dropdown-item">
                            option L
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

export default Dropdown;