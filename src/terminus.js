function configReady(configObj) {
  return Object.keys(configObj)
    .map(key => {
      const value = configObj[key];
      if (value === null || value === undefined || value.trim() === '') {
        return `Environment variable [${key}] is invalid`;
      }
      return undefined;
    })
    .filter(_ => _);
}

module.exports = {
  configReady,
};
