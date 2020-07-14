const submitBtn = document.querySelector('button')
const inputField = document.querySelector('input')
const form = document.querySelector('form')

const emailCheck = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const handleErr = (e) => {
  if (!emailCheck.test(inputField.value)) {
    e.preventDefault()
    form.classList.add('error')
  } else {
    // submit
  }
}

const handleReset = () => form.classList.remove('error')

submitBtn.addEventListener('click', handleErr)
inputField.addEventListener('focus', handleReset)