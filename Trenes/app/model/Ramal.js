Ext.define("Trenes.model.Ramal", {
    extend: "Ext.data.Model",
    config: {
        fields: [
            { name: "RamalId", type: "int" },
            { name: "RamalNombre", type: "string" }
        ]
    }
});