#Operators are like "symbols" or "shortcuts" that tell the computer,
#to do something with values (numbers, text,ect...).
#They are used to perform operations on variables and values

# ARITHMETIC OPERATOR- used with numberic values to perform basic math

x = 1
y = 2
res = 0

res = x + y #addition
print(res)

res = x - y #subtraction
print(res)

res = x * y #multipication
print(res)

res = x / y #division
print(res)

res = x % y #Modulus-remainder after division
print(res)

res = x ** y #EXPONTETIATION-to the power of
print(res)

res = x // y #FLOOR DIVISION-divide and drop the decimal
print(res)

#ASSIGNMENT OPERATOR- used to assign values to variables
# = means"put this value inside the (variable)"
# shortcuts: +=, -=, *=, /=

x = 5
x += 5 # x = x + 5
x -= 3
print(x)

# COMPARISON OPERATOR: used to compare two values (same as if else)
# == (equal to), != (not equal), < > (less/greater than) <= >= (less/greater than or equal to)

# Logical Operator- used to combine conditional statements (used with booleans)
# and- both must be true
# or - at least ONE must be TRUE 
# not- flips True to False

x = 3
y = 10
z = 10

print(x == y and y == z) #False, because both arent True
print(x == y or y == z) # True, because at least one condition is True
print(not x == y)

# IDENTITY OPERATOR- used to compare the objects, not if they're equal to,
# but if they're actually the same object witht the same memory location
# is - checks if two things are the exact same object in memory
# is not- checks if they are NOT the same 

x = 3
y = 3

print(x is y) #Returns True if both are the exact same
print(x is not y) #Returns True if both are NOT the exact same

# MEMBERSHIP OPERATOR- used to test if a sequence is presented in an object
# in - checks if something is in a sequence(list, string, ext...)
# not in - checks if something is NOT in a sequence

x = [1, 2, 3, 4, 5] # this is a list

print(4 in x)
print(9 not in x)






