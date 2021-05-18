const returnFirstTwoDrivers = function(array) {
    return array.slice(0,2)
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2)
}

const selectingDrivers = []
selectingDrivers[0] = returnFirstTwoDrivers
selectingDrivers[1] = returnLastTwoDrivers

function createFareMultiplier(num) {
    return function fareMultiplier(fare) {
        return fare * num
    }
}
const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}
const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(drivers, fn) {
    return fn(drivers)
}