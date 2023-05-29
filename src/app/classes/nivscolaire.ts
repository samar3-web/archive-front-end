import { Personnel } from "./personnel";

export class Nivscolaire {
    idnivscol?:Number;
    datecertif?:String;
    niveau?:String;
    parcour?:String;
    pdfniv?:Uint8Array;
    specialite?:String;
    personnel?:Personnel;
}
