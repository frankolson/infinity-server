  const clone = require('clone')

let db = {}

const defaultData = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Recruitment',
    body: 'We are in the process of bidding on new work that requires employees to have experience in Information Technology. What can we do to recruit employees that meet these qualifications?',
    author: 'John Lawrence',
    category: 'Recruitment',
    voteScore: 6,
    deleted: false
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Insights and Data',
    body: 'Our clients are interested in generating a new report, but it would take hours to manually create. How can we automate this process using our data?',
    author: 'Sheryl Barnes',
    category: 'Insights and Data',
    voteScore: -5,
    deleted: false
  },
  "5999df3b58534a997b7c652)": {
    "id": "5999df3b58534a997b7c6529",
    "timestamp": 1467166872634,
    "title": "et cillum elit",
    "body": "Do non laborum adipisicing proident adipisicing. Dolor velit ut non nostrud reprehenderit laborum et id nulla. Dolore do et sunt eiusmod velit eiusmod do ullamco sit Lorem.",
    "author": "Casey Luna",
    "category": "Insights and Data",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b3edd256d7656dbe6": {
    "id": "5999df3b3edd256d7656dbe6",
    "timestamp": 1467166872634,
    "title": "cupidatat velit est",
    "body": "Ad consequat ex aute ex do excepteur non magna culpa adipisicing do aute velit. Cillum cillum id aliquip ut aliquip ea reprehenderit dolore aliquip ipsum adipisicing. Ipsum nostrud duis enim consectetur consectetur aliqua incididunt.",
    "author": "Orr George",
    "category": "Insights and Data",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b43529d0046703146": {
    "id": "5999df3b43529d0046703146",
    "timestamp": 1467166872634,
    "title": "tempor occaecat magna",
    "body": "Voluptate duis mollit occaecat anim commodo eu tempor laboris ad culpa velit sunt est. Voluptate est cupidatat exercitation veniam aliqua ad amet proident anim sunt fugiat ex. Nostrud quis nostrud eu irure cupidatat aliquip est commodo.",
    "author": "Mcmillan Knowles",
    "category": "Human Resources",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b8202c75819408929": {
    "id": "5999df3b8202c75819408929",
    "timestamp": 1467166872634,
    "title": "irure quis esse",
    "body": "Sint commodo in irure laboris sint sint. Ipsum fugiat deserunt sunt occaecat reprehenderit fugiat. Tempor velit voluptate est occaecat.",
    "author": "Ross Mccullough",
    "category": "Recruitment",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b8d3cc30a4a6d7b5c": {
    "id": "5999df3b8d3cc30a4a6d7b5c",
    "timestamp": 1467166872634,
    "title": "aliqua officia consequat",
    "body": "Proident esse qui elit sit irure velit eiusmod et. Consequat Lorem est consequat enim id deserunt cupidatat. Esse commodo proident nisi mollit commodo.",
    "author": "Amber Warner",
    "category": "Insights and Data",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bd7bb35b4fa341d40": {
    "id": "5999df3bd7bb35b4fa341d40",
    "timestamp": 1467166872634,
    "title": "adipisicing laborum non",
    "body": "Id occaecat nostrud aliquip do incididunt eiusmod. Adipisicing id aute cupidatat do cupidatat do aliquip sint duis. Proident laborum Lorem ad enim voluptate exercitation eiusmod.",
    "author": "Guerrero Solis",
    "category": "Recruitment",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b3251b19aa9868a8a": {
    "id": "5999df3b3251b19aa9868a8a",
    "timestamp": 1467166872634,
    "title": "excepteur quis sint",
    "body": "Lorem anim laborum qui eiusmod ipsum exercitation ullamco. Eu aliqua est eiusmod velit tempor. Eiusmod et velit enim sit nisi duis veniam est eu.",
    "author": "Mary Garrett",
    "category": "Recruitment",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bdbf18ee74a23f07b": {
    "id": "5999df3bdbf18ee74a23f07b",
    "timestamp": 1467166872634,
    "title": "duis elit esse",
    "body": "Ipsum Lorem magna laborum elit. Pariatur consectetur ad qui sint. Occaecat eu culpa adipisicing consectetur nisi nulla.",
    "author": "Figueroa Weber",
    "category": "Insights and Data",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bfe7f4c0043928ea4": {
    "id": "5999df3bfe7f4c0043928ea4",
    "timestamp": 1467166872634,
    "title": "reprehenderit ipsum nisi",
    "body": "Excepteur nulla deserunt commodo incididunt velit labore excepteur do qui anim velit excepteur. Voluptate aute ipsum reprehenderit incididunt aliquip ullamco ea eiusmod ad. Adipisicing ex excepteur aliqua labore velit sunt exercitation nulla reprehenderit consectetur deserunt.",
    "author": "Denise Cobb",
    "category": "Human Resources",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b254b9d55a6cdb22c": {
    "id": "5999df3b254b9d55a6cdb22c",
    "timestamp": 1467166872634,
    "title": "proident ex do",
    "body": "Dolore esse exercitation dolor dolore sint irure do laborum. Labore incididunt in do velit laborum cillum dolore do reprehenderit cupidatat velit. Deserunt anim Lorem laborum ea irure eiusmod excepteur qui mollit sit do ullamco duis anim.",
    "author": "Riggs Mccormick",
    "category": "Human Resources",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b365180c71a41b8ff": {
    "id": "5999df3b365180c71a41b8ff",
    "timestamp": 1467166872634,
    "title": "id officia occaecat",
    "body": "Reprehenderit dolore dolor eiusmod ea excepteur sunt aute mollit irure commodo laborum laboris. Ut aute non eiusmod sint. Adipisicing amet et culpa ipsum consectetur officia sint mollit.",
    "author": "Hunter Garner",
    "category": "Human Resources",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bb5285b344238b250": {
    "id": "5999df3bb5285b344238b250",
    "timestamp": 1467166872634,
    "title": "enim nulla fugiat",
    "body": "Voluptate ea voluptate ad anim consectetur laborum nostrud dolor ex aute ullamco eiusmod proident. Enim velit ad eiusmod eiusmod consequat amet laborum aliquip. Velit consectetur id amet et enim adipisicing.",
    "author": "Obrien Hayes",
    "category": "Insights and Data",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b232a76630ec33231": {
    "id": "5999df3b232a76630ec33231",
    "timestamp": 1467166872634,
    "title": "deserunt irure eiusmod",
    "body": "Dolor amet in minim laboris fugiat. Quis nulla excepteur ullamco laboris non Lorem cillum tempor commodo reprehenderit mollit. Aliquip Lorem fugiat ad ex eu proident.",
    "author": "Marisa Terry",
    "category": "Safety, Health, and Wellness",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b987880c7a1f4a253": {
    "id": "5999df3b987880c7a1f4a253",
    "timestamp": 1467166872634,
    "title": "fugiat sint nostrud",
    "body": "Non magna fugiat tempor incididunt in deserunt fugiat dolor anim sunt aliqua proident. Velit dolor enim proident pariatur ullamco est nulla ut. Exercitation minim dolore nulla ea deserunt fugiat culpa tempor.",
    "author": "Rachelle Bailey",
    "category": "Insights and Data",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b6a4af6c36b0fa404": {
    "id": "5999df3b6a4af6c36b0fa404",
    "timestamp": 1467166872634,
    "title": "voluptate ad labore",
    "body": "Laborum laboris in aliquip veniam do fugiat ipsum quis culpa voluptate dolor duis voluptate. Adipisicing ex culpa id laborum labore ullamco magna duis pariatur voluptate in culpa commodo. Lorem voluptate irure ullamco dolor.",
    "author": "Leanna Atkins",
    "category": "Finance",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b37938cc68000d663": {
    "id": "5999df3b37938cc68000d663",
    "timestamp": 1467166872634,
    "title": "nostrud pariatur commodo",
    "body": "Commodo est nostrud mollit ex dolore anim sunt ea amet. Sit pariatur qui aute sunt Lorem ea consectetur tempor ipsum reprehenderit. Cillum minim esse adipisicing consequat ut ad reprehenderit in ad.",
    "author": "Dollie Ochoa",
    "category": "Finance",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b1a000f88401be309": {
    "id": "5999df3b1a000f88401be309",
    "timestamp": 1467166872634,
    "title": "enim ad enim",
    "body": "Velit officia eu adipisicing dolore dolore id laboris. Aute cillum voluptate laboris deserunt Lorem pariatur in ad. Aliquip id consequat commodo eu occaecat mollit enim ut labore eiusmod cillum nostrud.",
    "author": "Hyde Rose",
    "category": "Recruitment",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b8dca062339dae9fa": {
    "id": "5999df3b8dca062339dae9fa",
    "timestamp": 1467166872634,
    "title": "dolor laboris nulla",
    "body": "Do id pariatur laborum voluptate pariatur exercitation velit quis proident tempor aliquip non. Qui cupidatat velit labore adipisicing ad. Ad enim labore fugiat amet aliquip qui culpa incididunt.",
    "author": "Mccarthy Le",
    "category": "Human Resources",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bc37f41016e5e785a": {
    "id": "5999df3bc37f41016e5e785a",
    "timestamp": 1467166872634,
    "title": "qui commodo sunt",
    "body": "Dolore eiusmod sint fugiat et velit labore minim ullamco dolor aute. Tempor proident officia voluptate ipsum dolore irure voluptate laboris consequat sint commodo nulla cillum. Cillum adipisicing ut veniam aute exercitation sunt consequat consequat voluptate qui labore.",
    "author": "Justice Strong",
    "category": "Technology",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b0350c0f86df12bbb": {
    "id": "5999df3b0350c0f86df12bbb",
    "timestamp": 1467166872634,
    "title": "officia sit consectetur",
    "body": "Deserunt deserunt officia deserunt cupidatat duis laborum exercitation elit cupidatat deserunt et elit excepteur do. Laboris non et magna culpa proident elit consequat officia et do deserunt. Aute Lorem sit irure dolore aute minim laboris exercitation exercitation deserunt sit deserunt ut.",
    "author": "Rhea Villarreal",
    "category": "Insights and Data",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b521c87c881c7db71": {
    "id": "5999df3b521c87c881c7db71",
    "timestamp": 1467166872634,
    "title": "eiusmod consequat non",
    "body": "Do officia duis qui deserunt non ad sint fugiat nostrud qui proident. Nulla id culpa magna duis excepteur elit mollit est aute consequat quis quis. Sunt pariatur tempor cupidatat et in reprehenderit.",
    "author": "Tonia Shelton",
    "category": "Human Resources",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b6dc06f195afad195": {
    "id": "5999df3b6dc06f195afad195",
    "timestamp": 1467166872634,
    "title": "commodo pariatur irure",
    "body": "Consectetur exercitation qui non adipisicing aliquip cupidatat duis ad adipisicing nostrud tempor velit mollit. Reprehenderit elit eu dolor ipsum esse occaecat exercitation in. Fugiat consequat excepteur commodo non nisi nisi.",
    "author": "Jones Wiley",
    "category": "Finance",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b8e548763a4786152": {
    "id": "5999df3b8e548763a4786152",
    "timestamp": 1467166872634,
    "title": "magna tempor nulla",
    "body": "Labore ut amet dolore cillum labore occaecat. Est culpa duis enim cillum magna culpa officia reprehenderit ut. Aute ipsum enim in ea ex aute incididunt ea.",
    "author": "Jeanne Guy",
    "category": "Technology",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b800ffcdfb40adc61": {
    "id": "5999df3b800ffcdfb40adc61",
    "timestamp": 1467166872634,
    "title": "enim anim ipsum",
    "body": "Dolore ullamco minim occaecat cillum laboris non ut irure esse. Labore reprehenderit sit mollit dolore velit consectetur laboris officia est aliquip veniam. Nisi proident do cupidatat in incididunt officia nisi deserunt in cillum qui elit.",
    "author": "Washington Espinoza",
    "category": "Safety, Health, and Wellness",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b7b0f96011c46f2b3": {
    "id": "5999df3b7b0f96011c46f2b3",
    "timestamp": 1467166872634,
    "title": "enim aliqua laborum",
    "body": "Sunt amet do excepteur sunt minim amet et. Ex dolor dolore consequat est sunt. Duis et esse sint nulla nulla ea incididunt nulla in.",
    "author": "Hallie Richards",
    "category": "Finance",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b60b667dc6db2e3e8": {
    "id": "5999df3b60b667dc6db2e3e8",
    "timestamp": 1467166872634,
    "title": "reprehenderit occaecat labore",
    "body": "Officia adipisicing aliquip tempor dolor irure nulla. Qui eu et et excepteur ipsum Lorem excepteur laborum non proident nostrud. Non adipisicing proident qui elit culpa amet ipsum cillum aliqua aliquip enim.",
    "author": "Townsend Jacobs",
    "category": "Human Resources",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3baa0c9fb43e9fc7b9": {
    "id": "5999df3baa0c9fb43e9fc7b9",
    "timestamp": 1467166872634,
    "title": "veniam ex non",
    "body": "Sit incididunt aliqua esse voluptate in pariatur esse eu. Ipsum occaecat aliquip nostrud esse consectetur. Proident tempor commodo voluptate culpa in do in qui aute qui.",
    "author": "Graham Howell",
    "category": "Finance",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b3ef9898795c678bc": {
    "id": "5999df3b3ef9898795c678bc",
    "timestamp": 1467166872634,
    "title": "fugiat consectetur esse",
    "body": "Enim ullamco tempor veniam officia aute nisi ex esse ex voluptate nisi commodo consectetur. Sint duis ad sunt cillum minim. Exercitation ipsum est sint laboris cillum.",
    "author": "Cervantes Quinn",
    "category": "Recruitment",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b0c7a3496ac4798c2": {
    "id": "5999df3b0c7a3496ac4798c2",
    "timestamp": 1467166872634,
    "title": "minim pariatur amet",
    "body": "Quis dolore amet et labore fugiat. Ex cillum cillum duis aliquip minim Lorem commodo labore pariatur. In ea proident consequat aliquip irure deserunt mollit ut deserunt esse voluptate ullamco consequat.",
    "author": "Mcgee Stewart",
    "category": "Technology",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bdf8acbf15a08efe0": {
    "id": "5999df3bdf8acbf15a08efe0",
    "timestamp": 1467166872634,
    "title": "ad aliquip Lorem",
    "body": "Aute eu eu excepteur esse eiusmod. Ut officia et esse amet velit reprehenderit tempor quis. Nostrud nulla ut culpa laborum.",
    "author": "Mathis Patel",
    "category": "Recruitment",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b765a50c298f60fd3": {
    "id": "5999df3b765a50c298f60fd3",
    "timestamp": 1467166872634,
    "title": "veniam magna in",
    "body": "Adipisicing qui voluptate ipsum quis dolore Lorem esse nulla aliqua sunt laboris amet sit incididunt. Aliqua non est consequat proident fugiat est dolor Lorem ut elit. Sint aliqua in Lorem veniam magna incididunt pariatur ea.",
    "author": "Arnold Shields",
    "category": "Human Resources",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bb742ee837231fc32": {
    "id": "5999df3bb742ee837231fc32",
    "timestamp": 1467166872634,
    "title": "consequat sint dolore",
    "body": "Nisi quis sunt ut in cillum proident ad consequat excepteur cupidatat proident nulla officia ad. Excepteur aliquip consequat ea id. Ullamco ad id nisi magna minim non qui ut labore esse irure ipsum.",
    "author": "Kennedy Dickerson",
    "category": "Technology",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bcdd511b6748ffe09": {
    "id": "5999df3bcdd511b6748ffe09",
    "timestamp": 1467166872634,
    "title": "ipsum incididunt consectetur",
    "body": "Nisi cillum est reprehenderit nulla qui. Reprehenderit quis aute incididunt id sint ullamco consectetur non. Commodo fugiat nisi ut eiusmod aute eu magna.",
    "author": "Davis Riddle",
    "category": "Insights and Data",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b7e643bc2ec8a2cd9": {
    "id": "5999df3b7e643bc2ec8a2cd9",
    "timestamp": 1467166872634,
    "title": "deserunt id ex",
    "body": "In incididunt amet cupidatat nostrud sit veniam voluptate sint. Proident anim non ex irure nostrud proident cupidatat aliquip aliqua dolor occaecat qui. Quis consequat aliquip enim elit est amet ut commodo Lorem adipisicing sint ad adipisicing.",
    "author": "Dale Franks",
    "category": "Safety, Health, and Wellness",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3be99b8be7892c27d1": {
    "id": "5999df3be99b8be7892c27d1",
    "timestamp": 1467166872634,
    "title": "consectetur id reprehenderit",
    "body": "Magna consequat do dolore sint id irure proident commodo anim fugiat laboris. Enim sunt adipisicing id ut velit enim amet consequat et cillum voluptate. Officia laborum duis Lorem cupidatat nulla ex.",
    "author": "Marks Harper",
    "category": "Finance",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bae8fecbf4839eccc": {
    "id": "5999df3bae8fecbf4839eccc",
    "timestamp": 1467166872634,
    "title": "deserunt amet culpa",
    "body": "Esse nostrud Lorem veniam laborum id qui. Culpa ad mollit culpa sit aliquip aliqua. Tempor eiusmod do eu est sint minim velit laboris fugiat irure veniam veniam ea nisi.",
    "author": "Cathleen Clayton",
    "category": "Finance",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b2ed0110840df7134": {
    "id": "5999df3b2ed0110840df7134",
    "timestamp": 1467166872634,
    "title": "incididunt proident sint",
    "body": "Nisi fugiat esse commodo amet anim adipisicing officia irure ex nulla do ad nisi ea. Occaecat consectetur ad laboris anim proident consequat mollit dolore est non ex aliquip irure sint. Adipisicing aliqua irure sint et minim cupidatat ullamco magna.",
    "author": "Nikki Fuller",
    "category": "Finance",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3ba0e14d2fd603e1cd": {
    "id": "5999df3ba0e14d2fd603e1cd",
    "timestamp": 1467166872634,
    "title": "esse qui enim",
    "body": "Consectetur laboris fugiat ad duis dolor ullamco cillum id nisi tempor exercitation enim velit. Irure pariatur culpa elit reprehenderit eu laborum cupidatat pariatur dolor ad ullamco fugiat ea. Veniam culpa deserunt eiusmod veniam.",
    "author": "Pearl Douglas",
    "category": "Technology",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3ba306e3fd81bb413e": {
    "id": "5999df3ba306e3fd81bb413e",
    "timestamp": 1467166872634,
    "title": "pariatur nulla quis",
    "body": "Officia ullamco id do sint labore veniam enim deserunt duis consequat elit mollit. Aute do esse non ipsum velit sint incididunt nisi incididunt eu. Ex eu amet irure adipisicing aliqua sint et cillum magna nostrud cillum amet consequat.",
    "author": "Kaufman Witt",
    "category": "Insights and Data",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b6f8a7ee5bfc397c6": {
    "id": "5999df3b6f8a7ee5bfc397c6",
    "timestamp": 1467166872634,
    "title": "sit aliqua reprehenderit",
    "body": "Esse ut duis culpa deserunt nulla dolor dolore pariatur eu. Ipsum eiusmod exercitation pariatur irure consectetur ullamco aliquip cupidatat est. Incididunt sint enim duis amet.",
    "author": "Carissa Townsend",
    "category": "Finance",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b8e449162b601da2f": {
    "id": "5999df3b8e449162b601da2f",
    "timestamp": 1467166872634,
    "title": "sunt esse eiusmod",
    "body": "Exercitation aliquip culpa laborum aliqua cillum est consectetur enim. Id exercitation veniam voluptate consectetur anim id laborum fugiat. Amet veniam magna labore consectetur.",
    "author": "Reid Langley",
    "category": "Technology",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3baf2cf2ef43375cfa": {
    "id": "5999df3baf2cf2ef43375cfa",
    "timestamp": 1467166872634,
    "title": "culpa eiusmod dolore",
    "body": "Est minim velit minim ex ea do et incididunt deserunt occaecat pariatur. Aliqua culpa aliquip pariatur est cillum dolor dolor ut nisi minim enim et. Fugiat sit tempor non et.",
    "author": "Cantu Kennedy",
    "category": "Human Resources",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bc5dcc463e85e3230": {
    "id": "5999df3bc5dcc463e85e3230",
    "timestamp": 1467166872634,
    "title": "irure fugiat Lorem",
    "body": "Aliquip cillum nisi nostrud veniam elit commodo in eu sunt do commodo non quis. Dolor cillum ea Lorem eiusmod nisi excepteur nostrud deserunt anim ullamco irure. Enim reprehenderit aliquip veniam anim adipisicing.",
    "author": "Conrad Palmer",
    "category": "Recruitment",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b9b0dacacb7071799": {
    "id": "5999df3b9b0dacacb7071799",
    "timestamp": 1467166872634,
    "title": "Lorem reprehenderit enim",
    "body": "Ea esse voluptate officia do cupidatat id commodo qui tempor elit veniam. Laborum occaecat ipsum nostrud deserunt commodo Lorem commodo fugiat consequat cillum aliqua. Tempor quis culpa labore aliquip ullamco velit.",
    "author": "Meghan Mccarthy",
    "category": "Recruitment",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b18e1f5e6236ee478": {
    "id": "5999df3b18e1f5e6236ee478",
    "timestamp": 1467166872634,
    "title": "ut ea cupidatat",
    "body": "Reprehenderit reprehenderit sit sint commodo nulla voluptate ex elit eiusmod eiusmod qui consequat. Consectetur labore amet dolore ea ullamco reprehenderit non aliquip. Officia laborum et proident laborum occaecat minim enim culpa ullamco.",
    "author": "Selma Coffey",
    "category": "Technology",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bd42a2c39a7655013": {
    "id": "5999df3bd42a2c39a7655013",
    "timestamp": 1467166872634,
    "title": "in anim quis",
    "body": "Nisi nostrud do aliqua ad eiusmod elit consectetur ut exercitation officia exercitation aute laborum. Pariatur excepteur esse est magna sint et irure enim deserunt elit. Tempor amet dolor sit Lorem deserunt ex Lorem sunt aliqua.",
    "author": "Collins Hensley",
    "category": "Finance",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bfb82dbff0358b223": {
    "id": "5999df3bfb82dbff0358b223",
    "timestamp": 1467166872634,
    "title": "ea fugiat ipsum",
    "body": "In aliquip ex ad nulla fugiat anim. Enim amet irure nulla ipsum nisi anim minim deserunt veniam excepteur. Ea labore exercitation velit et nostrud incididunt aliquip et id exercitation exercitation cillum tempor non.",
    "author": "Morin Foley",
    "category": "Insights and Data",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bcb805c06236e23aa": {
    "id": "5999df3bcb805c06236e23aa",
    "timestamp": 1467166872634,
    "title": "nostrud irure enim",
    "body": "Anim ipsum eu anim labore velit occaecat veniam irure reprehenderit. Elit minim magna deserunt pariatur consequat. Culpa reprehenderit aliqua Lorem excepteur voluptate.",
    "author": "Jasmine Parker",
    "category": "Insights and Data",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3b6cd6896b48689af2": {
    "id": "5999df3b6cd6896b48689af2",
    "timestamp": 1467166872634,
    "title": "aliquip esse eu",
    "body": "Non id labore deserunt laboris minim consectetur adipisicing dolore nostrud. Est ad adipisicing tempor eiusmod eu. Non amet aliquip nostrud exercitation cillum officia ad.",
    "author": "Joyner Pace",
    "category": "Finance",
    "voteScore": 6,
    "deleted": false
  },
  "5999df3bb035cf225405c378": {
    "id": "5999df3bb035cf225405c378",
    "timestamp": 1467166872634,
    "title": "mollit excepteur nisi",
    "body": "Dolor nulla proident proident esse voluptate ullamco aute quis fugiat Lorem est. Aute Lorem ex consequat id anim proident nisi est fugiat ut ex. Enim amet enim sit qui dolor in ipsum ea exercitation excepteur adipisicing minim incididunt.",
    "author": "Elliott Dejesus",
    "category": "Human Resources",
    "voteScore": 6,
    "deleted": false
  }
}

