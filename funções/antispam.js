const usedCommandRecently = new Set()

/**
 * Check is number filtered
 * @param  {String} from
 */
const isFiltered = (from) => !!usedCommandRecently.has(from)

/**
 * Add number to filter
 * @param  {String} from
 */
const addFilter = (from) => {
    usedCommandRecently.add(from)
    setTimeout(() => usedCommandRecently.delete(from), 5000) //Segundos de delay
}

module.exports = { 
    antiSpam: {
    isFiltered,
    addFilter
}
}