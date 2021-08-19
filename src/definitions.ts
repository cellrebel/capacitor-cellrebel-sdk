export interface CellRebelSDKPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
