Ext.define("Trenes.model.Estacion", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "RamalId", type: "int" },
            { name: "EstacionId", type: "int" },
            { name: "EstacionNombre", type: "string" },
            { name: "Latitude", type: "float" },
            { name: "Longitude", type: "float" }
        ]
    }
});