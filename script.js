const match_answers = ['C', 'B', 'A', 'C', 'B']

const form = document.querySelector('.quiz-form')

form.addEventListener('submit', (e)=>{

    e.preventDefault()
    let score = 0
    const user_answers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value]

    user_answers.forEach((item, index) => {
        if (item === match_answers[index])
            score += 20
            

    })

    const result_section = document.querySelector('.result')
    scrollTo(0,0)    
    result_section.classList.remove('d-none')

    let output = 0
    const timer = setInterval(() => {
        result_section.querySelector('span').textContent = `${output}%`
        if(output === score)
            clearInterval(timer)
        output++
    }, 10)

})