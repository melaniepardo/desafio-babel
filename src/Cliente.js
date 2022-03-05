export default class Cliente {
    constructor(nombre, impuestos) {
        this._nombre = nombre
        this._impuestos = impuestos
    }
    getNombre() {
        return this._nombre()
    }

    setNombre(nombre) {
        this._nombre = nombre
    }
    getImpuestos() {
        return this._impuestos()
    }
    setImpuestos(impuestos) {
        this._impuestos = impuestos
    }
    calcularImpuesto() {
        return (`El impuesto total a pagar es: ${(this._impuestos()._montoBrutoAnual() - this._impuestos().deducciones()) * 0.21}`)
    }
}
