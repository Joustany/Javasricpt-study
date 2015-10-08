function catchEvent(eventObj, event, eventHandler){	//捕获事件的函数
		if(eventObj.addEventListener){
			eventObj.addEventListener(event, eventHandler, false);
		}
		else if(eventObj.attachEvent){
			var evnt = "on" + event;
			eventObj.attachEvent(evnt, eventHandler);
		}
	}
	
	function cancelEvent(evnt){	//取消事件的函数
		var event = evnt ? evnt : window.Event;
		
		if(event.preventDefault){
			event.preventDefault();
			event.stopPropagation();
		}
		else{
			event.returnValue = false;
			event.cancelBubble =true;
		}
	}
	
	function checkRequired(evnt){
		var theEvent = evnt ? evnt : window.Event;
		var target = theEvent.target ? theEvent.target : theEvent.srcElement;
		
		var txtInput = target.value;
		if(txtInput == null || txtInput == ""){
			alert("value is required in field");
		}
	}
	
	function validateForm(evnt){
		var theEvent = evnt ? evnt : window.Event;
		var target = theEvent.target ? theEvent.target : theEvent.srcElement;
		var rgEX = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,5}$/;
		///var rgEX = /^\d{3}[-]?\d{2}[-]?\d{4}$/g;
		var OK = rgEX.exec(target.value);
		console.log(target.value);
		console.log(OK);
		if(!OK){
			alert("not a mail");
			cancelEvent(theEvent);
		}
	}
	
	function setupEvents(evnt){
		console.log(evnt);
		catchEvent(document.getElementById("text2"), "blur", checkRequired);
		catchEvent(document.getElementById("text1"), "change", validateForm);
	}
	
	catchEvent(window,"load",setupEvents);