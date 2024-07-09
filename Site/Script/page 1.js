/* Vérifie si le mot de la barre de recherche correspond à une mythologie et si c'est le cas alors ouvre la page */
// Appelée dans : page 1 (HTML) //

function ouvrir_page(){
var a = document.getElementById("searchbar").value;

if (a === "grec" || a === "Grec" || a === "grecque" || a === "Grecque" || a === "GREC" || a === "GRECQUE"){
window.location.href = "Site/Html/grec.html";
}

if (a === "romaine" || a === "Romaine" || a === "ROMAINE"){
window.location.href = "Site/Html/romaine.html";
}

if (a === "egyptienne" || a === "Egyptienne" | a === "EGYPTIENNE"){
window.location.href = "Site/Html/egyptienne.html";
}

if (a === "nordique" || a === "Nordique" || a === "nordic" || a === "Nordic"|| a === "NORDIQUE" || a === "NORDIC"){
window.location.href = "Site/Html/nordique.html";
}

else {
alert("Cette mythologie n’est pas répertoriée sur ce site")
}
}



/* Vérifie si le mot de la barre de recherche correspond à un dieu et si c'est le cas alors indique la
mythologie dont il provient */
// Appelée dans : page 1 (HTML) //

function cherche_mythologie(){
var a = document.getElementById("searchbar").value;


if (a === "amon" || a === "Amon" ||
a === "anubis" || a === "Anubis" ||
a === "bastet" || a === "Bastet" ||
a === "bes" || a === "Bes" ||
a === "geb" || a === "Geb" ||
a === "hathor" || a === "Hathor" || a === "hator" || a === "Hator" ||
a === "horus" || a === "Horus" ||
a === "isis" || a === "Isis" ||
a === "Maat" || a === "maat" ||
a === "neith" || a === "Neith" ||
a === "nephtys" || a === "Nephtys" ||
a === "nout" || a === "Nout" ||
a === "osiris" || a === "Osiris" ||
a === "ptah" || a === "Ptah" ||
a === "re" || a === "Re" || a === "ra" || a === "Ra" ||
a === "seth" || a === "Seth" ||
a === "sobek" || a === "Sobek" ||
a === "tefnout" || a === "Tefnout" ||
a === "thot" || a === "Thot" ||

a === "ammout" || a === "amout" || a === "Ammout" || a === "Amout" ||
a === "apophis" || a === "Apophis" ||
a === "babai" || a === "Babai" ||
a === "benu" || a === "Benu" ||
a === "criosphinx" || a === "Criosphinx" ||
a === "hieracosphinx" || a === "Hieracosphinx" ||
a === "serpopard" || a === "Serpopard" || a === "sérpopard" || a === "Sérpopard" ||
a === "sphinx" || a === "Sphinx" ||
a === "teka-her" || a === "Teka-her" || a === "teka her" || a === "Teka her" || a === "teka-Her" || a === "Teka-Her" || a === "teka Her" || a === "Teka Her"
){
alert("Ce dieu appartient à la mythologie EGYPTIENNE");
}



if (a === "aphrodite" || a === "Aphrodite" ||
a === "apollon" || a === "Apollon" ||
a === "ares" || a === "arès" || a === "Ares" || a === "Arès" ||
a === "artemis" || a === "artémis" || a === "Artemis" || a === "Artémis" ||
a === "athena" || a === "athéna" || a === "Athena" || a === "Athéna" ||
a === "demeter" || a === "déméter" || a === "Demeter" || a === "Déméter" ||
a === "dionysos" || a === "Dionysos" ||
a === "eros" || a === "éros" || a === "Eros" || a === "Éros" ||
a === "hades" ||a === "hadès" || a === "Hades" || a === "Hadès" ||
a === "hephaistos" || a === "héphaistos" || a === "héphaïstos" || a === "Hephaistos" ||  a === "Héphaistos" || a === "Héphaïstos" ||
a === "hera" || a === "héra" || a === "Hera" || a === "Héra" ||
a === "hermes" || a === "hermès" || a === "Hermes" || a === "Hermès" ||
a === "hestia" || a === "héstia" || a === "Hestia" || a === "Héstia" ||
a === "persephone" || a === "Persephone" ||
a === "poseidon" || a === "poséidon" || a === "poseïdon" || a === "poséïdon" || a === "Poseidon" || a === "Poséidon" || a === "Poseïdon" || a === "Poséïdon" ||
a === "thanatos" || a === "Thanatos" ||
a === "zeus" || a === "Zeus" ||


a === "arachne" || a === "arachné" || a === "Arachne" || a === "Arachné" ||
a === "biche" || a === "biche de cerynie" || a === "Biche" || a === "Biche de cerynie" ||
a === "centaure" || a === "Centaure" ||
a === "cerbere" || a === "cerbère" || a === "Cerbere" || a === "Cerbère" ||
a === "chimere" || a === "chimère" || a === "Chimere" || a === "Chimère" ||
a === "cyclope" || a === "Cyclope" ||
a === "echidne" || a === "echidné" || a === "échidné" || a === "Echidne" || a === "Echidné" || a === "Échidné" ||
a === "geant" || a === "géant" || a === "Geant" || a === "Géant" ||
a === "gorgogne" || a === "Gorgogne" || a === "medusa" || a === "médusa" || a === "Medusa"|| a === "Médusa" || a === "meduse" || a === "méduse" || a === "Meduse"|| a === "Méduse" ||
a === "griffon" || a === "Griffon" ||
a === "harpie" || a === "Harpie" ||
a === "hecatonchire" || a === "hécatonchire" || a === "Hecatonchire" || a === "Hécatonchire" ||
a === "hydre" || a === "Hydre" ||
a === "juments de diomede" || a === "jument de diomede" || a === "juments de diomède" || a === "jument de diomède" || a === "Juments de diomede" || a === "Juments de diomede"  || a === "Jument de diomede" || a === "Juments de diomède" ||  a === "Jument de diomède" ||
a === "lion de neme" || a === "lion de némé" || a === "Lion de neme" || a === "Lion de némé" ||
a === "minautore" || a === "Minautore" || a === "minotaure" || a === "Minotaure" ||
a === "moire" || a === "Moire" ||
a === "nymphe" || a === "Nymphe" ||
a === "oiseaux de stymphale" || a === "oiseau de stymphale" || a === "Oiseaux de stymphale" ||  a === "Oiseau de stymphale" ||
a === "ortos" || a === "Ortos" ||
a === "pegase" || a === "pégase" ||a === "Pegase" || a === "Pégase" ||
a === "phenix" || a === "phénix" || a === "Phenix" || a === "Phénix" ||
a === "sanglier d'erymenthe" || a === "sanglier d'Erymenthe" || a === "Sanglier d'erymenthe" ||  a === "Sanglier d'Erymenthe" ||
a === "satyre" || a === "Satyre" ||
a === "sirene" || a === "sirène" || a === "Sirene" || a === "Sirène" ||
a === "titan" || a === "Titan" ||
a === "triton" || a === "Triton" ||
a === "typhon" || a === "Typhon"
){
alert("Ce dieu appartient à la mythologie GRECQUE");
}



if (a === "andhrimnir" || a === "Andhrimnir" || a === "andrimnir" || a === "Andrimnir" ||
a === "Baldr" || a === "baldr" || a === "Balder" || a === "balder" ||
a === "Bragi" || a === "bragi" ||
a === "Dag" || a === "dag" ||
a === "Delling" || a === "delling" || a === "Deling" || a === "deling" ||
a === "Forseti" || a === "forseti" ||
a === "Freyja" || a === "freyja" || a === "Freya" || a === "freya"|| a === "Freja" || a === "freja" ||
a === "Freyr" || a === "freyr" ||
a === "Frigg" || a === "frigg" || a === "Frig" || a === "frig" ||
a === "Gefjon" || a === "gefjon" || a === "Gefyon" || a === "gefyon" ||
a === "Gersimi" || a === "gersimi" ||
a === "Heimdall" || a === "heimdall" || a === "Heimdal" || a === "heimdal" ||
a === "Hel" || a === "hel" || a === "Hell" || a === "hell" || a === "hela" || a === "hella" || a === "Hela" || a === "Hella" ||
a === "Hermod" || a === "hermod" || a === "Hermöd" || a === "hermöd" ||
a === "Hnoss" || a === "hnoss" || a === "Hnos" || a === "hnoss" || a === "Noss" || a === "noss" || a === "Nos" || a === "nos" ||
a === "Hod" || a === "hod" || a === "Höd" || a === "höd" ||
a === "Hrund" || a === "hrund" || a === "Rund" || a === "rund" ||
a === "Idunn" || a === "idunn" || a === "Idun" || a === "idunn" ||
a === "Irmin" || a === "irmin" ||
a === "Jord" || a === "jord" || a === "Jörd" || a === "jörd" ||
a === "Loki" || a === "loki" ||
a === "Mani" || a === "mani" ||
a === "Mimir" || a === "mimir" ||
a === "Modi" || a === "modi" ||
a === "Nanna" || a === "nanna" || a === "Nana" || a === "nana" ||
a === "Nerthus" || a === "nerthus" || a === "Nertus" || a === "nertus" ||
a === "Njord" || a === "njord" || a === "Niord" || a === "niord" ||
a === "Odin" || a === "odin" ||
a === "Odr" || a === "odr" || a === "Oder" || a === "oder" ||
a === "Ran" || a === "ran" || a === "Rann" || a === "rann" ||
a === "Saga" || a === "saga" ||
a === "Sif" || a === "sif" ||
a === "Sigyn" || a === "sigyn" || a === "Sigin" || a === "sigin" || a === "Sygyn" || a === "sygyn" || a === "Sygin" || a === "sygin" ||
a === "Sol" || a === "sol" ||
a === "Thor" || a === "thor" ||
a === "Thrud" || a === "thrud" || a === "Trud" || a === "trud" ||
a === "Tyr" || a === "tyr" || a === "Tir" || a === "tir" ||
a === "Var" || a === "var" ||
a === "Vidar" || a === "vidar" ||
a === "Vili" || a === "vili" || a === "Villi" || a === "villi" ||
a === "Ve" || a === "ve" ||a === "Vé" || a === "vé"  ||

a === "Alfe" || a === "alfe" ||a === "Alfe lumineux" || a === "alfe lumineux" || a === "Alfe lumineu" || a === "alfe lumineu" || a === "Elfe" || a === "elfe" ||a === "Elfe lumineux" || a === "elfe lumineux" || a === "Elfe lumineu" || a === "elfe lumineu" ||
a === "Bersekr" || a === "bersekr" ||a === "Berseker" || a === "berseker" ||
a === "Draugr" || a === "draugr" ||a === "Drauger" || a === "drauger" ||
a === "Dvergr" || a === "dvergr" ||a === "Dverger" || a === "dverger" ||
a === "Fenrir" || a === "fenrir" ||
a === "Garmr" || a === "garmr" ||a === "Garmer" || a === "garmer" ||
a === "Geri" || a === "geri" ||a === "Freki" || a === "freki" ||
a === "Gullinbursti" || a === "gullinbursti" ||a === "Gulinbursti" || a === "gulinbursti" ||
a === "Hati" || a === "hati" ||
a === "Hildisvini" || a === "hildisvini" ||
a === "Hugin" || a === "hugin" || a === "Munin" || a === "munin" ||
a === "Jormungandr" || a === "jormungandr" || a === "Jormungander" || a === "jormungander" || a === "Jörmungandr" || a === "jörmungandr" || a === "Jörmungander" || a === "jörmungander" ||
a === "Jotunn" || a === "jotunn" || a === "Jotun" || a === "jotun" || a === "Jotünn" || a === "jotünn" || a === "Jotün" || a === "jotün" ||
a === "Tanngrisnir" || a === "tanngrisnir" || a === "Tangrisnir" || a === "tangrisnir" || a === "Tanngnejostr" || a === "tanngnejostr" || a === "Tangnejostr" || a === "tangnejostr" ||
a === "Norne" || a === "norne" ||
a === "Skol" || a === "skol" ||
a === "Sleipnir" || a === "sleipnir" || a === "Slepnir" || a === "slepnir" ||
a === "Valkyrie" || a === "valkyrie" ||
a === "Yggdrasil" || a === "yggdrasil" || a === "Ygdrasil" || a === "ygdrasil"
){
alert("Ce dieu appartient à la mythologie NORDIQUE")
}



if (a === "nemesis" || a === "némésis" || a === "Nemesis" || a === "Némésis"){
alert("Ce dieu appartient à la mythologie GRECQUE et ROMAINE")
}



if (a === "Abundantia" || a === "abundantia" || a === "Abundentia" || a === "abundentia" || a === "Abundancia" || a === "abundancia" || a === "Abundencia" || a === "abundencia" ||
a === "Aesculape" || a === "aesculape" || a === "Asculape" || a === "asculape" ||
a === "Apollo" || a === "apollo" || a === "Appolo" || a === "appolo" || a === "Appollo" || a === "appollo" ||
a === "Aurora" || a === "aurora" || a === "Orora" || a === "orora" || a === "oraura" || a === "Oraura" || a === "Auraura" || a === "auraura" ||
a === "Bacchus" || a === "bacchus" || a === "Bachus" || a === "bachus" ||
a === "Bubona" || a === "bubona" || a === "Boubona" || a === "boubona" ||
a === "Candelifera" || a === "candelifera" || a === "Cendelifera" || a === "cendelifera" ||
a === "Carmenta" || a === "carmenta" || a === "Carmanta" || a === "carmanta" ||
a === "Ceres" || a === "ceres" ||
a === "Clementia" || a === "clementia" || a === "Clemantia" || a === "clemantia" || a === "Clemencia" || a === "clemencia" || a === "Clemancia" || a === "clemancia" ||
a === "Cloacina" || a === "cloacina"||
a === "Concordia" || a === "concordia" ||
a === "Cupidon" || a === "cupidon" ||
a === "Devera" || a === "devera" ||
a === "Diana" || a === "diana" ||
a === "Discordia" || a === "discordia" ||
a === "Edesia" || a === "edesia" ||
a === "Epona" || a === "epona" ||
a === "Fabulinus" || a === "fabulinus" ||
a === "Fama" || a === "fama" ||
a === "Faune" || a === "faune" ||
a === "Felicitas" || a === "felicitas" || a === "Felicita" || a === "felicita" ||
a === "Fides" || a === "fides" ||
a === "Flore" || a === "flore" ||
a === "Fortuna" || a === "fortuna" ||
a === "Hespera" || a === "hespera"||
a === "Hippona" || a === "hippona" ||
a === "Honos" || a === "honos" ||
a === "Invidia" || a === "invidia" ||
a === "Iris" || a === "iris"||
a === "Janus" || a === "janus" ||
a === "Jupiter" || a === "jupiter" ||
a === "Justitia" || a === "justitia" || a === "Justicia" || a === "justicia" ||
a === "Juventas" || a === "juventas" ||a === "Juventa" || a === "juventa" ||
a === "libertas" || a === "libertas" || a === "liberta" || a === "liberta" ||
a === "Libitina" || a === "libitina" ||
a === "Luna" || a === "luna" ||
a === "Mars" || a === "mars" ||
a === "Mercure" || a === "mercure" ||
a === "Minerva" || a === "minerva" ||
a === "Mithras" || a === "mithras" || a === "Mitras" || a === "mitras" ||
a === "Muta" || a === "muta" ||
a === "Necessita" || a === "necessita" ||
a === "Neptune" || a === "neptune" ||
a === "Opis" || a === "opis" ||
a === "Pax" || a === "pax" ||
a === "Pietas" || a === "pietas" ||
a === "Pluton" || a === "pluton" ||
a === "Pomona" || a === "pomona" ||
a === "Portunes" || a === "portunes" ||
a === "Prosperina" || a === "prosperina" ||
a === "Sancus" || a === "sancus" || a === "Sancu" || a === "sancu" ||
a === "Saturne" || a === "saturne" ||
a === "Sol invictus" || a === "sol invictus" || a === "Sol-invictus" || a === "sol-invictus" ||
a === "Somnus" || a === "somnus" ||
a === "Sors" || a === "sors" ||
a === "Spes" || a === "spes" ||
a === "Tempestes" || a === "tempestes" ||  a === "Tempeste" || a === "tempeste" ||
a === "Tranquillitas" || a === "tranquillitas" || a === "Tranquillita" || a === "tranquillita" ||
a === "Trivia" || a === "trivia" ||
a === "Venus" || a === "venus" ||
a === "Veritas" || a === "veritas" ||
a === "Vesta" || a === "vesta" ||
a === "Victoria" || a === "victoria" ||
a === "Volturnus" || a === "volturnus" ||
a === "Voluptas" || a === "voluptas" ||
a === "Vulcan" || a === "vulcan" ||

a === "Achlis" || a === "achlis" ||
a === "Anphisbene" || a === "anphisbene" ||
a === "Caladrius" || a === "caladrius"||
a === "Demon" || a === "demon" ||
a === "Larve" || a === "larve"||
a === "Lemure" || a === "lemure" ||
a === "Stryge" || a === "stryge" || a === "Strige" || a === "strige"
){
alert("Ce dieu appartient à la mythologie ROMAINE")
}

else {
ouvrir_page()
}

}