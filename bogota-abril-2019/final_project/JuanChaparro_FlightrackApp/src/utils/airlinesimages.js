import NINEE from './../images/airlines/9E.png';
import A3 from './../images/airlines/A3.png';
import AH from './../images/airlines/AH.png';
import AS from './../images/airlines/AS.png';
import BA from './../images/airlines/BA.png';
import BI from './../images/airlines/BI.png';
import BY from './../images/airlines/BY.png';
import DY from './../images/airlines/DY.png';
import FX from './../images/airlines/FX.png';
import F9 from './../images/airlines/F9.png';
import G4 from './../images/airlines/G4.png';
import IA from './../images/airlines/IA.png';
import LA from './../images/airlines/LA.png';
import LS from './../images/airlines/LS.png';
import OH from './../images/airlines/OH.png';
import OO from './../images/airlines/OO.png';
import UA from './../images/airlines/UA.png';
import VY from './../images/airlines/VY.png';
import WN from './../images/airlines/WN.png';
import FIVEX from './../images/airlines/5X.png';
import XC from './../images/airlines/XC.png';
import NO_MATCH from './../images/airlines/no-match.png';

export const getImageByCode = airlineCode => {
    switch(airlineCode) {
        case "9E": return NINEE;
        case "A3": return A3;
        case "AS": return AS;
        case "AH": return AH;
        case "BA": return BA;
        case "BI": return BI;
        case "BY": return BY;
        case "DY": return DY;
        case "FX": return FX;
        case "F9": return F9;
        case "G4": return G4;
        case "IA": return IA;
        case "JJ": return LA;
        case "LS": return LS;
        case "OH": return OH;
        case "OO": return OO;
        case "UA": return UA;
        case "VY": return VY;
        case "WN": return WN;
        case "5X": return FIVEX;
        case "XC": return XC;
        default: return NO_MATCH;
    }
}