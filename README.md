# sireneLD Web

Le project sireneLD vise à construire un graphe requêtable autour des données ouvertes faisant référence à des unité légales ou des établissements via leur numéro SIREN/SIRET.

Les jeux de données suivants sont amenés à être intégrés au graphe sireneLD :

- [ x ][répertoire sirene](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret)
- [ ] [Données essentielles des attributions de marchés publics et de concessions (DECP)](https://www.data.gouv.fr/fr/datasets/donnees-essentielles-de-la-commande-publique-transmises-via-le-pes-marche/)
- [ ] [Répertoire national des associations (RNA)](https://www.data.gouv.fr/fr/datasets/repertoire-national-des-associations/)

Les scripts de conversion de ces données sont visibles dans le dépôt Github [ColinMaudry/sirene-ld](https://github.com/ColinMaudry/sirene-ld).

Le croisement de ces données permettra de faire surgir de nouvelles informations (_insights_).

Vous pouvez suivre l'avancement de ce projet sur Twitter via le hashtag [#sireneLD](https://twitter.com/hashtag/sireneLD).

## SPARQL

Les données sources étant converties en graphe RDF, le langage de requête utilisé pour requếter ce graphe est SPARQL.

Le endpoint se trouve à cette adresse : `https://triplestore.maudry.com/sirene/query`

L'ensemble des données se trouvent dans le graphe par défaut (pas de graphe nommé), et totalisent un peu plus d'un milliard de triplets.

## Notes de version

### v0.0.1

- initialisation de [Vue 2](https://vuejs.org/), personnalisation du template [Float Dark](http://bootstraplovers.com/templates/float-admin-v1.1/dark-version/index.html) et présentation du projet
