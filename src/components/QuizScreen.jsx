import { useState } from 'react'
import { playCorrect, playWrong } from '../utils/sounds'
import { addFurigana } from '../utils/furigana'

const LABELS = ['Ａ', 'Ｂ', 'Ｃ', 'Ｄ']
const COLORS = ['btn-red', 'btn-blue', 'btn-green', 'btn-purple']

export default function QuizScreen({ question, questionIndex, total, stageTitle, onAnswer, onNext }) {
  const [selected, setSelected] = useState(null)
  const [showHint, setShowHint] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [choiceLoaded, setChoiceLoaded] = useState({})

  const isAnswered = selected !== null
  const isCorrect = isAnswered && selected === question.correct
  const progress = (questionIndex / total) * 100
  const isFlagMode = question.mode === 'flag'
  const flagUrl = `https://flagcdn.com/w320/${question.code}.png`
  const correctLabel = isFlagMode
    ? question.choiceNames[question.correct]
    : question.choices[question.correct]

  const handleSelect = (index) => {
    if (isAnswered) return
    setSelected(index)
    onAnswer(index)
    if (index === question.correct) playCorrect()
    else playWrong()
  }

  return (
    <div className="quiz-screen">
      <div className="progress-wrap">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="progress-label">
          <span className="progress-current">{questionIndex + 1}</span>
          <span className="progress-sep"> / </span>
          <span className="progress-total">{total}</span>
          <span className="progress-unit">問</span>
        </div>
      </div>

      {stageTitle && <p className="quiz-stage-label">{stageTitle}</p>}

      <div className="flag-card">
        <p className="flag-question">
          {isFlagMode ? (
            <>この<ruby>国<rt>くに</rt></ruby>の<ruby>国旗<rt>こっき</rt></ruby>はどれ？</>
          ) : (
            <>この<ruby>国旗<rt>こっき</rt></ruby>はどこの<ruby>国<rt>くに</rt></ruby>？</>
          )}
        </p>

        {isFlagMode ? (
          <div className="name-prompt">
            <span
              className="name-prompt-text"
              dangerouslySetInnerHTML={{ __html: addFurigana(question.name) }}
            />
          </div>
        ) : (
          <div className="flag-wrap">
            {!imgLoaded && <div className="flag-skeleton">🚩 読み込み中…</div>}
            <img
              src={flagUrl}
              alt="国旗"
              className={`flag-img ${imgLoaded ? 'loaded' : ''}`}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
        )}

        <button
          className={`hint-toggle ${showHint ? 'hint-open' : ''}`}
          onClick={() => setShowHint(!showHint)}
        >
          💡 {showHint ? 'ヒントを隠す' : 'ヒントを見る'}
        </button>
        {showHint && (
          <div
            className="hint-box"
            dangerouslySetInnerHTML={{ __html: '👉 ' + addFurigana(question.hint) }}
          />
        )}
      </div>

      <div className="answer-area">
        {!isAnswered ? (
          isFlagMode ? (
            <div className="flag-choices-grid">
              {question.choices.map((code, i) => (
                <button
                  key={code}
                  className={`flag-choice-btn ${COLORS[i]}`}
                  onClick={() => handleSelect(i)}
                >
                  <span className="choice-label">{LABELS[i]}</span>
                  <span className="flag-choice-img-wrap">
                    {!choiceLoaded[i] && <span className="flag-choice-skel">…</span>}
                    <img
                      src={`https://flagcdn.com/w160/${code}.png`}
                      alt={`選択肢${LABELS[i]}`}
                      className={`flag-choice-img ${choiceLoaded[i] ? 'loaded' : ''}`}
                      onLoad={() => setChoiceLoaded((prev) => ({ ...prev, [i]: true }))}
                    />
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="choices-grid">
              {question.choices.map((choice, i) => (
                <button
                  key={i}
                  className={`choice-btn ${COLORS[i]}`}
                  onClick={() => handleSelect(i)}
                >
                  <span className="choice-label">{LABELS[i]}</span>
                  <span
                    className="choice-text"
                    dangerouslySetInnerHTML={{ __html: addFurigana(choice) }}
                  />
                </button>
              ))}
            </div>
          )
        ) : (
          <div className={`feedback-card ${isCorrect ? 'feedback-ok' : 'feedback-ng'}`}>
            <div className="feedback-body">
              <div className="feedback-header">
                <span className="feedback-icon">{isCorrect ? '🎉' : '😢'}</span>
                <span
                  className="feedback-title"
                  dangerouslySetInnerHTML={{
                    __html: isCorrect
                      ? 'せいかい！'
                      : `ざんねん！正解は「${addFurigana(correctLabel)}」`,
                  }}
                />
              </div>
              {isFlagMode && (
                <img
                  src={`https://flagcdn.com/w160/${question.code}.png`}
                  alt={question.name}
                  className="feedback-flag"
                />
              )}
              <p
                className="feedback-explanation"
                dangerouslySetInnerHTML={{ __html: addFurigana(question.funFact) }}
              />
            </div>
            <button className="next-btn" onClick={onNext}>
              {questionIndex + 1 >= total ? '🏆 けっかをみる！' : 'つぎの問題へ →'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
