from math import sqrt

users = {"Angelica": {"Metal Gear Solid V: The Phantom Pain": 3.5, "The Last of Us": 2.0, "The Legend of Zelda: Majora's Mask": 4.5, "Red Dead Redemption 2": 5.0, "The Elder Scrolls V: Skyrim": 1.5, "The Legend of Zelda: Twilight Princess": 2.5, "Batman: Arkham City": 2.0},
         "Bill":{"Metal Gear Solid V: The Phantom Pain": 2.0, "The Last of Us": 3.5, "BioShock": 4.0, "Red Dead Redemption 2": 2.0, "The Elder Scrolls V: Skyrim": 3.5, "Batman: Arkham City": 3.0},
         "Chan": {"Metal Gear Solid V: The Phantom Pain": 5.0, "The Last of Us": 1.0, "BioShock": 1.0, "The Legend of Zelda: Majora's Mask": 3.0, "Red Dead Redemption 2": 5, "The Elder Scrolls V: Skyrim": 1.0},
         "Dan": {"Metal Gear Solid V: The Phantom Pain": 3.0, "The Last of Us": 4.0, "BioShock": 4.5, "Red Dead Redemption 2": 3.0, "The Elder Scrolls V: Skyrim": 4.5, "The Legend of Zelda: Twilight Princess": 4.0, "Batman: Arkham City": 2.0},
         "Hailey": {"The Last of Us": 4.0, "BioShock": 1.0, "The Legend of Zelda: Majora's Mask": 4.0, "The Legend of Zelda: Twilight Princess": 4.0, "Batman: Arkham City": 1.0},
         "Jordyn":  {"The Last of Us": 4.5, "BioShock": 4.0, "The Legend of Zelda: Majora's Mask": 5.0, "Red Dead Redemption 2": 5.0, "The Elder Scrolls V: Skyrim": 4.5, "The Legend of Zelda: Twilight Princess": 4.0, "Batman: Arkham City": 4.0},
         "Sam": {"Metal Gear Solid V: The Phantom Pain": 5.0, "The Last of Us": 2.0, "The Legend of Zelda: Majora's Mask": 3.0, "Red Dead Redemption 2": 5.0, "The Elder Scrolls V: Skyrim": 4.0, "The Legend of Zelda: Twilight Princess": 5.0},
         "Veronica": {"Metal Gear Solid V: The Phantom Pain": 3.0, "The Legend of Zelda: Majora's Mask": 5.0, "Red Dead Redemption 2": 4.0, "The Elder Scrolls V: Skyrim": 2.5, "The Legend of Zelda: Twilight Princess": 3.0}
        }



def manhattan(rating1, rating2):
    """Computes the Manhattan distance. Both rating1 and rating2 are dictionaries
       of the form {'The Strokes': 3.0, 'Slightly Stoopid': 2.5}"""
    distance = 0
    total = 0
    for key in rating1:
        if key in rating2:
            distance += abs(rating1[key] - rating2[key])
            total += 1
    if total > 0:
        return distance / total
    else:
        return -1 #Indicates no ratings in common



def pearson(rating1, rating2):
    sum_xy = 0
    sum_x = 0
    sum_y = 0
    sum_x2 = 0
    sum_y2 = 0
    n = 0
    for key in rating1:
        if key in rating2:
            n += 1
            x = rating1[key]
            y = rating2[key]
            sum_xy += x * y
            sum_x += x
            sum_y += y
            sum_x2 += pow(x, 2)
            sum_y2 += pow(y, 2)
    # now compute denominator
    denominator = sqrt(sum_x2 - pow(sum_x, 2) / n) * sqrt(sum_y2 - pow(sum_y, 2) / n)
    if denominator == 0:
        return 0
    else:
        return (sum_xy - (sum_x * sum_y) / n) / denominator
            

def computeNearestNeighbor(username, users):
    """creates a sorted list of users based on their distance to username"""
    distances = []
    for user in users:
        if user != username:
            distance = pearson(users[user], users[username])
            print(distance)
            distances.append((distance, user))
    # sort based on distance -- closest first
    distances.sort()
    return distances

def recommend(username, users):
    """Give list of recommendations"""
    # first find nearest neighbor
    nearest = computeNearestNeighbor(username, users)[0][1]

    recommendations = []
    # now find bands neighbor rated that user didn't
    neighborRatings = users[nearest]
    userRatings = users[username]
    for artist in neighborRatings:
        if not artist in userRatings:
            recommendations.append((artist, neighborRatings[artist]))
    # using the fn sorted for variety - sort is more efficient
    return sorted(recommendations, key=lambda artistTuple: artistTuple[1], reverse = True)

def conversion(tup):
    listOfNames = []
    for x, y in tup:
        # dict.setdefault(x, []).append(y)
        listOfNames.append(x)
        
    return listOfNames

def returnRecommended():
    listOfRecomended = recommend('Veronica', users)
    result = conversion(listOfRecomended)
    print(result)
    return result

returnRecommended()
