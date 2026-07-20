import { useState } from 'react'
import PathScreen from './components/PathScreen'
import QuizScreen from './components/QuizScreen'
import ResultScreen from './components/ResultScreen'
import { countries, countryByCode } from './data/countries'
import { CLEAR_SCORE, QUIZ_SIZE, clearThresholdForStage, getStageById } from './data/stages'
import { buildQuestions } from './utils/quiz'
import { saveStageScore } from './utils/progress'

export default function App() {
  const [screen, setScreen] = useState('path')
  const [stageId, setStageId] = useState(null)
  const [activeQuestions, setActiveQuestions] = useState([])
  const [currentQ, setCurrentQ] = useState(0)
  const [score, setScore] = useState(0)
  const [answers, setAnswers] = useState([])

  const stage = stageId ? getStageById(stageId) : null

  const startStage = (id) => {
    const s = getStageById(id)
    if (!s) return
    const stageCountries = s.codes.map((code) => countryByCode[code]).filter(Boolean)
    setStageId(id)
    setActiveQuestions(buildQuestions(stageCountries, s.mode, countries, QUIZ_SIZE))
    setCurrentQ(0)
    setScore(0)
    setAnswers([])
    setScreen('quiz')
  }

  const handleAnswer = (selectedIndex) => {
    const q = activeQuestions[currentQ]
    const isCorrect = selectedIndex === q.correct
    if (isCorrect) setScore((s) => s + 1)
    setAnswers((prev) => [
      ...prev,
      {
        mode: q.mode,
        code: q.code,
        name: q.name,
        choices: q.choices,
        choiceNames: q.choiceNames,
        selectedIndex,
        correctIndex: q.correct,
        isCorrect,
        funFact: q.funFact,
      },
    ])
  }

  const handleNext = () => {
    if (currentQ + 1 >= activeQuestions.length) {
      saveStageScore(stageId, score)
      setScreen('result')
    } else {
      setCurrentQ((q) => q + 1)
    }
  }

  const handleRestart = () => startStage(stageId)
  const handleBackPath = () => {
    setScreen('path')
    setStageId(null)
  }

  const clearNeed = stage ? clearThresholdForStage(stage) : CLEAR_SCORE
  const cleared = score >= clearNeed

  return (
    <div className="app-wrapper">
      {screen === 'path' && (
        <PathScreen onStartStage={startStage} totalCountries={countries.length} />
      )}
      {screen === 'quiz' && activeQuestions[currentQ] && (
        <QuizScreen
          key={`${stageId}-${currentQ}`}
          question={activeQuestions[currentQ]}
          questionIndex={currentQ}
          total={activeQuestions.length}
          stageTitle={stage ? `${stage.badge} ${stage.title}` : ''}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          score={score}
          total={activeQuestions.length}
          answers={answers}
          stageTitle={stage ? stage.title : ''}
          clearNeed={clearNeed}
          cleared={cleared}
          onRestart={handleRestart}
          onBackPath={handleBackPath}
        />
      )}
    </div>
  )
}
