// 設定 Mapbox Access Token
mapboxgl.accessToken = 'pk.eyJ1Ijoicnlhbm1hMzAiLCJhIjoiY201b3NkOG11MG9yYTJtcWF6cmVua2xwZyJ9.MrpueCdCb70KgO23sbDwlQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // 或者你可以使用自定義樣式
    center: [121.5645, 25.0330], // 台北
    zoom: 13,
});
// 新增一個導航控制器 可選
map.addControl(new mapboxgl.NavigationControl());
// 等地圖加載完成後，載入 GeoJSON 數據
map.on('load', function() {
    // 添加 GeoJSON 數據源，從 GitHub 原始 URL 加載
    map.addSource('geojson-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/ryanma20/GeoRyanMa/fceaf56468533af1737f2b8a3e60f222dd6269bc/Neihui.geojson' // 使用 GitHub 原始 URL
    });

    // 添加層來顯示 GeoJSON 點數據
    map.addLayer({
        id: 'points',
        type: 'circle',
        source: 'geojson-data',
        paint: {
            'circle-color': '#FF5733',
            'circle-radius': 8
        }
    });

    // 添加層來顯示 GeoJSON 多邊形數據
    map.addLayer({
        id: 'polygons',
        type: 'fill',
        source: 'geojson-data',
        paint: {
            'fill-color': 'rgba(255, 87, 51, 0.5)', // 半透明橙色
            'fill-outline-color': '#FF5733'
        }
    });
});

