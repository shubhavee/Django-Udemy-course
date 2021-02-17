###########################
## PART 10: Simple Game ###
### --- CODEBREAKER --- ###
## --Nope--Close--Match--  ##
###########################

# It's time to actually make a simple command line game so put together everything
# you've learned so far about Python. The game goes like this:

# 1. The computer will think of 3 digit number that has no repeating digits.
# 2. You will then guess a 3 digit number
# 3. The computer will then give back clues, the possible clues are:
#
#     Close: You've guessed a correct number but in the wrong position
#     Match: You've guessed a correct number in the correct position
#     Nope: You haven't guess any of the numbers correctly
#
# 4. Based on these clues you will guess again until you break the code with a
#    perfect match!

# There are a few things you will have to discover for yourself for this game!
# Here are some useful hints:

# Try to figure out what this code is doing and how it might be useful to you
import random
digits = list(range(10))
random.shuffle(digits)
print(digits[:3])

def clue(guess):
    guess=[int(i) for i in guess]

    # print(guess)
    # print(digits)
    if (guess[0]==digits[0] and guess[1]==digits[1] and guess[2]==digits[2]):
        return 1
    elif (guess[0]==digits[0] or guess[1]==digits[1] or guess[2]==digits[2]):
        print("Match")
        return 0
    elif (guess[0] in digits[0:3] or guess[1] in digits[0:3] or guess[2] in digits[0:3]):
        print("Close")
        return 0
    else:
        print("Nope")
        return 0


# Another hint:
flag=0
while flag!=1:

    guess = input("What is your guess? ")
    flag=clue(list(guess))

    if flag==0:
        continue

    elif flag==1:
        print("YES!")
        break
# Think about how you will compare the input to the random number, what format
# should they be in? Maybe some sort of sequence? Watch the Lecture video for more hints!
