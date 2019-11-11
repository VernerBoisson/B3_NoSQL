//Exercices MongoDB

//Verner Boisson

// 1. Écrire la requête qui retourne tous les documents dans la collection "restaurants"

db.restaurants.find()

// 2. Retourner les champs restaurant_id, name, borough et cuisine pour tous les documents de la collection

db.restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// 3. Retourner les champs restaurant_id, name, borough et cuisine pour tous les documents de la collection, cette fois-ci, sans afficher le champs _id

db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// 4. Retourner les champs restaurant_id, name, borough, cuisine et zip_code de tous les documents, sans le champs _id

db.restaurants.find({}, {_id: 0, restaurant_id: 1, name: 1, borough: 1, cuisine: 1, "address.zipcode": 1})

// 5. Retourner tous les restaurants qui sont dans le Bronx

db.restaurants.find({borough:'Bronx'})

// 6. Retourner les 5 premiers restaurants qui sont dans le Bronx

db.restaurants.find({borough:'Bronx'}).limit(5)

// 7. Retourner les 5 suivants

db.restaurants.find({borough:'Bronx'}).skip(5).limit(5)

// 8. Retourner les restaurants avec un score supérieur à 90

db.restaurants.find({"grades.score":{$gt:90}})

// 9. Retourner les restaurants avec un score supérieur à 80 et en-dessous de 100

db.restaurants.find({"grades": { $elemMatch: {"score": {$gt:80, $lt:100 }} }})

// 10. Retourner les restaurants situés à une latitude inférieure à -95.754168

db.restaurants.find({"address.coord.0":{$lt:-95.75416}})

// 11. Retourner les restaurants qui (sans utiliser l'opérateur $and) :
//     - Ne préparent pas de cuisine 'American'
//     - Ont un score au dessus de 70
//     - Une latitude inférieure à -65.754168

db.restaurants.find({
  "cuisine":{
      $ne:'American'
  },
  "grades.score":{
      $gt:70
  },
  "address.coord.0":{
      $lt:-65.754168
  }
})


// 12. Même requête avec l'opérateur $and

db.restaurants.find({
  $and:[
    {"cuisine":{$ne:'American'}},
    { "grades.score":{$gt:70}},
    {"address.coord.0":{$lt:-65.754168}}
  ]
})

// 13. Retouner, ordonné par type de cuisine, les restaurants qui :
//     - Ne préparent pas de cuisine 'American'
//     - Ont une grade "A"
//     - En dehors de "Brooklyn"

db.restaurants.find({
  "cuisine":{
      $ne:'American'
  },
  "grades.grade":{
      $eq:"A"
  },
  "borough":{
      $ne:'Brooklyn'
  }
}).sort({"cuisine":1})


// 14. Retourner l'id, le nom, le quartier et la cuisine des resraurants dont le nom commence par "Wil"

db.restaurants.find({"name":{$regex:/^Wil/}},{_id:1, name: 1, borough:1, cuisine:1})

// 15. Retourner l'id, le nom, le quartier et la cuisine des resraurants dont le nom termine par "ces"

db.restaurants.find({"name":{$regex:/ces$/}},{_id:1, name: 1, borough:1, cuisine:1})

// 16. Retourner l'id, le nom, le quartier et la cuisine des resraurants dont le nom contient "Reg"

db.restaurants.find({"name":{$regex:/Reg/}},{_id:1, name: 1, borough:1, cuisine:1})

// 17. Retourner les restaurants du Bronx qui servent de la cuisine américaine ou chinoise

db.restaurants.find({"borough":"Bronx", "cuisine":{$regex:/(^american|chinese)/i}})

// 18. Retourner l'id, le nom, le quartier et la cuisine qui se situent à Staten Island ou à Brooklyn ou dans le Bronx

db.restaurants.find({"borough":{$in:["Staten Island","Brooklyn","Bronx"]}},{_id:1, name:1, borough:1, cuisine:1})

// 19. Retourner l'id, le nom, le quartier et la cuisine qui ne se situent ni à Staten Island, ni à Brooklyn et ni dans le Bronx

db.restaurants.find({"borough":{$nin:["Staten Island","Brooklyn","Bronx"]}},{_id:1, name:1, borough:1, cuisine:1})

// 20. Retourner l'id, le nom, le quartier et la cuisine des resraurants avec un score inférieur à 10

db.restaurants.find({"grades.score":{$lt:10}},{_id:1, name:1, borough:1, cuisine:1})

// 21. Retourner l'id, le nom, le quartier et la cuisine des resraurants qui ne sont ni Chinois ou Américain; ou bien dont le nom commence par "Wil"

db.restaurants.find({
  $or:[
    {"cuisine":{ $not : /(^american|chinese)/i}},
    {"name":{$regex:/^Wil/}}
  ]
},{_id:1, name: 1, borough:1, cuisine:1})

