import Cliente from './Cliente'
import Impuestos from './Impuestos'

const impuesto1 = new Impuestos(1000, 2000)

const cliente1 = new Cliente("José", impuesto1)
console.log(cliente1.calcularImpuesto)
