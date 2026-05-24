var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: 'водохранная зона _',
                interactive: true,
                title: '<img src="styles/legend/__1.png" /> водохранная зона _'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'дома в жилой зоне',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> дома в жилой зоне'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'здания ферм',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> здания ферм'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'лес на пашне',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> лес на пашне'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'лесопилорамма',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> лесопилорамма'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'Пашня',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> Пашня'
            });

lyr_OSMStandard_0.setVisible(true);lyr___1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr___1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6];
lyr___1.set('fieldAliases', {'fid': 'fid', 'название': 'название', 'прибрежная полоса ': 'прибрежная полоса ', 'Водохранная зона': 'Водохранная зона', });
lyr__2.set('fieldAliases', {'fid': 'fid', });
lyr__3.set('fieldAliases', {'fid': 'fid', });
lyr__4.set('fieldAliases', {'fid': 'fid', });
lyr__5.set('fieldAliases', {'fid': 'fid', 'название': 'название', 'санитарная зона': 'санитарная зона', });
lyr__6.set('fieldAliases', {'fid': 'fid', });
lyr___1.set('fieldImages', {'fid': '', 'название': '', 'прибрежная полоса ': '', 'Водохранная зона': '', });
lyr__2.set('fieldImages', {'fid': '', });
lyr__3.set('fieldImages', {'fid': '', });
lyr__4.set('fieldImages', {'fid': '', });
lyr__5.set('fieldImages', {'fid': '', 'название': '', 'санитарная зона': '', });
lyr__6.set('fieldImages', {'fid': '', });
lyr___1.set('fieldLabels', {'fid': 'no label', 'название': 'no label', 'прибрежная полоса ': 'no label', 'Водохранная зона': 'no label', });
lyr__2.set('fieldLabels', {'fid': 'no label', });
lyr__3.set('fieldLabels', {'fid': 'no label', });
lyr__4.set('fieldLabels', {'fid': 'no label', });
lyr__5.set('fieldLabels', {'fid': 'no label', 'название': 'no label', 'санитарная зона': 'no label', });
lyr__6.set('fieldLabels', {'fid': 'no label', });
lyr__6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});