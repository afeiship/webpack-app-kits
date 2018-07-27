module.exports = function (inEnv) {
  const { mode, local } = inEnv;
  if (local) {
    return 'none' === mode ? 'development' : mode;
  }
  return mode;
};
