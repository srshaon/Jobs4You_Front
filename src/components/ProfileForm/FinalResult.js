import React from "react";
import { useStateMachine } from "little-state-machine";
import updateAction from "./updateAction";

const FinalResult = props => {
    const { state } = useStateMachine(updateAction);
    console.log(state.data.firstName);
    return (
        <>
            <h2>Result:</h2>
            <pre>{JSON.stringify(state, null, 2)}</pre>
        </>
    );
};

export default FinalResult;