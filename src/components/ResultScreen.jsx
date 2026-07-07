import { useState } from 'react'

function getGrade(score, total) {
  const pct = score / total
  if (pct >= 0.9)  return { grade: 'S', label: '世界地理マスター！', color: '#f9a825', bg: '#fffde7', emoji: '🏆' }
  if (pct >= 0.7)  return { grade: 'A', label: 'すごい！よく知ってるね！', color: '#2e7d32', bg: '#e8f5e9', emoji: '🌟' }
  if (pct >= 0.5)  return { grade: 'B', label: 'よくできました！', color: '#1565c0', bg: '#e3f2fd', emoji: '⭐' }
  if (pct >= 0.3)  return { grade: 'C', label: 'もうすこし！', color: '#e65100', bg: '#fff3e0', emoji: '🗺️' }
  return { grade: 'D', label: 'もっとべんきょうしよう！', color: '#c62828', bg: '#ffebee', emoji: '💪' }
}

export default function ResultScreen({ score, total, answers, onRestart }) {
  const [showMistakes, setShowMistakes] = useState(false)
  const { grade, label, color, bg, emoji } = getGrade(score, total)
  const mistakes = answers.filter((a) => !a.isCorrect)

  return (
    <div className="result-screen">
      <div className="result-header">
        <div className="result-emoji">{emoji}</div>
        <h2 className="result-title">けっか発表！</h2>
      </div>

      <div className="result-score-card" style={{ borderColor: color, background: bg }}>
        <div className="result-grade" style={{ color }}>{grade}ランク</div>
        <div className="result-score">
          <span className="result-num" style={{ color }}>{score}</span>
          <span className="result-denom"> / {total}</span>
          <span className="result-unit">問せいかい</span>
        </div>
        <p className="result-label" style={{ color }}>{label}</p>
      </div>

      <div className="result-message-box">
        <p className="result-message">
          {score === total
            ? '全問正解！世界の国旗をぜんぶ知ってるなんてすごすぎる！🌍'
            : `${total - score}問まちがえたよ。もう一度チャレンジして全問正解をめざそう！🌎`}
        </p>
      </div>

      {mistakes.length > 0 && (
        <div className="mistakes-section">
          <button
            className="mistakes-toggle"
            onClick={() => setShowMistakes(!showMistakes)}
          >
            {showMistakes
              ? '▲ まちがえた問題を隠す'
              : `▼ まちがえた問題を見る（${mistakes.length}問）`}
          </button>

          {showMistakes && (
            <div className="mistakes-list">
              {mistakes.map((a, i) => (
                <div key={i} className="mistake-item">
                  <div className="mistake-flag-row">
                    <img
                      src={`https://flagcdn.com/w160/${a.code}.png`}
                      alt="国旗"
                      className="mistake-flag"
                    />
                    <div className="mistake-answers">
                      <div className="mistake-wrong">❌ あなたの答え：{a.choices[a.selectedIndex]}</div>
                      <div className="mistake-correct">✅ 正解：{a.choices[a.correctIndex]}</div>
                    </div>
                  </div>
                  <p className="mistake-explanation">{a.funFact}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {mistakes.length === 0 && (
        <div className="perfect-badge">🌟 全問せいかい！すごすぎる！ 🌟</div>
      )}

      <button className="restart-btn" onClick={onRestart}>
        🔄 もう一度あそぶ
      </button>
      <p className="result-footer">世界の国旗をもっと覚えよう！</p>
    </div>
  )
}
