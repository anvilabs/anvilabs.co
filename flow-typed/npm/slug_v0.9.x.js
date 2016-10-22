// flow-typed signature: 5d1365421f3793af8b0e98a1995f79b4
// flow-typed version: 7154c86e07/slug_v0.9.x/flow_>=v0.28.x

type SlugMode = 'rfc3986' | 'pretty'

declare module 'slug' {
  declare type SlugOptions = {
    mode: SlugMode,
    replacement: string,
    multicharmap: { [key: string]: string },
    charmap: { [key: string]: string },
    remove: RegExp,
    lower: boolean,
    symbol: boolean,
  }
  declare module.exports: {
      (input: string, optionOrReplacement?: string | SlugOptions): string,
      defaults: {
        mode: 'pretty',
        charmap: { [key: string]: string },
        multicharmap: { [key: string]: string },
        modes: { [key: SlugMode]: SlugOptions }
      }
  }
}
