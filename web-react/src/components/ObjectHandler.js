export function SliceObject(obj, getArray = false, customKeys = null) {
  const excludeChars = '__'
  const keyValues = Object.entries(obj)
  const filteredKeys = keyValues
    .filter((keyValue) => getArray === Array.isArray(keyValue[1]))
    .filter((keyValue) => !keyValue[0].includes(excludeChars))
    .map((keyValues) => keyValues[0])
  const keys = customKeys || filteredKeys

  const slicedObject = Object.fromEntries(
    Object.entries(obj).filter((prop) => keys.includes(prop[0]))
  )
  return slicedObject
}

export function GetCleanKeys(obj, upper) {
  const excludeChars = '__'
  const keyValues = Object.entries(obj)
  const filteredKeys = keyValues
    .filter((keyValue) => !Array.isArray(keyValue[1]))
    .filter((keyValue) => !keyValue[0].includes(excludeChars))
    .map((keyValues) => keyValues[0])
  if (!upper) {
    return filteredKeys
  }
  const upperCaseList = filteredKeys.map((str) => str.toUpperCase())
  return upperCaseList
}
