export default class Cliente {
    constructor(nombre, impuestos) {
        this._nombre = nombre
        this._impuestos =  {}
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
    setImpuestos(impuestos) {
        this._impuestos = impuestos
    }
    calcularImpuesto() {
        const totalImpuesto = (this._impuestos.getMontoBrutoAnual - this._impuestos.getDeducciones)*0.21
        console.log(`El impuesto total a pagar es: ${totalImpuesto}`)
        // return (`El impuesto total a pagar es: ${(this._impuestos()._montoBrutoAnual() - this._impuestos().deducciones()) * 0.21}`)
    }
}
