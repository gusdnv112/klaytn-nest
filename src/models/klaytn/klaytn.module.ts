import { Module } from '@nestjs/common';
import { KlaytnService } from './klaytn.service';
import { KlaytnController } from './klaytn.controller';

@Module({
  providers: [KlaytnService],
  controllers: [KlaytnController]
})
export class KlaytnModule {}
