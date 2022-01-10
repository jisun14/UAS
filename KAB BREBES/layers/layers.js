var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_JumlahPendTahun_0 = new ol.format.GeoJSON();
var features_JumlahPendTahun_0 = format_JumlahPendTahun_0.readFeatures(json_JumlahPendTahun_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JumlahPendTahun_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_JumlahPendTahun_0.addFeatures(features_JumlahPendTahun_0);var lyr_JumlahPendTahun_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JumlahPendTahun_0, 
                style: style_JumlahPendTahun_0,
    title: 'Jumlah Pend\Tahun<br />\
    <img src="styles/legend/JumlahPendTahun_0_0.png" />  59027 - 81130 <br />\
    <img src="styles/legend/JumlahPendTahun_0_1.png" />  81130 - 103233 <br />\
    <img src="styles/legend/JumlahPendTahun_0_2.png" />  103233 - 125336 <br />\
    <img src="styles/legend/JumlahPendTahun_0_3.png" />  125336 - 147439 <br />\
    <img src="styles/legend/JumlahPendTahun_0_4.png" />  147439 - 169542 <br />'
        });

lyr_JumlahPendTahun_0.setVisible(true);
var layersList = [baseLayer,lyr_JumlahPendTahun_0];
lyr_JumlahPendTahun_0.set('fieldAliases', {'id': 'id', 'Kecamatan': 'Kecamatan', '2016': '2016', '2017': '2017', '2018': '2018', '2019': '2019', '2020': '2020', 'KODE POS': 'KODE POS', });
lyr_JumlahPendTahun_0.set('fieldImages', {'id': 'TextEdit', 'Kecamatan': 'TextEdit', '2016': 'TextEdit', '2017': 'TextEdit', '2018': 'TextEdit', '2019': 'TextEdit', '2020': 'TextEdit', 'KODE POS': 'TextEdit', });
lyr_JumlahPendTahun_0.set('fieldLabels', {'id': 'inline label', 'Kecamatan': 'inline label', '2016': 'inline label', '2017': 'inline label', '2018': 'inline label', '2019': 'inline label', '2020': 'inline label', 'KODE POS': 'inline label', });
lyr_JumlahPendTahun_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});