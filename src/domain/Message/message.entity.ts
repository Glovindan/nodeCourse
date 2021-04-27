class MessageEntity {
    private _id: number;
    private _superMessage?: MessageEntity;
    private _text: string;
    private _datetime: string;
    private _isChannelMessage: number;

    constructor(id: number, text: string, datetime: string, isChannelMessage: number, superMessage: MessageEntity) {
        this._id = id;
        this._superMessage = superMessage;
        this._text = text;
        this._datetime = datetime;
        this._isChannelMessage = isChannelMessage;
    }

    get superMessage(): MessageEntity {
        return this._superMessage;
    }

    set superMessage(value: MessageEntity) {
        this._superMessage = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    set text(value: string) {
        this._text = value;
    }

    set datetime(value: string) {
        this._datetime = value;
    }

    set isChannelMessage(value: number) {
        this._isChannelMessage = value;
    }
}

export default MessageEntity;