function getData (token) {
  let data = db[token]
  if (data == null) {
    data = db[token] = clone(defaultData)
  }
  return data
}

function getByCategory (token, category) {
  return new Promise((res) => {
    let posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => posts[key].category === category && !posts[key].deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}

function get (token, id) {
  return new Promise((res) => {
    const posts = getData(token)
    res(
      posts[id].deleted
        ? {}
        : posts[id]
    )
  })
}

function getAll (token) {
  return new Promise((res) => {
    const posts = getData(token)
    let keys = Object.keys(posts)
    let filtered_keys = keys.filter(key => !posts.deleted)
    res(filtered_keys.map(key => posts[key]))
  })
}

function add (token, post) {
  return new Promise((res) => {
    let posts = getData(token)

    posts[post.id] = {
      id: post.id,
      timestamp: post.timestamp,
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
      voteScore: 1,
      deleted: false
    }

    res(posts[post.id])
  })
}

function vote (token, id, option) {
  return new Promise((res) => {
    let posts = getData(token)
    post = posts[id]
    switch(option) {
        case "upVote":
            post.voteScore = post.voteScore + 1
            break
        case "downVote":
            post.voteScore = post.voteScore - 1
            break
        default:
            console.log(`posts.vote received incorrect parameter: ${option}`)
    }
    res(post)
  })
}

function disable (token, id) {
    return new Promise((res) => {
      let posts = getData(token)
      posts[id].deleted = true
      res(posts[id])
    })
}

function edit (token, id, post) {
    return new Promise((res) => {
        let posts = getData(token)
        for (prop in post) {
            posts[id][prop] = post[prop]
        }
        res(posts[id])
    })
}

module.exports = {
  get,
  getAll,
  getByCategory,
  add,
  vote,
  disable,
  edit,
  getAll
}
