import React, {useMemo, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Dropdown} from './components/dropdown'
import {
    DropdownItem,
} from "./components/dropdown/DropdownItem";

function App() {
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const [selectedOne, setSelectedOne] = useState<Set<string>>(new Set());

    return (
        <div className="App">
            <Dropdown
                placeholder={"Choose one or more"}
                onChange={setSelected}
                selected={selected}
                multiple
            >
                {Array.from({length: 500}).map((_, index) => {
                    return (
                        <DropdownItem
                            key={(index+1).toString()}
                            value={(index+1).toString()}
                            label={`Option ${index + 1}`}
                        />
                    )
                })}
            </Dropdown>

            <Dropdown
                placeholder={"Choose one"}
                onChange={setSelectedOne}
                selected={selectedOne}
            >
                <DropdownItem
                    key={"A"}
                    value={"A"}
                    label={"Option A"}
                />
                <DropdownItem
                    key={"B"}
                    value={"B"}
                    label={"Option B"}
                />
                <DropdownItem
                    key={"C"}
                    value={"C"}
                    label={"Option C"}
                />
                <DropdownItem
                    key={"D"}
                    value={"D"}
                    label={"Option D"}
                />
                <DropdownItem
                    key={"E"}
                    value={"E"}
                    label={"Option E"}
                />
                <DropdownItem
                    key={"F"}
                    value={"F"}
                    label={"Option F"}
                />
                <DropdownItem
                    key={"G"}
                    value={"G"}
                    label={"Option G"}
                />
                <DropdownItem
                    key={"H"}
                    value={"H"}
                    label={"Option H"}
                />
                <DropdownItem
                    key={"I"}
                    value={"I"}
                    label={"Option I"}
                />
                <DropdownItem
                    key={"J"}
                    value={"J"}
                    label={"Option J"}
                />
                <DropdownItem
                    key={"K"}
                    value={"K"}
                    label={"Option K"}
                />
                <DropdownItem
                    key={"L"}
                    value={"L"}
                    label={"Option L"}
                />
                <DropdownItem
                    key={"M"}
                    value={"M"}
                    label={"Option M"}
                />
            </Dropdown>
        </div>
    );
}

export default App;
