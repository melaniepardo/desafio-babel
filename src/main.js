import Cliente from './Cliente'
import Impuestos from './Impuestos'

// const impuesto1 = new Impuestos(2000, 1000)
const impuesto1 = new Impuestos()
impuesto1.setMontoBrutoAnual = 10000
impuesto1.setDeducciones = 1000
const cliente1 = new Cliente()
cliente1.setNombre = "Juan"
cliente1.setImpuestos = impuesto1
console.log(cliente1)
cliente1.calcularImpuesto()
