/*
horasTrabajadas = [5, 7, 8, 9, 10]

function dividirMontoEquitativamente(monto, ...horasTrabajadas) {
    const totalHoras = horasTrabajadas.reduce((acumulador, horas) => acumulador + horas, 0);
    const montos = horasTrabajadas.map(horas => horas/totalHoras * monto);
    return montos;
  }

  const montos = dividirMontoEquitativamente(1000, 5, 8, 7);
console.log(montos); // [227.27, 363.64, 409.09]
 */

 /*
function dividirMontoEquitativamente(objetoHoras, monto) {
    const totalHoras = Object.values(objetoHoras).reduce((acumulador, horas) => acumulador + horas, 0);
    const montos = Object.entries(objetoHoras).map(([nombre, horas]) => ({ nombre, monto: horas/totalHoras * monto }));
    return montos;
  }

  const objetoHoras = { "Trabajador 1": 5, "Trabajador 2": 8, "Trabajador 3": 7 };
  const montos = dividirMontoEquitativamente(objetoHoras, 1000);
  console.log(montos); // [ {nombre: "Trabajador 1", monto: 227.27}, {nombre: "Trabajador 2", monto: 363.64}, {nombre: "Trabajador 3", monto: 409.09} ]
*/

  function dividirMontoEquitativamente(objetoHoras, monto) {
    const totalHoras = Object.values(objetoHoras).reduce((acumulador, horas) => acumulador + horas, 0);
    const montos = Object.entries(objetoHoras).map(([nombre, horas]) => ({ nombre, monto: horas/totalHoras * monto }));
    const totalMonto = montos.reduce((acumulador, {monto}) => acumulador + monto, 0);
    const ajuste = monto - totalMonto;
    const montosAjustados = montos.map(({nombre, monto}) => ({ nombre, monto: monto + ajuste/totalHoras }));
    return montosAjustados;
  }

  const objetoHoras = { "Trabajador 1": 5, "Trabajador 2": 8, "Trabajador 3": 7 };
const montos = dividirMontoEquitativamente(objetoHoras, 1000);
console.log(montos); // [ {nombre: "Trabajador 1", monto: 156.25}, {nombre: "Trabajador 2", monto: 250}, {nombre: "Trabajador 3", monto: 218.75} ]

