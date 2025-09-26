Modularity in Javascript:
1. Nodejs Primary Module System: CommonJS (CJS) -> native modularity
   require() -> loads modules -> synchronous
   defining modules: exports

2. ESM (ecmascript 6  ES6/ES2015 modularity)
   import -> loads modules -> asynchronous
   defining modules: export
   nodejs supports both modularity
   modern browsers support ESM

   package.json -> "type": "commonjs" -> default/cjs
                   "type": "module" -> esm