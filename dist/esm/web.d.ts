import { WebPlugin } from '@capacitor/core';
import type { CapacitorInstallReferrerPlugin } from './definitions';
export declare class CapacitorInstallReferrerWeb extends WebPlugin implements CapacitorInstallReferrerPlugin {
    getReferrer(): Promise<{
        installReferrer: string;
        referrerClickTimestamp: number;
        installBeginTimestamp: number;
        googlePlayInstant: boolean;
    }>;
}
