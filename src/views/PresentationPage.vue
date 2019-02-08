<template>
  <!--page header start-->
  <div>
    <div class="page-header">
      <div class="row">
        <div class="col-sm-6">
          <h4>Présentation</h4>
        </div>
      </div>
    </div>

    <!-- Markdown content -->
    <p>Le project sireneLD vise à construire un graphe requêtable autour des données ouvertes faisant référence à des unité légales ou des établissements via leur numéro SIREN/SIRET.</p>

    <p>Les jeux de données suivants sont amenés à être intégrés au graphe sireneLD :</p>

    <ul>
      <li>
        [x]
        <a
          href="https://www.data.gouv.fr/fr/datasets/base-sirene-des-entreprises-et-de-leurs-etablissements-siren-siret"
        >Répertoire SIRENE</a>
      </li>

      <li>
        [ ]
        <a
          href="https://www.data.gouv.fr/fr/datasets/donnees-essentielles-de-la-commande-publique-transmises-via-le-pes-marche/"
        >Données essentielles des attributions de marchés publics et de concessions (DECP) (en cours, en JSON pour l'instant)</a>
      </li>

      <li>
        [ ]
        <a
          href="https://www.data.gouv.fr/fr/datasets/repertoire-national-des-associations/"
        >Répertoire national des associations (RNA)</a>
      </li>
    </ul>

    <p>
      Les scripts de conversion de ces données sont visibles dans le dépôt Github
      <a
        href="https://github.com/ColinMaudry/sirene-ld"
      >ColinMaudry/sirene-ld</a>.
    </p>

    <p>
      Le croisement de ces données permettra de faire surgir de nouvelles informations (
      <em>insights</em>).
    </p>

    <p>
      Vous pouvez suivre l'avancement de ce projet sur Twitter via le hashtag
      <a
        href="https://twitter.com/hashtag/sireneLD"
      >#sireneLD</a>.
    </p>

    <h2 id="tlchargementdesdonnes">Téléchargement des données</h2>

    <p>
      Les données converties en RDF peuvent être téléchargées au format n-triples gzippé dans
      <a
        href="https://sireneld.io/data"
      >https://sireneld.io/data</a>.
    </p>

    <h2 id="sparql">SPARQL</h2>

    <p>Les données sources étant converties en graphe RDF, le langage de requête utilisé pour requếter ce graphe est SPARQL.</p>

    <p>
      Le endpoint se trouve à cette adresse :
      <code>https://triplestore.maudry.com/sirene/query</code>
    </p>

    <p>L'ensemble des données se trouvent dans le graphe par défaut (pas de graphe nommé), et totalisent un peu plus d'un milliard de triplets.</p>

    <h2 id="notesdeversion">Notes de version</h2>

    <h3 id="v00216janvier2018">v0.0.2 (16 janvier 2018)</h3>

    <ul>
      <li>ajout de données au dashboard</li>

      <li>boutons de navigation activés</li>
    </ul>

    <h3 id="v00115janvier2019">v0.0.1 (15 janvier 2019)</h3>

    <ul>
      <li>
        initialisation de
        <a href="https://vuejs.org/">Vue 2</a>, personnalisation du template
        <a
          href="http://bootstraplovers.com/templates/float-admin-v1.1/dark-version/index.html"
        >Float Dark</a> et présentation du projet
      </li>
    </ul>
    <!-- Markdown content -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
