import * as core from '@actions/core'
import * as github from '@actions/github'

const context = github.context

export async function run(): Promise<void> {
  try {
    // const owner = context.repo.owner;
    // const repo = context.repo.repo;

    if (context.eventName === 'pull_request') {
      const body = context.payload.pull_request?.body
      // 输出 body
      console.log(body)
    }
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
