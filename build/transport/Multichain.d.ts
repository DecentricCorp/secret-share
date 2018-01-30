export declare class Multichain {
    address: string;
    asset: string;
    permissions: string[];
    multichain: {
        [x: string]: any;
    };
    Utils: any;
    constructor(address: string, connection?: MultichainConnection, asset?: string, permissions?: string[]);
    Info(callback: any): void;
    Connect(connection: MultichainConnection): void;
    Streams(callback: any): void;
    StreamItemsByKey(streamName: any, key: any, callback: any): void;
    StreamItemsByPublisher(streamName: any, publisherAddress: any, cb: any): void;
    GrantPermissionToAddress(addresses: any, permissions: any, callback: any): void;
    RevokePermissionToAddress(address: any, permissions: any, callback: any): void;
    ImportAddress(address: any, name: any, callback: any): void;
    ImportPrivKey(key: any, callback: any): void;
    SendSignedTransaction(signed: any, callback: any): void;
    CreateAndSignSend(from: any, to: any, asset: any, qty: any, callback: any): void;
    GetAssetBalance(address: any, asset: any, callback: any): void;
    SendAssetFrom(from: any, to: any, amount: any, asset: any, callback: any): void;
}
export declare class MultichainConnection {
    port: Number;
    host: string;
    user: string;
    pass: string;
    constructor(port: Number, host: string, user: string, pass: string);
}
