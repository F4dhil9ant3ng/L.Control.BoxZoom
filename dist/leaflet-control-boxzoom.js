L.Control.BoxZoom=L.Control.extend({options:{position:"topright",title:"Click here then draw a square on the map, to zoom in to an area"},initialize:function(a){L.setOptions(this,a),this.map=null,this.active=!1},onAdd:function(a){if(this.map=a,this.active=!1,this.controlDiv=L.DomUtil.create("div","leaflet-control-boxzoom"),this.controlDiv.control=this,this.controlDiv.title=this.options.title,this.controlDiv.innerHTML=" ",L.DomEvent.addListener(this.controlDiv,"mousedown",L.DomEvent.stopPropagation).addListener(this.controlDiv,"click",L.DomEvent.stopPropagation).addListener(this.controlDiv,"click",L.DomEvent.preventDefault).addListener(this.controlDiv,"click",function(){this.control.toggleState()}),this.setStateOff(),this.options.iconClasses){var b=L.DomUtil.create("i",this.options.iconClasses,this.controlDiv);b?(b.style.color=this.options.iconColor||"black",b.style.textAlign="center",b.style.verticalAlign="middle"):console.log("Unable to create element for icon")}return this.controlDiv},toggleState:function(){this.active?this.setStateOff():this.setStateOn()},setStateOn:function(){L.DomUtil.addClass(this.controlDiv,"leaflet-control-boxzoom-active"),this.active=!0,this.map.dragging.disable(),this.options.enableShiftDrag||this.map.boxZoom.addHooks(),this.map.on("mousedown",this.handleMouseDown,this),this.map.on("boxzoomend",this.setStateOff,this),this.options.keepOn||this.map.on("boxzoomend",this.setStateOff,this),L.DomUtil.addClass(this.map._container,"leaflet-control-boxzoom-active")},setStateOff:function(){L.DomUtil.removeClass(this.controlDiv,"leaflet-control-boxzoom-active"),this.active=!1,this.map.off("mousedown",this.handleMouseDown,this),this.map.dragging.enable(),this.options.enableShiftDrag||this.map.boxZoom.removeHooks(),L.DomUtil.removeClass(this.map._container,"leaflet-control-boxzoom-active")},handleMouseDown:function(a){this.map.boxZoom._onMouseDown.call(this.map.boxZoom,{clientX:a.originalEvent.clientX,clientY:a.originalEvent.clientY,which:1,shiftKey:!0})}}),L.Control.boxzoom=function(a){return new L.Control.BoxZoom(a)};
