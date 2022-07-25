const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('lenght')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText

    if(!password){ return }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () =>{
    const lenght = +lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hasNumber = numbersEl.checked
    const hasSymbol = symbolsEl.checked

    resultEl.innerText = generatePassword(hasLower,hasUpper,hasNumber,hasNumber,lenght)
})

function generatePassword(lower,upper,number,symbol,lenght){
      let generatePassword = ''
      const typesCount = lower + upper + number + symbol
      const typesArr = [{lower},{upper},{number},{symbol}].
      filter(item => Object.values(item)[0])
      if(typesCount == 0 ){
        return ''
     }      

     for(let i = 0; i< lenght;i += typesCount){
        typesArr.forEach(type => {
            const funName = Obeject.keys(type)[0]
            generatePassword += randomFunc[funName]()
        })
     }

     const finalPassword = generatePassword.slice(0, lenght)
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol(){
    const symbol = '!@#$%^&*(){}[]=<>/,.'
    return symbol[Math.floor(Math.random() * symbol.length)]
}