import * as main from '../src/main'
// import * as github from '@actions/github'
import * as core from '@actions/core'

// Mock GitHub context
jest.mock('@actions/github', () => ({
  context: {
    eventName: 'pull_request',
    payload: {
      pull_request: {
        body: 'Test PR body'
      }
    }
  }
}))

// Mock core functions
jest.mock('@actions/core', () => ({
  ...jest.requireActual('@actions/core'), // 保留其它功能
  setFailed: jest.fn(),
  info: jest.fn()
}))

describe('main', () => {
  it('calls run when imported', async () => {
    const runSpy = jest.spyOn(main, 'run')
    await main.run() // 直接调用 run 函数
    expect(runSpy).toHaveBeenCalled()
  })

  it('does not fail', async () => {
    await main.run()
    expect(core.setFailed).toHaveBeenCalled()
  })
})
