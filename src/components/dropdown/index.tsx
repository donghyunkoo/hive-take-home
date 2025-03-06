/**
 * @fileoverview a custom dropdown component
 * allows single and multi select
 */
import React from "react";
import '../../App.css';
import CaretDown from '../../assets/icons/caret-down.svg';
import CaretUp from '../../assets/icons/caret-up.svg';

interface DropdownProps {
    children?: React.ReactNode;
}


const Dropdown : React.FC<DropdownProps> = ({
    children,
}) => {
    return (
        <>
            <div className="dropdown">
                {/*     Placeholder / Selected Text Field    */}
                <div className="dropdown-button">
                    Choose One
                    {/*<img src={CaretDown} alt="Caret Down"/>*/}
                    <img src={CaretUp} alt="Caret Up"/>
                </div>

                {/*     Dropdown Menu Items     */}
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
            </div>
        </>
    )
}

export default Dropdown;