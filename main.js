const a = document.querySelector(
  '.a');

let timer = null;
let bahasa = 'Indonesia';
let alertMessage = 'indo';
const dropdown = document.querySelector(
  '.dropdown');
const dropLink = document.querySelector(
  '.dropLink')
const subtitle = document.querySelector(
  '.subtitle');
const linkEmail = document
  .getElementById('linkEmail');
let emailSubject = 'Tautan situs web';
let emailBody =
  'Silakan kunjungi situs web berikut ini: ';

const linkWa = document.getElementById(
  'linkWa');
const copyLink = document
  .getElementById('copyLink');
const linkMore = document
  .getElementById('linkMore');
let shareTitle = 'Bagikan tautan';
let shareText =
  'Silakan kunjungi tautan berikut:';

const headerH2 = document
  .getElementById(
    'headerH2');
const headerP = document
  .getElementById('headerP');
const language = document
  .getElementById('language');
const background = document
  .getElementById('background');
const link = document
  .getElementById('link');

const ubahBahasa = (pilihan) => {
  bahasa = pilihan;
  
  const ind = document.querySelector(
    '.ind');
  const ing = document.querySelector(
    '.ing');
  const chi = document.querySelector(
    '.chi');
  const jap = document.querySelector(
    '.jap');
  const ara = document.querySelector(
    '.ara');
  const rus = document.querySelector(
    '.rus');
  const kor = document.querySelector(
    '.kor');
  const firstName = document
    .querySelector('.first-name');
  const lastName = document
    .querySelector('.last-name');
  const marquee = document
    .getElementById('marquee');
  const tt = document
    .querySelector('.tt');
  const ig = document
    .querySelector('.ig');
  const yt = document
    .querySelector('.yt');
  const slWa = document.querySelector('.slWa');
  const gh = document
    .querySelector('.gh');
  const sw = document
    .querySelector('.sw');
  const em = document
    .querySelector('.em');
  const thanks = document
    .getElementById('thanks');
  const thanksGod = document
    .getElementById('thanksGod');
  const thanksFamily = document
    .getElementById('thanksFamily');
  const thanksSupportFriends =
    document.getElementById(
      'thanksSupportFriends');
  const footer = document
    .getElementById('footer');
  const fotA = document.querySelector(
    '.fotA');
  if (bahasa === 'ing') {
    alertMessage = 'ing';
    timer = setTimeout(() => {
      firstName.innerHTML = 'My';
      lastName.innerHTML =
        'Portfolio';
      headerH2.innerHTML =
        'About me';
      headerP.innerHTML =
        'Welcome to my portfolio! My name is Sahril Hidayat, Often called Aril. I am a teenager who is interested and wants to become a programmer';
      subtitle.innerHTML =
        'more options';
      subtitle.style.paddingLeft =
        '8px';
      subtitle.style.width =
        '100px';
      subtitle.style.marginLeft =
        '-100px';
      dropdown.style.width =
        '100%';
      dropdown.style.marginLeft =
        '-60px';
      dropLink.style.width =
        '100%';
      dropLink.style.marginLeft =
        '-60px';
      language.innerHTML =
        'Language';
      background.innerHTML =
        'Background';
      copyLink.innerHTML = 'Copy';
      linkWa.innerHTML =
        'WhatsApp';
      linkEmail.innerHTML =
        'Email';
      emailSubject =
        'Website link';
      emailBody =
        'Please visit the following website: ';
      linkMore.innerHTML =
        'Others';
      linkMore.innerHTML =
        'Lainnya';
      shareTitle = 'Share link';
      shareText =
        'Please visit the following link:';
      link.innerHTML = 'Share';
      ind.innerHTML =
        'Indonesian';
      ing.innerHTML = 'English';
      chi.innerHTML = 'Chinese';
      jap.innerHTML = 'Japanese';
      ara.innerHTML = 'Arabic';
      rus.innerHTML = 'Russian';
      kor.innerHTML = 'Korean';
      marquee.innerHTML =
        'If there are bugs, problems or there are things you want to ask and convey, please select send a message via one of the social media below';
      marquee.direction = 'left';
      tt.innerHTML = 'TikTok';
      ig.innerHTML = 'Instagram';
      yt.innerHTML = 'YouTube';
      slWa.innerHTML = 'Channel Wa';
      sw.innerHTML = 'Support';
      gh.innerHTML = 'Github';
      em.innerHTML = 'Email';
      textArray = [
        'Aril_Hidayat'
      ];
      thanks.innerHTML =
        'Thank you';
      thanksGod.innerHTML = 'God';
      thanksFamily.innerHTML =
        'Family';
      thanksSupportFriends
        .innerHTML =
        'Support Friends';
      footer.innerHTML =
        'All copyrights are protected by law';
      fotA.innerHTML =
        '@Aril_Hidayat';
      timer = setTimeout(() => {
        a.style.transition =
          'all .7s ease-in-out';
        a.style.display =
          'none';
      }, 300);
      document.body.style
        .overflow =
        'auto';
    }, 250)
  };
  if (bahasa === 'ind') {
    alertMessage = 'indo';
    timer = setTimeout(() => {
      firstName.innerHTML =
        'Portfolio';
      lastName.innerHTML = 'Saya';
      document.getElementById(
          'headerH2').innerHTML =
        'Tentang saya';
      document.getElementById(
          'headerP')
        .innerHTML =
        'Selamat datang di portofolio saya! Nama saya Sahril Hidayat, Sering dipanggil Aril. Saya seorang remaja yang berminat dan ingin menjadi seseorang programmer';
      subtitle.innerHTML =
        'lebih banyak pilihan';
      subtitle.style.paddingLeft =
        '9px';
      subtitle.style.width =
        '150px';
      subtitle.style.marginLeft =
        '-150px';
      dropdown.style.width =
        '100%';
      dropdown.style.marginLeft =
        '-60px';
      dropLink.style.width =
        '100%';
      dropLink.style.marginLeft =
        '-60px';
      language.innerHTML =
        'Bahasa';
      background.innerHTML =
        'Latar';
      link.innerHTML = 'Bagikan';
      copyLink.innerHTML =
        'Salin';
      linkWa.innerHTML =
        'WhatsApp';
      linkEmail.innerHTML =
        'Email';
      emailSubject =
        'Tautan situs web';
      emailBody =
        'Silakan kunjungi situs web berikut ini: ';
      linkMore.innerHTML =
        'Lainnya';
      shareTitle =
        'Bagikan tautan';
      shareText =
        'Silakan kunjungi tautan berikut:';
      ind.innerHTML = 'Indonesia';
      ing.innerHTML = 'Inggris';
      chi.innerHTML = 'China';
      jap.innerHTML = 'Jepang';
      ara.innerHTML = 'Arab';
      rus.innerHTML = 'Rusia';
      kor.innerHTML = 'Korea';
      marquee.innerHTML =
        'Jika terdapat bug, masalah atau ada hal yang ingin ditanyakan juga disampaikan silahkan pilih kirim pesan lewat salah satu dari media sosial dibawah ini';
      marquee.direction = 'left';
      tt.innerHTML = 'TikTok';
      ig.innerHTML = 'Instagram';
      yt.innerHTML = 'YouTube';
      slWa.innerHTML = 'Saluran Wa';
      sw.innerHTML = 'Dukung';
      gh.innerHTML = 'Github';
      em.innerHTML = 'Email';
      textArray = [
        'Aril_Hidayat'
      ];
      thanks.innerHTML =
        'Terima kasih';
      thanksGod.innerHTML =
        'Allah SWT';
      thanksFamily.innerHTML =
        'Keluarga';
      thanksSupportFriends
        .innerHTML =
        'Teman penyemangat';
      footer.innerHTML =
        'Semua hak cipta dilindungi undang-undang';
      fotA.innerHTML =
        '@Aril_Hidayat';
      timer = setTimeout(() => {
        a.style.transition =
          'all .7s ease-in-out';
        a.style.display =
          'none';
      }, 300);
      document.body.style
        .overflow =
        'auto';
    }, 250)
  };
  if (bahasa === 'chi') {
    alertMessage = 'chi';
    timer = setTimeout(() => {
      firstName.innerHTML = '文件夹';
      lastName.innerHTML = '我';
      document.getElementById(
          'headerH2').innerHTML =
        '关于我';
      document.getElementById(
          'headerP')
        .innerHTML =
        '欢迎来到我的投资组合！我的名字是 沙里尔·希达亚特，通常被称为 艾丽尔。我是一名对编程感兴趣并想成为程序员的青少年';
      subtitle.innerHTML = '更多选择';
      subtitle.style.paddingLeft =
        '9px';
      subtitle.style.width =
        '80px';
      subtitle.style.marginLeft =
        '-80px';
      dropdown.style.width =
        '102%';
      dropdown.style.marginLeft =
        '-62px';
      dropLink.style.width =
        '102%';
      dropLink.style.marginLeft =
        '-62px';
      language.innerHTML = '语言';
      background.innerHTML = '背景';
      link.innerHTML = '分享';
      copyLink.innerHTML = '复制';
      linkWa.innerHTML =
        'WhatsApp';
      linkEmail.innerHTML =
        '电子邮件';
      emailSubject = '网站链接';
      emailBody = '请访问以下网站: ';
      linkMore.innerHTML = '其他';
      shareTitle = '分享链接';
      shareText = `请访问以下链接:
`;
      ind.innerHTML = '印度尼西亚';
      ing.innerHTML = '英语';
      chi.innerHTML = '中国';
      jap.innerHTML = '日本';
      ara.innerHTML = '阿拉伯';
      rus.innerHTML = '俄罗斯';
      kor.innerHTML = '韩国';
      marquee.innerHTML =
        '如果存在错误、问题或者有想要询问和传达的事情，请选择通过以下社交媒体之一发送消息';
      marquee.direction = 'left';
      tt.innerHTML = '抖音';
      ig.innerHTML = 'Instagram';
      yt.innerHTML = 'YouTube';
      slWa.innerHTML = 'WA频道';
      gh.innerHTML = 'Github';
      sw.innerHTML = '支持';
      em.innerHTML = '电子邮件';
      textArray = ['艾丽尔 希达亚特']
      thanks.innerHTML = '谢谢';
      thanksGod.innerHTML = '上帝';
      thanksFamily.innerHTML =
        '家庭';
      thanksSupportFriends
        .innerHTML =
        '鼓励朋友';
      footer.innerHTML =
        '所有版权均受法律保护';
      fotA.innerHTML =
        '@艾丽尔 希达亚特';
      timer = setTimeout(() => {
        a.style.transition =
          'all .7s ease-in-out';
        a.style.display =
          'none';
      }, 300);
      document.body.style
        .overflow =
        'auto';
    }, 250)
  };
  if (bahasa === 'jap') {
    alertMessage = 'jap';
    timer = setTimeout(() => {
      firstName.innerHTML = '私';
      lastName.innerHTML =
        'ポートフォリオ';
      document.getElementById(
          'headerH2').innerHTML =
        '私について';
      document.getElementById(
          'headerP')
        .innerHTML =
        '私のポートフォリオへようこそ！私の名前はサリル・ヒダヤット、よくアリルと呼ばれます。私はプログラマーに興味があり、なりたいと思っている10代の若者です';
      subtitle.innerHTML =
        'より多くの選択肢';
      subtitle.style.paddingLeft =
        '8px';
      subtitle.style.width =
        '145px';
      subtitle.style.marginLeft =
        '-145px';
      dropdown.style.width =
        '118%';
      dropdown.style.marginLeft =
        '-78px';
      dropLink.style.width =
        '118%';
      dropLink.style.marginLeft =
        '-78px';
      language.innerHTML = '言語';
      background.innerHTML =
        'ラタール';
      link.innerHTML = '共有';
      copyLink.innerHTML = 'コピー';
      linkWa.innerHTML = 'ワッツアップ';
      linkEmail.innerHTML =
        '電子メール';
      emailSubject = 'ウェブサイトリンク';
      emailBody =
        '以下のウェブサイトをご覧ください: ';
      linkMore.innerHTML = '他の';
      shareTitle = 'リンクを共有';
      shareText =
        '以下のリンクをご覧ください:';
      ind.innerHTML = 'インドネシア';
      ing.innerHTML = '英語';
      chi.innerHTML = '中国';
      jap.innerHTML = '日本';
      ara.innerHTML = 'アラブ';
      rus.innerHTML = 'ロシア';
      kor.innerHTML = '韓国';
      marquee.innerHTML =
        'バグや問題があった場合、または質問や伝えたいことがある場合は、以下のいずれかのソーシャルメディアからメッセージを送信してください';
      marquee.direction = 'left';
      tt.innerHTML = 'ティックトック';
      ig.innerHTML = 'インスタグラム';
      yt.innerHTML = 'ユーチューブ';
      slWa.innerHTML = 'WhatsAppチャンネル';
      sw.innerHTML = 'サポート';
      em.innerHTML = '電子メール';
      gh.innerHTML = 'ギットハブ';
      textArray = ['アリル・ヒダヤト'];
      thanks.innerHTML = 'ありがとう';
      thanksGod.innerHTML = '神';
      thanksFamily.innerHTML =
        '家族';
      thanksSupportFriends
        .innerHTML =
        '励ましの友人';
      footer.innerHTML =
        'すべての著作権は法律で保護されています';
      fotA.innerHTML =
        '@アリル・ヒダヤト';
      timer = setTimeout(() => {
        a.style.transition =
          'all .7s ease-in-out';
        a.style.display =
          'none';
      }, 300);
      document.body.style
        .overflow =
        'auto';
    }, 250)
  };
  if (bahasa === 'ara') {
    alertMessage = 'ara';
    timer = setTimeout(() => {
      firstName.innerHTML =
        'مَلَفّ';
      lastName.innerHTML = 'أنا';
      document.getElementById(
          'headerH2').innerHTML =
        'عَنِّي ';
      document.getElementById(
          'headerP')
        .innerHTML =
        'مرحباً بكم في محفظتي! اسمي هو ساهريل هداية، وأُطلق عليه غالبًا اسم أريل. أنا مراهق مهتم وأريد أن أصبح مبرمجًا';
      subtitle.innerHTML =
        'مزيد من الخيارات';
      subtitle.style.paddingLeft =
        '8px';
      subtitle.style.width =
        '120px';
      subtitle.style.marginLeft =
        '-120px';
      dropdown.style.width =
        '100%';
      dropdown.style.marginLeft =
        '-60px';
      dropLink.style.width =
        '100%';
      dropLink.style.marginLeft =
        '-60px';
      language.innerHTML = 'لغة';
      background.innerHTML =
        'خلفية';
      link.innerHTML = 'يشارك';
      copyLink.innerHTML = 'ينسخ';
      linkWa.innerHTML = 'واتساب';
      linkEmail.innerHTML =
        'بريد إلكتروني';
      emailSubject =
        'رابط الموقع';
      emailBody =
        'يرجى زيارة الموقع التالي: ';
      linkMore.innerHTML = 'آخر';
      shareTitle =
        'مشاركة الرابط';
      shareText = `يرجى زيارة الرابط التالي:
`;
      ind.innerHTML = 'أندونيسيا';
      ing.innerHTML = 'إنجليزي';
      chi.innerHTML = 'الصين';
      jap.innerHTML = 'اليابان';
      ara.innerHTML = 'عربي';
      rus.innerHTML = 'روسيا';
      kor.innerHTML = 'كوريا';
      marquee.innerHTML =
        'إذا كانت هناك أخطاء أو مشاكل أو أشياء تريد طرحها ونقلها، فيرجى تحديد إرسال رسالة عبر إحدى وسائل التواصل الاجتماعي أدناه';
      marquee.direction = 'right';
      tt.innerHTML = 'تيك توك';
      ig.innerHTML = 'انستغرام';
      yt.innerHTML = 'يوتيوب';
      slWa.innerHTML = 'قناة واتساب';
      sw.innerHTML = 'يدعم';
      gh.innerHTML = 'جيثب';
      em.innerHTML =
        'بريد إلكتروني';
      textArray = ['أريل هداية'];
      thanks.innerHTML =
        'شكرًا لك';
      thanksGod.innerHTML =
        'الله';
      thanksFamily.innerHTML =
        'عائلة';
      thanksSupportFriends
        .innerHTML =
        'صديق التشجيع';
      footer.innerHTML =
        'جميع حقوق الطبع والنشر محمية بموجب القانون';
      fotA.innerHTML =
        '@أريل هداية';
      timer = setTimeout(() => {
        a.style.transition =
          'all .7s ease-in-out';
        a.style.display =
          'none';
      }, 300);
      document.body.style
        .overflow =
        'auto';
    }, 250)
  };
  if (bahasa === 'rus') {
    alertMessage = 'rus';
    timer = setTimeout(() => {
      firstName.innerHTML =
        'портфель';
      lastName.innerHTML = 'я';
      document.getElementById(
          'headerH2').innerHTML =
        'обо мне';
      document.getElementById(
          'headerP')
        .innerHTML =
        'Добро пожаловать в мое портфолио! Меня зовут Сахрил Хидаят, часто меня называют Арил. Я подросток, который хочет стать программистом и хочет этим заняться.';
      subtitle.innerHTML =
        'больше выбора';
      subtitle.style.paddingLeft =
        '9px';
      subtitle.style.width =
        '150px';
      subtitle.style.marginLeft =
        '-150px';
      dropdown.style.width =
        '108%';
      dropdown.style.marginLeft =
        '-68px';
      dropLink.style.width =
        '170%';
      dropLink.style.marginLeft =
        '-130px';
      language.innerHTML = 'Язык';
      background.innerHTML =
        'фон';
      link.innerHTML = 'делиться';
      copyLink.innerHTML =
        'копия';
      linkWa.innerHTML =
        'WhatsApp';
      linkEmail.innerHTML =
        'электронная почта';
      emailSubject =
        'ссылка на сайт';
      emailBody = `пожалуйста, посетите следующий веб-сайт:
`;
      linkMore.innerHTML =
        'другие';
      shareTitle =
        'поделиться ссылкой';
      shareText = `пожалуйста, перейдите по следующей ссылке:
`;
      ind.innerHTML = 'Индонезия';
      ing.innerHTML =
        'Английский';
      chi.innerHTML = 'Китай';
      jap.innerHTML = 'Япония';
      ara.innerHTML = 'арабский';
      rus.innerHTML = 'Россия';
      kor.innerHTML = 'Корея';
      marquee.innerHTML =
        'Если у вас возникли ошибки, проблемы или вы хотите что-то спросить и сообщить, пожалуйста, отправьте сообщение через одну из социальных сетей ниже';
      marquee.direction = 'left';
      tt.innerHTML = 'тикток';
      ig.innerHTML = 'инстаграм';
      yt.innerHTML = 'ютуб';
      slWa.innerHTML = 'канал WhatsApp';
      sw.innerHTML =
        'поддерживать';
      gh.innerHTML = 'гитхаб';
      em.innerHTML =
        'электронная почта';
      textArray = ['Арил Хидаят'];
      thanks.innerHTML =
        'Спасибо';
      thanksGod.innerHTML = 'бог';
      thanksFamily.innerHTML =
        'семья';
      thanksSupportFriends
        .innerHTML =
        'Поддерживающий друг';
      footer.innerHTML =
        'Все авторские права защищены законом.';
      fotA.innerHTML =
        '@Арил Хидаят';
      timer = setTimeout(() => {
        a.style.transition =
          'all .7s ease-in-out';
        a.style.display =
          'none';
      }, 300);
      document.body.style
        .overflow =
        'auto';
    }, 250)
  };
  if (bahasa === 'kor') {
    alertMessage = 'kor';
    timer = setTimeout(() => {
      firstName.innerHTML = '나';
      lastName.innerHTML =
        '포트폴리오';
      document.getElementById(
          'headerH2').innerHTML =
        '나에 대해서';
      document.getElementById(
          'headerP')
        .innerHTML =
        '내 포트폴리오에 오신 것을 환영합니다! 제 이름은 사릴 히다야트입니다. 종종 아릴이라고 불립니다. 저는 프로그래머가 되고 싶어하는 청소년입니다.';
      subtitle.innerHTML =
        '더 많은 선택';
      subtitle.style.paddingLeft =
        '9px';
      subtitle.style.width =
        '100px';
      subtitle.style.marginLeft =
        '-100px';
      dropdown.style.width =
        '145%';
      dropdown.style.marginLeft =
        '-95px';
      dropLink.style.width =
        '100%';
      dropLink.style.marginLeft =
        '-60px';
      language.innerHTML = '언어';
      background.innerHTML = '배경';
      link.innerHTML = '공유하다';
      copyLink.innerHTML = '복사';
      linkWa.innerHTML = '왓츠앱';
      linkEmail.innerHTML = '이메일';
      emailSubject = '웹사이트 링크';
      emailBody =
        '다음 웹사이트를 방문해주세요: ';
      linkMore.innerHTML = '다른';
      shareTitle = '링크 공유';
      shareText = `다음 링크를 방문하세요:
`;
      ind.innerHTML = '인도네시아 공화국';
      ing.innerHTML = '영어';
      chi.innerHTML = '중국';
      jap.innerHTML = '일본';
      ara.innerHTML = '아라비아 사람';
      rus.innerHTML = '러시아 제국';
      kor.innerHTML = '한국';
      marquee.innerHTML =
        '버그나 문제가 있거나 문의사항이나 전달하고 싶은 사항이 있으시면 아래 소셜 미디어 중 하나를 통해 메시지를 보내주세요';
      marquee.direction = 'left';
      tt.innerHTML = '틱톡';
      ig.innerHTML = '인스타그램';
      yt.innerHTML = '유튜브';
      slWa.innerHTML = '왓츠앱 채널';
      sw.innerHTML = '지원하다';
      gh.innerHTML = '깃허브';
      em.innerHTML = '이메일';
      textArray = ['아릴_히다야트'];
      thanks.innerHTML = '감사합니다';
      thanksGod.innerHTML = '신';
      thanksFamily.innerHTML =
        '가족';
      thanksSupportFriends
        .innerHTML =
        '격려하는 친구';
      footer.innerHTML =
        '모든 저작권은 법률에 의해 보호됩니다';
      fotA.innerHTML = '@아릴_히다야트';
      timer = setTimeout(() => {
        a.style.transition =
          'all .7s ease-in-out';
        a.style.display =
          'none';
      }, 300);
      document.body.style
        .overflow =
        'auto';
    }, 250)
  }
};
ubahBahasa(bahasa);

