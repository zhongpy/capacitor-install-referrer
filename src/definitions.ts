export interface CapacitorInstallReferrerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
