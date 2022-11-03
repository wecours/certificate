/* Commentaire
multiline */

class Kalybot {
    nom;
    address;

    // constructor(){
    //     // Izay zavatra tiana ho-INITIALISENA
    //     // Initialisation
    //     this.nom = "Kalybot";
    //     this.address = "67ha";
    //     console.log("Kalybot::constructor");
    // }

    /**
     * 
     * @param {String} nom 
     * @param {String} address 
     */
    constructor(nom, address){
        // Izay zavatra tiana ho-INITIALISENA
        // Initialisation
        this.nom = nom ?? "Kalybot";
        this.address = address ?? "67ha";
        console.log("Kalybot::constructor with parametters");
    }
}

/**
 * Commentaire multiline
 * JavaScript Doc
 */
const objetKalybot67ha =    // Creation variable + Assignation/initialisation avec l'objet créee
    new Kalybot("Kalybot", "67ha");     // Creation objet

objetKalybot67ha.address = "...";

/**
 * onClick du boutton Capturer =>
- 2m06 (exemple 5eme click)
- 2m04 (exemple 4eme click)
- 2m03 (exemple 3eme click)
- 1m50 (exemple 2eme click)
- 1m02 (exemple 1ere click)
 */