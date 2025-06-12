import { WebPlugin } from '@capacitor/core';

import type { CapacitorInstallReferrerPlugin } from './definitions';

export class CapacitorInstallReferrerWeb extends WebPlugin implements CapacitorInstallReferrerPlugin {
  async getReferrer(): Promise<{
    installReferrer: string;
    referrerClickTimestamp: number;
    installBeginTimestamp: number;
    googlePlayInstant: boolean;
  }> {
    return {installReferrer: "",
    referrerClickTimestamp: 0,
    installBeginTimestamp: 0,
    googlePlayInstant: true};
  }
}
