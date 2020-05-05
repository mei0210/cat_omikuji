const fortune = document.getElementById('fortune');
const gold = document.getElementById('gold');
const love = document.getElementById('love');
const health = document.getElementById('health');
const work = document.getElementById('work');
const item = document.getElementById('item');
const word = document.getElementById('word');
const cat = document.getElementById('result_cat');

push.addEventListener('click', () => {
  const fortune_array = ["大吉", "中吉", "小吉", "末吉", "凶", "大凶"]
  const gold_array = ["投資で不労所得を得る", "ペット動画をYouTubeにあげて副収入を得る", "買った魚を猫に盗まれる", "空き巣が入る。野良猫が家に住みつく", "YouTuberを目指すも炎上。財布を落とす", "連帯保証人になる"]
  const love_array = ["結婚よし。猫を飼うとラブラブ", "告白よし。猫カフェデートが吉", "出会いがなくてマッチングアプリを始める", "遊園地デートで黒ずくめの組織に薬を飲まされる", "1年片思いして告白するもフられる", "ハニートラップにあう"]
  const health_array = ["マッチョ", "腹筋が割れる", "猫にひっかかれる。薄毛が進行するかも", "体臭がマタタビ", "間違えてキャットフード食べちゃう", "ハゲる。リーブ21を使うとよし"]
  const work_array = ["猫カフェビジネスで大儲け", "上司に褒められる", "退職するとニートになる", "人間関係で悩むも猫で癒される", "転職が吉", "クビになる。公園で猫とホームレス生活"]
  const item_array = ["マタタビ", "猫じゃらし", "キャットフード", "ファブリーズ", "白米", "ローランド", "かつら", "しゃもじ", "プリン", "お金", "真実はいつもひとつ", "高校生探偵", "パリピ", "ルンバ", "リーブ21", "マッチングアプリ"]
  const word_array = ["「今してみたいこと？片思いかな」",
    "「本気を出したら火星人でも口説ける」",
    "「オレ1時間あったら東アジアの女性くらい全員幸せにできるので」",
    "「俺が面接官やったら多分全員落ちるよ。あ、恋にね」",
    "「冴えない男と飲むリシャールよりも、俺と飲む雨水」",
    "「世の中には、2種類の男しかいない。俺か、俺以外か」",
    "「俺の隣がインスタ映え」",
    "「シャワー浴びる時はオーラから洗う」",
    "「俺に会うまで何が楽しくて生きてきたの？」",
    "「生きている事が社会奉仕」",
    "「世の中には3つのやり方がある。正しいやり方、間違ったやり方、そして、俺のやり方」",
    "「車を運転して右折するときはウィンカーじゃなくてオーラ出して曲がります」",
    "「俺来た道戻らないから、覚える必要ない。自分の来た道突き進むだけだから」",
    "「ノーが言えない人のイエスには価値はない。嫌いが言えない人のイエスには価値がない」",
    "「君の年収が俺の時給」",
    "「ローランドが下を向くのは出勤前に靴を履く時だけさ」",
    "「女が俺に落ちてるんじゃない。俺様が上がってるの」",
    "「俺の吐く息は空気清浄機よりも清浄」",
    "「いい女の条件って知ってるかい？それは、俺が「いい女」だと思うかどうか」",
    "「100の男より1のローランド」",
    "「結果で見せて結果で黙らせるのが、男のあるべき姿」",
    "「オーラの消し方ググっても出てこないんだけど誰か知ってる人いる？」",
    "「幸せは歩いてこない？確かにね。駆け寄ってくるよ」",
    "「どれだけ生きたかじゃなくてどう生きたか」",
    "「………まぁ俺、機種変するぐらいの感覚で歴史変えちゃう癖あるからねぇ」",
    "「逆に二兎から追われる」",
    "「歌舞伎町と横浜の違い、何か分かる？………俺がいるか、いないか」",
    "「年齢は、どれだけ生きたかは教えてくれても、どう生きたかは教えてくれないだろ？」",
    "「説明できる好きって、本当の好きじゃないから」"
  ]
  const cat_array = ["<img src ='img/cat-koban.png'>", "<img src ='img/cat-nezumi.png'>", "<img src ='img/cat-fish.png'>", "<img src ='img/cat-pc.png'>", "<img src ='img/cat-goron.png'>", "<img src ='img/cat-cover.png'>"]
  // ランダムな整数を生成
  const n = Math.floor(Math.random() * fortune_array.length);
  const o = Math.floor(Math.random() * item_array.length);
  const p = Math.floor(Math.random() * word_array.length);

  // 結果
  fortune.textContent = fortune_array[n];
  gold.textContent = gold_array[n];
  love.textContent = love_array[n];
  health.textContent = health_array[n];
  work.textContent = work_array[n];
  item.textContent = item_array[o];
  word.textContent = word_array[p];
  cat.innerHTML = cat_array[n];
});
