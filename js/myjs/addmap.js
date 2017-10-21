function addGeoTest(point,info){ 
var geometry = new SuperMap.Geometry.Point( point.x ,point.y); 
var pointFeature = new SuperMap.Feature.Vector(geometry); 
var styleTest = { 
      label:info, 
      fontColor:"#0000ff", 
      fontOpacity:"0.5", 
      fontFamily:"隶书", 
      fontSize:"10pm", 
      fontWeight:"bold", 
      fontStyle:"italic", 
      labelSelect:"true", 
   } 
         pointFeature.style = styleTest; 
        vectorLayer.addFeatures([pointFeature]); 
       }