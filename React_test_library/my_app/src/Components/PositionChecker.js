
const POSITIONS = {
    1: 'st',
    2: 'nd',
    3: 'rd'
}
const isNegative=num => num<0
const isNotNumber=num =>isNaN(num)
const isInteger= number => number===parseInt(number,10)

const covertToOrdinalNubmer = num => {

    if(isNegative(num)){
        throw new Error('number is negative')
    }
    if(isNotNumber(num)){
        throw new Error('cannot convert a to ordinal number')
    }
    if(!isInteger(num)){
        throw new Error('cannot convert float number')
    }


    return num % 10 in POSITIONS ? `${num}${POSITIONS[num%10]}` : `${num}th`;
}

module.exports = {
    covertToOrdinalNubmer
};