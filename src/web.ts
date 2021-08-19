import { WebPlugin } from '@capacitor/core';

import type { CellRebelSDKPlugin } from './definitions';

export class CellRebelSDKWeb extends WebPlugin implements CellRebelSDKPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
