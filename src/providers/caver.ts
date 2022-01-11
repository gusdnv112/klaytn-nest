const caver = require('caver-js');
import * as config from 'config';

class caverProvider{

    private cav;
    private url: string;

    constructor(){
        this.url = config.get<string>('klaytn.apiUrl');
        this.cav = new caver(this.url);

    }

}

export const provider = new caverProvider();