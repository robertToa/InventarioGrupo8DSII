class Cliente {
    constructor({ id, identificacion, nombre, email, telefono, direccion, activo }) {
        this.id = id || null;
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
        this.activo = activo ?? true;

        this.validar();
    }
    
    validar() {
        if (!this.nombre) throw new Error("Nombre obligatorio");
        if (!this.identificacion) throw new Error("Identificacion obligatorio");
    }
}

module.exports = Cliente;