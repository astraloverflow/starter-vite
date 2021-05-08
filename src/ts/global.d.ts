// Prevents Typescript from complaining about custom elements
// https://caniuse.com/custom-elementsv1
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
