import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const [lastMessage, setLastMessage] = useState(-1);
    const updateMessage = (number: number) => {
        setLastMessage(number);
    };
    useEffect(() => {
        setLastMessage(-1);
        subscribe(props.sourceId, updateMessage);
        return () => {
            unsubscribe(props.sourceId, updateMessage);
        };
    }, [props.sourceId]);
    return (
        <div>
            {props.sourceId}: {lastMessage}
        </div>
    );
}
