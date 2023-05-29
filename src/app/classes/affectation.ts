import { Personnel } from "./personnel";

export class Affectation {
    dateaffectation?:String;
    idaffectation?:Number;
    pdfaffectation?:Uint8Array;
    respensabilite?:String;
    specialite?:String;
    unite?:String;
    personnel?:Personnel;
}
