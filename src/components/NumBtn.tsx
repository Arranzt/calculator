import React from 'react';

const NumBtn = ({n, onClick}) => {
    if(n === 0){
        return <button onClick={onClick} className="zero">{n}</button>;
    } else {
        return <button onClick={onClick}>{n}</button>;
    }
}

export default NumBtn;