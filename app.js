// Zadanie 1
function zad1() {
    const div = document.createElement('div')
    const input = document.createElement('input')

    input.type = 'color'
    div.style.width = '300px'
    div.style.height = '300px'
    div.style.border = '3px solid black'

    document.body.appendChild(div)
    document.body.appendChild(input)

    input.addEventListener('change', () => {
        div.style.backgroundColor = input.value
    })
}

// Zadanie 2
function zad2() {
    const input = document.createElement('input')
    const btn = document.createElement('button')
    
    input.type = 'text'
    input.placeholder = 'Podaj domenę'
    btn.textContent = 'Generuj link'

    document.body.appendChild(input)
    document.body.appendChild(btn)

    btn.addEventListener('click', () => {
        const a = document.createElement('a')
        a.setAttribute('href', `https://${input.value}`)
        a.setAttribute('target', '_blank')
        a.textContent = 'https://' + input.value
        a.style.display = 'block'
        document.body.appendChild(a)
    })
}

// Zadanie 3
function zad3() {
    const div = document.createElement('div')
    const widthInput = document.createElement('input')
    const heightInput = document.createElement('input')
    const btn = document.createElement('button')

    div.style.border = '2px solid black'
    widthInput.type = 'number'
    heightInput.type = 'number'
    widthInput.placeholder = 'Szerokość'
    heightInput.placeholder = 'Wysokość'
    btn.textContent = 'Zmień wymiary'

    document.body.appendChild(widthInput)
    document.body.appendChild(heightInput)
    document.body.appendChild(btn)

    btn.addEventListener('click', () => {
        div.style.width = `${widthInput.value}px`
        div.style.height = `${heightInput.value}px`
        document.body.appendChild(div)
    })
}

// Zadanie 4
function zad4() {
    const input = document.createElement('input')
    const btn = document.createElement('button')
    const ul = document.createElement('ul')

    input.type = 'text'
    input.placeholder = 'Napisz coś'
    btn.textContent = 'Dodaj'

    document.body.appendChild(input)
    document.body.appendChild(btn)
    document.body.appendChild(ul)

    btn.addEventListener('click', () => {
        const li = document.createElement('li')
        li.textContent = input.value
        ul.appendChild(li)
        
        const deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Usuń'
        deleteBtn.style.marginLeft = '20px'
        li.appendChild(deleteBtn)

        deleteBtn.addEventListener('click', () => {
            li.style.display = 'none'
        })
    })
}