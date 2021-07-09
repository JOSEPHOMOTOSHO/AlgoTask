// let noOfWashes = 2;
// let cleanPile = [1, 2, 1, 1];
// let DirtyPile= [1, 4, 3, 2, 4];

function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
    let cleanPileObj = {}
    let dirtyPile = {}
    for(let clean of cleanPile){
        cleanPileObj[clean] = cleanPile[clean] + 1 || 1
    }
    

}