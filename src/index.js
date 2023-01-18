const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let arr = []
    let reg1 = /00/g
    let reg2 = /10/g
    let reg3 = /11/g
    let res = []
    let words = []
    for (let i = 0; i < expr.length; i = i + 10) {
        arr.push(expr.slice(i, i + 10))
    }
    res = arr.map(item => {
        return item.replace(reg1, '').replace(reg2, '.').replace(reg3, '-')
    })

    for (let key of res) {
        if (key === '**********') {
            words.push(' ')
        } else {
            words.push(MORSE_TABLE[key])
        }
    }
    return words.join('')
}

module.exports = {
    decode
}