/* auto typing text */

let textArray = ["Aril_Hidayat"];
const typingSpeed = 150;
const delayTweenTexts = 2000;
let textIndex = 0;
let charIndex = 0;

const typedTextElement = document
  .getElementById('typed-text');

document.addEventListener(
  'DOMContentLoaded', () => {
    const button = document
      .querySelector('.button');
    button.addEventListener('click',
      () => {
        a.style.display = a.style
          .display === 'block' ?
          'none' : 'block';
        button.style.cursor =
          'pointer';
        document.body.style
          .overflow = 'hidden';
      });
    document.addEventListener('click',
      (e) => {
        if (!button.contains(e
            .target) && !a.contains(
            e.target)) {
          a.style.display = 'none';
          document.body.style
            .overflow = 'visible';
        };
      });
    document.addEventListener(
      'mouseout', (e) => {
        if (!button.contains(e
            .target) && !a.contains(
            e.target)) {
          a.style.display = 'none';
          document.body.style
            .overflow = 'visible';
        };
      });
  });

function typeText() {
  if (charIndex < textArray[textIndex]
    .length) {
    typedTextElement.textContent +=
      textArray[textIndex].charAt(
        charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(deleteText,
      delayTweenTexts);
  };
};

function deleteText() {
  if (charIndex > 0) {
    typedTextElement.textContent =
      textArray[textIndex].substring(0,
        charIndex - 1);
    charIndex--;
    setTimeout(deleteText, typingSpeed /
      2);
  } else {
    textIndex = (textIndex + 1) %
      textArray.length;
    setTimeout(typeText, typingSpeed);
  };
};
typeText();

const scrollPercentText = document
  .getElementById('scrollPercentText')
const white = document.querySelector(
  '.white');
const red = document.querySelector(
  '.red');
const green = document.querySelector(
  '.green');
const yellow = document.querySelector(
  '.yellow');
const blue = document.querySelector(
  '.blue');
const firstName = document
  .querySelector('.first-name');
const lastName = document.querySelector(
  '.last-name');
const navChild = document.querySelector(
  '.nav-child');
const header = document.querySelector(
  '#nav-name');
const container = document
  .querySelector('.container');
const thankSection = document
  .querySelector('.thanks-section');
const footer = document.querySelector(
  '.footer');
const img = document.getElementById(
  'img');
const tt = document.querySelector(
  '.tt');
const ig = document.querySelector(
  '.ig');
const yt = document.querySelector(
  '.yt');
const slWa = document.querySelector('.slWa');
const sw = document.querySelector(
  '.sw');
const gh = document.querySelector(
  '.gh');
const em = document.querySelector(
  '.em');
const fotA = document.querySelector(
  '.fotA');
const button = document.querySelector(
  '.button');
const boxMenu = document.querySelector(
  '.boxMenu');
const dropdownC = document
  .querySelector(
    '.dropdown .colors');
const salinLink = document
  .querySelector('.salinLink');

const body = document.body;

function changeColor(element, color) {
  if (element.classList.contains(
      'active')) {
    body.style.background =
      '#0E0E0F';
    timer = setTimeout(() => {
      a.style.transition =
        'all .7s ease-in-out';
      a.style.display = 'none';
    }, 300);
    document.body.style
      .overflow = 'visible';
    element.classList.remove('active');
  } else {
    body.style.background = color;
    document.querySelectorAll('span')
      .forEach(function(item) {
        timer = setTimeout(() => {
          a.style.transition =
            'all .7s ease-in-out';
          a.style.display =
            'none';
        }, 300);
        document.body.style
          .overflow = 'visible';
        item.classList.remove(
          'active');
      });
    element.classList.add('active');
  };
};

const spans = document.querySelectorAll(
  '.x');
let y = false;

spans.forEach((span) => {
  span.addEventListener('click',
    () => {
      if (span.classList.contains(
          'aktip')) {
        span.classList.remove(
          'aktip');
        y = false;
      } else {
        spans.forEach((s) => s
          .classList.remove(
            'aktip'));
        span.classList.add(
          'aktip');
        y = true;
      };
      
      if (white.classList
        .contains(
          'aktip')) {
        scrollPercentText.style
          .fill = '#1D1B1B';
        scrollPercentText.style
          .transition =
          'all .7s ease-in-out';
        boxMenu.style.color =
          '#FFFFFF';
        boxMenu.style.transition =
          'all .7s ease-in-out';
        boxMenu.style
          .borderBottom =
          '1px solid #1C1C1C';
        button.style.color =
          '#070707';
        button.style.transition =
          'all .7s ease-in-out';
        salinLink.style.color =
          '#FFFFFF';
        header.style.background =
          '#515154E6';
        header.style.transition =
          'all .7s ease-in-out';
        firstName.style
          .textShadow =
          '2px 3px 2px #2E2D2D';
        firstName.style
          .transition =
          'all .7s ease-in-out';
        headerH2.style.color =
          '#1D1B1B';
        headerH2.style
          .transition =
          'all .7s ease-in-out';
        headerP.style.color =
          '#1D1B1B';
        headerP.style.transition =
          'all .7s ease-in-out';
        typedTextElement.style
          .color =
          '#7B0002';
        typedTextElement.style
          .transition =
          'all .7s ease-in-out';
        typedTextElement.style
          .textShadow =
          '2px 2px 2px #090A05';
        typedTextElement.style
          .backgroundColor =
          '#00000021';
        thankSection.style
          .background = '#C0C0C0';
        thankSection.style
          .transition =
          'all .7s ease-in-out';
        body.style.background =
          '#F5F5F5'
        body.style.color =
          '#1D1B1B'
        body.style.transition =
          'all .7s ease-in-out';
        img.style.border =
          '3px solid #464545';
        img.style.transition =
          'all .7s ease-in-out';
        tt.style.boxShadow =
          '4px 5px 3px #090A05';
        tt.style.backgroundColor =
          '#C1535A';
        tt.style.color =
          '#090A05';
        tt.style.transition =
          'all .7s ease-in-out';
        tt.addEventListener(
          'mouseover', () => {
            tt.style.boxShadow =
              '-4px -5px 3px #090A05';
            tt.style
              .backgroundColor =
              '#C1535A';
          });
        tt.addEventListener(
          'mouseout', () => {
            tt.style.boxShadow =
              '4px 5px 3px #090A05';
            tt.style
              .backgroundColor =
              '#C1535A';
          });
        ig.style.boxShadow =
          '4px 5px 3px #090A05';
        ig.style.backgroundColor =
          '#C1535A';
        ig.style.color =
          '#090A05';
        ig.style.transition =
          'all .7s ease-in-out';
        ig.addEventListener(
          'mouseover', () => {
            ig.style.boxShadow =
              '-4px -5px 3px #090A05';
            ig.style
              .backgroundColor =
              '#C1535A';
          });
        ig.addEventListener(
          'mouseout', () => {
            ig.style.boxShadow =
              '4px 5px 3px #090A05';
            ig.style
              .backgroundColor =
              '#C1535A';
          });
        ig.style.boxShadow =
          '4px 5px 3px #090A05';
        ig.style.backgroundColor =
          '#C1535A';
        ig.style.color =
          '#090A05';
        yt.addEventListener(
          'mouseover', () => {
            yt.style.boxShadow =
              '-4px -5px 3px #090A05';
            yt.style
              .backgroundColor =
              '#C1535A';
          });
        yt.addEventListener(
          'mouseout', () => {
            yt.style.boxShadow =
              '4px 5px 3px #090A05';
            yt.style
              .backgroundColor =
              '#C1535A';
          });
        yt.style.boxShadow =
          '4px 5px 3px #090A05';
        yt.style.backgroundColor =
          '#C1535A';
        yt.style.color =
          '#090A05';
        yt.style.transition =
          'all .7s ease-in-out';
        yt.addEventListener(
  'mouseover', () => {
    slWa.style.boxShadow =
      '-4px -5px 3px #090A05';
    slWa.style
      .backgroundColor =
      '#C1535A';
  });
slWa.addEventListener(
  'mouseout', () => {
    slWa.style.boxShadow =
      '4px 5px 3px #090A05';
    slWa.style
      .backgroundColor =
      '#C1535A';
  });
slWa.style.boxShadow =
  '4px 5px 3px #090A05';
slWa.style.backgroundColor =
  '#C1535A';
slWa.style.color =
  '#090A05';
slWa.style.transition =
  'all .7s ease-in-out';
        sw.addEventListener(
          'mouseover', () => {
            sw.style.boxShadow =
              '-4px -5px 3px #090A05';
            sw.style
              .backgroundColor =
              '#C1535A';
          });
        sw.addEventListener(
          'mouseout', () => {
            sw.style.boxShadow =
              '4px 5px 3px #090A05';
            sw.style
              .backgroundColor =
              '#C1535A';
          });
        sw.style.boxShadow =
          '4px 5px 3px #090A05';
        sw.style.backgroundColor =
          '#C1535A';
        sw.style.color =
          '#090A05';
        sw.style.transition =
          'all .7s ease-in-out';
        gh.addEventListener(
          'mouseover', () => {
            gh.style.boxShadow =
              '-4px -5px 3px #090A05';
            gh.style
              .backgroundColor =
              '#C1535A';
          });
        gh.addEventListener(
          'mouseout', () => {
            gh.style.boxShadow =
              '4px 5px 3px #090A05';
            gh.style
              .backgroundColor =
              '#C1535A';
          });
        gh.style.boxShadow =
          '4px 5px 3px #090A05';
        gh.style.backgroundColor =
          '#C1535A';
        gh.style.color =
          '#090A05';
        gh.style.transition =
          'all .7s ease-in-out';
        em.addEventListener(
          'mouseover', () => {
            em.style.boxShadow =
              '-4px -5px 3px #090A05';
            em.style
              .backgroundColor =
              '#C1535A';
          });
        em.addEventListener(
          'mouseout', () => {
            em.style.boxShadow =
              '4px 5px 3px #090A05';
            em.style
              .backgroundColor =
              '#C1535A';
          });
        em.style.boxShadow =
          '4px 5px 3px #090A05';
        em.style.backgroundColor =
          '#C1535A';
        em.style.color =
          '#090A05';
        em.style.transition =
          'all .7s ease-in-out';
        footer.style.background =
          '#F5F5F5';
        footer.style.transition =
          'all .7s ease-in-out';
        fotA.style.borderBottom =
          '1px solid #090A05';
      };
      if (red.classList
        .contains(
          'aktip')) {
        scrollPercentText.style
          .fill = '#FFFFFF';
        scrollPercentText.style
          .transition =
          'all .7s ease-in-out';
        boxMenu.style.color =
          '#FFFFFF';
        boxMenu.style.transition =
          'all .7s ease-in-out';
        button.style.color =
          '#F0F0F0';
        button.style.transition =
          'all .7s ease-in-out';
        salinLink.style.color =
          '#FFFFFF';
        header.style.background =
          '#000000E6';
        header.style.transition =
          'all .7s ease-in-out';
        firstName.style
          .textShadow =
          '2px 3px 2px #2E2D2D';
        firstName.style
          .transition =
          'all .7s ease-in-out';
        headerH2.style.color =
          '#fff';
        headerH2.style
          .transition =
          'all .7s ease-in-out';
        headerP.style.color =
          '#fff';
        headerP.style.transition =
          'all .7s ease-in-out';
        typedTextElement.style
          .color =
          '#EFE5E5';
        typedTextElement.style
          .textShadow =
          '2px 2px 2px #090A05';
        typedTextElement.style
          .backgroundColor =
          '#00000021';
        typedTextElement.style
          .transition =
          'all .7s ease-in-out';
        thankSection.style
          .background = '#AF2B2B';
        thankSection.style
          .transition =
          'all .7s ease-in-out';
        body.style.color =
          '#EFE5E5';
        body.style.transition =
          'all .7s ease-in-out';
        img.style.border =
          '3px solid #EFE5E5';
        img.style.transition =
          'all .7s ease-in-out';
        tt.addEventListener(
          'mouseover', () => {
            tt.style.boxShadow =
              '-4px -5px 3px #EFE5E5';
            tt.style
              .backgroundColor =
              '#141414';
          });
        tt.addEventListener(
          'mouseout', () => {
            tt.style.boxShadow =
              '4px 5px 3px #EFE5E5';
            tt.style
              .backgroundColor =
              '#090A05';
          });
        tt.style.boxShadow =
          '4px 5px 3px #EFE5E5';
        tt.style.backgroundColor =
          '#090A05';
        tt.style.color =
          '#EFE5E5';
        tt.style.transition =
          'all .7s ease-in-out';
        ig.addEventListener(
          'mouseover', () => {
            ig.style.boxShadow =
              '-4px -5px 3px #EFE5E5';
            ig.style
              .backgroundColor =
              '#141414';
          });
        ig.addEventListener(
          'mouseout', () => {
            ig.style.boxShadow =
              '4px 5px 3px #EFE5E5';
            ig.style
              .backgroundColor =
              '#090A05';
          });
        ig.style.boxShadow =
          '4px 5px 3px #EFE5E5';
        ig.style.backgroundColor =
          '#090A05';
        ig.style.color =
          '#EFE5E5';
        ig.style.transition =
          'all .7s ease-in-out';
        yt.addEventListener(
          'mouseover', () => {
            yt.style.boxShadow =
              '-4px -5px 3px #EFE5E5';
            yt.style
              .backgroundColor =
              '#141414';
          });
        yt.addEventListener(
          'mouseout', () => {
            yt.style.boxShadow =
              '4px 5px 3px #EFE5E5';
            yt.style
              .backgroundColor =
              '#090A05';
          });
        yt.style.boxShadow =
          '4px 5px 3px #EFE5E5';
        yt.style.backgroundColor =
          '#090A05';
        yt.style.color =
          '#EFE5E5';
        yt.style.transition =
          'all .7s ease-in-out';
        slWa.addEventListener(
  'mouseover', () => {
    slWa.style.boxShadow =
      '-4px -5px 3px #EFE5E5';
    slWa.style
      .backgroundColor =
      '#141414';
  });
slWa.addEventListener(
  'mouseout', () => {
    slWa.style.boxShadow =
      '4px 5px 3px #EFE5E5';
    slWa.style
      .backgroundColor =
      '#090A05';
  });
slWa.style.boxShadow =
  '4px 5px 3px #EFE5E5';
slWa.style.backgroundColor =
  '#090A05';
slWa.style.color =
  '#EFE5E5';
slWa.style.transition =
  'all .7s ease-in-out';
        sw.addEventListener(
          'mouseover', () => {
            sw.style.boxShadow =
              '-4px -5px 3px #EFE5E5';
            sw.style
              .backgroundColor =
              '#141414';
          });
        sw.addEventListener(
          'mouseout', () => {
            sw.style.boxShadow =
              '4px 5px 3px #EFE5E5';
            sw.style
              .backgroundColor =
              '#090A05';
          });
        sw.style.boxShadow =
          '4px 5px 3px #EFE5E5';
        sw.style.backgroundColor =
          '#090A05';
        sw.style.color =
          '#EFE5E5';
        sw.style.transition =
          'all .7s ease-in-out';
        gh.addEventListener(
          'mouseover', () => {
            gh.style.boxShadow =
              '-4px -5px 3px #EFE5E5';
            gh.style
              .backgroundColor =
              '#141414';
          });
        gh.addEventListener(
          'mouseout', () => {
            gh.style.boxShadow =
              '4px 5px 3px #EFE5E5';
            gh.style
              .backgroundColor =
              '#090A05';
          });
        gh.style.boxShadow =
          '4px 5px 3px #EFE5E5';
        gh.style.backgroundColor =
          '#090A05';
        gh.style.color =
          '#EFE5E5';
        gh.style.transition =
          'all .7s ease-in-out';
        em.addEventListener(
          'mouseover', () => {
            em.style.boxShadow =
              '-4px -5px 3px #EFE5E5';
            em.style
              .backgroundColor =
              '#141414';
          });
        em.addEventListener(
          'mouseout', () => {
            em.style.boxShadow =
              '4px 5px 3px #EFE5E5';
            em.style
              .backgroundColor =
              '#090A05';
          });
        em.style.boxShadow =
          '4px 5px 3px #EFE5E5';
        em.style.backgroundColor =
          '#090A05';
        em.style.color =
          '#EFE5E5';
        em.style.transition =
          'all .7s ease-in-out';
        footer.style.background =
          '#CA3333';
        footer.style.transition =
          'all .7s ease-in-out';
        fotA.style.color =
          '#000'
        fotA.style.transition =
          'all .7s ease-in-out';
      };
      if (green.classList
        .contains(
          'aktip')) {
        scrollPercentText.style
          .fill = '#1D1B1B';
        scrollPercentText.style
          .transition =
          'all .7s ease-in-out';
        boxMenu.style.color =
          '#FFFFFF';
        boxMenu.style.transition =
          'all .7s ease-in-out';
        boxMenu.style
          .borderBottom =
          '1px solid #1C1C1C';
        button.style.color =
          '#070707';
        button.style.transition =
          'all .7s ease-in-out';
        salinLink.style.color =
          '#FFFFFF';
        header.style.background =
          '#515154E6';
        header.style.transition =
          'all .7s ease-in-out';
        firstName.style
          .textShadow =
          '2px 3px 2px #2E2D2D';
        firstName.style
          .transition =
          'all .7s ease-in-out';
        headerH2.style.color =
          '#1D1B1B';
        headerH2.style
          .transition =
          'all .7s ease-in-out';
        headerP.style.color =
          '#1D1B1B';
        headerP.style.transition =
          'all .7s ease-in-out';
        typedTextElement.style
          .color =
          '#EFE5E5';
        typedTextElement.style
          .textShadow =
          '2px 2px 2px #090A05';
        typedTextElement.style
          .transition =
          'all .7s ease-in-out';
        typedTextElement.style
          .backgroundColor =
          '#00000021';
        thankSection.style
          .background = '#46E051';
        thankSection.style
          .transition =
          'all .7s ease-in-out';
        body.style.color =
          '#1D1B1B';
        body.style.transition =
          'all .7s ease-in-out';
        img.style.border =
          '3px solid #090A05';
        img.style.transition =
          'all .7s ease-in-out';
        tt.style.boxShadow =
          '4px 5px 3px #090A05';
        tt.style.backgroundColor =
          '#FFFFFF';
        tt.style.color =
          '#090A05';
        tt.style.transition =
          'all .7s ease-in-out';
        tt.addEventListener(
          'mouseover', () => {
            tt.style.boxShadow =
              '-4px -5px 3px #090A05';
            tt.style
              .backgroundColor =
              '#FFFFFF';
          });
        tt.addEventListener(
          'mouseout', () => {
            tt.style.boxShadow =
              '4px 5px 3px #090A05';
            tt.style
              .backgroundColor =
              '#FFFFFF';
          });
        ig.style.boxShadow =
          '4px 5px 3px #090A05';
        ig.style.backgroundColor =
          '#FFFFFF';
        ig.style.color =
          '#090A05';
        ig.style.transition =
          'all .7s ease-in-out'
        ig.addEventListener(
          'mouseover', () => {
            ig.style.boxShadow =
              '-4px -5px 3px #090A05';
            ig.style
              .backgroundColor =
              '#FFFFFF';
          });
        ig.addEventListener(
          'mouseout', () => {
            ig.style.boxShadow =
              '4px 5px 3px #090A05';
            ig.style
              .backgroundColor =
              '#FFFFFF';
          });
        ig.style.boxShadow =
          '4px 5px 3px #090A05';
        ig.style.backgroundColor =
          '#FFFFFF';
        ig.style.color =
          '#090A05';
        yt.addEventListener(
          'mouseover', () => {
            yt.style.boxShadow =
              '-4px -5px 3px #090A05';
            yt.style
              .backgroundColor =
              '#FFFFFF';
          });
        yt.addEventListener(
          'mouseout', () => {
            yt.style.boxShadow =
              '4px 5px 3px #090A05';
            yt.style
              .backgroundColor =
              '#FFFFFF';
          });
        yt.style.boxShadow =
          '4px 5px 3px #090A05';
        yt.style.backgroundColor =
          '#FFFFFF';
        yt.style.color =
          '#090A05';
        yt.style.transition =
          'all .7s ease-in-out';
        slWa.addEventListener(
  'mouseover', () => {
    slWa.style.boxShadow =
      '-4px -5px 3px #090A05';
    slWa.style
      .backgroundColor =
      '#FFFFFF';
  });
slWa.addEventListener(
  'mouseout', () => {
    slWa.style.boxShadow =
      '4px 5px 3px #090A05';
    slWa.style
      .backgroundColor =
      '#FFFFFF';
  });
slWa.style.boxShadow =
  '4px 5px 3px #090A05';
slWa.style.backgroundColor =
  '#FFFFFF';
slWa.style.color =
  '#090A05';
slWa.style.transition =
  'all .7s ease-in-out';
        sw.addEventListener(
          'mouseover', () => {
            sw.style.boxShadow =
              '-4px -5px 3px #090A05';
            sw.style
              .backgroundColor =
              '#FFFFFF';
          });
        sw.addEventListener(
          'mouseout', () => {
            sw.style.boxShadow =
              '4px 5px 3px #090A05';
            sw.style
              .backgroundColor =
              '#FFFFFF';
          });
        sw.style.boxShadow =
          '4px 5px 3px #090A05';
        sw.style.backgroundColor =
          '#FFFFFF';
        sw.style.color =
          '#090A05';
        sw.style.transition =
          'all .7s ease-in-out';
        gh.addEventListener(
          'mouseover', () => {
            gh.style.boxShadow =
              '-4px -5px 3px #090A05';
            gh.style
              .backgroundColor =
              '#FFFFFF';
          });
        gh.addEventListener(
          'mouseout', () => {
            gh.style.boxShadow =
              '4px 5px 3px #090A05';
            gh.style
              .backgroundColor =
              '#FFFFFF';
          });
        gh.style.boxShadow =
          '4px 5px 3px #090A05';
        gh.style.backgroundColor =
          '#FFFFFF';
        gh.style.color =
          '#090A05';
        gh.style.transition =
          'all .7s ease-in-out';
        em.addEventListener(
          'mouseover', () => {
            em.style.boxShadow =
              '-4px -5px 3px #090A05';
            em.style
              .backgroundColor =
              '#FFFFFF';
          });
        em.addEventListener(
          'mouseout', () => {
            em.style.boxShadow =
              '4px 5px 3px #090A05';
            em.style
              .backgroundColor =
              '#FFFFFF';
          });
        em.style.boxShadow =
          '4px 5px 3px #090A05';
        em.style.backgroundColor =
          '#FFFFFF';
        em.style.color =
          '#090A05';
        em.style.transition =
          'all .7s ease-in-out';
        footer.style.background =
          '#29C234';
        footer.style.transition =
          'all .7s ease-in-out';
        fotA.style.color =
          '#FFFFFF';
        fotA.style.borderBottom =
          '1px solid #090A05';
        fotA.style.transition =
          'all .7s ease-in-out';
      };
      if (yellow.classList
        .contains(
          'aktip')) {
        scrollPercentText.style
          .fill = '#1D1B1B';
        scrollPercentText.style
          .transition =
          'all .7s ease-in-out';
        boxMenu.style.color =
          '#FFFFFF';
        boxMenu.style.transition =
          'all .7s ease-in-out';
        boxMenu.style
          .borderBottom =
          '1px solid #1C1C1C';
        button.style.color =
          '#FFFFFF';
        button.style.transition =
          'all .7s ease-in-out';
        salinLink.style.color =
          '#FFFFFF';
        header.style.background =
          '#515154E6';
        header.style.transition =
          'all .7s ease-in-out';
        firstName.style
          .textShadow =
          '2px 3px 2px #2E2D2D';
        firstName.style
          .transition =
          'all .7s ease-in-out';
        headerH2.style.color =
          '#1D1B1B';
        headerH2.style
          .transition =
          'all .7s ease-in-out';
        headerP.style.color =
          '#1D1B1B';
        headerP.style.transition =
          'all .7s ease-in-out';
        typedTextElement.style
          .color =
          '#090A05';
        typedTextElement.style
          .transition =
          'all .7s ease-in-out';
        typedTextElement.style
          .textShadow =
          '2px 2px 2px #FFFFFF';
        typedTextElement.style
          .backgroundColor =
          '#00000021';
        thankSection.style
          .background = '#D5CC2B';
        thankSection.style
          .transition =
          'all .7s ease-in-out';
        body.style.color =
          '#1D1B1B';
        body.style.transition =
          'all .7s ease-in-out';
        img.style.border =
          '3px solid #464545';
        img.style.transition =
          'all .7s ease-in-out'
        tt.style.boxShadow =
          '4px 5px 3px #090A05';
        tt.style.backgroundColor =
          '#616862';
        tt.style.color =
          '#FFFFFF';
        tt.style.transition =
          'all .7s ease-in-out';
        tt.addEventListener(
          'mouseover', () => {
            tt.style.boxShadow =
              '-4px -5px 3px #090A05';
            tt.style
              .backgroundColor =
              '#616862';
          });
        tt.addEventListener(
          'mouseout', () => {
            tt.style.boxShadow =
              '4px 5px 3px #090A05';
            tt.style
              .backgroundColor =
              '#616862';
          });
        ig.style.boxShadow =
          '4px 5px 3px #090A05';
        ig.style.backgroundColor =
          '#616862';
        ig.style.color =
          '#FFFFFF';
        ig.style.transition =
          'all .7s ease-in-out'
        ig.addEventListener(
          'mouseover', () => {
            ig.style.boxShadow =
              '-4px -5px 3px #090A05';
            ig.style
              .backgroundColor =
              '#616862';
          });
        ig.addEventListener(
          'mouseout', () => {
            ig.style.boxShadow =
              '4px 5px 3px #090A05';
            ig.style
              .backgroundColor =
              '#616862';
          });
        ig.style.boxShadow =
          '4px 5px 3px #090A05';
        ig.style.backgroundColor =
          '#616862';
        ig.style.color =
          '#FFFFFF';
        yt.addEventListener(
          'mouseover', () => {
            yt.style.boxShadow =
              '-4px -5px 3px #090A05';
            yt.style
              .backgroundColor =
              '#616862';
          });
        yt.addEventListener(
          'mouseout', () => {
            yt.style.boxShadow =
              '4px 5px 3px #090A05';
            yt.style
              .backgroundColor =
              '#616862';
          });
        yt.style.boxShadow =
          '4px 5px 3px #090A05';
        yt.style.backgroundColor =
          '#616862';
        yt.style.color =
          '#FFFFFF';
        yt.style.transition =
          'all .7s ease-in-out';
          slWa.addEventListener(
  'mouseover', () => {
    slWa.style.boxShadow =
      '-4px -5px 3px #090A05';
    slWa.style
      .backgroundColor =
      '#616862';
  });
slWa.addEventListener(
  'mouseout', () => {
    slWa.style.boxShadow =
      '4px 5px 3px #090A05';
    slWa.style
      .backgroundColor =
      '#616862';
  });
slWa.style.boxShadow =
  '4px 5px 3px #090A05';
slWa.style.backgroundColor =
  '#616862';
slWa.style.color =
  '#FFFFFF';
slWa.style.transition =
  'all .7s ease-in-out';
        sw.addEventListener(
          'mouseover', () => {
            sw.style.boxShadow =
              '-4px -5px 3px #090A05';
            sw.style
              .backgroundColor =
              '#616862';
          });
        sw.addEventListener(
          'mouseout', () => {
            sw.style.boxShadow =
              '4px 5px 3px #090A05';
            sw.style
              .backgroundColor =
              '#616862';
          });
        sw.style.boxShadow =
          '4px 5px 3px #090A05';
        sw.style.backgroundColor =
          '#616862';
        sw.style.color =
          '#FFFFFF';
        sw.style.transition =
          'all .7s ease-in-out';
        gh.addEventListener(
          'mouseover', () => {
            gh.style.boxShadow =
              '-4px -5px 3px #090A05';
            gh.style
              .backgroundColor =
              '#616862';
          });
        gh.addEventListener(
          'mouseout', () => {
            gh.style.boxShadow =
              '4px 5px 3px #090A05';
            gh.style
              .backgroundColor =
              '#616862';
          });
        gh.style.boxShadow =
          '4px 5px 3px #090A05';
        gh.style.backgroundColor =
          '#616862';
        gh.style.color =
          '#FFFFFF';
        gh.style.transition =
          'all .7s ease-in-out';
        em.addEventListener(
          'mouseover', () => {
            em.style.boxShadow =
              '-4px -5px 3px #090A05';
            em.style
              .backgroundColor =
              '#616862';
          });
        em.addEventListener(
          'mouseout', () => {
            em.style.boxShadow =
              '4px 5px 3px #090A05';
            em.style
              .backgroundColor =
              '#616862';
          });
        em.style.boxShadow =
          '4px 5px 3px #090A05';
        em.style.backgroundColor =
          '#616862';
        em.style.color =
          '#FFFFFF';
        em.style.transition =
          'all .7s ease-in-out';
        footer.style.background =
          '#ECE332';
        footer.style.transition =
          'all .7s ease-in-out';
        fotA.style.borderBottom =
          '1px solid #090A05';
        fotA.style.color =
          '#FFFFFF';
      };
      if (blue.classList
        .contains(
          'aktip')) {
        scrollPercentText.style
          .fill = '#1D1B1B';
        scrollPercentText.style
          .transition =
          'all .7s ease-in-out';
        boxMenu.style.color =
          '#FFFFFF';
        boxMenu.style.transition =
          'all .7s ease-in-out';
        boxMenu.style
          .borderBottom =
          '1px solid #1C1C1C';
        button.style.color =
          '#090A05';
        button.style.transition =
          'all .7s ease-in-out';
        salinLink.style.color =
          '#FFFFFF';
        header.style.background =
          '#515154E6';
        header.style.transition =
          'all .7s ease-in-out';
        firstName.style
          .textShadow =
          '2px 3px 2px #2E2D2D';
        firstName.style
          .transition =
          'all .7s ease-in-out';
        headerH2.style.color =
          '#1D1B1B';
        headerH2.style
          .transition =
          'all .7s ease-in-out';
        headerP.style.color =
          '#1D1B1B';
        headerP.style.transition =
          'all .7s ease-in-out';
        typedTextElement.style
          .color =
          '#FFFFFF';
        typedTextElement.style
          .transition =
          'all .7s ease-in-out';
        typedTextElement.style
          .textShadow =
          '2px 2px 2px #090A05';
        typedTextElement.style
          .backgroundColor =
          '#00000021';
        thankSection.style
          .background = '#2EC3CD';
        thankSection.style
          .transition =
          'all .7s ease-in-out';
        body.style.color =
          '#1D1B1B';
        body.style.transition =
          'all .7s ease-in-out';
        img.style.border =
          '3px solid #464545';
        img.style.transition =
          'all .7s ease-in-out';
        tt.style.boxShadow =
          '4px 5px 3px #090A05';
        tt.style.backgroundColor =
          '#616862';
        tt.style.color =
          '#FFFFFF';
        tt.style.transition =
          'all .7s ease-in-out';
        tt.addEventListener(
          'mouseover', () => {
            tt.style.boxShadow =
              '-4px -5px 3px #090A05';
            tt.style
              .backgroundColor =
              '#616862';
          });
        tt.addEventListener(
          'mouseout', () => {
            tt.style.boxShadow =
              '4px 5px 3px #090A05';
            tt.style
              .backgroundColor =
              '#616862';
          });
        ig.style.boxShadow =
          '4px 5px 3px #090A05';
        ig.style.backgroundColor =
          '#616862';
        ig.style.color =
          '#FFFFFF';
        ig.style.transition =
          'all .7s ease-in-out';
        ig.addEventListener(
          'mouseover', () => {
            ig.style.boxShadow =
              '-4px -5px 3px #090A05';
            ig.style
              .backgroundColor =
              '#616862';
          });
        ig.addEventListener(
          'mouseout', () => {
            ig.style.boxShadow =
              '4px 5px 3px #090A05';
            ig.style
              .backgroundColor =
              '#616862';
          });
        ig.style.boxShadow =
          '4px 5px 3px #090A05';
        ig.style.backgroundColor =
          '#616862';
        ig.style.color =
          '#FFFFFF';
        yt.addEventListener(
          'mouseover', () => {
            yt.style.boxShadow =
              '-4px -5px 3px #090A05';
            yt.style
              .backgroundColor =
              '#616862';
          });
        yt.addEventListener(
          'mouseout', () => {
            yt.style.boxShadow =
              '4px 5px 3px #090A05';
            yt.style
              .backgroundColor =
              '#616862';
          });
        yt.style.boxShadow =
          '4px 5px 3px #090A05';
        yt.style.backgroundColor =
          '#616862';
        yt.style.color =
          '#FFFFFF';
        yt.style.transition =
          'all .7s ease-in-out';
          slWa.addEventListener(
          'mouseout', () => {
            slWa.style.boxShadow =
              '4px 5px 3px #090A05';
            slWa.style
              .backgroundColor =
              '#616862';
          });
        slWa.style.boxShadow =
          '4px 5px 3px #090A05';
        slWa.style.backgroundColor =
          '#616862';
        slWa.style.color =
          '#FFFFFF';
        slWa.style.transition =
          'all .7s ease-in-out';
        sw.addEventListener(
          'mouseover', () => {
            sw.style.boxShadow =
              '-4px -5px 3px #090A05';
            sw.style
              .backgroundColor =
              '#616862';
          });
        sw.addEventListener(
          'mouseout', () => {
            sw.style.boxShadow =
              '4px 5px 3px #090A05';
            sw.style
              .backgroundColor =
              '#616862';
          });
        sw.style.boxShadow =
          '4px 5px 3px #090A05';
        sw.style.backgroundColor =
          '#616862';
        sw.style.color =
          '#FFFFFF';
        sw.style.transition =
          'all .7s ease-in-out';
        gh.addEventListener(
          'mouseover', () => {
            gh.style.boxShadow =
              '-4px -5px 3px #090A05';
            gh.style
              .backgroundColor =
              '#616862';
          });
        gh.addEventListener(
          'mouseout', () => {
            gh.style.boxShadow =
              '4px 5px 3px #090A05';
            gh.style
              .backgroundColor =
              '#616862';
          });
        gh.style.boxShadow =
          '4px 5px 3px #090A05';
        gh.style.backgroundColor =
          '#616862';
        gh.style.color =
          '#FFFFFF';
        gh.style.transition =
          'all .7s ease-in-out';
        em.addEventListener(
          'mouseover', () => {
            em.style.boxShadow =
              '-4px -5px 3px #090A05';
            em.style
              .backgroundColor =
              '#616862';
          });
        em.addEventListener(
          'mouseout', () => {
            em.style.boxShadow =
              '4px 5px 3px #090A05';
            em.style
              .backgroundColor =
              '#616862';
          });
        em.style.boxShadow =
          '4px 5px 3px #090A05';
        em.style.backgroundColor =
          '#616862';
        em.style.color =
          '#FFFFFF';
        em.style.transition =
          'all .7s ease-in-out';
        footer.style.background =
          '#39DDE7';
        footer.style.transition =
          'all .7s ease-in-out';
        fotA.style.borderBottom =
          '1px solid #090A05';
        fotA.style.color =
          '#EAEAEA';
      };
      
      if (y === false) {
        scrollPercentText.style
          .fill = '#FFFFFF';
        scrollPercentText.style
          .transition =
          'all .7s ease-in-out';
        button.style.color =
          '#F0F0F0';
        button.style.transition =
          'all .7s ease-in-out';
        salinLink.style.color =
          '#FFFFFF';
        header.style.background =
          '#000000E6';
        header.style.transition =
          'all .7s ease-in-out';
        firstName.style.color =
          '#C1535A';
        firstName.style
          .textShadow =
          '2px 2px 2px #F7FCF6';
        firstName.style
          .transition =
          'all .7s ease-in-out';
        lastName.style.color =
          '#FE6B6BDE';
        lastName.style
          .textShadow =
          '2px 2px 2px #D6231C';
        lastName.style
          .transition =
          'all .7s ease-in-out';
        headerH2.style.color =
          '#EFE5E5';
        headerP.style.color =
          '#EFE5E5';
        headerP.style.transition =
          'all .7s ease-in-out';
        body.style.color = '#fff';
        body.style.transition =
          'all .7s ease-in-out';
        typedTextElement.style
          .color =
          '#090A05';
        typedTextElement.style
          .textShadow =
          '2px 2px 2px #7B0002';
        typedTextElement.style
          .backgroundColor =
          '#FFFFFF21';
        typedTextElement.style
          .transition =
          'all .7s ease-in-out';
        img.style.border =
          '3px solid #DA1313';
        img.style.transition =
          'all .7s ease-in-out';
        typedTextElement.style
          .backgroundColor =
          '#FFFFFF21';
        typedTextElement.style
          .textShadow =
          '2px 2px 2px #7B0002';
        typedTextElement.style
          .color = '#090A05';
        tt.addEventListener(
          'mouseover', () => {
            tt.style.boxShadow =
              '-4px -5px 3px #C1535A';
            tt.style
              .backgroundColor =
              '#0E0E0E';
          });
        tt.addEventListener(
          'mouseout', () => {
            tt.style.boxShadow =
              '4px 5px 3px #C1535A';
            tt.style
              .backgroundColor =
              '#0E0E0E';
          });
        tt.style.boxShadow =
          '4px 5px 3px #C1535A';
        tt.style.backgroundColor =
          '#090A05';
        tt.style.color =
          '#EBEBEB';
        tt.style.transition =
          'all .7s ease-in-out';
        ig.addEventListener(
          'mouseover', () => {
            ig.style.boxShadow =
              '-4px -5px 3px #C1535A';
            ig.style
              .backgroundColor =
              '#0E0E0E';
          });
        ig.addEventListener(
          'mouseout', () => {
            ig.style.boxShadow =
              '4px 5px 3px #C1535A';
            ig.style
              .backgroundColor =
              '#0E0E0E';
          });
        ig.style.boxShadow =
          '4px 5px 3px #C1535A';
        ig.style.backgroundColor =
          '#090A05';
        ig.style.color =
          '#EBEBEB';
        ig.style.transition =
          'all .7s ease-in-out';
        yt.addEventListener(
          'mouseover', () => {
            yt.style.boxShadow =
              '-4px -5px 3px #C1535A';
            yt.style
              .backgroundColor =
              '#0E0E0E';
          });
        yt.addEventListener(
          'mouseout', () => {
            yt.style.boxShadow =
              '4px 5px 3px #C1535A';
            yt.style
              .backgroundColor =
              '#0E0E0E';
          });
        yt.style.boxShadow =
          '4px 5px 3px #C1535A';
        yt.style.backgroundColor =
          '#090A05';
        yt.style.color =
          '#EBEBEB';
        yt.style.transition =
          'all .7s ease-in-out';
          slWa.addEventListener(
          'mouseout', () => {
            slWa.style.boxShadow =
              '4px 5px 3px #C1535A';
            slWa.style
              .backgroundColor =
              '#0E0E0E';
          });
        slWa.style.boxShadow =
          '4px 5px 3px #C1535A';
        slWa.style.backgroundColor =
          '#090A05';
        slWa.style.color =
          '#EBEBEB';
        slWa.style.transition =
          'all .7s ease-in-out';
        sw.addEventListener(
          'mouseover', () => {
            sw.style.boxShadow =
              '-4px -5px 3px #C1535A';
            sw.style
              .backgroundColor =
              '#0E0E0E';
          });
        sw.addEventListener(
          'mouseout', () => {
            sw.style.boxShadow =
              '4px 5px 3px #C1535A';
            sw.style
              .backgroundColor =
              '#0E0E0E';
          });
        sw.style.boxShadow =
          '4px 5px 3px #C1535A';
        sw.style.backgroundColor =
          '#090A05';
        sw.style.color =
          '#EBEBEB';
        sw.style.transition =
          'all .7s ease-in-out';
        gh.addEventListener(
          'mouseover', () => {
            gh.style.boxShadow =
              '-4px -5px 3px #C1535A';
            gh.style
              .backgroundColor =
              '#0E0E0E';
          });
        gh.addEventListener(
          'mouseout', () => {
            gh.style.boxShadow =
              '4px 5px 3px #C1535A';
            gh.style
              .backgroundColor =
              '#0E0E0E';
          });
        gh.style.boxShadow =
          '4px 5px 3px #C1535A';
        gh.style.backgroundColor =
          '#090A05';
        gh.style.color =
          '#EBEBEB';
        gh.style.transition =
          'all .7s ease-in-out'
        em.addEventListener(
          'mouseover', () => {
            em.style.boxShadow =
              '-4px -5px 3px #C1535A';
            em.style
              .backgroundColor =
              '#0E0E0E';
          });
        em.addEventListener(
          'mouseout', () => {
            em.style.boxShadow =
              '4px 5px 3px #C1535A';
            em.style
              .backgroundColor =
              '#0E0E0E';
          });
        em.style.boxShadow =
          '4px 5px 3px #C1535A';
        em.style.backgroundColor =
          '#090A05';
        em.style.color =
          '#EBEBEB';
        em.style.transition =
          'all .7s ease-in-out';
        thankSection.style
          .background =
          'rgba(255, 255, 255, 0.1)';
        thankSection.style
          .transition =
          'all .7s ease-in-out';
        footer.style.background =
          '#000000CC';
        footer.style.transition =
          'all .7s ease-in-out';
        fotA.style.color =
          '#CC2D2D';
        fotA.style.borderBottom =
          '1px solid #BFAFAF';
        fotA.style.transition =
          'all .7s ease-in-out';
        
      }
    });
});

copyLink.addEventListener('click',
  () => {
    const currentUrlCl = window
      .location.href;
    navigator.clipboard.writeText(
        currentUrlCl)
      .then(() => {
        timer = setTimeout(() => {
          a.style.transition =
            'all .7s ease-in-out';
          a.style.display =
            'none';
        }, 300);
        document.body.style
          .overflow = 'visible';
        if (alertMessage ===
          'ing') {
          alert(
            'Link successfully activated!'
          );
        }
        if (alertMessage ===
          'indo') {
          alert(
            'Tautan berhasil disalin!'
          );
        }
        if (alertMessage ===
          'chi') {
          alert('链接复制成功！');
        }
        if (alertMessage ===
          'jap') {
          alert('リンクが正常にコピーされました。');
        }
        if (alertMessage ===
          'ara') {
          alert(
            'تم نسخ الرابط بنجاح!'
          );
        }
        if (alertMessage ===
          'rus') {
          alert(
            'Ссылка успешно скопирована!'
          );
        }
        if (alertMessage ===
          'kor') {
          alert(
            '링크가 성공적으로 복사되었습니다!');
        };
      })
      .catch((error) => {
        timer = setTimeout(() => {
          a.style.transition =
            'all .7s ease-in-out';
          a.style.display =
            'none';
        }, 300);
        document.body.style
          .overflow = 'visible';
        if (alertMessage ===
          'indo') {
          alert(
            'Gagal menyalin tautan'
          );
        }
        if (alertMessage ===
          'ing') {
          alert(
            'failed to copy link');
        }
        if (alertMessage ===
          'chi') {
          alert('复制链接失败');
        }
        if (alertMessage ===
          'jap') {
          alert('リンクをコピーできませんでした');
        }
        if (alertMessage ===
          'ara') {
          alert(
            'فشل في نسخ الرابط');
        }
        if (alertMessage ===
          'rus') {
          alert(
            'Не удалось скопировать ссылку'
          );
        }
        if (alertMessage ===
          'kor') {
          alert('링크 복사에 실패했습니다');
        };
      });
  });

linkWa.addEventListener('click', () => {
  const currentUrlLw = window
    .location.href;
  timer = setTimeout(() => {
    a.style.transition =
      'all .7s ease-in-out';
    a.style.display =
      'none';
  }, 300);
  document.body.style
    .overflow = 'visible';
  const waUrl =
    `https://wa.me/?text=${encodeURIComponent(currentUrlLw)}`;
  window.open(waUrl, '_blank');
});

linkEmail.addEventListener('click',
  () => {
    const currentUrlLe = window
      .location.href;
    timer = setTimeout(() => {
      a.style.transition =
        'all .7s ease-in-out';
      a.style.display =
        'none';
    }, 300);
    document.body.style
      .overflow = 'visible';
    const emailUrl =
      `mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(`${emailBody} ${currentUrlLe}`)}`;
    window.open(emailUrl, '_blank');
  });

const hoverMe = document.querySelector(
  '.hoverMe');
let timerHover = null;
hoverMe.addEventListener('mouseover',
  () => {
    timerHover = setTimeout(() => {
      subtitle.style.display =
        'block';
    }, 1000);
  });
hoverMe.addEventListener('mouseout',
  () => {
    clearTimeout(timerHover);
    subtitle.style.display = 'none';
  });
hoverMe.addEventListener('click',
  () => {
    clearTimeout(timerHover);
    subtitle.style.display = 'none';
  });

const currentUrlLm = window.location
  .href;
linkMore.addEventListener('click',
  () => {
    if (navigator.canShare) {
      navigator.share({
          title: shareTitle,
          text: shareText,
          url: currentUrlLm,
        })
        .then(() => {
          if (alertMessage ===
            'ing') {
            alert(
              'Link successfully activated!'
            );
          }
          if (alertMessage ===
            'indo') {
            alert(
              'Tautan berhasil disalin!'
            );
          }
          if (alertMessage ===
            'chi') {
            alert('链接复制成功！');
          }
          if (alertMessage ===
            'jap') {
            alert(
              'リンクが正常にコピーされました。');
          }
          if (alertMessage ===
            'ara') {
            alert(
              'تم نسخ الرابط بنجاح!'
            );
          }
          if (alertMessage ===
            'rus') {
            alert(
              'Ссылка успешно скопирована!'
            );
          }
          if (alertMessage ===
            'kor') {
            alert(
              '링크가 성공적으로 복사되었습니다!'
            );
          };
          timer = setTimeout(() => {
            a.style.transition =
              'all .7s ease-in-out';
            a.style.display =
              'none';
          }, 300);
          document.body.style
            .overflow = 'visible';
        })
        .catch((error) => {
          if (alertMessage ===
            'indo') {
            alert(
              'Gagal menyalin tautan'
            );
          }
          if (alertMessage ===
            'ing') {
            alert(
              'failed to copy link'
            );
          }
          if (alertMessage ===
            'chi') {
            alert('复制链接失败');
          }
          if (alertMessage ===
            'jap') {
            alert(
              'リンクをコピーできませんでした');
          }
          if (alertMessage ===
            'ara') {
            alert(
              'فشل في نسخ الرابط');
          }
          if (alertMessage ===
            'rus') {
            alert(
              'Не удалось скопировать ссылку'
            );
          }
          if (alertMessage ===
            'kor') {
            alert('링크 복사에 실패했습니다');
          };
          timer = setTimeout(() => {
            a.style.transition =
              'all .7s ease-in-out';
            a.style.display =
              'none';
          }, 300);
          document.body.style
            .overflow = 'visible';
        });
    } else {
      if (alertMessage ===
        'ing') {
        alert(
          'This feature is not supported by the browser'
        );
      }
      if (alertMessage ===
        'indo') {
        alert(
          'Fitur ini tidak didukung oleh browser'
        );
      }
      if (alertMessage ===
        'chi') {
        alert('浏览器不支持此功能');
      }
      if (alertMessage ===
        'jap') {
        alert(
          'この機能はブラウザではサポートされていません');
      }
      if (alertMessage ===
        'ara') {
        alert(
          'هذه الميزة غير مدعومة من قبل المتصفح'
        );
      }
      if (alertMessage ===
        'rus') {
        alert(
          'Эта функция не поддерживается браузером'
        );
      }
      if (alertMessage ===
        'kor') {
        alert(
          '이 기능은 브라우저에서 지원되지 않습니다');
      };
      timer = setTimeout(() => {
        a.style.transition =
          'all .7s ease-in-out';
        a.style.display = 'none';
      }, 300);
      document.body.style
        .overflow = 'visible';
    };
  });

const loaded = document.querySelector(
  '.custom-loader');
const content = document.querySelector(
  '.content');

setTimeout(loading, 3300);

function loading() {
  loaded.style.display = 'none';
  loaded.style.transition =
    'all .7s ease-in-out';
  loaded.classList.remove('loaded');
  content.style.visibility = 'visible';
  document.body.classList.remove(
    'loading');
};

let circleIndicator = document
  .getElementById(
    'circleIndicator');
let circle = circleIndicator
  .querySelector('circle')
let textElement = document
  .getElementById(
    'scrollPercentText');

let radius = circle.getAttribute(
  'r');
let circumference = 2 * Math.PI *
  radius;
circle.style.strokeDasharray =
  circumference;

function setProgress(percent) {
  let offset = circumference * (1 -
    percent / 100);
  circle.style.strokeDashoffset =
    offset;
  textElement.textContent = Math
    .round(percent) + '%';
};

window.addEventListener('scroll',
  () => {
    const scrollTop = window
      .pageYOffset || document
      .documentElement.scrollTop;
    const scrollHeight = document
      .documentElement
      .scrollHeight - document
      .documentElement
      .clientHeight;
    const scrollPercent = (
      scrollTop / scrollHeight
    ) * 100;
    setProgress(scrollPercent);
  });
setProgress(0);