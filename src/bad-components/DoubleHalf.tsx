import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface ShowAnswer {
    setDhVal: (setDhValue: number) => void;
    dhVal: number;
}

function Doubler({ setDhVal, dhVal }: ShowAnswer): JSX.Element {
    return <Button onClick={() => setDhVal(2 * dhVal)}>Double</Button>;
}

function Halver({ setDhVal, dhVal }: ShowAnswer): JSX.Element {
    return <Button onClick={() => setDhVal(0.5 * dhVal)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhVal, setDhVal] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhVal}</span>
            </div>
            <Doubler setDhVal={setDhVal} dhVal={dhVal}></Doubler>
            <Halver setDhVal={setDhVal} dhVal={dhVal}></Halver>
        </div>
    );
}
