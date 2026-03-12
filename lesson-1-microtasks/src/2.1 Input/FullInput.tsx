import { useState, type ChangeEvent } from 'react';

type Props = {
    addMessage: (title: string) => void;
};

export function FullInput(props: Props) {
    const [title, setTitle] = useState('');
    console.log(title);

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };

    const onBtnClickHandler = () => {
        props.addMessage(title);
        setTitle('');
    };

    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} />
            <button onClick={onBtnClickHandler}>+</button>
        </div>
    );
}
