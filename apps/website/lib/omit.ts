export function omit<T extends Record<any, any>>(obj: T, keys: (keyof T)[]) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keys.includes(key as keyof T)),
  ) as Omit<T, keyof typeof keys[number]>;
}
