VacationSpots = ['Paris', 'India', 'France', 'Canada', 'Iceland', 'New York']

VacationFile = open('VacationPlaces', 'w')


for spots in VacationSpots:
    VacationFile.write(spots + '\n')

VacationFile.close()


VacationFile = open('VacationPlaces', 'r')

FirstLine = VacationFile.readline()
print(FirstLine)
SecondLine = VacationFile.readline()
print(SecondLine)

for line in VacationFile:
    print(line, end='')

# TheWholeFile = VacationFile.read()
# print(TheWholeFile)

VacationFile.close()

FinalSpot = 'Thailand'
VacationFile = open('VacationPlaces', 'a')
VacationFile.write(FinalSpot)
VacationFile.close()
VacationFile = open('VacationPlaces', 'r')
for line in VacationFile:
    print(line, end='')

VacationFile.close()

with open('VacationPlaces', 'r') as VacationFile:
    for line in VacationFile:
        print(line)
