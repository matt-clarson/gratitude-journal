const stringify = obj => ({ ...obj, toString: () => obj.name });

const parse = (strings, ...args) =>
  strings.reduce((acc, string) => `${acc}${args.shift()}${string}`);

export const bem = (...blockArgs) =>
  stringify({
    name: parse(...blockArgs),
    elem: (...elemArgs) =>
      stringify({
        name: `${parse(...blockArgs)}--${parse(...elemArgs)}`,
        mod: (...modArgs) =>
          `${parse(...blockArgs)}--${parse(...elemArgs)}__${parse(...modArgs)}`
      }),
    mod: (...modArgs) => `${parse(...blockArgs)}__${parse(...modArgs)}`
  });

export const classes = (...cssClasses) => cssClasses.join(" ");
