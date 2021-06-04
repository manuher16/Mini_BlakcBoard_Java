/**
 * 
 */
//Registro=1
//Maestro=2
//ALumno=3
const user=[
	{
	username:'userR1',
	password:'111111',
	role:1
},
	{
	username:'userR2',
	password:'111111',
	role:1
},
	{
	username:'userR3',
	password:'111111',
	role:1
},
	{
	username:'userM1',
	password:'111111',
	role:2
},
	{
	username:'userM2',
	password:'111111',
	role:2
},
	{
	username:'userA3',
	password:'111111',
	role:2
}
,
	{
	username:'userMA1',
	password:'111111',
	role:3
},
	{
	username:'userA2',
	password:'111111',
	role:3
},
	{
	username:'userA3',
	password:'111111',
	role:3
},
]
function redirect(url){
	location.href=url;
}

function login(){
	const name=document.getElementById('name');
	
	$.post('controller.jsp',{name:name.value},(data)=>{
		console.log(data);
	})
}