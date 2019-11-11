# Exercice Mongo DB

## Objectif 

L'objectif est de comprendre les bases de données orientées document.

## Sujet

Exercices MongoDB

1. Écrire la requête qui retourne tous les documents dans la collection "restaurants"
2. Retourner les champs restaurant_id, name, borough et cuisine pour tous les documents de la collection
3. Retourner les champs restaurant_id, name, borough et cuisine pour tous les documents de la collection, cette fois-ci, sans afficher le champs _id
4. Retourner les champs restaurant_id, name, borough, cuisine et zip_code de tous les documents, sans le champs _id
5. Retourner tous les restaurants qui sont dans le Bronx
6. Retourner les 5 premiers restaurants qui sont dans le Bronx
7. Retourner les 5 suivants
8. Retourner les restaurants avec un score supérieur à 90
9. Retourner les restaurants avec un score supérieur à 80 et en-dessous de 100
10. Retourner les restaurants situés à une latitude inférieure à -95.754168
11. Retourner les restaurants qui (sans utiliser l'opérateur $and) :
    - Ne préparent pas de cuisine 'American'
    - Ont un score au dessus de 70
    - Une latitude inférieure à -65.754168
12. Même requête avec l'opérateur $and
13. Retouner, ordonné par type de cuisine, les restaurants qui :
    - Ne préparent pas de cuisine 'American'
    - Ont une grade "A"
    - En dehors de "Brooklyn"
14. Retourner l'id, le nom, le quartier et la cuisine des resraurants dont le nom commence par "Wil"
15. Retourner l'id, le nom, le quartier et la cuisine des resraurants dont le nom termine par "ces"
16. Retourner l'id, le nom, le quartier et la cuisine des resraurants dont le nom contient "Reg"
17. Retourner les restaurants du Bronx qui servent de la cuisine américaine ou chinoise
18. Retourner l'id, le nom, le quartier et la cuisine qui ne se situent à Staten Island ou à Brooklyn ou dans le Bronx
19. Retourner l'id, le nom, le quartier et la cuisine qui ne se situent ni à Staten Island, ni à Brooklyn et ni dans le Bronx
20. Retourner l'id, le nom, le quartier et la cuisine des resraurants avec un score inférieur à 10
21. Retourner l'id, le nom, le quartier et la cuisine des resraurants qui ne sont ni Chinois ou Américain; ou bien dont le nom commence par "Wil"
22. Retourner l'id, le nom et les grades des restaurants possédant une grade avec les valeurs:
    - Une grade "A"
    - Un score 11 s
    - "2014-08-11T00:00:00Z"
23. Retourner l'id, le nom et les grades des restaurants dont 2eme élément de grades possède:
    - Une grade "A"
    - Un score 9
    - Une ISODate "2014-08-11T00:00:00Z"
24. Retourner l'id, le nom et la position géographique dont le deuxième élément des coordonnées géographiques contient une valeur entre 42 et 52
25. Ajoute tes 5 restaurants préférés en remplissant pour chacun :
    - Une adresse complète
    - Un quartier
    - Un type de cuisine
    - 3 notes au minimum
    - Un nom
    - Un id de restaurant (Pas l'_id mongo !)
26. Ajoute 2 notes à chacun de ces restaurants
27. Supprime de la base les restaurants de Staten Island
28. Transfert tous les restaurants du Manhattan à Brooklyn (Pour info, appelle ça la gentrification)
29. Retourne la liste de tous les quartiers de la collection (Si tu as encore des restaurants dans Manhattan, retourne à la question 28 )