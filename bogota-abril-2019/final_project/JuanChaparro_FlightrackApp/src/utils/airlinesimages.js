export class IconHandler {
    constructor() {
        this.icons = new Map();
        this.loadIcons();
    }

    loadIcons() {
        this.icons.set('9E', 'https://i.imgur.com/ZhfyUaF.png');
        this.icons.set('AH', 'https://i.imgur.com/0YU55me.png');
        this.icons.set('AS', 'https://i.imgur.com/REFlIsu.png');
        this.icons.set('A3', 'https://i.imgur.com/GptlZQn.png');
        this.icons.set('BA', 'https://i.imgur.com/bCSAn3A.png');
        this.icons.set('BI', 'https://i.imgur.com/wyPmxdS.png');
        this.icons.set('BY', 'https://i.imgur.com/d1wVtk2.png');
        this.icons.set('DY', 'https://i.imgur.com/lQ76g3S.png');
        this.icons.set('FX', 'https://i.imgur.com/T0ysl3R.png');
        this.icons.set('F9', 'https://i.imgur.com/CAOMwgc.png');
        this.icons.set('G4', 'https://i.imgur.com/32EAZo6.png');
        this.icons.set('IA', 'https://i.imgur.com/uc9BQ9O.png');
        this.icons.set('JJ', 'https://i.imgur.com/Rq3bnzU.png');
        this.icons.set('LS', 'https://i.imgur.com/6GBFBnC.png');
        this.icons.set('OH', 'https://i.imgur.com/NwvFtpj.png');
        this.icons.set('OO', 'https://i.imgur.com/Z661giO.png');
        this.icons.set('UA', 'https://i.imgur.com/Pcvzr5g.png');
        this.icons.set('VY', 'https://i.imgur.com/ZWBSLCv.png');
        this.icons.set('WN', 'https://i.imgur.com/T2RcRJU.png');
        this.icons.set('5X', 'https://i.imgur.com/y1Wvg6O.png');
        this.icons.set('XC', 'https://i.imgur.com/eoFkQw9.png');
        this.icons.set('NO_MATCH', 'https://i.imgur.com/6VUnwfq.png');
    }

    getAirlineIconByCode(airlineCode) {
        return this.icons.get(airlineCode) ? 
            this.icons.get(airlineCode) : this.icons.get("NO_MATCH");
    }
}
