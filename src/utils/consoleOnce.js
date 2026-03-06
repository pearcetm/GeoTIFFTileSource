const __rt_consoleEchoOnce = {};
export function logOnce(key, message, mode="warn") {
  if (__rt_consoleEchoOnce[key]) return;
  __rt_consoleEchoOnce[key] = true;
  console[mode](message);
}