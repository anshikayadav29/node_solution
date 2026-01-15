// middleware.js
function compose(mw) {
  return ctx => mw.reduceRight(
    (next, fn) => () => fn(ctx, next),
    () => Promise.resolve()
  )();
}
