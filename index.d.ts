type Default = (unitString: string) => (input: number) => String;

type Overridden = <Out>(
  unitString: string,
  outputType: (output: string) => Out,
) => (input: number) => Out;

export const roundToUnit: Default | Overridden;
