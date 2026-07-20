function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function pickDistractors(country, allCountries, n = 3) {
  const same = shuffle(allCountries.filter((c) => c.code !== country.code && c.region === country.region))
  const other = shuffle(allCountries.filter((c) => c.code !== country.code && c.region !== country.region))
  return [...same, ...other].slice(0, n)
}

/** @param {'name'|'flag'} mode */
export function buildQuestions(stageCountries, mode, allCountries, quizSize = 10) {
  const size = Math.min(quizSize, stageCountries.length)
  const pool = shuffle(stageCountries).slice(0, size)

  return pool.map((country) => {
    const distractors = pickDistractors(country, allCountries, 3)
    const options = shuffle([country, ...distractors])
    const correct = options.findIndex((o) => o.code === country.code)

    if (mode === 'flag') {
      return {
        mode: 'flag',
        code: country.code,
        name: country.name,
        choices: options.map((o) => o.code),
        choiceNames: options.map((o) => o.name),
        correct,
        hint: country.hint,
        funFact: country.funFact,
      }
    }

    return {
      mode: 'name',
      code: country.code,
      name: country.name,
      choices: options.map((o) => o.name),
      choiceCodes: options.map((o) => o.code),
      correct,
      hint: country.hint,
      funFact: country.funFact,
    }
  })
}
