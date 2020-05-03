'use strict'

const fortune = document.getElementById('fortune');
const gold = document.getElementById('gold');
const love = document.getElementById('love');
const health = document.getElementById('health');
const work = document.getElementById('work');
const item = document.getElementById('item');
const word = document.getElementById('word');
const cat = document.getElementById('result_cat');

push.addEventListener('click', () => {
  const fortune_array = ["大吉", "中吉", "小吉", "末吉", "凶"]
  const gold_array = ["投資で不労所得を得る", "ペット動画をYouTubeにあげて副収入を得る", "買った魚を猫に盗まれる", "空き巣が入る。野良猫が家に住みつく", "YouTuberを目指すも炎上。財布を落とす"]
  const love_array = ["結婚よし。猫を飼うとラブラブ", "告白よし。猫カフェデートが吉", "出会いがなくてマッチングアプリを始める", "遊園地デートで黒ずくめの組織に薬を飲まされる", "1年片思いして告白するもフられる"]
  const health_array = ["マッチョ", "腹筋が割れる", "猫にひっかかれる。薄毛が進行するかも", "体臭がマタタビ", "間違えてキャットフード食べちゃう"]
  const work_array = ["猫カフェビジネスで大儲け", "上司に褒められる", "退職するとニートになる", "人間関係で悩むも猫で癒される", "クビになる。公園で猫とホームレス生活"]
  const item_array = ["マタタビ", "猫じゃらし", "キャットフード", "ファブリーズ", "白米"]
  const word_array = ["「今してみたいこと？片思いかな」　-Roland-",
                      "「本気を出したら火星人でも口説ける」　-Roland-",
                      "「オレ1時間あったら東アジアの女性くらい全員幸せにできるので」　-Roland-",
                      "「俺が面接官やったら多分全員落ちるよ。あ、恋にね」　-Roland-",
                      "「冴えない男と飲むリシャールよりも、俺と飲む雨水」　-Roland-"]
  const cat_array = ["<img src ='img/cat-koban.png'>", "<img src ='img/cat-nezumi.png'>", "<img src ='img/cat-fish.png'>", "<img src ='img/cat-pc.png'>", "<img src ='img/cat-cover.png'>"]
  // ランダムな整数を生成
  const n = Math.floor(Math.random() * fortune_array.length);

  fortune.textContent = fortune_array[n];
  gold.textContent = gold_array[n];
  love.textContent = love_array[n];
  health.textContent = health_array[n];
  work.textContent = work_array[n];
  item.textContent = item_array[n];
  word.textContent = word_array[n];
  cat.innerHTML = cat_array[n];
});

$('#push').click(function() {
  $('.omikuji_cat').addClass("omikuji_cat-active");
});

$('.omikuji_cat').on('transitionend', function() {
  $('.omikuji_btn').addClass("omikuji_btn-none");
  $('.omikuji_result').fadeIn();
});
