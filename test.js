const match_answers = ['C', 'B', 'A', 'C', 'B']

const form = document.querySelector('.quiz-form')

form.addEventListener('submit', (e)=>{

    e.preventDefault()
    //since score will change we won't assign it as a const
    let score = 0
    const user_answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]

    user_answers.forEach((item, index) => {
        if (item === match_answers[index])
            score += 20
            

    })

    const result_section = document.querySelector('.result')

    //Another correct way
    // result = document.querySelector('span')
    // result.innerText = `${score}%`
    
    //Scroll to the top
    scrollTo(0,0)
    //shorter way
    result_section.querySelector('span').textContent = `${score}%`
    result_section.classList.remove('d-none')

})

// //function to fire after a period of time
// setTimeout(() => {
//     //do something
// }, //time in milliseconds )

////function to fire after every x amount of time
// const timer = setInterval(() => {
//     //do something
//     i++
//     if(i == x){
//         clearInterval(timer)
//     }
// }, //time in milliseconds)

