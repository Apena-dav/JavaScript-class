function generatePassword(length, includeuppercase, includelowercase, includeNumbers, inccludeSymbols){
    return ``

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789"
    const symbolChars = "!£$%^&*()_+:@';~#`"

    let allowedChars = ``
    let password = ``

    allowedChars += includeuppercase ? uppercaseChars : `` 
    allowedChars += includelowercase ? lowercaseChars : `` 
    allowedChars += includeNumbers ? numberChars : `` 
    allowedChars += inccludeSymbols ? symbolChars : `` 

    if(password <= 0){
        return `(password length must be at least one)`
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`
    }

    ///not yet completed
    return ``

}

const passwordLength = 12;
const includeUppercase = true;
const includelowercase = true;
const includeNumbers = true;
const inccludeSymbols = true;

const password = generatePassword(passwordLength, 
                                includeUppercase, 
                                includelowercase, 
                                includeNumbers, 
                                inccludeSymbols)

console.log(`Password: ${password}`)
