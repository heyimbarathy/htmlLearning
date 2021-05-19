'''
Name = input('Enter your name: ')
print(Name)

Age = int(input('Enter your Age'))
print(Age+1)
'''

scores = []

for i in range(5):
    currentScore = float(input('Enter the Score ' + str(i+1)+' : '))
    scores.append(currentScore)
    print('The score you entered was: ', currentScore)

print(scores)
