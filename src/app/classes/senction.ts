import { Personnel } from "./personnel";

export class Senction {
    idsenction?:Number;
    datesenction?:String;
    causesenction?:String;
    sourcesenction?:String;
    pdfsenction?:Uint8Array;
    personnel?:Personnel;
}
