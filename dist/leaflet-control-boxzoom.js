L.Control.BoxZoom=L.Control.extend({options:{position:"topright"},initialize:function(t){L.setOptions(this,t),this.map=null,this.active=!1},onAdd:function(t){return this.map=t,this.active=!1,this.controlDiv=L.DomUtil.create("div","leaflet-control-boxzoom"),this.controlDiv.control=this,this.controlDiv.title="Click here then draw a square on the map, to zoom in to an area",this.controlDiv.innerHTML=" ",L.DomEvent.addListener(this.controlDiv,"mousedown",L.DomEvent.stopPropagation).addListener(this.controlDiv,"click",L.DomEvent.stopPropagation).addListener(this.controlDiv,"click",L.DomEvent.preventDefault).addListener(this.controlDiv,"click",function(){this.control.toggleState()}),this.setStateOff(),this.controlDiv},toggleState:function(){this.active?this.setStateOff():this.setStateOn()},setStateOn:function(){L.DomUtil.addClass(this.controlDiv,"leaflet-control-boxzoom-active"),this.active=!0,this.map.dragging.disable(),this.map.boxZoom.addHooks(),this.map.on("mousedown",this.handleMouseDown,this),this.map.on("boxzoomend",this.setStateOff,this)},setStateOff:function(){L.DomUtil.removeClass(this.controlDiv,"leaflet-control-boxzoom-active"),this.active=!1,this.map.off("mousedown",this.handleMouseDown,this),this.map.dragging.enable(),this.map.boxZoom.removeHooks()},handleMouseDown:function(t){this.map.boxZoom._onMouseDown.call(this.map.boxZoom,{clientX:t.originalEvent.clientX,clientY:t.originalEvent.clientY,which:1,shiftKey:!0})}}),L.Control.boxzoom=function(t){return new L.Control.BoxZoom(t)};