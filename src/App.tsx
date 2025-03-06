import React, {useMemo, useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import {Dropdown} from './components/dropdown'
import {
    DropdownItem,
} from "./components/dropdown/DropdownItem";

function App() {
    const [selected, setSelected] = useState<Set<string>>(new Set());
    const [selectedOne, setSelectedOne] = useState<Set<string>>(new Set());

    // custom formatter for selected options
    const textFormatter = useCallback((values: string[]) => {
        return Array.from(values ?? []).join(", ")
    }, []);

    return (
        <div className="App">
            <Dropdown
                placeholder={"Choose one or more"}
                onChange={setSelected}
                selected={selected}
                format={textFormatter}
                multiple
            >
                {Array.from({length: 500}).map((_, index) => {
                    return (
                        <DropdownItem
                            key={(index+1).toString()}
                            value={`Option ${index + 1}`}
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
                    value={"Option A"}
                    label={"Option A"}
                />
                <DropdownItem
                    key={"B"}
                    value={"Option B"}
                    label={"Option B"}
                />
                <DropdownItem
                    key={"C"}
                    value={"Option C"}
                    label={"Option C"}
                />
                <DropdownItem
                    key={"D"}
                    value={"Option D"}
                    label={"Option D"}
                />
                <DropdownItem
                    key={"E"}
                    value={"Option E"}
                    label={"Option E"}
                />
            </Dropdown>
        </div>
    );
}

export default App;
