import * as core from '@actions/core'
// import { wait } from './wait'

export async function run(): Promise<void> {
  try {
    const token: string = core.getInput('token')
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
