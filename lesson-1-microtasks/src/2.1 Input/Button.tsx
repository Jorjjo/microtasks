import React from 'react';

type ButtonProps = {
    name: string;
    callBack: () => void;
};

export function Button(props: ButtonProps) {
    const onBtnClickHandler = () => {
        props.callBack();
    };
    return <button onClick={onBtnClickHandler}>{props.name}</button>;
}
