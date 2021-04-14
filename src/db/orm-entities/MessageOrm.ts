class MessageOrm {
    private _id: number;
    private _senderid: number;
    private _receiverid: number;
    private _supermessageid: number;
    private _text: string;
    private _datetime: string;
    private _isChannelMessage: number;


    constructor(id: number, senderid: number, receiverid: number, supermessageid: number, text: string, datetime: string, isChannelMessage: number) {
        this._id = id;
        this._senderid = senderid;
        this._receiverid = receiverid;
        this._supermessageid = supermessageid;
        this._text = text;
        this._datetime = datetime;
        this._isChannelMessage = isChannelMessage;
    }


    get id(): number {
        return this._id;
    }

    get senderid(): number {
        return this._senderid;
    }

    get receiverid(): number {
        return this._receiverid;
    }

    get supermessageid(): number {
        return this._supermessageid;
    }

    get text(): string {
        return this._text;
    }

    get datetime(): string {
        return this._datetime;
    }

    get isChannelMessage(): number {
        return this._isChannelMessage;
    }

    set id(value: number) {
        this._id = value;
    }

    set senderid(value: number) {
        this._senderid = value;
    }

    set receiverid(value: number) {
        this._receiverid = value;
    }

    set supermessageid(value: number) {
        this._supermessageid = value;
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

export default MessageOrm;