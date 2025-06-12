import { WebPlugin } from '@capacitor/core';
export class CapacitorInstallReferrerWeb extends WebPlugin {
    async getReferrer() {
        return { installReferrer: "",
            referrerClickTimestamp: 0,
            installBeginTimestamp: 0,
            googlePlayInstant: true };
    }
}
//# sourceMappingURL=web.js.map