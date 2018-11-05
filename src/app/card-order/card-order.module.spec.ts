import { CardOrderModule } from './card-order.module';

describe('CardOrderModule', () => {
  let cardOrderModule: CardOrderModule;

  beforeEach(() => {
    cardOrderModule = new CardOrderModule();
  });

  it('should create an instance', () => {
    expect(cardOrderModule).toBeTruthy();
  });
});
