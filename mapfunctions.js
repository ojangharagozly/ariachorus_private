 var map,titles=false,listenerFunctions=[],vd=false,
 authenticated=false,showPad=false, markerArr=[],
 h=document.location.hash,loaded=false,notePadVisible=false,hashurl='',

 documents = 
			[
				{	'docs': '200', 
					'Document':'CW Civil Suit',
					'Location':'C:/\/\Users/\MOJANG/\Desktop/\Peace/\CW NETWORK'
				},
				{
					'docs': '201',
					'Document':'Bayless & Inception & 300 Civil Suit',
					'Location':'C:/\/\Users/\MOJANG/\Desktop/\Peace/\BAYLESS'
				}
			];
					
 image='https://fmdmp3.club/template/img/favicon.png';
 function initMap() {
	$('body').append('<div id="map"></div>');	
		var home = {lat:45.4968389,lng:-122.8739941}; 
			map=new google.maps.Map(document.getElementById('map'), {
				center:home,zoom:8,
			styles: [
			{elementType:'geometry',stylers:[{color: '#242f3e'}]},{elementType:'labels.text.stroke',stylers: [{color: '#242f3e'}]},
            {elementType:'labels.text.fill',stylers:[{color: '#746855'}]},{featureType:'administrative.locality',elementType:'labels.text.fill',stylers:[{color:'#d59563'}]},//test
			{featureType: 'poi',elementType: 'labels.text.fill',stylers: [{color: '#d59563'}]},//test		
            {featureType: 'poi.park',elementType: 'geometry',stylers: [{color: '#263c3f'}]},
            {featureType: 'poi.park',elementType: 'labels.text.fill',stylers: [{color: '#6b9a76'}]},
            {featureType: 'road',elementType: 'geometry',stylers: [{color: '#38414e'}]},
            {featureType: 'road',elementType: 'geometry.stroke',stylers: [{color: '#212a37'}]},
            {featureType: 'road',elementType: 'labels.text.fill',stylers: [{color: '#9ca5b3'}]},
            {featureType: 'road.highway',elementType: 'geometry',stylers: [{color: '#746855'}]},
            {featureType: 'road.highway',elementType: 'geometry.stroke',stylers: [{color: '#1f2835'}]},
            {featureType: 'road.highway',elementType: 'labels.text.fill',stylers: [{color: '#f3d19c'}]},
            {featureType: 'transit',elementType: 'geometry',stylers: [{color: '#2f3948'}]},
            {featureType: 'transit.station',elementType: 'labels.text.fill',stylers: [{color: '#d59563'}]},
            {featureType: 'water',elementType: 'geometry',stylers: [{color: '#17263c'}]},
            {featureType: 'water',elementType: 'labels.text.fill',stylers: [{color: '#515c6d'}]},
            {featureType: 'water',elementType: 'labels.text.stroke',stylers: [{color: '#17263c'}]}
		]});
	homeMarker = new google.maps.Marker({position:{lat:33.5550169,lng: -112.0447369},map:map,icon:image, title:'RING MOVIE - CREDITS DIRECTOR OF PHOTOGRAPHY B OJAN B AZ E LL I, MOUNTAINS NEXT DOOR MAP OUT BIRTHDAY OUTPUTS LIKE A SETUP'}); 
		homeMarker.addListener('click', function(){vmarker(arr[67],h);});
	busMarker = new google.maps.Marker({position:{lat:33.5529149,lng: -112.0989849},map:map,icon:image}); 
		busMarker.addListener('click', function(){vmarker(arr[17],h);});  
	busMarker2 = new google.maps.Marker({position:{lat:33.55297,lng:-112.0560895}, map: map, icon: image, title:'Albertsons Pharmacy Said They Do Not Transcribe'}); 
		busMarker2.addListener('click', function(){vmarker(arr[10],h);});   
	collegeMarker = new google.maps.Marker({ position: {lat: 33.6528415, lng:-112.0103483}, map: map, icon:image,docs:'201',title:'Reference to Entire Phoenix Experience & Dr. Greene of Bayless Medical.' }); 
		collegeMarker.addListener('click', function(){vmarker(arr[68],h);});
	weidlerMarker = new google.maps.Marker({ position: {lat: 45.5343381,lng: -122.6623587},map:map,icon:image}); 
		weidlerMarker.addListener('click', function(){vmarker(arr[5],h);});
	grandmotherMarker = new google.maps.Marker({ position: {lat: 33.5867835,lng: -112.0163244},map:map,icon:image});
		grandmotherMarker.addListener('click', function(){vmarker(arr[63],h);});
	portlandHomeMarker = new google.maps.Marker({ position: {lat:45.4654621,lng:-122.8763639},map:map,icon:image });
		portlandHomeMarker.addListener('click', function(){vmarker(arr[64],h);});
	warnerBrosMarker = new google.maps.Marker({position:{ lat:33.3354183,lng: -111.8951963},map:map,icon:image,
	title:'Reference to reason why I felt uncomfortable working at GoDaddy. TRON OR "TROJAN GHARAGOZ LYON" KEYS attach to my name and all too familiar. And ENCOM Relative name to Enron..'});
		warnerBrosMarker.addListener('click', function(){vmarker(arr[21],h);});
	warnerBrosMarker2 = new google.maps.Marker({position:{ lat:33.3353242,lng:-111.8978463},map:map,icon: image,
	title:'Second Reference to reason why I felt uncomfortable working at GoDaddy. Catwoman Bane as MGM LION,Bane is depicted as a terrorizing psycho. My initials MG and the shute and warner street. Refer to Birthday Keys.'});
		warnerBrosMarker2.addListener('click', function(){vmarker(arr[65],h);});
	talkingStickMarker = new google.maps.Marker({position:{ lat:33.540113,lng:-111.8720377},map:map,icon: image});
		talkingStickMarker.addListener('click', function(){vmarker(arr[66],h);});
	talkingStickMarker2 = new google.maps.Marker({position:{ lat:33.540128,lng:-111.8720370},map:map,icon: image});
		talkingStickMarker2.addListener('click', function(){vmarker('_EUjQzU5QQ0',h);});
	greensPointMarker = new google.maps.Marker({position:{ lat:33.6003242,lng:-111.9928756},map:map,icon: image});
		greensPointMarker.addListener('click', function(){vmarker(arr[69],h);});
	paradiseValleyTheatreMarker = new google.maps.Marker({position:{ lat:33.602918,lng:-111.9863947},map:map, icon: image});
		paradiseValleyTheatreMarker.addListener('click', function(){vmarker(arr[70],h);});
	millAvenueDateMarker = new google.maps.Marker({position:{lat:33.4241402,lng:-111.9438882},map:map,icon: image});
		millAvenueDateMarker.addListener('click',function(){vmarker(arr[71],h);});
	eugeneApartmentMarker = new google.maps.Marker({position:{lat:44.0668716,lng:-123.1836973},map:map,icon: image});
		eugeneApartmentMarker.addListener('click',function(){vmarker(arr[72],h);});
	universityOfOregonMarker = new google.maps.Marker({position:{lat:44.0429974,lng:-123.0731914},map:map,icon: image, docs:'200', title:'University of Oregon Ducks Connection to CW Networks Nikita.'});
		universityOfOregonMarker.addListener('click',function(){vmarker(arr[200],h);});		
	jadenMarker = new google.maps.Marker({position:{lat:45.4970244,lng:-122.874028},map:map,icon:image,
		title:'Ex Girlfriend Model and Other People I know modeled refer to top view of MGM GRANDE HOTEL in Las Vegas'});
		jadenMarker.addListener('click',function(){vmarker(arr[73],h);});
	jadenMarker2 = new google.maps.Marker({position:{lat:45.4968389,lng:-122.8739941},map:map,icon:image,docs:'200',title:'Nikita CW Street Addresses Jaden and Alexendra with reference to Eugene as Alexandra as Male and La Center Connection from Eugene Videos Explain.'});
		jadenMarker2.addListener('click',function(){vmarker(arr[74],h);});
	nikitaMarker = new google.maps.Marker({position:{lat:45.4966389,lng:-122.87399},map:map,icon:image, docs:'200', title:'Reference to Alexander Street as Alexandra. Connection to Bi-sexual reference in Washington, Larissa.'});
		nikitaMarker.addListener('click',function(){vmarker(arr[201],h);});
	laCenterMarket = new google.maps.Marker({position:{lat:45.8618827,lng:-122.6758876},map:map,icon:image});
		laCenterMarket.addListener('click',function(){vmarker(arr[75],h);});
	alohaHighMarker = new google.maps.Marker({position:{lat:45.4846942,lng:-122.8711172},map:map,icon:image});
		alohaHighMarker.addListener('click',function(){vmarker(arr[76],h);});
	alohaHighMarker2 = new google.maps.Marker({position:{lat:45.4846942,lng:-122.8695829},map:map,icon:image});
		alohaHighMarker2.addListener('click',function(){vmarker(arr[77],h);});
	cooperMountainMarker = new google.maps.Marker({position:{lat:45.4505291,lng:-122.885814},map:map,icon:image,
	title:'Video with circular false light document meant to destroy my reputation illegally by using my mother as the signature.'});
		cooperMountainMarker.addListener('click',function(){vmarker(arr[78],h);});
	sickMarker = new google.maps.Marker({position:{lat:45.465991,lng:-122.8755736},map:map,icon:image});
		sickMarker.addListener('click',function(){vmarker(arr[79],h);});
	tsMarker = new google.maps.Marker({position:{lat:33.3414186,lng:-111.9073668},map:map,icon:image});
		tsMarker.addListener('click', function(){vmarker(arr[97],h);});
	tsMarker2 = new google.maps.Marker({position:{lat:33.3422869,lng:-111.907332},map:map,icon:image});
		tsMarker2.addListener('click', function(){vmarker(arr[96],h);});
	drakeMarker = new google.maps.Marker({position:{lat:33.3547579,lng:-111.9174354},map:map,icon:image});
		drakeMarker.addListener('click', function(){vmarker(arr[98],h);});
	drGreenMarker = new google.maps.Marker({position:{lat:33.4898858,lng:-112.0696563},map:map,icon:image,docs:'201',		
		title:'Video Depicting Crystals at a Bar with "Rod Greene" from Marketing.. Reference of intent by Bayless Medical.. Refer to Bayless Pseudo Suit.'});
		drGreenMarker.addListener('click', function(){vmarker('dmnM4YmWIhU',h);});
	socialNetworkMarker = new google.maps.Marker({position:{lat:45.4974799,lng:-122.874372},map:map,icon:image,title:'Dorna Karandish Reference'});
		socialNetworkMarker.addListener('click',function(){vmarker('VlSkPA60ujQ',h);});
	//socialNetworkMarker2 = new google.maps.Marker({position:{lat:45.4984799,lng:-122.874372},map:map,icon:image,title:'Dorna Karandish Reference'});
		//socialNetworkMarker2.addListener('click',function(){vmarker('4bG_z1LUQgk',h);});
		//var smiFraudMarker = new google.maps.Marker({position:{33.4352354,lng:-112.15256471}, map:map, icon:image});
		//smiFraudMarker.addListener('click', function(){
		//smiFraudMarker(arr[136],h);
		//});	 
		//var worldOfWarcraftMarker = new google.maps.Marker({position{lat:, lng:-111},	 
 } 			
		//Marker iteration to post locations //write loop with new Marker 	
		
		var $script = $( '<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDnUboLp8QJIoEzXlu8ftOHzXgiLx3mZDc&callback=initMap" async defer></script>' ),
			newdiv = document.createElement( "div" ),existingdiv = document.getElementById( "map" );
			$( "body" ).append( $script, [ existingdiv,newdiv ] ),arr = 
					[	'98Y2Vh5Qk1Q','MRLyREkZles','oGIvgy5JFtk',
						'tsQS1b-fNSs','sUad0ZL-nBU','xqlaXylsMwQ',
						'qMkkfuSizc4','7Dxxk1az9Uo','Dvi6n89JWUY',
						'ZRG1tWQN6e8','KDxJlW6cxRk','SXiSVQZLje8',
						'49zWWHBjcbw','f4FmHmZEzCw','wIft-t-MQuE',
						'QcIy9NiNbmo','u9WgtlgGAgs','RNBTNaqSP0I',
						'yiRPWfz3HZw','SQWqksdE4gw','0qk_Hi5ArKE',
						'BORsUKQGd_E','zuCjHXLHGUk','_ABk7TmjnVk', 
						'-CmadmM5cOk','vNoKguSdy4Y','qs8y_GZ86WM',
						'yzTuBuRdAyA','MRLyREkZles','K_9tX4eHztY',
						'wGZEI6yp7hw','HV3IQ-mkkPc','Vb6bA4J1Gbg',
						'4D7cPH7DHgA','6IDT3MpSCKI','AGZiLMGdCE0',
						'E2Lw9YWLVts','uQZMaG1eO74','Z09lYqdxqzo',
						'H3T2RnTBp_4','Z0atZQSUE80','_HKH7Emy1SY',
						'wlJGoRoN0Q8','tdQ3aXO4gys','KnGo6Qm0Wt8',
						'VUEVdNtlVeU','DCacuACfx-w','oeDPnT2rFKI',
						'mWMPovVgKCQ','Z8NHrxfg_lw','wetuBBsuWVc',
						'kt8KpIfvVoE','gQvXFpexE-g','2E9JegcOW_w',
						'XLKIjaWlHTg','II6KPSuKgkw','-tQsFo3RWPY',
						'mAtmopQxu0o','ruOXWHbyfjo','8cQVspzP0Ms',
						'LxXrccK4S3I','XcmG80PT83M','C1sFxMQj3qg',
						'HZefCfepDlI','lTkdqnpvqi0','KTsvqmPkFic',
						'LtTlxlGW4y0','PFsl1cGHzp4','_mDm6BP0scs',
						'q8Kgkav8TWo','drH0qdRXKUo','vwObck9twes',
						'bh2bGbUiZng','KtDLFtBvka4','egngaSDGbzs',
						'YkGUneA2QRU','GN0M14V4OtA','TDKnwgGxlGo',
						'VyiCDq6Y0c8','k3cmAzM-MbI','mWMPovVgKCQ',
						'KnGo6Qm0Wt8','WJB3hqUsHDE','Yqvbv-SB4bg',
						'EMHF5LjY9EI','mfmrPu43DF8','oUXUm6he2-s',
						'7P0jR-g99Vs','tRkb1X9ovI4','6Vtf0MszgP8',
						'wCR2x76ZIos','KK66XLGhZpI','lCCeLue8owM',
						'q8waPhiurrA','KpFMVcZ4o7U','l0l16Oks9oI',
						'3tmd-ClpJxA','7F37r50VUTQ','EHaRXFUeX_s',
						'lNzHARgbCG8','_xkCPNECud8','9pyBKj5-jVk',
						'YhCHw0Ovqf4','ZDEmqJhlD2A','Z_YDzQ2BYcc',
						'jKhBzcSes6Q','nKnZtbcImBI','4y_PAu8kTag',
						'VkIoFgFhTlo','vSCBNXu3xu0','EXUzqVIocHI',
						'FRSfDQyoav8','7YMu0Kict9M','QgZGx1F9cA4',
						'0nbx08v31pc','VkXjvHfP3MM','tYOJZm0FXPw',
						'0fYL_qiDYf0','mz08OAOhuF8','PH8b6qUGpIA',
						'eAHDS5Rn4kg','17SKnRxU_y0','l9T90Y2PFYk',
						'evoa_UWUobI','S1s9cXYpxNo','F_UxLEqd074',
						'FtqTGq63Rx0','qcbZs_J1_tE','MyqZf8LiWvM',
						'MyqZf8LiWvM','BSdIAajX_sI','98Y2Vh5Qk1Q',
						'M7K8HkxJ99o','u9WgtlgGAgs','tAtbzV8CTV0',
						'sGLXpKnQfSs','wTGRsKLqkGM','fC1zzL9DjdU',
						'vpbuPzBR1dc','nJn1LjLaNVQ','FeZNvbu2_YQ',
						'dmnM4YmWIhU','e-ORhEE9VVg','JKf2z5TEGqw',
						'IlXwTxpC6u0','P-RXohKepp4','14MP12xwSx4',
						'LKkIvURVtBA','pfwjs_0_il8','IP-NM6Qdrl4',
						'2ObQm0XBmgI','FY00zwMZsqM','xHZmQXEnUYk',
						'mCSno4xODKY','Z-hoEoga8no','tmZiGfLVs8w',
						'_JuHsTbZKqA','RWIS7olVbGE','Qj0uRgekx8o',
						'OH12y2YAuOo','wzS_gt3LDxI','3V-Ui69hDpA',
						'wxL8bVJhXCM','HLpkF3qnh4U','eRsmoSis-2I',
						'Td1uPq9K--E','FYBO0YyJ6RU','VC1_tdnZq1A',
						'eRJaxNoPcBM','8N5AiKSe3Gg','xhe0DkX3e78',
						'PHJisUS7KSg','mr834Cs9ncs','ROf8P6YgwTk',
						'd73tiBBzvFM','lbIdbvOEr1U','-eYxeRJCYMY',
						'0k9tVmI-pwM','AOEIZc7-I-o','vvVzmrYTSPc',
						'vvVzmrYTSPc','aqls1YPyb3k','aex6V8aGvxY',
						'AOEIZc7-I-o','aj1Q_BAqwa8','wu1FP8Krqa0',
						'TLOM-zGf-6I','yZ1XM9LwS64','eNSxmqCza6Y',
						'h4s0llOpKrU','9kgeRleqX_0','n7epC8ZW92Y',
						'HzGHgQBPyV0','S98Q11zhS-g','o4W4uNZfAOg',
						'OgCBUXXoDvM','0RVkIY1e9O0','bRN9sTYYQsQ',
						'DoL-s5BCg_M','RGJFHd1w19Q','vnLk_-8gA2U',
						'U-raevCsJ1c'
						
					];	

	//buildPasswordProtectedLayer
	var vmarker = function(u,c){
		var slider = false;
		hashurl=u;
		if(countHashes()>1&&video===true){window.location.hash="";
				a=window.location.href.split('');
				a.splice(a.length-1,1);
				a.join('');
				window.location.href=a.join('');
				if(titles){titleCreate();}
				}else{
				$('body').append('<div id="modalBorder"><div id="videoModal"></div></div>');
				if(c===window.location.hash){
					document.getElementById('videoModal').innerHTML = '<iframe id="video" width="600" height="337" src="https://www.youtube-nocookie.com/embed/'+u+'?&amp;autoplay=1 showinfo="0" frameborder="1" suggestedvideos="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>';
					document.getElementById('videoModal').style.position = 'fixed';
					document.getElementById('videoModal').style.top = '10%';
					document.getElementById('videoModal').style.right = '10%';
					document.getElementById('videoModal').style.visibility = 'visible';	
					$('#videoModal').append('<button id="notes">Documents & Notes</button>');
					
					$('#md').slideDown('slow');
					slider=true;					
					
				}
				if(slider){window.location.href=window.location.href+hashurl;}
				notes = document.getElementById('notes');
				notes.addEventListener('click',openNotepad());
				vd=true;
		}
	};
	
	var titleCreate = function(){$('head title').add(" | " + hash);};
	//query building //possibly change to single input then let function decide on type of request		
	var queryPlace = function(address,type,city){
		key = atob(AIzaSyDnUboLp8QJIoEzXlu8ftOHzXgiLx3mZDc);
			queryPlace = q+type+"in"+city&key;
			queryAddress = q+address+"&key="+key;
		    q='https://maps.googleapis.com/maps/api/place/text/textsearch/json?query=';
		if(address){return queryAddress;} 
		else {return queryPlace;}
	};
	
	//universal form builder 	
	var buildForm = function(appendto, a){
		//build form and bind for place search
		 $( appendto ).append(a);		
		console.log( "Loaded =>" +a);
	};
	
	//Universal Responding to queries as readable output
	var universalResponseParsing = function( request,type ){
		if(request.type === 'json'){
			var myResponse =  JSON.parse( request );
		}
		else if(request.type === 'xml'){
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystate = function(){
			if( this.readyState == 4 && this.status == 200 ){
					response  = xhttp.responseText;
				}
			}
			xhttp.open( "GET", "", true );
		};				
	};
	
	var searchDocs = function(x){
		var arr = [];
		for(var i=0;i<documents.length;i++){
			a=documents[i];
			b=a.docs;
			if(b===x){
				arr.push([a]);
				document.write('doc id: '+b+ ' => '+a.Document+' => '+a.Location);
				console.log('Document ID: '+b+ ' => '+a.Document+' => '+a.Location);
			}
		}
	};

	var getDocs = function(){
		a=document.getElementById('notes');
		//a.addEventListener('click',notePad('a'),false);
	};
	var openNotepad=function(docId){
		buildForm('body',"<center><form id='nform'><textarea id='locationInfo' rows='20' cols='50' value='searchDocs(docId)'></textarea><br /><input type='submit' value='Submit Note '+ docId  /></form></center>");
		document.getElementById('nform').style.visibility = 'visible';
		notePadVisible=true;
	};

	var loader = function(){
		buildForm('body', '&copy;AriaChorus'),
		buildForm('body','<input type="text" id="placeSearch">'),
		buildForm('body','</input>'),
		buildForm('body', '<div id="md"><a href="#" id="close" rel="noindex">[CLOSE THIS]</a><center><div id="adContainer"><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- adss --><ins class="adsbygoogle"style="display:block"data-ad-client="ca-pub-7691648281862889"data-ad-slot="1851069852"data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div></center></div>'),	
		buildForm('body', '<button id="loadMap">Load Map</button>'),
		buildForm('footer', '<script async src="https://www.googletagmanager.com/gtag/js?id=UA-74448695-2"></script><script>window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag("js", new Date());gtag("config", "UA-74448695-2");</script>'); 
		$('#close').click(function(){$('#md').slideUp('slow');});
		getDocs();
	};
		if(document.readyState==='complete'){loader();};
