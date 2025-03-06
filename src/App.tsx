import React, {useMemo, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Dropdown} from './components/dropdown'
import {
    DropdownItem,
} from "./components/dropdown/DropdownItem";

function App() {
    const [selected, setSelected] = useState<Set<string>>(new Set());

    return (
        <div className="App">
            <Dropdown
                placeholder={"Choose one"}
                onChange={setSelected}
                selected={selected}
                multiple
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
            </Dropdown>

            {/*<Dropdown*/}
            {/*    placeholder={"Choose one or more"}*/}
            {/*    multiple*/}
            {/*>*/}
            {/*    <DropdownItem*/}
            {/*        key={"A"}*/}
            {/*        value={"A"}*/}
            {/*        label={"Option A"}*/}
            {/*    />*/}
            {/*    <DropdownItem*/}
            {/*        key={"B"}*/}
            {/*        value={"B"}*/}
            {/*        label={"Option B"}*/}
            {/*    />*/}
            {/*    <DropdownItem*/}
            {/*        key={"C"}*/}
            {/*        value={"C"}*/}
            {/*        label={"Option C"}*/}
            {/*    />*/}
            {/*    <DropdownItem*/}
            {/*        key={"D"}*/}
            {/*        value={"D"}*/}
            {/*        label={"Option D"}*/}
            {/*    />*/}
            {/*    <DropdownItem*/}
            {/*        key={"E"}*/}
            {/*        value={"E"}*/}
            {/*        label={"Option E"}*/}
            {/*    />*/}
            {/*    <DropdownItem*/}
            {/*        key={"F"}*/}
            {/*        value={"F"}*/}
            {/*        label={"Option F"}*/}
            {/*    />*/}
            {/*    <DropdownItem*/}
            {/*        key={"G"}*/}
            {/*        value={"G"}*/}
            {/*        label={"Option G"}*/}
            {/*    />*/}
            {/*</Dropdown>*/}
        </div>
    );
}

export default App;
