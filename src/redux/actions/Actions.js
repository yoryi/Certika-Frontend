export const setValue = (varName, value) => {
    let upperVarnName = varName.toUpperCase()
    let type = `SET_${upperVarnName}`
    return {
      type,
      payload: {varName, value}
    }
  }