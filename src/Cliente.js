export default class Cliente {
    constructor() {
        this._nombre = ""
        this._impuestos = {}
    }
    getNombre() {
        return this._nombre
    }
    setNombre(nombre) {
        this._nombre = nombre
    }
    getImpuestos() {
        return this._impuestos
    }
    setImpuestos(value) {
        this._impuestos = value
    }
    calcularImpuesto() {
        const totalImpuesto = (this.setImpuestos.setMontoBrutoAnual - this.setImpuestos.setDeducciones) * 0.21
        console.log(`el impuesto para el cliente ${this.setNombre} es: ${totalImpuesto}`)
    }
}