let nums = [ 1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;

// Not equal because they are stored in different references
nums === mystery;
moreNums === nums;