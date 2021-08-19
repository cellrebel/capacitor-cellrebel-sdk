export interface CellRebelSDKPlugin {
  init(options: { clientKey: string }): Promise<void>;
  startTracking(): Promise<void>;
  stopTracking(): Promise<void>;
}
