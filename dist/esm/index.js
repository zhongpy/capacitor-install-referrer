import { registerPlugin } from '@capacitor/core';
const CapacitorInstallReferrer = registerPlugin('CapacitorInstallReferrer', {
    web: () => import('./web').then((m) => new m.CapacitorInstallReferrerWeb()),
});
export * from './definitions';
export { CapacitorInstallReferrer };
//# sourceMappingURL=index.js.map