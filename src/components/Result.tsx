import React from 'react';

const Result = ({result, name}) => {
    if(name === "formula"){
        return <div className="formula">{result}</div>;
    } else {
        return <div className="resultValue">{result.toLocaleString()}</div>;
    }   
}

export default Result;