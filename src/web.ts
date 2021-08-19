import { WebPlugin } from '@capacitor/core';

import type { CellRebelSDKPlugin } from './definitions';

export class CellRebelSDKWeb extends WebPlugin implements CellRebelSDKPlugin {
  async startTracking(): Promise<void> {
    return Promise.resolve();
  }
  async stopTracking(): Promise<void> {
    return Promise.resolve();
  }
  async init(options: { clientKey: string }): Promise<void> {
    if (options !== null) {
      console.log(options);
    }
    return Promise.resolve();
  }
}
