import { Controller, Get } from '@nestjs/common';
import { KlaytnService } from './klaytn.service';

@Controller('klaytn')
export class KlaytnController {
    constructor(private klaytnService: KlaytnService){}

    @Get()
    getTest(){
        return this.klaytnService.getTest();
    }

    @Get('wallet')
    getWalletInfo(){
        return this.klaytnService.getWalletInfo();
    }
}
