module.exports = {
  publicPath: process.env.NODE_ENV === 'production' // ternary check which allows the local prod preview to still work
    ? '/ubiquitous-winner/'
    : '/'
}
