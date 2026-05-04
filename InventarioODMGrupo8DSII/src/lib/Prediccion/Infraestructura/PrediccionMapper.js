const Prediccion = require("../Dominio/Entidad/Prediccion");

class PrediccionMapper {

  static toDomain(doc) {
    return new Prediccion({
      id: doc._id,
      productoId: doc.producto,
      horizonteDias: doc.horizonte_dias,
      stockActual: doc.stock_actual
    });
  }

  static toPersistence(entity) {
    return {
      producto: entity.productoId,
      horizonte_dias: entity.horizonteDias,
      stock_actual: entity.stockActual
    };
  }
}

module.exports = PrediccionMapper;