// used url https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple

console.log('Scripting.js');

let xhr = new XMLHttpRequest();

var Url = window.location.search.slice(1);
Url = Url.replace(/=/g, '":"');
Url = Url.replace(/#/g, ' ');
Url = '{"' + Url + '"}';
let urlobj = JSON.parse(Url);

let subject = document.getElementById('subject').innerHTML = urlobj.subject;
console.log(urlobj);


if (urlobj.subject == 'History') {
    console.log('History');
    xhr.open('get', 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple');
} else if (urlobj.subject == 'Animals') {
    console.log('Animals');
    xhr.open('get', 'https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple');
} else if (urlobj.subject == 'Geography') {
    console.log('Geography');
    xhr.open('get', 'https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple');
} else if (urlobj.subject == 'general-knowledge') {
    console.log('general-knowledge');
    xhr.open('get', 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
    document.getElementById('subject').innerHTML = 'Genral Knoledge';
}

let paramitersplace = document.getElementById('quistions-place');

paramitersplace.innerHTML = '<h2>Please Wait While Your Quistions Are Loding...</h2>';

xhr.send();
xhr.onload = function () {
    let type = JSON.parse(xhr.response);
    console.log(type.results);
    console.log(type.results.length);
    paramitersplace.innerHTML = ' ';

    for (let index = 0; index < type.results.length; index++) {
        const element = type.results[index];
        // console.log(element.question);

        paramitersplace.innerHTML += `
            <div class="paramiter">
                <div class="ques Open-Sans">
                    <h3 class="quistion">Q${index+1}. <i class="quistion">${element.question}</i></h3>
                </div>
                <div class="answer-option">
                    <div class="radio-group">
                        <i class="normal-font">1</i>
                        <label for="option${index+1}" class="Yusei_Magic">${element.incorrect_answers[0]}</label>
                        <input type="radio" name="option${index+1}">
                    </div>
                    <div class="radio-group">
                        <i class="normal-font">2.</i>
                        <label for="option${index+1}" class="Yusei_Magic">${element.incorrect_answers[1]}</label>
                        <input type="radio" name="option${index+1}">
                    </div>
                    <div class="radio-group">
                        <i class="normal-font">3.</i>
                        <label for="option${index+1}" class="Yusei_Magic">${element.correct_answer}</label>
                        <input type="radio" name="option${index+1}correct">
                    </div>
                    <div class="radio-group">
                        <i class="normal-font">4.</i>
                        <label for="option${index+1}" class="Yusei_Magic">${element.incorrect_answers[2]}</label>
                        <input type="radio" name="option${index+1}">
                    </div>
                </div>
            </div>
        `;
    }
    paramitersplace.parentElement.innerHTML += ` 
    <input type="submit" class="btn-sub Yusei_Magic" id="submit" value="Submit"> `;
};