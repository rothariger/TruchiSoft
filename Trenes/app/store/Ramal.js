Ext.define("Trenes.store.Ramal", {
    //id: 'RamalStore',
    extend: "Ext.data.Store",
    requires: ['Trenes.model.Ramal'],
    config: {
        model: 'Trenes.model.Ramal',
		data: [
				{ RamalNombre: 'Seleccione un Ramal', RamalId: 0 },
				{ RamalNombre: 'Linea Sarmiento', RamalId: 1 },
				{ RamalNombre: 'Linea Mitre (Tigre)', RamalId: 5 },
				{ RamalNombre: 'Linea Mitre (Mitre)', RamalId: 7 },
				{ RamalNombre: 'Linea Mitre (J.L.Suarez)', RamalId: 9 },
				{ RamalNombre: 'Linea Roca (La Plata)', RamalId: 11 }
		]
    }
});