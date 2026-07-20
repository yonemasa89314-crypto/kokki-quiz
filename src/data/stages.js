// ステップアップ用コース／ステージ定義
export const CLEAR_SCORE = 6 // 基本は10問中6問以上でクリア
export const QUIZ_SIZE = 10

export function quizCountForStage(stage) {
  return Math.min(QUIZ_SIZE, stage.codes.length)
}

export function clearThresholdForStage(stage) {
  return Math.min(CLEAR_SCORE, quizCountForStage(stage))
}

export const courses = [
  {
    "id": "start",
    "badge": "コース1",
    "title": "はじめての国旗",
    "emoji": "🚩",
    "stages": [
      {
        "id": "start-n1",
        "title": "はじめての国旗",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "jp",
          "us",
          "gb",
          "fr",
          "de",
          "it",
          "cn",
          "kr",
          "br",
          "au",
          "ca",
          "in",
          "eg",
          "za",
          "mx"
        ],
        "lesson": 1
      },
      {
        "id": "start-f1",
        "title": "はじめての国旗（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "jp",
          "us",
          "gb",
          "fr",
          "de",
          "it",
          "cn",
          "kr",
          "br",
          "au",
          "ca",
          "in",
          "eg",
          "za",
          "mx"
        ],
        "lesson": 2
      }
    ]
  },
  {
    "id": "asia",
    "badge": "コース2",
    "title": "アジアツアー",
    "emoji": "🌏",
    "stages": [
      {
        "id": "asia-n1",
        "title": "アジアツアー 1",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "az",
          "af",
          "ae",
          "am",
          "ye",
          "il",
          "iq",
          "ir",
          "id",
          "uz"
        ],
        "lesson": 1
      },
      {
        "id": "asia-f1",
        "title": "アジアツアー 1（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "az",
          "af",
          "ae",
          "am",
          "ye",
          "il",
          "iq",
          "ir",
          "id",
          "uz"
        ],
        "lesson": 2
      },
      {
        "id": "asia-n2",
        "title": "アジアツアー 2",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "om",
          "kz",
          "qa",
          "kh",
          "cy",
          "kg",
          "kw",
          "sa",
          "ge",
          "sy"
        ],
        "lesson": 3
      },
      {
        "id": "asia-f2",
        "title": "アジアツアー 2（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "om",
          "kz",
          "qa",
          "kh",
          "cy",
          "kg",
          "kw",
          "sa",
          "ge",
          "sy"
        ],
        "lesson": 4
      },
      {
        "id": "asia-n3",
        "title": "アジアツアー 3",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "sg",
          "lk",
          "th",
          "tj",
          "kp",
          "tm",
          "tr",
          "np",
          "bh",
          "pk"
        ],
        "lesson": 5
      },
      {
        "id": "asia-f3",
        "title": "アジアツアー 3（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "sg",
          "lk",
          "th",
          "tj",
          "kp",
          "tm",
          "tr",
          "np",
          "bh",
          "pk"
        ],
        "lesson": 6
      },
      {
        "id": "asia-n4",
        "title": "アジアツアー 4",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "bd",
          "tl",
          "ph",
          "bt",
          "bn",
          "vn",
          "my",
          "mm",
          "mv",
          "mn"
        ],
        "lesson": 7
      },
      {
        "id": "asia-f4",
        "title": "アジアツアー 4（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "bd",
          "tl",
          "ph",
          "bt",
          "bn",
          "vn",
          "my",
          "mm",
          "mv",
          "mn"
        ],
        "lesson": 8
      },
      {
        "id": "asia-n5",
        "title": "アジアツアー 5",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "jo",
          "la",
          "lb",
          "tw",
          "ps"
        ],
        "lesson": 9
      },
      {
        "id": "asia-f5",
        "title": "アジアツアー 5（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "jo",
          "la",
          "lb",
          "tw",
          "ps"
        ],
        "lesson": 10
      }
    ]
  },
  {
    "id": "europe",
    "badge": "コース3",
    "title": "ヨーロッパツアー",
    "emoji": "🗺️",
    "stages": [
      {
        "id": "europe-n1",
        "title": "ヨーロッパツアー 1",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "is",
          "ie",
          "al",
          "ad",
          "ua",
          "ee",
          "at",
          "nl",
          "mk",
          "gr"
        ],
        "lesson": 1
      },
      {
        "id": "europe-f1",
        "title": "ヨーロッパツアー 1（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "is",
          "ie",
          "al",
          "ad",
          "ua",
          "ee",
          "at",
          "nl",
          "mk",
          "gr"
        ],
        "lesson": 2
      },
      {
        "id": "europe-n2",
        "title": "ヨーロッパツアー 2",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "hr",
          "sm",
          "ch",
          "se",
          "es",
          "sk",
          "si",
          "rs",
          "cz",
          "dk"
        ],
        "lesson": 3
      },
      {
        "id": "europe-f2",
        "title": "ヨーロッパツアー 2（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "hr",
          "sm",
          "ch",
          "se",
          "es",
          "sk",
          "si",
          "rs",
          "cz",
          "dk"
        ],
        "lesson": 4
      },
      {
        "id": "europe-n3",
        "title": "ヨーロッパツアー 3",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "no",
          "hu",
          "fi",
          "bg",
          "by",
          "be",
          "pl",
          "ba",
          "pt",
          "mt"
        ],
        "lesson": 5
      },
      {
        "id": "europe-f3",
        "title": "ヨーロッパツアー 3（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "no",
          "hu",
          "fi",
          "bg",
          "by",
          "be",
          "pl",
          "ba",
          "pt",
          "mt"
        ],
        "lesson": 6
      },
      {
        "id": "europe-n4",
        "title": "ヨーロッパツアー 4",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "mc",
          "md",
          "me",
          "lv",
          "lt",
          "li",
          "ro",
          "lu",
          "ru",
          "va"
        ],
        "lesson": 7
      },
      {
        "id": "europe-f4",
        "title": "ヨーロッパツアー 4（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "mc",
          "md",
          "me",
          "lv",
          "lt",
          "li",
          "ro",
          "lu",
          "ru",
          "va"
        ],
        "lesson": 8
      },
      {
        "id": "europe-n5",
        "title": "ヨーロッパツアー 5",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "xk"
        ],
        "lesson": 9
      },
      {
        "id": "europe-f5",
        "title": "ヨーロッパツアー 5（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "xk"
        ],
        "lesson": 10
      }
    ]
  },
  {
    "id": "africa",
    "badge": "コース4",
    "title": "アフリカツアー",
    "emoji": "🌍",
    "stages": [
      {
        "id": "africa-n1",
        "title": "アフリカツアー 1",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "dz",
          "ao",
          "ug",
          "sz",
          "et",
          "er",
          "gh",
          "cv",
          "ga",
          "cm"
        ],
        "lesson": 1
      },
      {
        "id": "africa-f1",
        "title": "アフリカツアー 1（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "dz",
          "ao",
          "ug",
          "sz",
          "et",
          "er",
          "gh",
          "cv",
          "ga",
          "cm"
        ],
        "lesson": 2
      },
      {
        "id": "africa-n2",
        "title": "アフリカツアー 2",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "gm",
          "gn",
          "gw",
          "ke",
          "ci",
          "km",
          "cg",
          "cd",
          "st",
          "zm"
        ],
        "lesson": 3
      },
      {
        "id": "africa-f2",
        "title": "アフリカツアー 2（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "gm",
          "gn",
          "gw",
          "ke",
          "ci",
          "km",
          "cg",
          "cd",
          "st",
          "zm"
        ],
        "lesson": 4
      },
      {
        "id": "africa-n3",
        "title": "アフリカツアー 3",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "sl",
          "dj",
          "zw",
          "sd",
          "sc",
          "gq",
          "sn",
          "so",
          "tz",
          "td"
        ],
        "lesson": 5
      },
      {
        "id": "africa-f3",
        "title": "アフリカツアー 3（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "sl",
          "dj",
          "zw",
          "sd",
          "sc",
          "gq",
          "sn",
          "so",
          "tz",
          "td"
        ],
        "lesson": 6
      },
      {
        "id": "africa-n4",
        "title": "アフリカツアー 4",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "cf",
          "tn",
          "tg",
          "ng",
          "na",
          "ne",
          "bf",
          "bi",
          "bj",
          "bw"
        ],
        "lesson": 7
      },
      {
        "id": "africa-f4",
        "title": "アフリカツアー 4（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "cf",
          "tn",
          "tg",
          "ng",
          "na",
          "ne",
          "bf",
          "bi",
          "bj",
          "bw"
        ],
        "lesson": 8
      },
      {
        "id": "africa-n5",
        "title": "アフリカツアー 5",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "mg",
          "mw",
          "ml",
          "ss",
          "mu",
          "mr",
          "mz",
          "ma",
          "ly",
          "lr"
        ],
        "lesson": 9
      },
      {
        "id": "africa-f5",
        "title": "アフリカツアー 5（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "mg",
          "mw",
          "ml",
          "ss",
          "mu",
          "mr",
          "mz",
          "ma",
          "ly",
          "lr"
        ],
        "lesson": 10
      },
      {
        "id": "africa-n6",
        "title": "アフリカツアー 6",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "rw",
          "ls",
          "eh"
        ],
        "lesson": 11
      },
      {
        "id": "africa-f6",
        "title": "アフリカツアー 6（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "rw",
          "ls",
          "eh"
        ],
        "lesson": 12
      }
    ]
  },
  {
    "id": "americas",
    "badge": "コース5",
    "title": "アメリカ大陸ツアー",
    "emoji": "🌎",
    "stages": [
      {
        "id": "americas-n1",
        "title": "アメリカ大陸ツアー 1",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "ar",
          "ag",
          "uy",
          "ec",
          "sv",
          "gy",
          "cu",
          "gt",
          "gd",
          "cr"
        ],
        "lesson": 1
      },
      {
        "id": "americas-f1",
        "title": "アメリカ大陸ツアー 1（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "ar",
          "ag",
          "uy",
          "ec",
          "sv",
          "gy",
          "cu",
          "gt",
          "gd",
          "cr"
        ],
        "lesson": 2
      },
      {
        "id": "americas-n2",
        "title": "アメリカ大陸ツアー 2",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "co",
          "jm",
          "sr",
          "kn",
          "vc",
          "lc",
          "cl",
          "do",
          "dm",
          "tt"
        ],
        "lesson": 3
      },
      {
        "id": "americas-f2",
        "title": "アメリカ大陸ツアー 2（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "co",
          "jm",
          "sr",
          "kn",
          "vc",
          "lc",
          "cl",
          "do",
          "dm",
          "tt"
        ],
        "lesson": 4
      },
      {
        "id": "americas-n3",
        "title": "アメリカ大陸ツアー 3",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "ni",
          "ht",
          "pa",
          "bs",
          "py",
          "bb",
          "ve",
          "bz",
          "pe",
          "bo"
        ],
        "lesson": 5
      },
      {
        "id": "americas-f3",
        "title": "アメリカ大陸ツアー 3（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "ni",
          "ht",
          "pa",
          "bs",
          "py",
          "bb",
          "ve",
          "bz",
          "pe",
          "bo"
        ],
        "lesson": 6
      },
      {
        "id": "americas-n4",
        "title": "アメリカ大陸ツアー 4",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "hn"
        ],
        "lesson": 7
      },
      {
        "id": "americas-f4",
        "title": "アメリカ大陸ツアー 4（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "hn"
        ],
        "lesson": 8
      }
    ]
  },
  {
    "id": "oceania",
    "badge": "コース6",
    "title": "オセアニアツアー",
    "emoji": "🏝️",
    "stages": [
      {
        "id": "oceania-n1",
        "title": "オセアニアツアー 1",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "ki",
          "ws",
          "sb",
          "tv",
          "to",
          "nr",
          "nz",
          "vu",
          "pg",
          "pw"
        ],
        "lesson": 1
      },
      {
        "id": "oceania-f1",
        "title": "オセアニアツアー 1（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "ki",
          "ws",
          "sb",
          "tv",
          "to",
          "nr",
          "nz",
          "vu",
          "pg",
          "pw"
        ],
        "lesson": 2
      },
      {
        "id": "oceania-n2",
        "title": "オセアニアツアー 2",
        "subtitle": "国旗を見て国名をあてる",
        "mode": "name",
        "codes": [
          "fj",
          "mh",
          "fm"
        ],
        "lesson": 3
      },
      {
        "id": "oceania-f2",
        "title": "オセアニアツアー 2（国旗えらび）",
        "subtitle": "国名を見て国旗をえらぶ",
        "mode": "flag",
        "codes": [
          "fj",
          "mh",
          "fm"
        ],
        "lesson": 4
      }
    ]
  }
]

export function getAllStages() {
  return courses.flatMap((course) =>
    course.stages.map((stage) => ({
      ...stage,
      courseId: course.id,
      courseTitle: course.title,
      badge: course.badge,
      emoji: course.emoji,
    })),
  )
}

export function getStageById(id) {
  return getAllStages().find((s) => s.id === id) || null
}
