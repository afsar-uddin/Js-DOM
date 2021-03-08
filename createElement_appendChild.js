document.write('<h2>Everything comes from Javascript</h2> <hr>')
        let sec = document.createElement('section')
        sec.className = 'content-wrapper'

        let h2 = document.createElement('h2')
        h2.textContent = 'I am from createElement tag'

        sec.appendChild(h2)

        let peraOfsec = document.createElement('p')
        peraOfsec.textContent = 'Amar sunar bangla ami tumai valobashi, chirodin tumar akas, tumar batash amar prane, oma amar prane bjay bashy '

        sec.appendChild(peraOfsec)

        let divForSec = document.createElement('div')
        divForSec.className = 'single-col'

        let h3ForDiv = document.createElement('h3')
        h3ForDiv.textContent = 'I am the single product'

        let peraForDiv = document.createElement('p')
        peraForDiv.textContent = 'I am the single product content which is very effective for the targeted users'

        let imgForDiv = document.createElement('img')
        imgForDiv.src = 'abc.png'

        divForSec.appendChild(h3ForDiv)
        divForSec.appendChild(peraForDiv)
        divForSec.appendChild(imgForDiv)
        
        sec.appendChild(divForSec)

        document.body.appendChild(sec)