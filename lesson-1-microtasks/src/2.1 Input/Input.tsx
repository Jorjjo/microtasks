import React, { type ChangeEvent } from 'react';

type Props = {
    title: string;
    setTitle: (title: string) => void;
};

export function Input(props: Props) {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value);
    };
    return <input value={props.title} onChange={onChangeInputHandler} />;
}
