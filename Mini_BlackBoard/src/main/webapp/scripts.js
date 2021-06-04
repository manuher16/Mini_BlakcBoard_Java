/**
 * 
 */
//Registro=1
//Maestro=2
//ALumno=3
const users=[
	{
	id:1,
	username:'userR1',
	password:'12341234',
	role:1
},
	{
		id:2,
	username:'userR2',
	password:'12341234',
	role:1
},
	{
		id:3,
	username:'userR3',
	password:'12341234',
	role:1
},
	{
		id:4,
	username:'userM1',
	password:'12341234',
	role:2
},
	{
		id:5,
	username:'userM2',
	password:'12341234',
	role:2
},
	{
		id:6,
	username:'userA3',
	password:'12341234',
	role:2
}
,
	{
		id:7,
	username:'userMA1',
	password:'12341234',
	role:3
},
	{
		id:8,
	username:'userA2',
	password:'12341234',
	role:3
},
	{
		id:9,
	username:'userA3',
	password:'12341234',
	role:3
},
]


function redirect(url){
	location.href=url;
}

function login(){
	const username=document.getElementById('username');
	const password=document.getElementById('password');
	var indexUser=null;
	
	for(let i=0;i<users.length;i++){
		if(users[i].username==username.value){
			indexUser=i;
			break
		}
	}
	if(indexUser==null){
		alert("No existe usuario")
	}else{
		if(users[indexUser].password!=password.value){
			alert('Contrase;a incorrrecta')
		}else{
			if(users[indexUser].role==1){
				location.href='./views/Registro.html'
			}
			if(users[indexUser].role==2){
				location.href='./views/Maestro.html'
			}
			if(users[indexUser].role==3){
				location.href='./views/alumno.html'
			}
		}
	}
}