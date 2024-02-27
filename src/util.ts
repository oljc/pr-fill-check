import { info, getInput } from '@actions/core'
import { Octokit } from '@octokit/rest'

const token = getInput('token')
const octokit = new Octokit({ auth: `token ${token}` })

async function createComment(
  owner: string,
  repo: string,
  number: number,
  body: string
): Promise<void> {
  await octokit.issues.createComment({
    owner,
    repo,
    issue_number: number,
    body
  })
  info(`Successfully added a comment to issue #${number}!`)
}

export { createComment }
