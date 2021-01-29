console.log('answers-check.js');

var url = window.location.search.slice(1);
url = url.replace(/=/g, '":"');
url = url.replace(/#/g, ' ');
url = url.replace(/&/g, '", "');
url = '{"' + url + '"}';
console.log(url);
let urlobj = JSON.parse(url);
console.log(urlobj);

var marks_value = 0;

if (urlobj.option1correct == "on") {
    marks_value+=1;
}
if (urlobj.option2correct == "on") {
    marks_value+=1;
}
if (urlobj.option3correct == "on") {
    marks_value+=1;
}
if (urlobj.option4correct == "on") {
    marks_value+=1;
}
if (urlobj.option5correct == "on") {
    marks_value+=1;
}
if (urlobj.option6correct == "on") {
    marks_value+=1;
}
if (urlobj.option7correct == "on") {
    marks_value+=1;
}
if (urlobj.option8correct == "on") {
    marks_value+=1;
}
if (urlobj.option9correct == "on") {
    marks_value+=1;
}
if (urlobj.option10correct == "on") {
    marks_value+=1;
}

let area = document.getElementById('area-marks');
area.innerHTML= ` ${marks_value} `;

if (marks_value == 0) {
    document.getElementById('cong').innerHTML = ` :( I think You Are A Weak in This Subject `
}
else if (marks_value < 5) {
    document.getElementById('cong').innerHTML = ` :( So Sad You Get: `
}
else if (marks_value == 5) {
    document.getElementById('cong').innerHTML = `:( you shuld study more`;
}
else if (marks_value <= 9) {
    document.getElementById('cong').innerHTML = `Good But Not The Best`;
}
else if (marks_value == 10) {
    document.getElementById('cong').innerHTML = `WoW! You Got 10 out of 10 :)`;
}

console.log(marks_value);
console.log(urlobj.option1correct);