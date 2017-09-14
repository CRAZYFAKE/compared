
'use strict';

module.exports = function (array) {

    var MAX_VALUE = 9007199254740992,
        MIN_VALUE = -9007199254740992

    if (!Array.isArray(array)) throw new Error('param should be Array')

    var length = array.length

    if (length === 0) return undefined

    var index = 0
    var longestIndex = 0,
        shortestIndex = 0,
        longest = array[longestIndex],
        shortest = array[shortestIndex]

    var longestLen = MIN_VALUE,
        shortestLen = MAX_VALUE

    var type = typeof longest
    
    if (type !== 'string') {
        if (type === 'number') {
            // If item is number,turn it as String
            longest = String(longest)
            longestLen = longest.length
            shortest = String(shortest)
            shortestLen = shortest.length
        } else {
            // If item isn't 'string' or 'number'
            longestLen = MIN_VALUE
            shortestLen = MAX_VALUE
        }
    } else {
        longestLen = longest.length
        shortestLen = shortest.length
    }

    while (++index < length) {
        var element = array[index]

        if (element == null) continue
        
        var type = typeof element
        if (type === 'function') continue
        if (type === 'number') element = String(element)
        if (element === 'NaN') continue
            
        var eLength = element.length
        if (typeof eLength !== 'number') continue

        if (eLength >= longestLen) {
            longestLen = eLength
            longestIndex = index
            longest = element
        }

        // if (eLength <= shortestLen) {
        //     shortestLen = eLength
        //     shortestIndex = index
        //     shortest = element
        // }
    }

    return longest
}