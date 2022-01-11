import { Test, TestingModule } from '@nestjs/testing';
import { KlaytnController } from './klaytn.controller';

describe('KlaytnController', () => {
  let controller: KlaytnController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KlaytnController],
    }).compile();

    controller = module.get<KlaytnController>(KlaytnController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
