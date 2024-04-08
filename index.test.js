const { Canvas } = require('skia-canvas')

describe('skia-canvas context', () => {
  test('should be able to edit the context', () => {
    // Create canvas  and context
    const canvas = new Canvas(100, 100)
    const context = canvas.getContext('2d')

    // Check default value
    expect(context.font).toBe('10px sans-serif')

    // Check update
    context.font = 'normal 600 20px/24px Noto'
    expect(context.font).toBe('normal 600 20px/24px Noto')
  })
})