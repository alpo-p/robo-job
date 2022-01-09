export default (seconds: number): Promise<void> =>
  // eslint-disable-next-line no-promise-executor-return
  new Promise(r => setTimeout(r, seconds * 1000))
