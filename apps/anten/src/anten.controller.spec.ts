import { Test, TestingModule } from '@nestjs/testing';
import { AntenController } from './anten.controller';
import { AntenService } from './anten.service';

describe('AntenController', () => {
  let antenController: AntenController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AntenController],
      providers: [AntenService],
    }).compile();

    antenController = app.get<AntenController>(AntenController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(antenController.getHello()).toBe('Hello World!');
    });
  });
});
