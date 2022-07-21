const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = []
    let result = null
    for(let i = 0; i<=expr.length ; i = i + 10){
        arr.push(expr.slice(i ,  i + 10))
    }
    result = arr.map(item=>{
        return item.replace(/00/g, '').replace(/11/g, '-').replace(/10/g, '.')
    }).map(i=>{
        if(i === '**********'){
            return i = ' '
        }
        else{
            return i = MORSE_TABLE[i]
        }
    })
    result = result.join('')
    return result
}

module.exports = {
    decode
}