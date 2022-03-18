from ast import arg
from flask import Flask

# "integer to word api" in google
# Numbers Translator api

# https://api.funtranslations.com/translate/numbers.json/text?=five


app = Flask(__name__)

n = (input("Enter a number: "))
n = float(n)
@app.route("/")


def numberToEnglishText(n):
    numberText = {
        1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
        6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
        11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
        15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen',
        19: 'nineteen', 20: 'twenty',
        30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty',
        70: 'seventy', 80: 'eighty', 90: 'ninety',
        100: 'hundred', 1000: 'thousand', 1000000: 'million'
    }


    if n == 0:
        return 'zero'
    if n < 0:
        return 'negative ' + numberToEnglishText(-n)

    result = ''

    for num in sorted(numberText.keys(), reverse=True):
        count = int(n/num)

        if (count < 1):
            continue

        if (num >= 100):
            result += numberToEnglishText(count) + ' '

        result += numberText[num]
        n -= count * num
        if (n > 0):
            result += ' '

        # for [num] in [n]:
        #     result = n.replace([num], numberText[num])

    
    print("******************\n", result, "\n******************\n")
    return result

numberToEnglishText(n)

if __name__=='__main__':
    app.run(port=8000, debug=True) 