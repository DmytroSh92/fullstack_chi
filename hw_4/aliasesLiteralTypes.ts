type StringOrNumber = string | number;

function combine(input1: StringOrNumber, input2: StringOrNumber) {
    if(typeof input1 === "string" && typeof input2 === "string") {
        console.log(input1.concat(input2));
    } else if(isNumber(input1) && isNumber(input2)) {
        // @ts-ignore
        console.log(input1 + input2);
    } else {
        console.log("Error different types")
    }
}

function isNumber(input: StringOrNumber): boolean {
    return typeof input === "number" && !isNaN(input);
}

combine(1, 2);
combine("2", "test");
combine(1, NaN);