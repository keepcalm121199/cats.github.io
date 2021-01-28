const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Looping through images */


for (let i = 1; i < 4; i++) {
let xxx = 'images/pic'+i+'.jpg';
 const newImage = document.createElement('img');
 newImage.setAttribute('src', xxx);
 thumbBar.appendChild(newImage);
 newImage.onclick = function() {

    let source = newImage.src;	
   displayedImage.setAttribute('src',source);}


}




/* Wiring up the Darken/Lighten button */

btn.onclick = function() {
const buttonColor = btn.getAttribute("class") 

if(buttonColor === 'dark'){
	btn.setAttribute('class', 'light');
	btn.textContent = 'Lighten';
	overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
}

else {
btn.setAttribute('class', 'dark');
	btn.textContent = 'Darken';
	overlay.style.backgroundColor = "rgba(0,0,0,0)";

}


}
const section = document.querySelector('section');

let para1 = document.createElement('p');
let para2 = document.createElement('p');

let motherInfo = 'The mother cats are called ';
let kittenInfo;

fetch('sample.json')
.then(response => response.text())
.then(text => displayCatInfo(text))

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  // Add your code here

const displayCat = JSON.parse(catString);
//console.log(displayCat);

for(i=0; i<displayCat.length; i++){

if(i===displayCat.length - 1){
motherInfo += "and " + displayCat[i].name + ". ";} else 
{motherInfo += displayCat[i].name + ", ";}

}

for(j=0; j<displayCat.length; j++){
total += (displayCat[j]["kittens"].length);

  for(k=0; k<displayCat[j]["kittens"].length;k++){
//console.log(displayCat[j]["kittens"][0]["gender"]);

if(displayCat[j]["kittens"][0]["gender"] === 'm'){male +=1;}
};
}


kittenInfo = "There are " + total + " kittens. " + male + " of them are male. ";

// Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}

section.appendChild(para1);
section.appendChild(para2);
    