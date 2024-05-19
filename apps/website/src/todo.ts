export const todo = (message?: string): any => {
  console.warn(message || 'todo');
  throw new Error(`todo ${message}`);
};

export const unimplemented = (message?: string): any => {
  console.warn(message || 'unimplemented');
  throw new Error(`unimplemented ${message}`);
};

export const notImplemented = unimplemented;
