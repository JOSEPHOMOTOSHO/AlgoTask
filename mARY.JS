// let noOfWashes = 2;
// let cleanPile = [1, 2, 1, 1];
// let DirtyPile= [1, 4, 3, 2, 4];


/**
 * Basically if a cleanPile contains conatains a duplicate increase the count
 * if its not in the clean pile check the dirtyPile
 * check the dirty pile for duplicates also if the no of washes is greater than 1
 */
function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
let count = 0;
for(let i = 0 ; i< cleanPile.length; i++){
    if(cleanPile.includes(cleanPile[i],i+1)){
        let secondLeg = cleanPile.lastIndexOf(cleanPile[i])
        cleanPile.splice(secondLeg,1) 
        count += 1
    }else if(dirtyPile.includes(cleanPile[i])){
        if(noOfWashes > 0){
        let secondLeg = cleanPile.includes(cleanPile[i])
        dirtyPile.splice(secondLeg,1)
        noOfWashes--
        count+=1
        }
    }
 for(let j = 0; j<dirtyPile.length; j++){
     if(noOfWashes > 1){
         if(dirtyPile.includes(dirtyPile[i],i+1)){
             let secondLeg = dirtyPile.lastIndexOf(dirtyPile[i])
             dirtyPile.splice(secondLeg,1)
             noOfWashes -= 2
             count++
         }
     }
 }   

    }
    return count
}


console.log(getMaxPairs(2, [1, 2, 1,1,], [1, 4, 3, 2, 4]))