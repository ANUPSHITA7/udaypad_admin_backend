import { Test, TestingModule } from '@nestjs/testing';
import { TransectionsController } from './transections.controller';
import { TransectionsService } from './transections.service';

describe('TransectionsController', () => {
  let controller: TransectionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransectionsController],
      providers: [TransectionsService],
    }).compile();

    controller = module.get<TransectionsController>(TransectionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
