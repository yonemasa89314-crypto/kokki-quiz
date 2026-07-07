export default function StartScreen({ onStart, quizSize, totalPool }) {
  return (
    <div className="start-screen">
      <div className="start-deco">🌍 🌎 🌏</div>

      <div className="start-card">
        <div className="start-title-emoji">🚩</div>
        <h1 className="start-title">
          世界の国旗
          <br />
          <span className="start-title-accent">クイズ</span>
        </h1>
        <p className="start-subtitle">
          国旗を見て、どこの国かあてよう！
        </p>

        <div className="start-info-box">
          <div className="start-info-row">
            <span>🌐</span>
            <span><strong>{totalPool}ヵ国</strong>の中からランダムに <strong>{quizSize}問</strong> 出るよ！</span>
          </div>
          <div className="start-info-row">
            <span>💡</span>
            <span>こまったら <strong>ヒント</strong> が使えるよ</span>
          </div>
          <div className="start-info-row">
            <span>📖</span>
            <span>答えのあとに <strong>豆知識</strong> が読めるよ</span>
          </div>
          <div className="start-info-row">
            <span>🔄</span>
            <span>毎回ちがう国旗が出るよ！</span>
          </div>
        </div>

        <div className="start-target">
          <span>🎒 小学生向け</span>
          <span>📱 スマホで遊べる</span>
        </div>

        <button className="start-btn" onClick={onStart}>
          🌍 クイズをはじめる！
        </button>
      </div>

      <div className="start-deco">✈️ 🗺️ ✈️</div>
    </div>
  )
}
