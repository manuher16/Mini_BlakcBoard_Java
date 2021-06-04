/**
 * 
 */

function redirect(url){
	location.href=url;
}

function login(){
	const name=document.getElementById('name');
	
	$.post('controller.jsp',{name:name.value},(data)=>{
		console.log(data);
	})
}