const btn = document.querySelector('#nfs')
const kds = document.querySelector('#kds')
const wrapper = document.querySelector('.wrapper')
const wrapper2 = document.querySelector('.wrapper2')
countries_data.sort((a, b) => b.population - a.population)




let enKalabalik = countries_data.slice(0, 11)
let dunyaninNufus = countries_data.reduce((toplamNufus, ulke) => toplamNufus + ulke.population, 0)


// console.log((ulke.population/dunyaninNufus)*100)

btn.addEventListener('click', calıstır)

function calıstır() {
    wrapper2.innerHTML = ''
    wrapper.innerHTML = ''
    enKalabalik.forEach((ulke) => {
        const kapsayici = document.createElement('div')
        kapsayici.classList.add('kapsayici')
        const p = document.createElement('p')
        p.textContent = ulke.name

        const grafik = document.createElement('div')
        grafik.className = 'grafik'
        const oran = document.createElement('div')
        oran.className = 'oran'

        grafik.append(oran)
        oran.style.width = `${Math.round((ulke.population / dunyaninNufus) * 100)}%`

        const nufus = document.createElement('p')
        nufus.textContent = ulke.population

        kapsayici.append(p, grafik, nufus)

        wrapper.append(kapsayici)

    })
}












// Dilleri Bulma
let dilleriBulma = countries_data.reduce((acc, ulke) => {
    return acc.concat(ulke.languages)
}, [])
console.log(dilleriBulma)


// Tekrar Eden Dilleri Eksiltme
let enCokKonusulan = dilleriBulma.reduce((acc, item) => {
    if (item in acc) {
        acc[item]++
    } else {
        acc[item] = 1
    }
    return acc
}, {})
console.log(enCokKonusulan)


// Dilleri Diziye Çevirme
let enCokKonusulanDizi = Object.entries(enCokKonusulan)
console.log(enCokKonusulanDizi)


// Büyükten Küçüğe Sıralama
let sıralıEnCokKonusulanDizi = enCokKonusulanDizi.sort((a, b) => b[1] - a[1])
console.log(sıralıEnCokKonusulanDizi)


// İlk 10 Dili Bulma
let ilkOn = sıralıEnCokKonusulanDizi.slice(0, 10)
console.log(ilkOn)


// Elementleri Oluşturma
kds.addEventListener('click', sırala)

function sırala() {
    wrapper.innerHTML = ''
    wrapper2.innerHTML = ''
    ilkOn.forEach((dil) => {
        const kapsayici2 = document.createElement('div')
        kapsayici2.classList.add('kapsayici')
        const p2 = document.createElement('p')
        p2.textContent = dil[0]

        const grafik2 = document.createElement('div')
        grafik2.className = 'grafik'
        const oran2 = document.createElement('div')
        oran2.className = 'oran2'

        grafik2.append(oran2)
        oran2.style.width = `${Math.round((dil[1] / dilleriBulma.length) * 100)}%`

        const adet = document.createElement('p')
        adet.textContent = dil[1]

        kapsayici2.append(p2, grafik2, adet)

        wrapper2.append(kapsayici2)
    })
}