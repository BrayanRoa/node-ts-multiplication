import yargs from 'yargs';
import moduleName from 'yargs/helpers';

export const yarg = yargs(process.argv)
    .options({
        'b': {
            alias: 'base',
            type: 'number',
            demandOption: true,
            description: 'base de la multiplicación'
        }
    })
    .options({
        "l": {
            alias: 'limit',
            type: 'number',
            demandOption: false,
            default: 10,
            description: 'limite de la multiplicación'
        }
    })
    .options({
        's': {
            alias: 'show',
            type: 'boolean',
            demandOption: false,
            default: false,
            description: 'muestra la multiplicación en consola de la aplicación'
        }
    })
    .options({
        "n": {
            alias: 'name',
            type: 'string',
            demandOption: true,
            default: 'multiplicacion-table',
            description: 'nombre de la tabla'
        }
    })
    .options({
        "d":{
            alias: 'destination',
            type:'string',
            demandOption: true,
            default: './outputs',
            description: 'directorio donde se guardarán las tablas'
        }
    })
    .check((argv, options) => {
        if (argv.b < 1) throw "the option 'base' must be greater than zero"
        if (argv.l < 1) throw "the option 'limit' must be greater than zero"
        return true
    }).parseSync() 