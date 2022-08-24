// Code your solution here

function findMatching(drivers,name){

    return drivers.filter(driver => {

        if (driver.localeCompare(name,undefined,  {sensitivity: 'base'}) ===0){
            return true
        }else {
            return false
        }

        //driver.localeCompare(name, {sensitivity: 'base'})

    })
    
}

function fuzzyMatch(drivers,name){

    return drivers.filter(driver => driver.startsWith(name))

}

function matchName(drivers,name){

    return drivers.filter(driver => driver.name.match(name))

}

