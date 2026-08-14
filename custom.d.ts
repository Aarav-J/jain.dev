declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

// Promise.withResolvers — ES2024, not yet in TS 5.2 lib
interface PromiseWithResolvers<T> {
  promise: Promise<T>;
  resolve: (value: T | PromiseLike<T>) => void;
  reject: (reason?: unknown) => void;
}
interface PromiseConstructor {
  withResolvers<T>(): PromiseWithResolvers<T>;
}