let asteroidCollision = function(a) {
    const stack = [];
    for(const curr of a ) {
        if(curr > 0) {
            stack.push(curr)
            continue
        }
        while ( top(stack) > 0 && top(stack) < Math.abs(curr)) {
            stack
        }
    }
}