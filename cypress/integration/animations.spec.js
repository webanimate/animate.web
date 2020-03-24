import animations from '../../src/index'

const animationsNames = []
Object.keys(animations).forEach((key) => {
  if (!(key === 'categories' && !Array.isArray(animations[key].keyframes))) {
    animationsNames.push(key)
  }
})

describe('Test animations', function () {
  it('should not trigger console errors', function () {
    cy.visit('index.html')
    cy.window().then((win) => {
      cy.spy(win.console, 'error')
    })
    for (const animation of animationsNames) {
      cy.log(animation)
      cy.get('#animationName input:first-child')
        .clear()
        .type(animation + '{uparrow}{enter}')
      cy.window().then((win) => {
        expect(win.console.error).to.have.callCount(0)
      })
    }
  })
})
