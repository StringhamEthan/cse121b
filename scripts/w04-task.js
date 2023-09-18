/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Ethan Stringham",
    photo: "images/Me.jpg",
    favoriteFoods: [
        'Pot Roast',
        'Steak',
        'Cob Salad',
        'Strawberry Shortcake',
        'Tacos'
    ],
    hobbies: [
        'Video Games',
        'Programming',
        'Beekeeping',
        'Fencing'
    ],
    placesLived: []
}



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'South Jordan, UT',
        length: '20 years'
    }
)
myProfile.placesLived.push(
    {
        place: 'Rexburg, ID',
        length: '3 years'
    }
)


/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;
/* Photo with attributes */
document.querySelector('img').setAttribute('src',myProfile.photo);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let newListItem = document.createElement('li');
    newListItem.textContent = food;
    document.querySelector('#favorite-foods').appendChild(newListItem);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let newListItem = document.createElement('li');
    newListItem.textContent = hobby;
    document.querySelector('#hobbies').appendChild(newListItem);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(location => {
    let dt = document.createElement('dt');
    dt.textContent = location.place;
    let dd = document.createElement('dd');
    dd.textContent = location.length;
    document.querySelector('#places-lived').appendChild(dt)
    document.querySelector('#places-lived').appendChild(dd)
}
    )

