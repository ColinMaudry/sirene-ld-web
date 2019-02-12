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
        [x]
        <a
          href="https://www.data.gouv.fr/fr/datasets/donnees-essentielles-de-la-commande-publique-transmises-via-le-pes-marche/"
        >Données essentielles des attributions de marchés publics et de concessions (DECP)</a> (en JSON pour l'instant, issues de
        <a
          href="https://github.com/ColinMaudry/decp-json/"
        >decp-json</a>)
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
      >ColinMaudry/sirene-ld</a> et
      <a href="https://github.com/ColinMaudry/decp-json/">decp-json</a>.
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
      Les données converties en RDF ou JSON peuvent être téléchargées au format n-triples gzippé dans
      <a
        href="https://sireneld.io/data"
      >https://sireneld.io/data</a>.
    </p>

    <h2 id="notesdeversion">Notes de version</h2>

    <h3 id="v03012fvrier2019">v0.3.0 (12 février 2019)</h3>

    <ul>
      <li>
        ajout des données essentielles de la commande publique issues de
        <a
          href="https://github.com/ColinMaudry/decp-json/"
        >decp-json</a>
      </li>

      <li>mise à disposition d'une API (par exemple https://sireneld.io/api/decp/marches&amp;limit=2&amp;text=cholet)</li>
    </ul>
    <h3 id="v02016janvier2019">v0.2.0 (16 janvier 2019)</h3>

    <ul>
      <li>ajout de données au dashboard</li>

      <li>boutons de navigation activés</li>
    </ul>

    <h3 id="v01015janvier2019">v0.1.0 (15 janvier 2019)</h3>

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
h3 {
  margin: 30px 0px 20px 0px;
}
h2 {
  margin: 30px 0px 20px 0px;
}
</style>
