const stringify = obj => ({ ...obj, toString: () => obj.name });

export const bem = ([block]) =>
  stringify({
    name: block,
    elem: ([elem]) =>
      stringify({
        name: `${block}--${elem}`,
        mod: ([mod]) => `${block}--${elem}__${mod}`
      }),
    mod: ([mod]) => `${block}__${mod}`
  });

export const classes = (...cssClasses) => cssClasses.join(" ");
