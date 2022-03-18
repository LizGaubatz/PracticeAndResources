import sys
from flask import Flask

app = Flask(__name__)

@app.route("/")


# def isDigit(input):
#     try:
#         float(input)
#         return True
#     except ValueError:
#         return False

def vend():

# SET ITEMS
    items = [{'item': 'choc', 'price': 1.5, 'stock': 2},
            {'item': 'pop', 'price': 1.75, 'stock': 1},
            {'item': 'chips', 'price': 2.0, 'stock': 3},
            {'item': 'gum', 'price': 0.50, 'stock': 1},
            {'item': 'mints', 'price': 0.75, 'stock': 3}]
    payment = 0 # cash in machine

    print('welcome to vending machine! \n***************')
# view ITEMS
    # view items, prices
    def view(items):
        print('\nitems available \n***************')

        for item in items:      
            if item.get('stock') == 0:
                items.remove(item)
        for item in items:
            print(item.get('item'), item.get('price'))
        print('***************\n')
#BUY ITEMS
    continueToBuy = True
    # have user choose item
    while continueToBuy == True:
        view(items)
        selected = input('select item: ')
        for item in items:
            if selected == item.get('item'):
                selected = item   
                price = selected.get('price')
                while payment < price:
                # while True:
                    try:
                        payment = payment + float(input('insert ' + str(price - payment) + ': '))
                        x = float(payment)
                        # validity check(s)
                        if x < 0: raise ValueError('payment must be positive')
                    except ValueError as e:
                        print("ValueError: '{}'".format(e))
                        print("Please try entering it again...")
                    except KeyboardInterrupt:
                        sys.exit("\n<terminated by user>")
                    except:
                        exc_value = sys.exc_info()[1]
                        exc_class = exc_value.__class__.__name__
                        print("{} exception: '{}'".format(exc_class, exc_value))
                        sys.exit("<fatal error encountered>")
                    else:
                        break  # no exceptions occurred, terminate loop

                print("Share price entered: {}".format(x))



                print('you got ' + selected.get('item'))
                selected['stock'] -= 1
                payment -= price
                print('cash remaining: ' + str(payment))
                a = input('buy something else? (y/n): ')
                if a == 'n':
                    continueToBuy = False

                    if payment != 0:
                        print(str(payment) + ' refunded')
                        payment = 0
                        print('thank you, have a nice day!\n')
                        break                        
                    else:
                        print('thank you, have a nice day!\n')
                        break  
                else:
                    continue

vend()

if __name__=='__main__':
    app.run(port=8000,debug=True)   
