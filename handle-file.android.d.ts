import { Observable } from 'tns-core-modules/data/observable';
export interface Params {
    url: string;
    name: string;
    title?: string;
    directory?: string;
}
export declare class HandleFile extends Observable {
    readonly directories: {
        "downloads": string;
        "pictures": string;
        "movies": string;
        "music": string;
    };
    open(params: Params): Promise<boolean>;
    private findExtension;
}
