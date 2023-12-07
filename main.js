const btnNext = document.querySelector('#next')
const btnCalc = document.querySelector('#calc')

const array = [];

btnNext.addEventListener('click', function (e){
    e.preventDefault();
    
const electoralName = document.querySelector('electoralName')
const isCoalition = document.querySelector('isCoalition')
const numberOfVotes = document.querySelector('numberOfVotes')
const electoralList = document.querySelector('#electoralList')
const results = document.querySelector('#results')

if((isCoalition.value = false)) {
    console.log('5%')
} else if ((isCoalition.value = true)) {
    console.log('8%')
}

const object = {
    electoralName: electoralName.value,
    isCoalition: isCoalition.value,
    numberOfVotes: numberOfVotes.value,
};

//electoralList.innerHTML += `<li><b>${electoralName}</b>,${}, ilość głosów: ${numberOfVotes}</li>`

array.push(object);
})


