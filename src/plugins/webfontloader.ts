export async function loadFonts() {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */ 'webfontloader')

  webFontLoader.load({
    custom: {
      families: ['NanumSquareNeo', 'Pretandard'],
      urls: ['./styles/fonts.css']
    }
  })
}
