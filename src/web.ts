import { WebPlugin } from '@capacitor/core';

import type { CapacitorInstallReferrerPlugin } from './definitions';

export class CapacitorInstallReferrerWeb extends WebPlugin implements CapacitorInstallReferrerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
