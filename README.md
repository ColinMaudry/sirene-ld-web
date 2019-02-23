# sireneLD Web 0.3.0

Le project sireneLD vise à construire un graphe requêtable autour des données ouvertes faisant référence à des unité légales ou des établissements via leur numéro SIREN/SIRET.

Les jeux de données suivants sont amenés à être intégrés au graphe sireneLD :

- [x] [Répertoire SIRENE](https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret)
- [x] [Données essentielles des attributions de marchés publics et de concessions (DECP)](https://www.data.gouv.fr/fr/datasets/donnees-essentielles-de-la-commande-publique-transmises-via-le-pes-marche/) (en JSON pour l'instant, issues de [decp-json](https://github.com/ColinMaudry/decp-json/))
- [ ] [Répertoire national des associations (RNA)](https://www.data.gouv.fr/fr/datasets/repertoire-national-des-associations/)

Les scripts de conversion de ces données sont visibles dans le dépôt Github [ColinMaudry/sirene-ld](https://github.com/ColinMaudry/sirene-ld) et [decp-json](https://github.com/ColinMaudry/decp-json/).

Le croisement de ces données permettra de faire surgir de nouvelles informations (_insights_).

Vous pouvez suivre l'avancement de ce projet sur Twitter via le hashtag [#sireneLD](https://twitter.com/hashtag/sireneLD).

## Téléchargement des données

Les données converties en RDF ou JSON peuvent être téléchargées au format n-triples gzippé dans [https://sireneld.io/data](https://sireneld.io/data).

## Notes de version

### v0.3.0 (12 février 2019)

- ajout des données essentielles de la commande publique issues de [decp-json](https://github.com/ColinMaudry/decp-json/)
- mise à disposition d'une API (par exemple https://sireneld.io/api/decp/marches?limit=2&text=cholet)
- déplacement des contrôles de pagination au-dessus du tableau
- correction du bug de formatage des dates

### v0.2.0 (16 janvier 2019)

- ajout de données au dashboard
- boutons de navigation activés

### v0.1.0 (15 janvier 2019)

- initialisation de [Vue 2](https://vuejs.org/), personnalisation du template [Float Dark](http://bootstraplovers.com/templates/float-admin-v1.1/dark-version/index.html) et présentation du projet
