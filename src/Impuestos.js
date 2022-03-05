export default class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual
        this._deducciones = deducciones
    }
    getMontoBrutoAnual() {
        return this._montoBrutoAnual()
    }

    setMontoBrutoAnual(montoBrutoAnual) {
        this._montoBrutoAnual = montoBrutoAnual
    }
    getDeducciones() {
        return this._deducciones()
    }
    setDeducciones(deducciones) {
        this._deducciones = deducciones
    }
}
