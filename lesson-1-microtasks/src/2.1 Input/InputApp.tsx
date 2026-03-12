import { useState } from 'react';
// import { FullInput } from './FullInput';
import { Input } from './Input';
import { Button } from './Button';

export function InputApp() {
    const [message, setMessage] = useState([
        { message: 'message1' },
        { message: 'message2' },
        { message: 'message3' },
        { message: 'message4' },
        { message: 'message5' },
    ]);

    const [title, setTitle] = useState('');
    console.log(title);

    const onBtnClick = () => {
        addMessage(title);
        setTitle('');
    };

    const addMessage = (title: string) => {
        const newMessage = { message: title };
        setMessage([newMessage, ...message]);
    };
    return (
        <div className='App'>
            {/* <FullInput addMessage={addMessage} /> */}
            <Input title={title} setTitle={setTitle} />
            <Button name='+' callBack={onBtnClick} />
            {message.map((el, index) => {
                return <div key={index}>{el.message}</div>;
            })}
        </div>
    );
}
