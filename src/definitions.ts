export interface CapacitorInstallReferrerPlugin {
  getReferrer(): Promise<{
    installReferrer: string;
    referrerClickTimestamp: number;
    installBeginTimestamp: number;
    googlePlayInstant: boolean;
  }>;
}
