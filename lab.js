
const food = 'Lasagna'
let drink = 'soda' //previously const instead of let
let myName = 'Chris'
let myFriendsName = 'Christina'

console.log(drink)

const lunchTime = (foodChoice, drinkChoice) => {
    return `My friend ${myFriendsName} and ${myName} are eating ${foodChoice} and drinking ${drinkChoice} today.`
}
console.log(lunchTime("Pizza", "Soda"))

const foodForTodayAndTomorrow = (tomorrowFoodChoice, TomorrowDrinkChoice, callBackFunction) => {
    return `${callBackFunction} Tomorrow we want ${tomorrowFoodChoice} and ${TomorrowDrinkChoice}.`
}

console.log(foodForTodayAndTomorrow('Pizza', 'Soda', lunchTime('Cheese', 'Apple Juice')))

console.log(`My friend ${myFriendsName} and ${myName} are eating ${food} and drinking ${drink}`)
console.log(
  `My friend ${myFriendsName} and ${myName} are eating ${food} and drinking ${drink}`)

console.log(drink, food, myName, myFriendsName) 