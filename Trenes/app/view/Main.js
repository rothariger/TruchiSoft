Ext.define('Trenes.view.Main', {
    extend: Ext.tab.Panel,
    xtype: 'main',

    config: {
        listeners: {
            initialize: function (pnl, opt) {
                var sEstacion = Ext.data.StoreManager.get('Estacion');
                sEstacion.filter("RamalId", 0);

                Ext.Viewport.mask({ xtype: 'loadmask' });
                navigator.geolocation.getCurrentPosition(function (position) {
                    var closest = null;
                    var mindist = 99999;

					var allRecords = Ext.data.StoreManager.get('Estacion').queryBy(function(){return true;});

					allRecords.each(function(r){
						if(r.data.Latitude == null || r.data.Longitude == null)
							return true;
						var dist = Haversine(r.data.Latitude, r.data.Longitude, position.coords.latitude, position.coords.longitude);
                        // check if this is the shortest distance so far
                        if (dist < mindist) {
                            closest = r;
                            mindist = dist;
                        }
					});
					
					if(closest){
						Ext.getCmp('sfRamal').setValue(closest.data.RamalId);
						Ext.getCmp('sfEstacion').setValue(closest.data.EstacionId);
					}
                    Ext.Viewport.unmask();
                }, function () {
                    Ext.Viewport.unmask();
                });

                function Haversine(lat1, lon1, lat2, lon2) {
                    var R = 6372.8; // Earth Radius in Kilometers

                    var dLat = Deg2Rad(lat2 - lat1);
                    var dLon = Deg2Rad(lon2 - lon1);

                    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                                    Math.cos(Deg2Rad(lat1)) * Math.cos(Deg2Rad(lat2)) *
                                    Math.sin(dLon / 2) * Math.sin(dLon / 2);
                    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                    var d = R * c;

                    // Return Distance in Kilometers
                    return d;
                }
				
				function Deg2Rad( deg ) {
				   return deg * Math.PI / 180;
				}
            }
        },
        items: [{
            xtype: 'panel',
            title: 'Horarios de Trenes',
            scrollable: {
                direction: 'vertical',
                directionLock: true
            },
                    items: [{
						id: 'sfRamal',
						xtype: 'selectfield',
                        label: 'Ramal',
                        store: 'Ramal',
                        displayField: 'RamalNombre',
                        valueField: 'RamalId',
                        listeners: {
                            change: function (ctl, nValue, oValue) {
							
                                var sEstacion = Ext.data.StoreManager.get('Estacion');
                        sEstacion.clearFilter();
                        sEstacion.filterBy(function (record) {
                            return record.get('RamalId') == nValue;
                        });
                            }
                        }
                    }, {
						id: 'sfEstacion',
                        xtype: 'selectfield',
                        label: 'Estacion',
                        store: 'Estacion',
                        displayField: 'EstacionNombre',
                valueField: 'EstacionId',
                listeners: {
                    change: function (ctl, nValue, oValue) {
                        cambiarEstacion();
                    }
                }
            }, {
                xtype: 'button',
                text: 'Recargar',
                handler: function () {
                    cambiarEstacion();
                }
                    }, {
                        xtype: 'fieldset',
                        margin: 'auto',
                        items: [{
                            id: 'fsIda',
                            xtype: 'fieldset',
                            title: 'Sentido',
                            items: [{
                                id: 'txIda1',
                                xtype: 'textfield',
                                label: 'Proximo',
                                readOnly: true
                            }, {
                                id: 'txIda2',
                                xtype: 'textfield',
                                label: 'Siguiente',
                                readOnly: true
                            }, {
                                id: 'txIda3',
                                xtype: 'textfield',
                                label: 'Siguiente',
                                readOnly: true
                            }]
                        }, {
                            id: 'fsVuelta',
                            xtype: 'fieldset',
                            title: 'Sentido',
                            items: [{
                                id: 'txVuelta1',
                                xtype: 'textfield',
                                label: 'Proximo',
                                readOnly: true
                            }, {
                                id: 'txVuelta2',
                                xtype: 'textfield',
                                label: 'Siguiente',
                                readOnly: true
                            }, {
                                id: 'txVuelta3',
                                xtype: 'textfield',
                                label: 'Siguiente',
                                readOnly: true
                            }]
                        }]
                    }]
                }]
            }
        ]
    }
});
