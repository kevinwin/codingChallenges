function tripleStep(n) {
  if (!tripleStep.cache) {
    tripleStep.cache = [];
    tripleStep.cache[0] = 1;
  }

  if (n < 0) {
    return 0;
  } else if (tripleStep.cache[n]) {
    return tripleStep.cache[n];
  } else {
    tripleStep.cache[n] = tripleStep(n-1) + tripleStep(n-2) + tripleStep(n-3);
    return tripleStep.cache[n];
  }
}

module.exports = tripleStep;
