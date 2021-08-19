import { registerPlugin } from '@capacitor/core';

import type { CellRebelSDKPlugin } from './definitions';

const CellRebelSDK = registerPlugin<CellRebelSDKPlugin>('CellRebelSDK', {
  web: () => import('./web').then(m => new m.CellRebelSDKWeb()),
});

export * from './definitions';
export { CellRebelSDK };
