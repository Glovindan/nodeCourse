class MessageOrm {
    private _id: number;

    private _senderId: number;

    private _recieverId: number;

    private _superMessageId: number;

    private _text: string;

    private _datetime: string;

    private _isChannelMessage: number;

    constructor(id: number, senderId: number, recieverId: number, superMessageId: number, text: string, datetime: string, isChannelMessage: number) {
        this._id = id;
        this._senderId = senderId;
        this._recieverId = recieverId;
        this._superMessageId = superMessageId;
        this._text = text;
        this._datetime = datetime;
        this._isChannelMessage = isChannelMessage;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get senderId(): number {
        return this._senderId;
    }

    set senderId(value: number) {
        this._senderId = value;
    }

    get recieverId(): number {
        return this._recieverId;
    }

    set recieverId(value: number) {
        this._recieverId = value;
    }

    get superMessageId(): number {
        return this._superMessageId;
    }

    set superMessageId(value: number) {
        this._superMessageId = value;
    }

    get text(): string {
        return this._text;
    }

    set text(value: string) {
        this._text = value;
    }

    get datetime(): string {
        return this._datetime;
    }

    set datetime(value: string) {
        this._datetime = value;
    }

    get isChannelMessage(): number {
        return this._isChannelMessage;
    }

    set isChannelMessage(value: number) {
        this._isChannelMessage = value;
    }
}

export default MessageOrm;
