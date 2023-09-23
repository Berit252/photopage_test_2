function closeImg(){
    document.querySelector('.img-window').remove()
    document.querySelector('.img-prev-button').remove()
    document.querySelector('.img-next-button').remove()
}

function changeImg01(changeId) {
    document.querySelector('#current-img').remove()

    let getImgWindow = document.querySelector('.img-window')
    let newImg = document.createElement('img')
    getImgWindow.appendChild(newImg)

    let calcNewImg
    if (changeId === 1) {
        calcNewImg = getLatestOpenedImg + 1
        if(calcNewImg > gallery01Images.length) {
            calcNewImg = 1
        }
    } else if (changeId === 0) {
        calcNewImg = getLatestOpenedImg - 1
        if(calcNewImg < 1) {
            calcNewImg = gallery01Images.length
        }
    }

    newImg.setAttribute('src', `../img/pack1/${calcNewImg}.jpg`)
    newImg.setAttribute('id', 'current-img')

    getLatestOpenedImg = calcNewImg
}

function changeImg02(changeId) {
    document.querySelector('#current-img').remove()

    let getImgWindow = document.querySelector('.img-window')
    let newImg = document.createElement('img')
    getImgWindow.appendChild(newImg)

    let calcNewImg
    if (changeId === 1) {
        calcNewImg = getLatestOpenedImg + 1
        if(calcNewImg > gallery02Images.length) {
            calcNewImg = 1
        }
    } else if (changeId === 0) {
        calcNewImg = getLatestOpenedImg - 1
        if(calcNewImg < 1) {
            calcNewImg = gallery02Images.length
        }
    }

    newImg.setAttribute('src', `../img/pack2/${calcNewImg}.jpg`)
    newImg.setAttribute('id', 'current-img')

    getLatestOpenedImg = calcNewImg
}

function changeImg03(changeId) {
    document.querySelector('#current-img').remove()

    let getImgWindow = document.querySelector('.img-window')
    let newImg = document.createElement('img')
    getImgWindow.appendChild(newImg)

    let calcNewImg
    if (changeId === 1) {
        calcNewImg = getLatestOpenedImg + 1
        if(calcNewImg > gallery03Images.length) {
            calcNewImg = 1
        }
    } else if (changeId === 0) {
        calcNewImg = getLatestOpenedImg - 1
        if(calcNewImg < 1) {
            calcNewImg = gallery03Images.length
        }
    }

    newImg.setAttribute('src', `../img/pack3/${calcNewImg}.jpg`)
    newImg.setAttribute('id', 'current-img')

    getLatestOpenedImg = calcNewImg
}