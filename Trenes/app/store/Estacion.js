Ext.define("Trenes.store.Estacion", {
    extend: "Ext.data.Store",
    requires: ['Trenes.model.Estacion'],
    config: {
        model: 'Trenes.model.Estacion',
		data: [
            { RamalId: 0, EstacionId: 1, EstacionNombre: 'Seleccione un Ramal', Latitude: null, Longitude: null },
            { RamalId: 1, EstacionId: 1, EstacionNombre: 'Once', Latitude: -34.6085914, Longitude: -58.4075590 },
            { RamalId: 1, EstacionId: 2, EstacionNombre: 'Caballito', Latitude: -34.6192442, Longitude: -58.4436522 },
            { RamalId: 1, EstacionId: 3, EstacionNombre: 'Flores', Latitude: -34.6278504, Longitude: -58.4661766 },
            { RamalId: 1, EstacionId: 4, EstacionNombre: 'Floresta', Latitude: -34.6323755, Longitude: -58.4808913 },
            { RamalId: 1, EstacionId: 5, EstacionNombre: 'Villa Luro', Latitude: -34.6362494, Longitude: -58.5021311 },
            { RamalId: 1, EstacionId: 6, EstacionNombre: 'Liniers', Latitude: -34.6388728, Longitude: -58.5263409 },
            { RamalId: 1, EstacionId: 7, EstacionNombre: 'Ciudadela', Latitude: -34.6399227, Longitude: -58.5411225 },
            { RamalId: 1, EstacionId: 8, EstacionNombre: 'Ramos Mejia', Latitude: -34.6403849, Longitude: -58.5639475 },
            { RamalId: 1, EstacionId: 9, EstacionNombre: 'Haedo', Latitude: -34.6445334, Longitude: -58.5918534 },
            { RamalId: 1, EstacionId: 10, EstacionNombre: 'Moron', Latitude: -34.6482227, Longitude: -58.6198135 },
            { RamalId: 1, EstacionId: 11, EstacionNombre: 'Castelar', Latitude: -34.6520275, Longitude: -58.6421189 },
            { RamalId: 1, EstacionId: 12, EstacionNombre: 'Ituzaingo', Latitude: -34.6596506, Longitude: -58.6663871 },
            { RamalId: 1, EstacionId: 13, EstacionNombre: 'Padua', Latitude: -34.6654259, Longitude: -58.6979972 },
            { RamalId: 1, EstacionId: 14, EstacionNombre: 'Merlo', Latitude: -34.6644693, Longitude: -58.7276850 },
            { RamalId: 1, EstacionId: 15, EstacionNombre: 'Paso del Rey', Latitude: -34.6582665, Longitude: -58.7619414 },
            { RamalId: 1, EstacionId: 16, EstacionNombre: 'Moreno', Latitude: -34.6504439, Longitude: -58.7895979 },
            { RamalId: 5, EstacionId: 1, EstacionNombre: 'Retiro', Latitude: -34.5907031, Longitude: -58.3748806 },
            { RamalId: 5, EstacionId: 2, EstacionNombre: 'L. de la Torre', Latitude: -34.5625299, Longitude: -58.4367116 },
            { RamalId: 5, EstacionId: 3, EstacionNombre: 'Belgrano C', Latitude: -34.5588016, Longitude: -58.4489445 },
            { RamalId: 5, EstacionId: 4, EstacionNombre: 'Nu�ez', Latitude: -34.5478335, Longitude: -58.4631492 },
            { RamalId: 5, EstacionId: 5, EstacionNombre: 'Rivadavia', Latitude: -34.5365204, Longitude: -58.4680326 },
            { RamalId: 5, EstacionId: 6, EstacionNombre: 'Vicente Lopez', Latitude: -34.5247233, Longitude: -58.4728065 },
            { RamalId: 5, EstacionId: 7, EstacionNombre: 'Olivos', Latitude: -34.5077139, Longitude: -58.4806636 },
            { RamalId: 5, EstacionId: 8, EstacionNombre: 'La Lucila', Latitude: -34.4975978, Longitude: -58.4884466 },
            { RamalId: 5, EstacionId: 9, EstacionNombre: 'Martinez', Latitude: -34.4885346, Longitude: -58.4965804 },
            { RamalId: 5, EstacionId: 10, EstacionNombre: 'Acassuso', Latitude: -34.4800686, Longitude: -58.5038385 },
            { RamalId: 5, EstacionId: 11, EstacionNombre: 'San Isidro', Latitude: -34.4722074, Longitude: -58.5133831 },
            { RamalId: 5, EstacionId: 12, EstacionNombre: 'Beccar', Latitude: -34.4608043, Longitude: -58.5265437 },
            { RamalId: 5, EstacionId: 13, EstacionNombre: 'Victoria', Latitude: -34.4561533, Longitude: -58.5411284 },
            { RamalId: 5, EstacionId: 14, EstacionNombre: 'Virreyes', Latitude: -34.4506827, Longitude: -58.5507001 },
            { RamalId: 5, EstacionId: 15, EstacionNombre: 'San Fernando', Latitude: -34.4443381, Longitude: -58.5587407 },
            { RamalId: 5, EstacionId: 16, EstacionNombre: 'Carupa', Latitude: -34.4369176, Longitude: -58.5682318 },
            { RamalId: 5, EstacionId: 17, EstacionNombre: 'Tigre', Latitude: -34.4235670, Longitude: -58.5817289 },
            { RamalId: 7, EstacionId: 1, EstacionNombre: 'Retiro', Latitude: -34.5907031, Longitude: -58.3748806 },
            { RamalId: 7, EstacionId: 2, EstacionNombre: '3 de Febrero', Latitude: -34.5717485, Longitude: -58.4249824 },
            { RamalId: 7, EstacionId: 3, EstacionNombre: 'M. Carranza', Latitude: -34.5752730, Longitude: -58.4337443 },
            { RamalId: 7, EstacionId: 4, EstacionNombre: 'Colegiales', Latitude: -34.5729746, Longitude: -58.4482530 },
            { RamalId: 7, EstacionId: 5, EstacionNombre: 'Belgrano R', Latitude: -34.5680506, Longitude: -58.4618081 },
            { RamalId: 7, EstacionId: 6, EstacionNombre: 'Coghlan', Latitude: -34.5652607, Longitude: -58.4753485 },
            { RamalId: 7, EstacionId: 7, EstacionNombre: 'Saavedra', Latitude: -34.5540735, Longitude: -58.4870632 },
            { RamalId: 7, EstacionId: 8, EstacionNombre: 'Juan B. Justo', Latitude: -34.5425501, Longitude: -58.4946570 },
            { RamalId: 7, EstacionId: 9, EstacionNombre: 'Florida', Latitude: -34.5304745, Longitude: -58.4944563 },
            { RamalId: 7, EstacionId: 10, EstacionNombre: 'Dr. Cetrangolo', Latitude: -34.5230887, Longitude: -58.4941300 },
            { RamalId: 7, EstacionId: 11, EstacionNombre: 'Mitre', Latitude: -34.5150276, Longitude: -58.4892365 },
            { RamalId: 9, EstacionId: 1, EstacionNombre: 'Retiro', Latitude: -34.5907031, Longitude: -58.3748806 },
            { RamalId: 9, EstacionId: 2, EstacionNombre: '3 de Febrero', Latitude: -34.5717485, Longitude: -58.4249824 },
            { RamalId: 9, EstacionId: 3, EstacionNombre: 'M. Carranza', Latitude: -34.5752730, Longitude: -58.4337443 },
            { RamalId: 9, EstacionId: 4, EstacionNombre: 'Colegiales', Latitude: -34.5729746, Longitude: -58.4482530 },
            { RamalId: 9, EstacionId: 5, EstacionNombre: 'Belgrano R', Latitude: -34.5680506, Longitude: -58.4618081 },
            { RamalId: 9, EstacionId: 6, EstacionNombre: 'L.M.Drago', Latitude: -34.5684173, Longitude: -58.4789912 },
            { RamalId: 9, EstacionId: 7, EstacionNombre: 'Urquiza', Latitude: -34.5747120, Longitude: -58.4878391 },
            { RamalId: 9, EstacionId: 8, EstacionNombre: 'Pueyrredon', Latitude: -34.5804962, Longitude: -58.5018980 },
            { RamalId: 9, EstacionId: 9, EstacionNombre: 'Miguelete', Latitude: -34.5810718, Longitude: -58.5170793 },
            { RamalId: 9, EstacionId: 10, EstacionNombre: 'San Martin', Latitude: -34.5734195, Longitude: -58.5319579 },
            { RamalId: 9, EstacionId: 11, EstacionNombre: 'San Andres', Latitude: -34.5635642, Longitude: -58.5406609 },
            { RamalId: 9, EstacionId: 12, EstacionNombre: 'Malaver', Latitude: -34.5573725, Longitude: -58.5479328 },
            { RamalId: 9, EstacionId: 13, EstacionNombre: 'Villa Ballester', Latitude: -34.5511617, Longitude: -58.5558262 },
            { RamalId: 9, EstacionId: 14, EstacionNombre: 'Chilavert', Latitude: -34.5422320, Longitude: -58.5669170 },
            { RamalId: 9, EstacionId: 15, EstacionNombre: 'J.L. Suarez', Latitude: -34.5348489, Longitude: -58.5758471 },
            { RamalId: 11, EstacionId: 1, EstacionNombre: 'Constitucion', Latitude: -34.6283673, Longitude: -58.3806149 },
            { RamalId: 11, EstacionId: 2, EstacionNombre: 'Avellaneda', Latitude: -34.6613896, Longitude: -58.3768325 },
            { RamalId: 11, EstacionId: 3, EstacionNombre: 'Sarandi', Latitude: -34.6787475, Longitude: -58.3449626 },
            { RamalId: 11, EstacionId: 4, EstacionNombre: 'Villa Dominico', Latitude: -34.6915355, Longitude: -58.3253499 },
            { RamalId: 11, EstacionId: 5, EstacionNombre: 'Wilde', Latitude: -34.6975894, Longitude: -58.3111938 },
            { RamalId: 11, EstacionId: 6, EstacionNombre: 'Don Bosco', Latitude: -34.7033242, Longitude: -58.2961718 },
            { RamalId: 11, EstacionId: 7, EstacionNombre: 'Bernal', Latitude: -34.7092611, Longitude: -58.2805690 },
            { RamalId: 11, EstacionId: 8, EstacionNombre: 'Quilmes', Latitude: -34.7246461, Longitude: -58.2606591 },
            { RamalId: 11, EstacionId: 9, EstacionNombre: 'Ezpeleta', Latitude: -34.7518509, Longitude: -58.2341863 },
            { RamalId: 11, EstacionId: 10, EstacionNombre: 'Berazategui', Latitude: -34.7640977, Longitude: -58.2084433 },
            { RamalId: 11, EstacionId: 11, EstacionNombre: 'Platanos', Latitude: -34.7823359, Longitude: -58.1707596 },
            { RamalId: 11, EstacionId: 12, EstacionNombre: 'Hudson', Latitude: -34.7911192, Longitude: -58.1552692 },
            { RamalId: 11, EstacionId: 13, EstacionNombre: 'Pereyra', Latitude: -34.8366304, Longitude: -58.0945403 },
            { RamalId: 11, EstacionId: 14, EstacionNombre: 'Villa Elisa', Latitude: -34.8495861, Longitude: -58.0751851 },
            { RamalId: 11, EstacionId: 15, EstacionNombre: 'City Bell', Latitude: -34.8657239, Longitude: -58.0420495 },
            { RamalId: 11, EstacionId: 16, EstacionNombre: 'Gonnet', Latitude: -34.8798410, Longitude: -58.0107856 },
            { RamalId: 11, EstacionId: 17, EstacionNombre: 'Ringuelet', Latitude: -34.8813876, Longitude: -57.9960622 },
            { RamalId: 11, EstacionId: 18, EstacionNombre: 'Tolosa', Latitude: -34.8909547, Longitude: -57.9680983 },
            { RamalId: 11, EstacionId: 19, EstacionNombre: 'La Plata', Latitude: -34.9038945, Longitude: -57.9501740 }
		]
    }
});