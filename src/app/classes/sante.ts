import { Personnel } from "./personnel";

export class Sante {
    idsante?:Number;
    genremaladie?:String;
    datemaladie?:String;
    duree?:Number;
    pdfmaladie?:Uint8Array;
    personnel?:Personnel;
}
