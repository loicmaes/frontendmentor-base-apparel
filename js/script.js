const form  = document.querySelector('[data-form]')
const input = document.querySelector('[data-input]')
const btn   = document.querySelector('[data-btn]')

btn.onclick = (e) => {
    e.preventDefault()

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(input.value))
        return form.classList.add('invalid')
    form.classList.remove('invalid')
    alert(`Thanks for joining us!\n\nYou'll be notified soon.`)
}
