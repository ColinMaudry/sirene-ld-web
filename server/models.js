var mongoose = require("mongoose");

exports.sourceSchema = new mongoose.Schema(
  {
    id: Number,
    code: String,
    description: String,
    url: String,
    lastDownload: Date
  },
  { collection: "sources" }
);

exports.Source = mongoose.model("Source", exports.sourceSchema);

const statSource = new mongoose.Schema({
  source: String,
  marches: Number,
  nouveauxMarches: Number
});

exports.statSchema = new mongoose.Schema(
  {
    sources: [statSource],
    date: String,
  },
  { collection: "stats" }
);

exports.Stat = mongoose.model("Stat", exports.statSchema);

const acheteur = new mongoose.Schema({
  id: String,
  nom: String
});

const lieuExecution = new mongoose.Schema({
  code: String,
  typeCode: String,
  nom: String
});

const titulaire = new mongoose.Schema({
  typeIdentifiant: String,
  id: String,
  denominationSociale: String
});

const modification = new mongoose.Schema({
  dureeMois: Number,
  titulaires: [titulaire],
  objet: String,
  montant: Number
});

exports.marcheSchema = new mongoose.Schema(
  {
    id: String,
    uid: String,
    acheteur,
    nature: String,
    source: String,
    _type: String,
    objet: String,
    codeCPV: String,
    procedure: String,
    lieuExecution,
    dureeMois: Number,
    dateNotification: String,
    datePublicationDonnees: String,
    montant: Number,
    formePrix: String,
    titulaires: [titulaire],
    modifications: [modification]
  },
  { collection: "data" }
);
exports.Marche = mongoose.model("Marche", exports.marcheSchema);
