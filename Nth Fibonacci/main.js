// We have 3 solutions 
// ------------------------------------------
// 1st solution (too long & the naive one) :

// Time = O(2^n) - because the fibs are calling +2 fibs for each and that's a time complexity
// Space = O(n) - we are using space (too much unnecessary) and that's space complexity

// if n==2
//     return 1;
// elif n==1;
//     return 0;
// else return fib(n-1) + (n-2);


function getNthFib(n){
    if(n==2){
        return 1
    } 
    else if (n==1)
    {
        return 0
    }else{
        return getNthFib(n - 1) + getNthFib(n - 2);
    }
}

// -------------------------------------------
// 2nd solution :
// Time = O(n)
// Space = O(n)

// Memoizing - Caching
// In this case, we are storing the fibs in cash tables & accessing them there

// if n is memoize
//      return memoize[n]
// else:
//      memoize[n] = fib(n-1)+fib(n-2)
// return memoize[n]

function getNthFib(n, memoize = {1:0, 2:1}){
    if (n in memoize){
        return memoize [n];
    }else {
        memoize [n] = getNthFib(n-1 , memoize) + getNthFib(n-2,memoize);
        return memoize [n]; 
    }
    
}

// -------------------------------------------
// 3rd solution :

// Time = O(n)
// Space = O(1) - because we're not using space & only storing 2 values which is constant space!

// in this case, we eliminate using any kind of space
// we have an array/variable of the last two fib numbers

// we are always storing only two values, the previous two fib nums 
// we calculate the next fib num in constant time 
// by accessing these 2 values and we're updating the array/variables

// [0,1]
// var counter=3
// while(counter<=n){
    // next = 0 + 1 =2 ;
// [1,2] - the first element is moving to garbage and the second one is now the first one
    // next = 1 + 2 = 3 
// [2,3] 
    // ...

function getNthFib(n){
    // if we had getNthFib(1)- this is the only case where we've got only the first fib num, i.e., return lastTwo [0];
    var lastTwo = [0,1]
    var counter = 3; // or 2 
    while(counter <= n ){
        var nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1]
        lastTwo[1] = nextFib
        counter +=1;
    }
    return n >= 1 ? lastTwo[1] : lastTwo[0];
} 