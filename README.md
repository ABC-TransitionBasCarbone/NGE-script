SCRIPT NGE

Deux possibilités pour le modèle :
- Soit on récupère tout le modèle via le paquet npm (choix que j'ai fait pour l'instant dans index.js)
- Soit, si on a besoin que de quelques règles et surtout si on a besoin de les retravailler/modifier, on peut les importer comme c'est montré dans data, puis les compiler avec compile-modele. 

Pour la deuxième méthode il faut : 
- importer les règles voulue et éventuellement les modifier dans data
- lancer `node compile-modele.js`

Dans les deux cas, pour créer l'excel il faut lancer `node index.js`. Il faut auparavant avoir ajouté l'excel dans le dossier racine en le nommant test-input.xlsx
