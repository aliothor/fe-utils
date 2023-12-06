export const publicPath = process.env.NODE_ENV === 'production' ? '/xe-utils/' : '/'
export const outputDir = 'docs'
export const assetsDir = 'static'
export const productionSourceMap = false
export const configureWebpack = {
  performance: {
    hints: false,
  },
}
export default {
  publicPath,
  outputDir,
  assetsDir,
  productionSourceMap,
  configureWebpack,
}
