function addUpTo(n){
    let total = 0
    for(i=0; i<=n; i++){
        total += i
    }
    return total
}
//O(n) runtime complexity, this is linear time complexity, as n increases, the time it takes to addup increases

console.log(addUpTo(6))

function addUpTo(n){
    return n * (n + 1)/2
}
//O(1) runtime complexity
console.log(addUpTo(6))