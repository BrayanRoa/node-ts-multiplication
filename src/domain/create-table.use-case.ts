export interface CreateTableUseCase {
    excecute: () => string;
}

interface createTableOptions {
    base: number,
    limit: number
}


export class CreateTable {

    constructor() {
    }

    execute({ base, limit }: createTableOptions) {
        let outputMessage: string = ""

        for (let i = 0; i <= limit; i++) {
            outputMessage += `${base} * ${i} = ${i * 1} \n`
        }

        return outputMessage
    }
}