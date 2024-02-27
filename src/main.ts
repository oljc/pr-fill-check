import * as core from '@actions/core'
import * as github from '@actions/github'
import { createComment } from './util'

const context = github.context

export async function run(): Promise<void> {
  try {
    const owner = context.repo.owner
    const repo = context.repo.repo

    if (context.eventName.includes('pull_request')) {
      // const body = context.payload.pull_request?.body
      const number = context.payload.pull_request?.number
      if (!number) {
        core.info('No PR number found')
        return
      }

      // 往 PR 评论
      await createComment(owner, repo, number, 'Test Check PR Fill')
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
