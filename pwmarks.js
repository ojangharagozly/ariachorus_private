var authenticated=false,user=null, key= 
	[{id:'user1',size:32},{id:'user2',size:32}],
	buildForm = function(appendto,a){
		//build form and bind for place search
		 $( appendto ).append(a);		
		console.log( "Loaded =>" +a);
	},keyBuild=null;

	var getKeyBuild=function(a,c){
		keyBuild=buildKey(a,c).toString();
		}

function initLayout(){
	
	var numericBuilder = prompt('Enter your digits'), stringBuilder=prompt('Enter your string');
		currentUser = buildKey(numericBuilder,stringBuilder);
		console.log(atob(currentUser));
		
		a=document.getElementById('authInitial');
		
		buildForm('body', '<div id="wrapAuth"><form id="authenticateForm">');
		buildForm('body','<span>Authenticate &nbsp; &nbsp;<input type="text" name="userAuth"></input>');
		buildForm('body','&nbsp;<submit name="SUBMIT"/></form></div>');
		console.log('Initializing Layout for Authentication');
		
		//$('#wrapAuth').append(aInitialize);
		c=checkUserStore(0).toString();
		
		while(keybuild!==user[0].size+user[0].id){
			buildForm('body','<div style="backgroundColor:#000; color:#fff; id="id_request"></div>');
			document.getElementById('id_request').innerText='Please drag your ID card into the reader.';
		}
	}
	var requireKey=function(k){
		id=key[k].id,
		size=key[k].size;	
		user=id+size.toString();
		return user;
	}

	//requireKey(key[0].id,key[0].size)		
	var checkUserStore=function(){
		if(user===keyBuild.toString()){
			authenticated=true;
			console.log('User Store Match..');
	}
	
	var	doAuth=function(){
		a=checkKeys(0[0]);
		s=document.getElementById('skeletonKey');
		if(s.innerText===a){
			authenticated=true;
			console.log('Authentication Complete');
		a=checkKeys(0[1])}
		else(authenticated=false); 
		console.log('Authentication Failure');
	};
	//universal form builder 	
	
	//Check Authentication Status
	var checkAuthentication = function(x){
		var c=false;
		if(x!==c){authenticated=true;}
		else {authenticated=false;}
		return authenticated;
	}
	//Authentication procedures
	var authenticateProcedures=function(x){
		a=checkAuthentication(authenticated);
		if(a){console.log('Authentication Complete');}
		else{console.log('Authentication Failure');}
	}
	//authentication pipe to main loop
	var stateMain=function(x){
		a=checkUserStore(checkKeys(x));
			if(x===a&&authenticated){}
		}
		console.log('Authentication Complete');
	}
	var buildColors=function(){
				arr=['red','blue','green','yellow','white','purple','pink','black','white'];
			var color=Math.floor(Math.random()*arr.length);
			return arr[arr.length-2];
	};
	
	function buildKey(x,s){
		var arr=[];				
		
		document.write('<center>');			
		for(var i=0;i<x;i++){
		
		if(i>x/2){arr.splice(0,1);
		document.write('<div class="keyMatch" style="color:'+buildColors()+'">'+arr.join("")+'</div>');}
			else
			{
				document.write('<div class="keyMatch" style="color:'+buildColors()+'">'+arr.join('')+'</div>');	
								document.write('<div class="keyMatch" style="color:'+buildColors()+'">'+arr.join('')+'</div>');	

				arr.push(s);
			}	
		}
	};
