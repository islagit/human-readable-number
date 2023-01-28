module.exports = function toReadable(number) {
    let total = "";

    let zero = "";
    let first = "";
    let second = "";
    let digit = number.toString();

    for (let i = 0; i < digit.length; i++) {
        if (digit.length == 1) {
            switch (digit) {
                case '0':
                    total = 'zero';
                    break;
                case '1':
                    total = 'one';
                    break;
                case '2':
                    total = 'two';
                    break;
                case '3':
                    total = 'three';
                    break;
                case '4':
                    total = 'four';
                    break;
                case '5':
                    total = 'five';
                    break;
                case '6':
                    total = 'six';
                    break;
                case '7':
                    total = 'seven';
                    break;
                case '8':
                    total = 'eight';
                    break;
                case '9':
                    total = 'nine';
                    break;
                default:
                    break;
            }
        }
        else if (digit.length == 2) {
            if (number < 20) {
                switch (digit) {
                    case '10':
                        total = 'ten';
                        break;
                    case '11':
                        total = 'eleven';
                        break;
                    case '12':
                        total = 'twelve';
                        break;
                    case '13':
                        total = 'thirteen';
                        break;
                    case '14':
                        total = 'fourteen';
                        break;
                    case '15':
                        total = 'fifteen';
                        break;
                    case '16':
                        total = 'sixteen';
                        break;
                    case '17':
                        total = 'seventeen';
                        break;
                    case '18':
                        total = 'eighteen';
                        break;
                    case '19':
                        total = 'nineteen';
                        break;
                    default:
                        break;
                }
            }

            else {
                switch (digit[0]) {
                    case '2':
                        first = 'twenty'
                        break;
                    case '3':
                        first = 'thirty';
                        break;
                    case '4':
                        first = 'forty';
                        break;
                    case '5':
                        first = 'fifty';
                        break;
                    case '6':
                        first = 'sixty';
                        break;
                    case '7':
                        first = 'seventy';
                        break;
                    case '8':
                        first = 'eighty';
                        break;
                    case '9':
                        first = 'ninety'
                        break;
                    default:
                        break;
                }

                switch (digit[1]) {
                    case '1':
                        second = 'one';
                        break;
                    case '2':
                        second = 'two';
                        break;
                    case '3':
                        second = 'three';
                        break;
                    case '4':
                        second = 'four';
                        break;
                    case '5':
                        second = 'five';
                        break;
                    case '6':
                        second = 'six';
                        break;
                    case '7':
                        second = 'seven';
                        break;
                    case '8':
                        second = 'eight';
                        break;
                    case '9':
                        second = 'nine';
                        break;
                    default:
                        break;
                }

                total = first + " " + second;
            }
        }

        else if (digit.length == 3) {
            switch (digit[0]) {
                case '1':
                    zero = 'one hundred'
                    break;
                case '2':
                    zero = 'two hundred'
                    break;
                case '3':
                    zero = 'three hundred';
                    break;
                case '4':
                    zero = 'four hundred';
                    break;
                case '5':
                    zero = 'five hundred';
                    break;
                case '6':
                    zero = 'six hundred';
                    break;
                case '7':
                    zero = 'seven hundred';
                    break;
                case '8':
                    zero = 'eight hundred';
                    break;
                case '9':
                    zero = 'nine hundred'
                    break;
                default:
                    break;
            }

            if (Number(digit[1] + digit[2]) >= 10 && Number(digit[1] + digit[2]) < 20) {
                switch (digit[1] + digit[2]) {
                    case '10':
                        first = 'ten';
                        break;
                    case '11':
                        first = 'eleven';
                        break;
                    case '12':
                        first = 'twelve';
                        break;
                    case '13':
                        first = 'thirteen';
                        break;
                    case '14':
                        first = 'fourteen';
                        break;
                    case '15':
                        first = 'fifteen';
                        break;
                    case '16':
                        first = 'sixteen';
                        break;
                    case '17':
                        first = 'seventeen';
                        break;
                    case '18':
                        first = 'eighteen';
                        break;
                    case '19':
                        first = 'nineteen';
                        break;
                    default:
                        break;
                }
                total = zero + " " + first;
            }

            else {
                switch (digit[1]) {
                    case '2':
                        first = 'twenty'
                        break;
                    case '3':
                        first = 'thirty';
                        break;
                    case '4':
                        first = 'forty';
                        break;
                    case '5':
                        first = 'fifty';
                        break;
                    case '6':
                        first = 'sixty';
                        break;
                    case '7':
                        first = 'seventy';
                        break;
                    case '8':
                        first = 'eighty';
                        break;
                    case '9':
                        first = 'ninety'
                        break;
                    default:
                        break;
                }

                switch (digit[2]) {
                    case '1':
                        second = 'one';
                        break;
                    case '2':
                        second = 'two';
                        break;
                    case '3':
                        second = 'three';
                        break;
                    case '4':
                        second = 'four';
                        break;
                    case '5':
                        second = 'five';
                        break;
                    case '6':
                        second = 'six';
                        break;
                    case '7':
                        second = 'seven';
                        break;
                    case '8':
                        second = 'eight';
                        break;
                    case '9':
                        second = 'nine';
                        break;
                    default:
                        break;
                }
                total = zero + " " + first + " " + second;
            }
        }
    }
    if (total.length - 1 == " ") {
        total.replace(0, str.length - 1)
        console.log(total);
    }
    return total.toString().split(' ').join(' ').replaceAll('  ', ' ').replace(/\s+$/, '');;
}
