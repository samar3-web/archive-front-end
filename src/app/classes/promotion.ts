import { Personnel } from "./personnel";

export class Promotion {
    idpromotion?:Number;
    grade?:String;
    dategrade?:String;
    pdfpromotion?:Uint8Array;
    personnel?:Personnel;
}
