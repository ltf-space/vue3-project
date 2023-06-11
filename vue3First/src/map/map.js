import { Vector as VectorLayer, Tile, Image } from "ol/layer";
import { Vector as VectorSource, XYZ, ImageWMS, WMTS } from "ol/source";
import WMTSTileGrid from "ol/tilegrid/WMTS";
import { getVectorContext } from "ol/render";
import { get, createProjection, fromLonLat } from "ol/proj";
import { Translate, Select, Modify } from "ol/interaction";
import { click } from "ol/events/condition";
import Draw, { createBox } from "ol/interaction/Draw";
import Feature from "ol/Feature";
import View from "ol/View";

import Overlay from "ol/Overlay.js";
import { fromExtent, fromCircle } from "ol/geom/Polygon";
import {
  Point,
  LineString,
  Polygon,
  MultiPolygon,
  Circle,
  Geometry,
  LinearRing,
  Circle as CircleGeom,
} from "ol/geom";
import {
  Style,
  Fill,
  Text,
  Stroke,
  Circle as StyleCircle,
  Icon,
} from "ol/style";
import { GeoJSON, WKT } from "ol/format";

class Map {
  constructor(map) {
    this.map = map || window.map;
  }
  // 创建一个新图层
  createLayer(source, name, addMap = true, params = {}) {
    if (!source) {
      //实例化一个矢量图层Vector作为绘制层
      source = new VectorSource();
    }
    //创建一个图层
    var layer = new VectorLayer({
      name: name || "自定义图层",
      source,
      zIndex: params.zIndex || 999,
    });
    let style = new Style({
      fill: new Fill({
        color: "rgba(255, 255, 255, 0.5)",
      }),
      stroke: new Stroke({
        color: "#4397f7",
        width: 3,
      }),
      image: new StyleCircle({
        radius: 7,
        fill: new Fill({
          color: "red",
        }),
      }),
    });
    // 设置样式
    layer.setStyle(style);
    if (addMap) {
      //将绘制层添加到地图容器中
      this.map.addLayer(layer);
    }
    return layer;
  }
  // 添加xyz服务
  createByUrl(url, params = {}) {
    let layer = new Tile({
      zIndex: params.zIndex || 9,
      name: "",
      title: "测试标题",
      visible: true,
      source: new XYZ({
        url: url,
        params: { name: "ltf" },
        projection: "EPSG:4326",
      }),
    });
    this.map.addLayer(layer);
    return layer;
  }
  // 添加icon
  addicon(feature) {
    const iconFeature = new Feature({
      geometry: new Point([0, 0]),
      name: "Null Island",
      population: 4000,
      rainfall: 500,
    });

    const iconStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: "fraction",
        anchorYUnits: "pixels",
        src: "data/icon.png",
      }),
    });

    iconFeature.setStyle(iconStyle);

    const vectorSource = new VectorSource({
      features: [iconFeature],
    });
  }
  // 添加popup
  addPopup(ele) {
    const overlay = new Overlay({
      element: ele,
      offset: [0, 0],
      autoPan: {
        animation: {
          duration: 250,
        },
      },
    });
    this.map.addOverlay(overlay);
    return overlay;
  }
}
export default Map;
