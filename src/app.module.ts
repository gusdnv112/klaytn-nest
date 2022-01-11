import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KlaytnModule } from './models/klaytn/klaytn.module';

@Module({
  imports: [KlaytnModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
