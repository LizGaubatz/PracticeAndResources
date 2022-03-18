from flask import Flask
import time 
import webbrowser 

app = Flask(__name__)

@app.route("/")

def Alarm():

#  https://www.youtube.com/watch?v=dQw4w9WgXcQ

    Set_Alarm = input("Set the website alarm as H:M:S: ") 
    if len(Set_Alarm) != 8:
        print ("Invalid time format! Please try again...")
    else:
    # Second Input: It is the URL that you want 
    # to open on the given time. 
        url = input("Enter the website you want to open:") 
        
        # This is the actual time that we will use to print. 
        Actual_Time = time.strftime("%I:%M:%S") 
        
        # This is the while loop that'll print the time 
        # until it's value will be equal to the alarm time 
        while (Actual_Time != Set_Alarm): 
            print ("The time is " + Actual_Time) 
            Actual_Time = time.strftime("%I:%M:%S") 
            time.sleep(1) 
        
        
        # This if statement plays the role when its the 
        # alarm time and executes the code within it. 
        if (Actual_Time == Set_Alarm): 
            print ("You should see your webpage now :-)")
        
            # We are calling the open() 
            # function from the webrowser module. 
            webbrowser.open(url) 

Alarm()

if __name__=='__main__':
    app.run(port=8000,debug=True)   