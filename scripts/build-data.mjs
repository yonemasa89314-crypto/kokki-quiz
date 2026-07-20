import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')

const raw = JSON.parse(fs.readFileSync(path.join(__dirname, 'countries-raw.json'), 'utf8'))
const existing = JSON.parse(fs.readFileSync(path.join(root, 'tmp-existing.json'), 'utf8'))
const byCode = Object.fromEntries(existing.map((e) => [e.code, e]))

const shorten = {
  us: 'アメリカ', kr: '韓国', cn: '中国', kp: '北朝鮮', ir: 'イラン', sy: 'シリア',
  ve: 'ベネズエラ', bo: 'ボリビア', la: 'ラオス', md: 'モルドバ', bn: 'ブルネイ',
  ru: 'ロシア', fm: 'ミクロネシア', cd: 'コンゴ民主共和国', cg: 'コンゴ共和国',
  tz: 'タンザニア', kn: 'セントキッツ', vc: 'セントビンセント',
  ba: 'ボスニア', mk: '北マケドニア', st: 'サントメ・プリンシペ',
  gq: '赤道ギニア', cf: '中央アフリカ', tl: '東ティモール',
  do: 'ドミニカ共和国', dm: 'ドミニカ国', tt: 'トリニダード・トバゴ',
  sz: 'エスワティニ', ae: 'アラブ首長国連邦',
}

const ASIA = new Set('af am az bh bd bt bn kh cn cy ge in id ir iq il jp jo kz kw kg la lb my mv mn mm np kp om pk ps qa sa sg kr lk sy tw tj th tl tm tr ae uz vn ye'.split(' '))
const EUROPE = new Set('al ad at by be ba bg hr cz dk ee fi fr de gr hu is ie it xk lv li lt lu mt md mc me nl mk no pl pt ro ru sm rs sk si es se ch ua gb va'.split(' '))
const AFRICA = new Set('dz ao bj bw bf bi cm cv cf td km cg cd ci dj eg gq er sz et ga gm gh gn gw ke ls lr ly mg mw ml mr mu ma mz na ne ng rw st sn sc sl so za ss sd tz tg tn ug zm zw eh'.split(' '))
const AMERICAS = new Set('ag ar bs bb bz bo br ca cl co cr cu dm do ec sv gd gt gy ht hn jm mx ni pa py pe kn lc vc sr tt us uy ve'.split(' '))
const OCEANIA = new Set('au fj ki mh fm nr nz pw pg ws sb to tv vu'.split(' '))

function regionOf(code) {
  if (ASIA.has(code)) return 'asia'
  if (EUROPE.has(code)) return 'europe'
  if (AFRICA.has(code)) return 'africa'
  if (AMERICAS.has(code)) return 'americas'
  if (OCEANIA.has(code)) return 'oceania'
  return 'asia'
}

const defaultHint = (name) => `${name}の国旗の色やマークをよく見てみよう`
const defaultFact = (name, region) => {
  const r = { asia: 'アジア', europe: 'ヨーロッパ', africa: 'アフリカ', americas: 'アメリカ大陸', oceania: 'オセアニア' }[region]
  return `${name}は${r}にある国だよ。国旗のデザインには、その国の歴史や文化が込められているんだ！`
}

const countries = raw.map((r, i) => {
  const code = r.alpha2
  const name = shorten[code] || r.name
  const region = regionOf(code)
  const prev = byCode[code]
  return {
    id: i + 1,
    code,
    name,
    region,
    hint: prev?.hint || defaultHint(name),
    funFact: prev?.funFact || defaultFact(name, region),
  }
})

const regionCounts = {}
countries.forEach((c) => { regionCounts[c.region] = (regionCounts[c.region] || 0) + 1 })
console.log('total', countries.length, regionCounts)

const starter = ['jp', 'us', 'gb', 'fr', 'de', 'it', 'cn', 'kr', 'br', 'au', 'ca', 'in', 'eg', 'za', 'mx']

function chunk(arr, n) {
  const out = []
  for (let i = 0; i < arr.length; i += n) out.push(arr.slice(i, i + n))
  return out
}

const used = new Set()
const courses = []

function addCourse(id, badge, title, emoji, codes, chunkSize = 10) {
  const unique = codes.filter((c) => {
    if (!countries.find((x) => x.code === c)) return false
    if (used.has(c)) return false
    used.add(c)
    return true
  })
  if (!unique.length) return
  const stages = []
  chunk(unique, chunkSize).forEach((codesChunk, idx) => {
    const n = idx + 1
    const label = unique.length > chunkSize ? `${title} ${n}` : title
    stages.push({
      id: `${id}-n${n}`,
      title: label,
      subtitle: '国旗を見て国名をあてる',
      mode: 'name',
      codes: codesChunk,
    })
    stages.push({
      id: `${id}-f${n}`,
      title: `${label}（国旗えらび）`,
      subtitle: '国名を見て国旗をえらぶ',
      mode: 'flag',
      codes: codesChunk,
    })
  })
  stages.forEach((s, i) => { s.lesson = i + 1 })
  courses.push({ id, badge, title, emoji, stages })
}

const byRegion = (r) => countries.filter((c) => c.region === r).map((c) => c.code)

addCourse('start', 'コース1', 'はじめての国旗', '🚩', starter, 15)
addCourse('asia', 'コース2', 'アジアツアー', '🌏', byRegion('asia'), 10)
addCourse('europe', 'コース3', 'ヨーロッパツアー', '🗺️', byRegion('europe'), 10)
addCourse('africa', 'コース4', 'アフリカツアー', '🌍', byRegion('africa'), 10)
addCourse('americas', 'コース5', 'アメリカ大陸ツアー', '🌎', byRegion('americas'), 10)
addCourse('oceania', 'コース6', 'オセアニアツアー', '🏝️', byRegion('oceania'), 10)

const leftover = countries.map((c) => c.code).filter((c) => !used.has(c))
if (leftover.length) {
  console.log('leftover', leftover)
  addCourse('extra', 'コース7', 'もっと国旗マスター', '⭐', leftover, 10)
}

const covered = new Set(courses.flatMap((c) => c.stages.flatMap((s) => s.codes)))
console.log('covered', covered.size, 'stages', courses.reduce((a, c) => a + c.stages.length, 0))

fs.writeFileSync(
  path.join(root, 'src/data/countries.js'),
  `// 世界の国旗クイズ — ${countries.length}カ国\n// 国旗画像: https://flagcdn.com/w320/{code}.png\nexport const countries = ${JSON.stringify(countries, null, 2)}\n\nexport const countryByCode = Object.fromEntries(countries.map((c) => [c.code, c]))\n`,
)

fs.writeFileSync(
  path.join(root, 'src/data/stages.js'),
  `// ステップアップ用コース／ステージ定義\nexport const CLEAR_SCORE = 6 // 10問中この点数以上でクリア\n\nexport const courses = ${JSON.stringify(courses, null, 2)}\n\nexport function getAllStages() {\n  return courses.flatMap((course) =>\n    course.stages.map((stage) => ({\n      ...stage,\n      courseId: course.id,\n      courseTitle: course.title,\n      badge: course.badge,\n      emoji: course.emoji,\n    })),\n  )\n}\n\nexport function getStageById(id) {\n  return getAllStages().find((s) => s.id === id) || null\n}\n`,
)

console.log('wrote countries.js and stages.js')
