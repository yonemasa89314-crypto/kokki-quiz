import { useState } from 'react'
import { courses, CLEAR_SCORE, getAllStages } from '../data/stages'
import { loadProgress, isStageCleared, isStageUnlocked, resetProgress } from '../utils/progress'

export default function PathScreen({ onStartStage, totalCountries }) {
  const [progress, setProgress] = useState(() => loadProgress())
  const allStages = getAllStages()
  const clearedCount = allStages.filter((s) => isStageCleared(s, progress)).length
  const hasProgress = Object.keys(progress.scores).length > 0

  const handleReset = () => {
    if (!hasProgress) return
    const ok = window.confirm('クリア状況をリセットして、最初からやり直しますか？')
    if (!ok) return
    setProgress(resetProgress())
  }

  return (
    <div className="path-screen">
      <header className="path-hero">
        <p className="path-hero-brand">世界の国旗クイズ</p>
        <p className="path-hero-sub">
          {totalCountries}カ国を、ステップごとにクリアしていこう！
        </p>
        <div className="path-hero-stats">
          <span>クリア {clearedCount} / {allStages.length}</span>
          <span>合格ライン {CLEAR_SCORE}問以上</span>
        </div>
        {hasProgress && (
          <button type="button" className="path-reset-btn" onClick={handleReset}>
            クリア状況をリセット
          </button>
        )}
      </header>

      <div className="path-body">
        {courses.map((course) => (
          <section key={course.id} className="path-course">
            <div className="path-course-head">
              <span className="path-course-badge">{course.badge}</span>
              <h2 className="path-course-title">
                <span className="path-course-emoji">{course.emoji}</span>
                {course.title}
              </h2>
            </div>

            <div className="path-track">
              <div className="path-line" aria-hidden="true" />
              {course.stages.map((stage) => {
                const globalIndex = allStages.findIndex((s) => s.id === stage.id)
                const unlocked = isStageUnlocked(globalIndex, allStages, progress)
                const cleared = isStageCleared(stage, progress)
                const best = progress.scores[stage.id]
                const side = stage.lesson % 2 === 1 ? 'left' : 'right'
                const modeLabel = stage.mode === 'name' ? '国名あて' : '国旗えらび'

                return (
                  <div key={stage.id} className={`path-node path-node-${side}`}>
                    <button
                      type="button"
                      className={`path-card ${cleared ? 'is-cleared' : ''} ${!unlocked ? 'is-locked' : ''}`}
                      disabled={!unlocked}
                      onClick={() => unlocked && onStartStage(stage.id)}
                    >
                      <div className="path-card-top">
                        <span className="path-card-lesson">レッスン {stage.lesson}</span>
                        <span className={`path-card-mode mode-${stage.mode}`}>{modeLabel}</span>
                      </div>
                      <p className="path-card-title">{stage.title}</p>
                      <p className="path-card-sub">{stage.subtitle}</p>
                      <div className="path-card-foot">
                        <span className="path-card-count">{stage.codes.length}カ国</span>
                        {cleared ? (
                          <span className="path-card-check" aria-label="クリア済み">✓</span>
                        ) : unlocked ? (
                          <span className="path-card-go">はじめる</span>
                        ) : (
                          <span className="path-card-lock">🔒</span>
                        )}
                      </div>
                      {best != null && (
                        <p className="path-card-best">ベスト {best}問せいかい</p>
                      )}
                    </button>
                    <div className={`path-dot ${cleared ? 'is-cleared' : ''} ${unlocked ? 'is-open' : ''}`} />
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
