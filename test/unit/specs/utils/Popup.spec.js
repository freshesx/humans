import Popup from '../../../../utils/Popup'
import MessageElement from '../../../../suites/message/message'

class CustomPopup extends Popup {
  element = MessageElement
}

describe('utils/Popup.js', () => {
  it('create # without none element', () => {
    let errorStorage

    try {
      Popup.create()
    } catch (error) {
      errorStorage = error
    }

    expect(errorStorage).to.be.an.instanceOf(Error)
    expect(errorStorage.message).to.be.equal('没有配置 element')
  })

  it('create #with custom element', () => {
    const message = CustomPopup.create()

    expect(message).have.a.property('title')
    expect(message).have.a.property('message')
    expect(message).have.a.property('isShow')
  })

  it('remove', () => {
    const customPopup = new CustomPopup()
    customPopup.createComponent()

    const self = customPopup.remove()

    expect(self.vueComponent).to.be.equal(undefined)
    expect(self.wrapper).to.be.equal(undefined)
  })
})
