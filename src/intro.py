print("Hello world from python!")
print(2)
print(5 + 3)
print(True)

# this is a comment
# Create a variable
name = "Leo"
age = 24
print(name, age)

# Concatination (putting things together)
# Cant concatinate strings and integers together
#print("Hello my name is" + name + "and my age is" + age) str() converts to string
print("Hello my name is " + name + " and my age is " + str(age))


## Mini Challenge
## Write a brief story using 5 variables

newName = "Cam"
newAge = 28
city = "Phoenix"
hoursStudying = 3.5
likesPython = True

print("My name is " + newName + ".")
print("I am " + str(newAge) + " years old.")
print("I currently live in " + city + ".")
print("I study programming for " + str(hoursStudying) + " hours a day.")
print("Do I enjoy learning Python? " + str(likesPython))

#F-STRING: always start with f"
place = "disneyland"
activity = "riding the rollercoaster"
members = 5
print("The last time I wnet to" + place + ", I had a great time" + activity + "with" + str(members))
print(f"The last time I went to {place}, I had a great time {activity} with {members} of my friends.")

# Type Function: type()
# returns class typoe of variable
print(type(name))
print(type(age))
print(type(True))

# Input Function: input() empty variable that gets updated by user
# lets the user interact with the terminal
user_name = input("Enter your name: ")
print(f"Hello, {user_name}!")

# input() alwasys returns a string
print(type(input("Enter your name:")))

#Ex: converting input to in
new_age = int(input("Enter your age:"))
print(age + new_age)



"""
Pizza Calculator
Ask how many slices of pizza and how many people.
Use math operators to calculate slices per person.
Show the result with an f-string.
"""

# Ask the user for information
slices = int(input("How many slices of pizza do you have? "))
people = int(input("How many people are sharing the pizza? "))

# Calculate slices per person
slicesPerPerson = slices / people

# Display the result using an f-string
print(f"Each person gets {slicesPerPerson} slices of pizza!")
















