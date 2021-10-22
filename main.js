let API='http://api.openweathermap.org/data/2.5/weather?q=';
let HALF ='&appid=b067377a72c98ae6963cdae2e35408d9'

VANTA.WAVES({
    el: "#vanta",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
  })

const btn = document.getElementById('btn')
const output = document.getElementById('output')
   const input = document.getElementById('input')
const search = (e)=>{
    e.preventDefault()
    let url = API + input.value + HALF
    getUser(url)
    input.value=''
}
const getUser = async(url)=>{
    let req = await fetch(url)
    let res = await req.json()
    console.log(res)
    output.innerHTML=''
    renderUser(res)
}

const renderUser = (user)=>{
        const city = document.createElement('h3')
        const weather = document.createElement('p')
        const wind = document.createElement('p')
        const sunrise = document.createElement('p')
        const sunset = document.createElement('p')
 

        city.innerHTML = 'city ' + user . sys . country
        weather.innerHTML = 'weather ' + user . main . temp
        wind.innerHTML = 'wind ' + user . wind . speed
        sunrise.innerHTML = 'sunrise ' + user . sys . sunrise
        sunset.innerHTML = 'sunset ' + user . sys . sunset 
        
       
        output.append(city , weather , wind , sunrise , sunset)
        
}
btn.addEventListener('click' , getUser )

// // clouds: {all: 90}
// // cod: 200
// // coord: {lon: 72.8083, lat: 40.5151}
// // dt: 1634824364
// // id: 1527534
// // main: {temp: 286.51, feels_like: 285.23, temp_min: 286.51, temp_max: 288.56, pressure: 1019, …}
// // name: "Osh"
// // sys: {type: 1, id: 8876, country: 'KG', sunrise: 1634779554, sunset: 1634818836}
// // timezone: 21600
// // visibility: 4700
// // weather: [{…}]
// // wind: {speed: 3, deg: 260}




































