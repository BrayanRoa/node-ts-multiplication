import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options) => boolean;
}

export interface Options {
    content: string;
    destionation?: string;
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor() { }

    execute({ content, destionation = "outputs", fileName = "table" }: Options): boolean {

        try {
            fs.mkdirSync(destionation, {recursive: true});
            fs.writeFileSync(`${destionation}/${fileName}.txt`, content);
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}