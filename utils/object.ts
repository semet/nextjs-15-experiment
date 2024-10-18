export const flattenObject = <T extends Record<string, unknown>>(obj: T) => {
  const flattedObject = Object.keys(obj).reduce<Record<string, unknown>>(
    (acc, key) => {
      const entry = obj[key]

      if (
        typeof entry === 'object' &&
        entry !== null &&
        'label' in entry &&
        'value' in entry
      ) {
        acc[key] = entry.value
      } else {
        acc[key] = entry
      }

      return acc
    },
    {}
  )
  return flattedObject
}
