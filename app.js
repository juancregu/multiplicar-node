const { argv } = require('./config/yargs.js');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');

let { _: comando, base, limite } = argv;

// console.log('En yargs: ', argv);
// console.log(`Comando: ${typeof(comando)} \nbase: ${base}  \nlimite: ${limite}`);

switch (comando[0]) {
    case 'listar':
        listarTabla(base, limite).then((result) => {
            console.log(result.green);
        }).catch((err) => {
            console.log(err);
        });
        break;
    case 'crear':
        crearArchivo(base, limite).then((result) => {
            console.log(result);

        }).catch((err) => {
            console.log(err);
        });
        break;

    default:
        console.log(`Comando: ${comando} no existe`);
        break;
}