/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr){
    let falseArr = [...arr];
    let newarr=falseArr.sort((a,b)=>{
        console.log('----- nueva iteración ------') 
        console.log('Primer valor:', a.year, 'Segundo valor:', b.year)
        let result= a.year - b.year
        return result
    })
    return newarr
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct
function howManyMovies(arr){
    // let stevenArr = arr.filter(elm => elm.director==="Steven Spielberg")
    // console.log(stevenArr)
    let stevenArr = arr.filter(elm => elm.director==="Steven Spielberg" && elm.genre.includes("Drama"))

    // let stevenDramaArr = stevenArr.filter(peli => {
    //     let idxDrama = peli.genre.indexOf("Drama")
    //     return peli.genre[idxDrama] === "Drama"

    // })

    return stevenArr.length
}
// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles
    function orderAlphabetically(arr){
        if(arr.length>20){
            arr.splice(20)

        }

        let result = []
        arr.forEach(element => {
            result.push(element.title)
        });
        result.sort()
        // console.log(`console:${result} ${result.length}`)
        return result
    }
// Iteration 4: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr){
    if(arr.length==0){
        return 0
    }else{
    let rates = arr.map(elm => elm.rate)
    let avg = rates.reduce((acc,elm) =>acc + elm) / arr.length
    // console.log(test)
    return Math.round(avg*100)/100
    }
}

// Iteration 5: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr){
    let dramaMovies = arr.filter(elm => elm.genre.includes("Drama"))
    if(dramaMovies.length==0){
        return 0
    }
    // console.log(dramaMovies)
    let dramaMoviesRates = dramaMovies.map(elm => elm.rate)
    // console.log(dramaMoviesRates)
    let avg = dramaMoviesRates.reduce((acc,elm)=>acc+elm)/dramaMovies.length
    return Math.round(avg*100)/100
}

function turnHoursToMinutes(arr){
        let falseArr = arr
    let arrDurations = falseArr.map(elm=>{

        let elmSpl = elm.duration.split(" ")

        if(elmSpl.length==2){
            let hours = parseInt(elmSpl[0].replace("h",""))
            let mins =  parseInt(elmSpl[1].replace("min",""))
            let num= hours*60+mins
            return elm={
                duration:num
            }
        }else{
            if(elmSpl[0].includes("h")){
                let hour = parseInt(elmSpl[0].replace("h",""))
                let num = parseInt(hour*60)
                return elm = {
                    duration:num
                }
            }else{
                let min = parseInt(elmSpl[0].replace("min",""))
                return elm = {
                    duration:min
                }
            }
        }
        
    })

    return arrDurations

}
// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average