// 22. Retourner l'id, le nom et les grades des restaurants possédant un grade avec les valeurs:
//     - Un grade "A"
//     - Un score 11
//     - "2014-08-11T00:00:000Z"

db.restaurants.find({
  "grades.grade":"A",
  "grades.score":11,
  "grades.date":{$eq: new Date('2014-08-11')}
}, {_id:1, name:1, grades:1})

// 23. Retourner l'id, le nom et les grades des restaurants dont 2eme élément de grades possède:
//     - Une grade "A"
//     - Un score 9
//     - Une ISODate "2014-08-11T00:00:00Z"

db.restaurants.find({
  "grades.2.grade":"A",
  "grades.2.score":9,
  "grades.2.date":{ $eq: new Date('2014-08-11')}
}, {_id:1, name:1, grades:1})

// 24. Retourner l'id, le nom et la position géographique dont le deuxième élément des coordonnées géographiques contient une valeur entre 42 et 52

db.restaurants.find({"address.coord.1": {$gt:42, $lt:52 }})

// 25. Ajoute tes 5 restaurants préférés en remplissant pour chacun :
//     - Une adresse complète
//     - Un quartier
//     - Un type de cuisine
//     - 3 notes au minimum
//     - Un nom
//     - Un id de restaurant (Pas l'_id mongo !)

db.restaurants.insert([{
  address:{
    building:845,
    coord:[-70,40],
    street:"Jean moulin",
    zipcode:"7 Street",
  },
  borough: "Bronx",
  cuisine: "French",
  grades:[
    {
      date:new Date(),
      grade:"C",
      score:18,
    },
    {
      date:new Date(),
      grade:"A",
      score:11,
    },
    {
      date:new Date(),
      grade:"D",
      score:9,
    }
  ],
  name: "resto1",
  restaurant_id: 99990,
}, {
  address:{
    building:85,
    coord:[-85,60],
    street:"Jean poulin",
    zipcode:"7 Street",
  },
  borough: "Bronx",
  cuisine: "French",
  grades:[
    {
      date:new Date(),
      grade:"C",
      score:18,
    },
    {
      date:new Date(),
      grade:"A",
      score:11,
    },
    {
      date:new Date(),
      grade:"D",
      score:9,
    }
  ],
  name: "resto2",
  restaurant_id: 99991,
}, {
  address:{
    building:45,
    coord:[-80,80],
    street:"Jean malin",
    zipcode:"7 Street",
  },
  borough: "Bronx",
  cuisine: "French",
  grades:[
    {
      date:new Date(),
      grade:"C",
      score:18,
    },
    {
      date:new Date(),
      grade:"A",
      score:11,
    },
    {
      date:new Date(),
      grade:"D",
      score:9,
    }
  ],
  name: "resto3",
  restaurant_id: 99992,
}, {
  address:{
    building:8,
    coord:[-7,4],
    street:"Jean toulin",
    zipcode:"7 Street",
  },
  borough: "Bronx",
  cuisine: "French",
  grades:[
    {
      date:new Date(),
      grade:"C",
      score:18,
    },
    {
      date:new Date(),
      grade:"A",
      score:11,
    },
    {
      date:new Date(),
      grade:"D",
      score:9,
    }
  ],
  name: "resto4",
  restaurant_id: 99993,
}, {
  address:{
    building:8459,
    coord:[-70,90],
    street:"Jean soulin",
    zipcode:"7 Street",
  },
  borough: "Bronx",
  cuisine: "French",
  grades:[
    {
      date:new Date(),
      grade:"C",
      score:18,
    },
    {
      date:new Date(),
      grade:"A",
      score:11,
    },
    {
      date:new Date(),
      grade:"D",
      score:9,
    }
  ],
  name: "resto5",
  restaurant_id: 99994,
}])

// 26. Ajoute 2 notes à chacun de ces restaurants

db.restaurants.updateMany({restaurant_id: {$gte:99990, $lte:99994}},{
  $push:{'grades':[    {
    date:new Date(),
    grade:"A",
    score:11,
  },    {
    date:new Date(),
    grade:"A",
    score:11,
  }]}
})

// 27. Supprime de la base les restaurants de Staten Island

db.restaurants.remove({'borough':"Staten Island"})

// 28. Transfert tous les restaurants du Manhattan à Brooklyn (Pour info, appelle ça la gentrification)

db.restaurants.updateMany({'borough':'Manhattan'},{$set:{'borough':'Brooklyn'}})

// 29. Retourne la liste de tous les quartiers de la collection (Si tu as encore des restaurants dans Manhattan, retourne à la question 28 )

db.restaurants.distinct("borough")

// moyenne des score par quartiers

db.restaurants.aggregate([{
  $unwind:{
    path: "$grades"
  }
},{
  $group:{
    "_id": "$borough",
    "average": {$avg:"$grades.score"}
  }
}])
