import { AnalystExportModule } from './analyst-export.module';

describe('AnalystExportModule', () => {
  let analystExportModule: AnalystExportModule;

  beforeEach(() => {
    analystExportModule = new AnalystExportModule();
  });

  it('should create an instance', () => {
    expect(analystExportModule).toBeTruthy();
  });
});
