const { Canvas } = require('skia-canvas')

const CONTEXT_FONT_DEFAULT_VALUE = '10px sans-serif'
describe('skia-canvas context', () => {
  test('should be able to edit the context', () => {
    const canvas = new Canvas(100, 100)
    const context = canvas.getContext('2d')
    expect(context.font).toBe(CONTEXT_FONT_DEFAULT_VALUE)

    context.font = 'normal 600 20px/24px Times'
    expect(context.font).toBe('normal 600 20px/24px Times')
  })
})