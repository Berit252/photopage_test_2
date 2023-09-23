let gallery01Images = document.querySelectorAll('#i1 .gallery-img')
let gallery02Images = document.querySelectorAll('#i2 .gallery-img')
let gallery03Images = document.querySelectorAll('#i3 .gallery-img')

let getLatestOpenedImg

if (gallery01Images) {
    gallery01Images.forEach((image, index) => {
        image.onclick = () => {
            let getElementCSS = window.getComputedStyle(image)
            let getFullImgUrl = getElementCSS.getPropertyValue('background-image')
            let getImgUrlPos = getFullImgUrl.split('/img/pack1/small_size/')
            alert(getImgUrlPos)
            let setNewImgUrl = getImgUrlPos[1].replace('")', '')
            
            getLatestOpenedImg = index + 1

            let newImgWindow = document.createElement('div')
            document.body.appendChild(newImgWindow)
            newImgWindow.setAttribute('class', 'img-window')
            newImgWindow.setAttribute('onClick', 'closeImg()')

            let newImg = document.createElement('img')
            newImgWindow.appendChild(newImg)
            newImg.setAttribute('src', '../img/pack1/' + setNewImgUrl)
            newImg.setAttribute('id', 'current-img')
            
            newImg.onload = () => {
                let prevButton = document.createElement('a')
                let buttonPrevText = document.createTextNode('<')
                prevButton.appendChild(buttonPrevText)
                document.body.appendChild(prevButton)
                prevButton.setAttribute('class', 'img-prev-button')
                prevButton.setAttribute('onclick', 'changeImg01(0)')
                prevButton.style.cssText = 'left: 10vw'
    
                let nextButton = document.createElement('a')
                let buttonNextText = document.createTextNode('>')
                nextButton.appendChild(buttonNextText)
                document.body.appendChild(nextButton)
                nextButton.setAttribute('class', 'img-next-button')
                nextButton.setAttribute('onclick', 'changeImg01(1)')
                nextButton.style.cssText = 'right: 10vw'
            }
            
        }
    })
}

if (gallery02Images) {
    gallery02Images.forEach((image, index) => {
        image.onclick = () => {
            let getElementCSS = window.getComputedStyle(image)
            let getFullImgUrl = getElementCSS.getPropertyValue('background-image')
            let getImgUrlPos = getFullImgUrl.split('/img/pack2/small_size/')
            let setNewImgUrl = getImgUrlPos[1].replace('")', '')
            
            getLatestOpenedImg = index + 1

            let newImgWindow = document.createElement('div')
            document.body.appendChild(newImgWindow)
            newImgWindow.setAttribute('class', 'img-window')
            newImgWindow.setAttribute('onClick', 'closeImg()')

            let newImg = document.createElement('img')
            newImgWindow.appendChild(newImg)
            newImg.setAttribute('src', '../img/pack2/' + setNewImgUrl)
            newImg.setAttribute('id', 'current-img')
            
            newImg.onload = () => {
                let prevButton = document.createElement('a')
                let buttonPrevText = document.createTextNode('<')
                prevButton.appendChild(buttonPrevText)
                document.body.appendChild(prevButton)
                prevButton.setAttribute('class', 'img-prev-button')
                prevButton.setAttribute('onclick', 'changeImg02(0)')
                prevButton.style.cssText = 'left: 15vw'
    
                let nextButton = document.createElement('a')
                let buttonNextText = document.createTextNode('>')
                nextButton.appendChild(buttonNextText)
                document.body.appendChild(nextButton)
                nextButton.setAttribute('class', 'img-next-button')
                nextButton.setAttribute('onclick', 'changeImg02(1)')
                nextButton.style.cssText = 'right: 15vw'
            }
            
        }
    })
}

if (gallery03Images) {
    gallery03Images.forEach((image, index) => {
        image.onclick = () => {
            let getElementCSS = window.getComputedStyle(image)
            let getFullImgUrl = getElementCSS.getPropertyValue('background-image')
            let getImgUrlPos = getFullImgUrl.split('/img/pack3/small_size/')
            let setNewImgUrl = getImgUrlPos[1].replace('")', '')
            
            getLatestOpenedImg = index + 1

            let newImgWindow = document.createElement('div')
            document.body.appendChild(newImgWindow)
            newImgWindow.setAttribute('class', 'img-window')
            newImgWindow.setAttribute('onClick', 'closeImg()')

            let newImg = document.createElement('img')
            newImgWindow.appendChild(newImg)
            newImg.setAttribute('src', '../img/pack3/' + setNewImgUrl)
            newImg.setAttribute('id', 'current-img')
            
            newImg.onload = () => {
                let prevButton = document.createElement('a')
                let buttonPrevText = document.createTextNode('<')
                prevButton.appendChild(buttonPrevText)
                document.body.appendChild(prevButton)
                prevButton.setAttribute('class', 'img-prev-button')
                prevButton.setAttribute('onclick', 'changeImg03(0)')
                prevButton.style.cssText = 'left: 15vw'
    
                let nextButton = document.createElement('a')
                let buttonNextText = document.createTextNode('>')
                nextButton.appendChild(buttonNextText)
                document.body.appendChild(nextButton)
                nextButton.setAttribute('class', 'img-next-button')
                nextButton.setAttribute('onclick', 'changeImg03(1)')
                nextButton.style.cssText = 'right: 15vw'
            }
            
        }
    })
}
