import { registerPlugin } from '@capacitor/core';

import type { CapacitorInstallReferrerPlugin } from './definitions';

const CapacitorInstallReferrer = registerPlugin<CapacitorInstallReferrerPlugin>('CapacitorInstallReferrer', {
  web: () => import('./web').then((m) => new m.CapacitorInstallReferrerWeb()),
});

export * from './definitions';
export { CapacitorInstallReferrer };
