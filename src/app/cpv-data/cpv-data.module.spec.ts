import { CpvDataModule } from './cpv-data.module';

describe('CpvDataModule', () => {
  let cpvDataModule: CpvDataModule;

  beforeEach(() => {
    cpvDataModule = new CpvDataModule();
  });

  it('should create an instance', () => {
    expect(cpvDataModule).toBeTruthy();
  });
});
