const fs = require('fs');
const colors = require('colors');

let data = '';

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        data += '==================================\n'.green;
        data += `=========TABLA DEL ${base}==========\n`.white;
        data += '==================================\n\n'.green;

        if (!Number(base)) return reject(`El valor ${base} no es un numero`);

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        //data = new Uint8Array(Buffer.from(data));
        fs.writeFile(`tablas/tabla-${base}txt`, data, (err) => {
            if (err) return reject(err);
            resolve('El archivo ' + `tabla-${base}.txt`.cyan + ' ha sido creado!');
        });

    });
};


let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        data += '==================================\n'.green;
        data += `=========TABLA DEL ${base}==========\n`.blue;
        data += '==================================\n\n'.green;

        if (!Number(base)) return reject(`El valor ${base} no es un numero`);

        for (let i = 0; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`.red;
        }
        resolve(data);

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}