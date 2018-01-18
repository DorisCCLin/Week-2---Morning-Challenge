function first(a,b){
 return (a+b)/2 
}


function second(){
	for(let i = 1; i <= 100; i++){
		if (i%7 === 0){
			console.log(i + ' is divisible by 7')
		} else {
			console.log(i)
		}
	}
}

var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var button = document.querySelector('#button');

button.addEventListener('click', change);

function change(){
	box1.style.height = '100px';
	box1.style.width = '100px';
	box2.style.borderRadius = '50% ';
}; 

