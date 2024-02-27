import * as core from '@actions/core'
import * as github from '@actions/github'

const context = github.context

export async function run(): Promise<void> {
  try {
    const owner = context.repo.owner
    const repo = context.repo.repo
    const number = context.issue.number

    if (context.eventName === 'pull_request') {
      // const body = context.payload.pull_request?.body

      // 往 PR 评论
      const token = core.getInput('token')
      const octokit = github.getOctokit(token)
      await octokit.rest.issues.createComment({
        owner,
        repo,
        issue_number: number,
        body: 'Hello, world!'
      })
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
