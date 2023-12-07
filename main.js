const btnNext = document.querySelector('#next')
const btnCalc = document.querySelector('#calc')
let list = [];
let totalVote = 0;

btnNext.addEventListener('click', evt =>{
    evt.preventDefault();
    const electoralName = document.querySelector('#electoralName')
const isCoalition = document.querySelector('#isCoalition')
const numberOfVotes = document.querySelector('#numberOfVotes')
const electoralList = document.querySelector('#electoralList')
const results = document.querySelector('#results')

    const electoral = {
        name: electoralName.value,
        coalition: isCoalition.checked ? isCoalition.value: 8,
        votes: numberOfVotes.value
    };
    totalVote = +totalVote + +electoral.votes
    list.push(electoral)
    electoralList.innerHTML += `<li><b>${electoralName.value}</b>,${electoral.coalition ? "" : "nie "}jest koalicją , ilość głosów: <b>${numberOfVotes.value}</b></li>`;
})
