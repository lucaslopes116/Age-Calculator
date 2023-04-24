
let button = document.getElementById('button').addEventListener('click', calculate)



function calculate(event) {
  event.preventDefault()
  let inputDay = document.getElementById('day').value
  let inputMonth = document.getElementById('month').value
  let inputYear = document.getElementById('year').value

  if(!inputDay){
    let dayError = document.getElementById('day')
    dayError.classList.add('inputError')
    return
  } 
    
  if(!inputMonth){
    let monthError = document.getElementById('month')
    monthError.classList.add('inputError')
    return
  } 
  if(!inputYear){
    let yearError = document.getElementById('year')
    yearError.classList.add('inputError')
    return
  }
  let dayError = document.getElementById('day')
  let monthError = document.getElementById('month')
  let yearError = document.getElementById('year')
  dayError.classList.remove('inputError')
  monthError.classList.remove('inputError')
  yearError.classList.remove('inputError')
  


  if(inputDay < 1 || inputDay > 31 ) {
    let dayError = document.getElementById('labelDay')
    document.getElementById('day').classList.add('inputError')
    dayError.classList.add('labelError')
    return
  }
  if(inputMonth < 1 || inputMonth > 12){
    let monthError = document.getElementById('labelMonth')
    monthError.classList.add('labelError')
    document.getElementById('month').classList.add('inputError')
    return
  }
  if(inputYear < 1900 || inputYear > new Date().getFullYear()){
    let yearError = document.getElementById('labelYear')
    yearError.classList.add('labelError')
    document.getElementById('year').classList.add('inputError')
    return
  }
  if(inputDay === '31' && inputMonth === '04' && inputYear === '1991'){
    console.log('erro specific')
    return
  }
  document.getElementById('day').classList.remove('inputError')
  document.getElementById('month').classList.remove('inputError')
  document.getElementById('year').classList.remove('inputError')
  document.getElementById('labelDay').classList.remove('labelError')
  document.getElementById('labelMonth').classList.remove('labelError')
  document.getElementById('labelYear').classList.remove('labelError')

  let day = document.getElementById('numberDay')
  let month = document.getElementById('numberMonth')
  let year = document.getElementById('numberYear')

  let resultYear
  let resultMonth
  let resultDay
  let monthsWith30 = [04,06,08,11]

  if(inputMonth > new Date().getMonth() +1) {
    resultYear = new Date().getFullYear() - inputYear -1
  }

  resultMonth = new Date().getMonth() + 1 - inputMonth

  if(resultMonth < 0){
    resultMonth = resultMonth * -1
  }

  if(new Date().getDate() > inputDay) {
    resultMonth = resultMonth -1
    if(monthsWith30.includes(new Date().getMonth() + 1)){
      let auxDay = 30 - new Date().getDate()
      resultDay = auxDay + (inputDay * 1) + 1
    }else{
      let auxDay = 31 - new Date().getDate()
      resultDay = auxDay +(inputDay * 1) + 1
    }
    day.innerText = resultDay
    month.innerText = resultMonth
    year.innerText = resultYear

  }else{
    if(monthsWith30.includes(new Date().getMonth() + 1)){
      resultDay = 30 - new Date().getDate()
    }else{
      resultDay = 31 - new Date().getDate()
    }
    day.innerText = resultDay
    month.innerText = resultMonth
    year.innerText = resultYear
  }

  

}


