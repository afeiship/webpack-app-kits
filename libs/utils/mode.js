module.exports = function (inEnv) {
  const { mode } = inEnv;
  return 'none' === mode ? 'development' : mode;
};
