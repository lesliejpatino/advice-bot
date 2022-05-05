const adviceBtn = document.getElementById('advice-btn');
const moreAdviceBtn = document.getElementById('more-advice')
const robotIntro = document.getElementById('robot-intro');
const responseDiv = document.getElementById('response-div')
const robotAdvice = document.getElementById('robot-advice');


const getAdvice = function() {
    const adviceUrl = 'https://api.adviceslip.com/advice';

    fetch(adviceUrl)
        .then(function (response) {
            console.log("response", response)
            return response.json();
        })
        .then(function (data) {
            // data.slip.advice = 1 piece of advice
            console.log(data.slip.advice);
            robotIntro.style.display= "none"
            responseDiv.style.display= "block";
            robotAdvice.textContent = data.slip.advice
        })
};

const moreAdvice = function() {
    const adviceUrl = 'https://api.adviceslip.com/advice';

    fetch(adviceUrl)
        .then(function (response) {
            console.log("response", response)
            return response.json();
        })
        .then(function (data) {
            // data.slip.advice = 1 piece of advice
            console.log(data.slip.advice);
            // robotIntro.style.display= "none"
            // responseDiv.style.display= "block";
            robotAdvice.textContent = data.slip.advice
        })

}

// addEventListener method is only available on an individual element
adviceBtn.addEventListener('click', getAdvice)
moreAdviceBtn.addEventListener('click', moreAdvice)


console.log('testing')