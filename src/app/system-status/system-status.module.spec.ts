import { SystemStatusModule } from './system-status.module';

describe('SystemStatusModule', () => {
  let systemStatusModule: SystemStatusModule;

  beforeEach(() => {
    systemStatusModule = new SystemStatusModule();
  });

  it('should create an instance', () => {
    expect(systemStatusModule).toBeTruthy();
  });
});
