/**
 * Debounce function with a default timeout of 100ms
 */
const timers = new Map<string, ReturnType<typeof setTimeout>>()
export const debounce = (callback: () => void, id = 'singleton', timeout = 100) => {
  if (timers.get(id)) clearTimeout(timers.get(id))
  const timer = setTimeout(() => {
    callback()
    timers.delete(id)
  }, timeout)
  timers.set(id, timer)
}
