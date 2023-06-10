<!--test-->
<template>
  <div style="height: 100vh;width: 100vw;" id="map"></div>
</template>

<script setup>
import 'ol/ol.css'
import { Map, View } from 'ol'
import TileLayer from 'ol/layer/Tile'
import OSM from 'ol/source/OSM'
import XYZ from 'ol/source/XYZ.js';
import { ref, onMounted } from 'vue'
import lMap from './map'
let map = ref(null)
const emit = defineEmits('evtParams')
// 添加影像
const addYxLayer = () => {
  let cslayer = window.lMap.createLayer(null, 'ceshi', true)
  window.lMap.createByUrl('http://t{1-5}.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=56256b95d1c6012da8548c4f81363f8e')
}
onMounted(() => {
  map = new Map({
    target: "map",
    layers: [
      new TileLayer({
        source: new XYZ({
          url:
            'http://t{1-5}.tianditu.gov.cn/DataServer?T=vec_w&x={x}&y={y}&l={z}&tk=56256b95d1c6012da8548c4f81363f8e',
        }),
        zIndex: 10
      }),
      // 注记
      new TileLayer({
        source: new XYZ({
          url:
            'http://t{1-5}.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=56256b95d1c6012da8548c4f81363f8e',
        }),
        zIndex: 10
      }),
    ],
    view: new View({
      projection: "EPSG:4326",    //使用这个坐标系
      center: [116.5, 40.5],  //
      zoom: 9
    })
  });
  window.gisMap = map
  window.lMap = new lMap(map)
  // 添加影响过图层
  addYxLayer()
  map.on('singleclick',(evt) => {
    emit('evtParams',evt.coordinate)
  })
})
</script>