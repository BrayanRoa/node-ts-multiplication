import { CreateTable } from "../domain/create-table.use-case";
import { SaveFile } from "../domain/save-file.use-case";

interface runOptions {
    base: number;
    limit: number;
    showTable: boolean;
    destination: string;
    name: string;
}


export class ServerApp {
    static run({ base, limit, showTable, name, destination }: runOptions) {
        console.log("Server running...");

        const table = new CreateTable().execute({ base, limit })

        const wasCreated = new SaveFile().execute({
            content: table,
            destionation: destination,
            fileName: name
        })


        if (showTable) console.log(table);

        (wasCreated)
            ? console.log("file created")
            : console.log("file not created");
    }
}