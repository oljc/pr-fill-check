import * as core from '@actions/core'
import * as github from '@actions/github'
import { createComment } from './util'

const context = github.context

export async function run(): Promise<void> {
  try {
    const owner = context.repo.owner
    const repo = context.repo.repo

    if (context.eventName.includes('pull_request')) {
      const number = context.payload.pull_request?.number
      if (!number) return core.info('The PR number was not found')
      core.info(`PR: https://github.com/${owner}/${repo}/pull/${number}`)

      // 往 PR 评论
      await createComment(owner, repo, number, 'Test Check PR Fill')
    } else {
      core.info('This action only supports PRs')
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
