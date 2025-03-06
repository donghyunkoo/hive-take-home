import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Dropdown } from './components/dropdown'
import {
    DropdownItem,
} from "./components/dropdown/DropdownItem";

function App() {
    const [selected, setSelected] = useState<Set<string>>(new Set());

    const handleSelect = (event: any) => {;
        const { id, textContent } = event.target;
        // const value = event.target.getAttribute('value');

        setSelected(prevSelected => {
            const newSelected = new Set(prevSelected);

            if (newSelected.has(id)) {
                // Remove the element "deselect"
                newSelected.delete(id);
            } else {
                // Add the element "select"
                newSelected.add(id);
            }

            return newSelected;
        });
    }

  return (
    <div className="App">
        <Dropdown
            placeholder={"Choose one"}
            onSelect={handleSelect}
            selected={selected}
            renderedText={Array.from(selected).join(", ")}
        >
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
        </Dropdown>

        {/*<Dropdown*/}
        {/*    placeholder={"Choose one or more"}*/}
        {/*    multiple*/}
        {/*>*/}
        {/*    <DropdownItem*/}
        {/*        id={"A"}*/}
        {/*        value={"A"}*/}
        {/*        label={"Option A"}*/}
        {/*    />*/}
        {/*    <DropdownItem*/}
        {/*        id={"B"}*/}
        {/*        value={"B"}*/}
        {/*        label={"Option B"}*/}
        {/*    />*/}
        {/*    <DropdownItem*/}
        {/*        id={"C"}*/}
        {/*        value={"C"}*/}
        {/*        label={"Option C"}*/}
        {/*    />*/}
        {/*    <DropdownItem*/}
        {/*        id={"D"}*/}
        {/*        value={"D"}*/}
        {/*        label={"Option D"}*/}
        {/*    />*/}
        {/*    <DropdownItem*/}
        {/*        id={"E"}*/}
        {/*        value={"E"}*/}
        {/*        label={"Option E"}*/}
        {/*    />*/}
        {/*    <DropdownItem*/}
        {/*        id={"F"}*/}
        {/*        value={"F"}*/}
        {/*        label={"Option F"}*/}
        {/*    />*/}
        {/*    <DropdownItem*/}
        {/*        id={"G"}*/}
        {/*        value={"G"}*/}
        {/*        label={"Option G"}*/}
        {/*    />*/}
        {/*</Dropdown>*/}
    </div>
  );
}

export default App;
