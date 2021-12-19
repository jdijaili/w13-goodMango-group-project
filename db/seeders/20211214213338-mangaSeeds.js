'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Mangas', [
      { title: "One Piece", imgSrc: "https://pbs.twimg.com/media/EXTqmFnXQAAudF0.jpg", author: "Eiichiro Oda", description: "One Piece is a Shonen action-adventure manga written and drawn by Eiichiro Oda, serialized in the Weekly Shonen Jump. Set in a fantasy world dominated by pirates, it mainly depicts the adventures of Monkey D. Luffy, a headstrong young captain with the power to stretch like rubber.", year: 1997, createdAt: new Date(), updatedAt: new Date() },
      { title: "Sailor Moon", imgSrc: "http://prodimage.images-bn.com/pimages/9781612620084_p0_v2_s1200x630.jpg", author: "Naoko Takeuchi", description: "The series follows the adventures of the titular protagonist whose civilian name is Usagi Tsukino, a middle school student who is given the power to become the Pretty Soldier. Joined by other Sailor Soldiers, she defends Earth against an assortment of evil villains.", year: 1991, createdAt: new Date(), updatedAt: new Date() },
      { title: "Nana", imgSrc: "https://i.pinimg.com/736x/70/5d/b4/705db4ad4e5af367b3e5926ad0365867.jpg", author: "Ai Yazawa", description: "Nana Komatsu is a small town girl who goes to Tokyo to follow her boyfriend and college friends, with the hope of having her dream life. ... The series chronicles their friendship and their lives as each chases her dreams.", year: 2000, createdAt: new Date(), updatedAt: new Date() },
      { title: "Fullmetal Alchemist: Brotherhood", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/819gbwpjLcL.jpg", author: "Hiroshi Onogi", description: "The series follows the story of two alchemist brothers, Edward and Alphonse Elric, who want to restore their bodies after a disastrous failed attempt to bring their mother back to life through alchemy.", year: 2001, createdAt: new Date(), updatedAt: new Date() },
      { title: "JoJo's Bizarre Adventure", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/818fOuBHTnL.jpg", author: "Hirohiko Araki", description: "The universe of JoJo's Bizarre Adventure is a reflection of the real world with the added existence of supernatural forces and beings.[2] In this setting, some people are capable of transforming their inner spiritual power into a Stand (スタンド, Sutando); another significant form of energy is Hamon (波紋, Ripple), a martial arts technique that allows its user to focus bodily energy into sunlight via controlled breathing. The narrative of JoJo's Bizarre Adventure is split into parts with independent stories and different characters. Each of the series' protagonists is a member of the Joestar family.", year: 1987, createdAt: new Date(), updatedAt: new Date() },
      { title: "Blue Period", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/914W2qCP5ML.jpg", author: "Tsubasa Yamaguchi", description: "Yatora Yaguchi is a fairly popular student who excels in school, but often deals with inner emptiness and frustrations. One day he became fascinated by a painting at his high school's art club so deeply that it inspired him to try his hand at painting. Later, he was inspired by a friend, Ryuji Yuka Ayukawa, and subsequently joined the art club, becoming more deeply involved, and attempts to apply for the Tokyo University of the Arts as his choice of college.", year: 2017, createdAt: new Date(), updatedAt: new Date() },
      { title: "Chainsaw Man", imgSrc: "https://i.pinimg.com/originals/61/b4/bb/61b4bb7d7c3526a64b8f75b4ac1c8018.jpg", author: "Tatsuki Fujimoto", description: "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.", year: 2018, createdAt: new Date(), updatedAt: new Date() },
      { title: "Toilet-Bound Hanako-kun", imgSrc: "https://pbs.twimg.com/media/EQp-pkwWkAIPo0C.jpg", author: "Aidalro", description: "Nene Yashiro, a first-year high-school student who loves the occult and wishes for a boyfriend, summons the Seventh and most famous Wonder, Hanako-san of the Toilet, a girl who allegedly haunts the bathroom and can grant wishes for the right price.", year: 2014, createdAt: new Date(), updatedAt: new Date() },
      { title: "Spy x Family", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/71vMGRog+iL.jpg", author: "Tatsuya Endo", description: "The story follows a spy who has to build a family to execute a mission, not realizing that the girl he adopts as a daughter and the woman he agrees to be in a fake marriage with are a mind reader and an assassin, respectively.", year: 2019, createdAt: new Date(), updatedAt: new Date() },
      { title: "Kaiju No. 8", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81IgJ1cGaWS.jpg", author: "Naoya Matsumoto", description: "Following a chain of unfortunate events and an interaction with the junior sweeper, Kafka encounters a parasite-type kaiju that forces its way in through his mouth—turning him into a humanoid monster. With his newfound powers, Kafka aims to give his lifelong dream a final try.", year: 2020, createdAt: new Date(), updatedAt: new Date() },
      { title: "Banana Fish", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81OO3Q8r3fL.jpg", author: "Akimi Yoshida", description: "The story captures the war between a mafia boss named Dino and a young gang leader searching for redemption. * Based on an action shoujo manga by Yoshida Akimi. ... Many years later in New York City, Ash Lynx, a young gang leader, is given a mysterious vial by a dying man whose last words are also 'Banana Fish'.", year: 1985, createdAt: new Date(), updatedAt: new Date() },
      { title: "Demon Slayer", imgSrc: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974700547/demon-slayer-kimetsu-no-yaiba-vol-3-9781974700547_hr.jpg", author: "Koyoharu Gotouge", description: "A family is attacked by demons and only two members survive - Tanjiro and his sister Nezuko, who is turning into a demon slowly. Tanjiro sets out to become a demon slayer to avenge his family and cure his sister.", year: 2019, createdAt: new Date(), updatedAt: new Date() },
      { title: "Bleach", imgSrc: "https://external-preview.redd.it/B3OvdHblwX-tUe_fj8NcUDmAwhJH4oz8y8pygryp_K4.jpg?auto=webp&s=81328aaa3410be787c7fd77f0eeef9c11adc4601", author: "Tite Kubo", description: "High school student Ichigo Kurosaki, who has the ability to see ghosts, gains soul reaper powers from Rukia Kuchiki and sets out to save the world from Hollows.", year: 2004, createdAt: new Date(), updatedAt: new Date() },
      { title: "Hunter X Hunter", imgSrc: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781421517889/hunter-x-hunter-vol-21-9781421517889_hr.jpg", author: "Yoshihiro Togashi", description: "The history of Gon Freecs, a boy who left home alone to become a Hunter. In the hard test, Gon meets Leorio, Kurapika and Killua.", year: 1999, createdAt: new Date(), updatedAt: new Date() },
      { title: "JuJutsu Kaisen", imgSrc: "https://i.imgur.com/hJmJkFT.jpg", author: "Gege Akutami", description: "A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shaman's school to be able to locate the demon's other body parts and thus exorcise himself.", year: 2020, createdAt: new Date(), updatedAt: new Date() },
      { title: "Berserk", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/91pr5eJZm5L.jpg", author: "Kentaro Miura", description: "Guts is a skilled swordsman who joins forces with a mercenary group named 'The Band of the Hawk', lead by the charismatic Griffith, and fights with them as they battle their way into the royal court.", year: 1997, createdAt: new Date(), updatedAt: new Date() },
      { title: "Avatar: The Last Airbender", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81KjBiKs-AL.jpg", author: "Michael Dante DiMartino and Bryan Konietzko", description: "In a war-torn world of elemental magic, a young boy reawakens to undertake a dangerous mystic quest to fulfill his destiny as the Avatar, and bring peace to the world.", year: 2005, createdAt: new Date(), updatedAt: new Date() },
      { title: "My Hero Academia", imgSrc: "https://www.thathashtagshow.com/wp-content/uploads/2021/01/DIG061904_1._SX1600_QL80_TTD_-683x1024.jpg", author: "Kohei Horikoshi", description: "A superhero-loving boy without any powers is determined to enroll in a prestigious hero academy and learn what it really means to be a hero.", year: 2016, createdAt: new Date(), updatedAt: new Date() },
      { title: "Attack on Titan", imgSrc: "https://pbs.twimg.com/media/EoDshtSUwAEoHH6.jpg", author: "Hajime Isayama", description: "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.", year: 2013, createdAt: new Date(), updatedAt: new Date() },
      { title: "DragonBall Super", imgSrc: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781974724635/dragon-ball-super-vol-14-9781974724635_hr.jpg", author: "Akira Toriyama", description: "Six months after the defeat of Majin Buu, The mighty Saiyan Son Goku continues his quest on becoming stronger.", year: 2015, createdAt: new Date(), updatedAt: new Date() },
      { title: "One Punch Man", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/91a68XZBmbL.jpg", author: "Yusuke Murata and ONE", description: "100 push-ups, 100 sit-ups, 100 squats, and a 10km run EVERY SINGLE DAY!!!", year: 2015, createdAt: new Date(), updatedAt: new Date() },
      { title: "Dr. Stone", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/91SLpHwjp8L.jpg", author: "Inagaki Riichiro", description: "One fateful day, all of humanity was petrified by a blinding flash of light. After several millennia, high schooler Taiju awakens and finds himself lost in a world of statues. However, he's not alone. His science-loving friend Senku's been up and running for a few months and he's got a grand plan in mind, to kickstart civilization with the power of science.", year: 2017, createdAt: new Date(), updatedAt: new Date() },
      { title: "Naruto", imgSrc: "https://images.booksense.com/images/785/525/9781421525785.jpg", author: "Masashi Kishimoto", description: "Naruto is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. ", year: 1999, createdAt: new Date(), updatedAt: new Date() },
      { title: "Gintama", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81UHGZF6D5S.jpg", author: "Hideaki Sorachi", description: "Sakata Gintoki is a broke samurai living in an era when samurai are no longer needed. To add to his troubles, oppressive aliens called Amanto have moved into town. Gintoki lives with Kagura and Shinpachi, taking on odd jobs to make the world a better place... and to pay their rent.", year: 2003, createdAt: new Date(), updatedAt: new Date() },
      { title: "Fruits Basket", imgSrc: "https://cdn.animenewsnetwork.com/thumbnails/max450x450/cms/news.2/139273/furuba-01.jpg", author: "Natsuki Takaya", description: "Fruits Basket tells the story of Tohru Honda, an orphan girl who, after meeting Yuki, Kyo, and Shigure Soma, learns that thirteen members of the Soma family are possessed by the animals of the Chinese zodiac and are cursed to turn into their animal forms when they are weak, stressed, or when they are embraced by anyone of the opposite sex that is not possessed by a spirit of the zodiac. As the series progresses, Tohru learns of the hardships and pain faced by the afflicted members of the Soma family, and through her own generous and loving nature, helps heal their emotional wounds. As she learns more about Yuki, Kyo, and the rest of the mysterious Soma family, Tohru also learns more about herself and how much others care for her.", year: 1998, createdAt: new Date(), updatedAt: new Date() },
      { title: "Haikyuu!!", imgSrc: "https://comicvine.gamespot.com/a/uploads/scale_small/6/67663/7199005-41.jpg", author: "Haruichi Furudate", description: "Inspired after watching a volleyball ace nicknamed 'Little Giant' in action, small-statured Shouyou Hinata revives the volleyball club at his middle school. The newly-formed team even makes it to a tournament; however, their first match turns out to be their last when they are brutally squashed by the 'King of the Court', Tobio Kageyama. Hinata vows to surpass Kageyama, and so after graduating from middle school, he joins Karasuno High School's volleyball team—only to find that his sworn rival, Kageyama, is now his teammate.", year: 2012, createdAt: new Date(), updatedAt: new Date() },
      { title: "Yuri on Ice", imgSrc: "https://i.pinimg.com/originals/81/6e/4c/816e4c6e0f14225c8a910ca311e9c18b.jpg", author: "Sayo Yamamoto, Mitsurō Kubo", description: "Reeling from his crushing defeat at the Grand Prix Finale, Yuuri Katsuki, once Japan's most promising figure skater, returns to his family home to assess his options for the future. At age 23, Yuuri's window for success in skating is closing rapidly, and his love of pork cutlets and aptitude for gaining weight are not helping either.", year: 2017, createdAt: new Date(), updatedAt: new Date() },
      { title: "Death Note", imgSrc: "https://i.pinimg.com/originals/58/fc/e3/58fce3b346bf7b55a5bf622901b1d0e4.jpg", author: "Tsugumi Ohba", description: "When a high schooler comes into possession of a mystical notebook, he finds he has the power to kill anybody whose name he enters in it.", year: 2003, createdAt: new Date(), updatedAt: new Date() },
      { title: "Ouran High School Host Club", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81Mfxp1E2QL.jpg", author: "Bisco Hatori", description: "Ouran High School Host Club is about Haruhi Fujioka, who goes to a school called Ouran Academy. Trying to find a quiet place to study, Haruhi meets a group of boys called the Ouran High School Host Club. Later on, she gets closer to the members of the host club, and they become the best of friends.", year: 2002, createdAt: new Date(), updatedAt: new Date() },
      { title: "Kimi Ni Todoke", imgSrc: "https://www.baka-tsuki.org/project/images/9/9a/Kiminitodoke_v1.jpg", author: "Karuho Shiina", description: "Known for her semblance to the Sadako character of The Ring series, Sawako Kuronuma is given the nickname 'Sadako' and misunderstood to be frightening and malicious like her fictional counterpart, despite having a timid and sweet nature. Longing to make friends and live a normal life, Sawako is naturally drawn to the cheerful and friendly Shouta Kazehaya, the most popular boy in her class. From their first meeting, Sawako has admired Kazehaya's ability to be the center of attention and aspires to be like him.", year: 2005, createdAt: new Date(), updatedAt: new Date() },
      { title: "Tokyo Ghoul", imgSrc: "https://i.redd.it/juszpt688j911.png", author: "Sui Ishida", description: "The story follows Ken Kaneki, a college student who barely survives a deadly encounter with Rize Kamishiro, his date who reveals herself as a ghoul. He is taken to the hospital in critical condition. After recovering, Kaneki discovers that he underwent a surgery that transformed him into a half-ghoul. This was accomplished because some of Rize's organs were transferred into his body, and now, like normal ghouls, he must consume human flesh to survive. The ghouls who manage the coffee shop 'Anteiku' take him in and teach him to deal with his new life as a half-ghoul. Some of his daily struggles include fitting into the ghoul society, as well as keeping his identity hidden from his human companions, especially from his best friend Hideyoshi Nagachika.", year: 2011, createdAt: new Date(), updatedAt: new Date() },
      { title: "Slam Dunk", imgSrc: "https://jw-webmagazine.com/wp-content/uploads/2020/05/Slam-Dunk.jpg", author: "Takehiko Inoue", description: "The delinquent high schooler Hanamichi Sakuragi who has not played basketball begins the sports in the school club with unique team memberssuch as his rival Kaede Rukawa and Takenori Akagi.", year: 1990, createdAt: new Date(), updatedAt: new Date() },
      { title: "The Prince of Tennis", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81-jRB4A2GL.jpg", author: "Takeshi Konomi", description: "Prince of Tennis follows the story of a 12 year old boy Ryoma Echizen who won four consecutive titles in the American Junior Tennis tournaments. He's an amazing tennis player and is considered a prodigy.", year: 2001, createdAt: new Date(), updatedAt: new Date() },
      { title: "Case Closed", imgSrc: "https://jw-webmagazine.com/wp-content/uploads/2020/05/Case-Closed.jpg", author: "Gosho Aoyama", description: "The high school detective Shinichi Kudo is transformed into a kid by a poison, and he solves a variety of cases hiding his true identity from the opposite Black Organization.", year: 1994, createdAt: new Date(), updatedAt: new Date() },
      { title: "Oyasumi Punpun", imgSrc: "https://jw-webmagazine.com/wp-content/uploads/2020/05/Oyasumi-Punpun.jpg", author: "Inio Asano", description: "The avant-garde story with 13 volumes focuses on the reality of human life though the chick-shaped main character named Punpun.", year: 2007, createdAt: new Date(), updatedAt: new Date() },
      { title: "Rave Master ", imgSrc: "https://jw-webmagazine.com/wp-content/uploads/2020/05/Rave-Master.jpg", author: "Hiro Mashima", description: "The fantasy adventure manga follows the main character Haru Glory in search of the five pieces of the sacred stone Rave.", year: 1999, createdAt: new Date(), updatedAt: new Date() },
      { title: "Great Teacher Onizuka", imgSrc: "https://cdn.myanimelist.net/images/manga/2/172982.jpg", author: " Tohru Fujisawa", description: "Great Teacher Onizuka follows the incredible, though often ridiculous, antics of the titular teacher as he attempts to outwit and win over the cunning Class 3-4 that is determined to have him removed from the school.", year: 1996, createdAt: new Date(), updatedAt: new Date() },
      { title: "Tokyo Revengers", imgSrc: "https://m.media-amazon.com/images/I/51p13qYvBeL.jpg", author: "Ken Wakui", description: "Watching the news, Takemichi Hanagaki learns that his girlfriend from way back in middle school, Hinata Tachibana, has died. The only girlfriend he ever had was just killed by a villainous group known as the Tokyo Manji Gang.", year: 2017, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Mangas', null, {});
  }
};
