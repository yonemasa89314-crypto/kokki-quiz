const KEY = 'kokki-quiz-progress-v1'

export function loadProgress() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return { scores: {} }
    const data = JSON.parse(raw)
    return { scores: data.scores || {} }
  } catch {
    return { scores: {} }
  }
}

export function saveStageScore(stageId, score) {
  const progress = loadProgress()
  const prev = progress.scores[stageId]
  if (prev == null || score > prev) {
    progress.scores[stageId] = score
    localStorage.setItem(KEY, JSON.stringify(progress))
  }
  return progress
}

export function isStageCleared(stage, progress = loadProgress()) {
  const score = progress.scores[stage.id]
  if (score == null) return false
  const need = Math.min(6, Math.min(10, stage.codes.length))
  return score >= need
}

export function isStageUnlocked(stageIndex, allStages, progress = loadProgress()) {
  if (stageIndex <= 0) return true
  const prev = allStages[stageIndex - 1]
  return isStageCleared(prev, progress)
}
