import { Personnel } from "./personnel";

export class Accolade {
    idAccolade?:number;
    nomAccolade?:string;
    dateaccolade?:string;
    pdfaccolade?:Uint8Array;
    personnel?:Personnel;
    
}
