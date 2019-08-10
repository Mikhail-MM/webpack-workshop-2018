// Take a name/string and make that the button label, return a element.

/**
 *
 *
 * @param {string} buttonName
 *  A string which is the name of a button.
 * @returns {string}
 *  A string which says what our button does
 */ 

const makeButton = (buttonName) => {
    // default export
    return `Button: ${buttonName}`;
}

module.exports = makeButton