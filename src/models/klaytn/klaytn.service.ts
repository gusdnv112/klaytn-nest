import { Injectable } from '@nestjs/common';
import * as Caver from 'caver-js';
// const Caver = require('caver-js');


@Injectable()
export class KlaytnService {

    
    constructor(){
    }

    getTest(){
        return "test";
    }

    getWalletInfo(){
        const caver = provider;

        console.log(caver);
    }
}
