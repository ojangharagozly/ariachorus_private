
	//primary loop
	var main = function(){	
		var headscripts = 
			[  	"<meta name='viewport' content='initial-scale=1.0'>",
				"<meta charset='utf-8'>",
				"<title>Aria Chorus Media Youtube Map & Oregon Data</title>",
				"<og:type='map' />",
				"<meta type='description' content='Aria Chorus digital media Google map provided by Ojan Mohamad Gharagozly O'MGM & Youtube API.' />",
				"<meta keywords='Aria Chorus digital media Google map provided by Ojan Mohamad Gharagozly OMGM & Youtube API. Being held hostage in Phoenix and am being constantly forced to state I am guilty of crimes I do not commit and Hollywood will not stop harassing me.' />",
				"<script src='auth.js' type='text/javascript'></script>",
				"<script src='jq.min.js' type='text/javascript' ></script>",
				"<script src='mapfunctions.js' type='text/javascript' ></script>",
				"<script src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDnUboLp8QJIoEzXlu8ftOHzXgiLx3mZDc&libraries=places>'",
				"<script src='https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js>'",
				"<link href='style.css' rel='stylesheet' />",
				"<link href='maps.css' rel='stylesheet' />"
			];
			for(var i=0;i<headscripts.length;i++)
			{a=headscripts[i];
				$('head').append(a);
			}
				$('map').append("<div id='side'></div>");
		}
			var countHashes = function(){
				var hashCount = 0;
				var a=window.location.hash;
					a=a.split("");
					for(var i=0;i<a.length;i++){
						b=a[i];
						if(b==='#'){hashCount +=1;}
					}
				return hashCount;
			};	

	var buildMeta = function(type,content,hash){
		if(type==='description'){
			a='<meta type='+type+' content='+content+' />';
			$('head').append(a);
		}
	}
		var gidEvent = function(x, func){
		var g = document.getElementById(x);
			g.addEventListener('click', func, false);
	};
	var fc=function(c){
	var g=document.body;
	return g.firstChild=c;
	};
	var newWindow = function(u){
		return window.open(u);
	};
	var openGMAP = function(map){
	var nw = newWindow(window.location+map);
	var doctype = '<!DOCTYPE html><html><head></head><body></body></html>';
	
	var printDoc = printPreview.document;
	var mapLayout;
		printDocument.open();
		printDocument.write(doctype);
		document.body.innerHTML = mapLayout;
		if(countHashes() > 0){
			document.getElementById('body').innerHTML = '<div id="map"></div>';
			console.log("Child Added to Attribute Node: "+"map");
		}
	};
