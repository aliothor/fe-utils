import { describe, expect, it } from 'vitest'
import * as XEUtils from '../src'

describe('function functions', () => {
  it('noop()', () => {
    expect(
      [11, 22, 33].map(XEUtils.noop),
    ).toEqual([undefined, undefined, undefined])
  })

  it('delay()', (done) => {
    XEUtils.delay((name) => {
      expect(
        name,
      ).toEqual('test11')
      done()
    }, 300, 'test11')
  })

  it('after()', (done) => {
    function getJSON(url, complete) {
      setTimeout(() => {
        complete({ data: url })
      }, 200)
    }
    const finish = XEUtils.after(3, (rests) => {
      expect(
        rests,
      ).toEqual([{ data: '/api/list1' }, { data: '/api/list2' }, { data: '/api/list3' }])
      done()
    })
    getJSON('/api/list1', finish)
    getJSON('/api/list2', finish)
    getJSON('/api/list3', finish)
  })

  it('before()', (done) => {
    const meeting = XEUtils.before(4, (rests, val) => {
      if (val === 222) {
        expect(
          rests,
        ).toEqual([111, 222])
        done()
      }
    })
    meeting(111)
    meeting(222)
    meeting(333)
    meeting(444)
  })

  it('bind()', () => {
    const rest = XEUtils.bind(function (val) {
      return `${this.name} = ${val}`
    }, { name: 'test' })
    expect(
      rest(222),
    ).toEqual('test = 222')
    expect(
      rest(333),
    ).toEqual('test = 333')
  })

  it('once()', () => {
    const rest = XEUtils.once(function (val) {
      return `${this.name} = ${val}`
    }, { name: 'test' })
    expect(
      rest(222),
    ).toEqual('test = 222')
    expect(
      rest(333),
    ).toEqual('test = 222')
  })
})
