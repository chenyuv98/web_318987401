const functional = document.getElementById('functional')
const calisthenics = document.getElementById('calisthenics')
const yoga = document.getElementById('yoga')
const pilates = document.getElementById('pilates')
const spinning = document.getElementById('spinning')
const deselectButton = document.getElementById('deselect')
const trainingContainer = document.querySelector('.training-container')
const scheduleContainer = document.querySelector('.schedule-container')
const deleteButton = document.querySelector('.deleteButton')
const message = document.querySelector('.popupMessage-container')
const yesButton = document.getElementById('buttonYes')
const noButton = document.getElementById('buttonNo')

let selectedColor, active

//SCHEDULE A TRAINING
trainingContainer.addEventListener('click', selectTraining)
scheduleContainer.addEventListener('click', setSchedule)
deselectButton.addEventListener('click', resetTraining)
deleteButton.addEventListener('click', showMessage)
yesButton.addEventListener('click', closeMessage,deleteTraining)
noButton.addEventListener('click', closeMessage)

//training click
function selectTraining(t){
    resetTraining()
    let trainingColor = t.target.style.backgroundColor

    switch (t.target.id){
        case 'functional':
            schedulingTraining(functional, trainingColor)
            break
        case 'calisthenics':
            schedulingTraining(calisthenics, trainingColor)
            break
        case 'yoga':
            schedulingTraining(yoga, trainingColor)
            break
        case 'pilates':
            schedulingTraining(pilates, trainingColor)
            break
        case 'spinning':
            schedulingTraining(spinning, trainingColor)
            break
    }
}

//scheduling the schedule
function setSchedule(t){
    if(t.target.classList.contains('training') && active === true){
        t.target.style.backgroundColor = selectedColor
    }
}

//select type
function schedulingTraining(training,color){
    training.classList.toggle('selected')

    if(training.classList.contains('selected')){
        active = true
        selectedColor = color
        return selectedColor
    }
    else{
        active = false
    }
}

//reset training
function resetTraining(){
    const cancelTraining = document.querySelector('.trainingType')
    cancelTraining.forEach((item)=>{
        item.className = 'trainingType'
    })
}

// delete training
function deleteTraining(){
    const training = document.querySelectorAll('.training')
    training.forEach((item)=>{
        item.innerHTML = ''
        item.style.backgroundColor = 'white'
    })
}

//show pop up message
function showMessage(){
    message.style.display = 'flex'
}

//close pop up message
function closeMessage(){
    message.style.display = 'none'
}