'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert('Mangas', [
      { title: "One Piece", imgSrc: "https://pbs.twimg.com/media/EXTqmFnXQAAudF0.jpg", author: "Eiichiro Oda", description: "One Piece is a Shonen action-adventure manga written and drawn by Eiichiro Oda, serialized in the Weekly Shonen Jump. Set in a fantasy world dominated by pirates, it mainly depicts the adventures of Monkey D. Luffy, a headstrong young captain with the power to stretch like rubber.", year: 1997, createdAt: new Date(), updatedAt: new Date() },
      { title: "Sailor Moon", imgSrc: "http://prodimage.images-bn.com/pimages/9781612620084_p0_v2_s1200x630.jpg", author: "Naoko Takeuchi", description: "The series follows the adventures of the titular protagonist whose civilian name is Usagi Tsukino, a middle school student who is given the power to become the Pretty Soldier. Joined by other Sailor Soldiers, she defends Earth against an assortment of evil villains.", year: 1991, createdAt: new Date(), updatedAt: new Date() },
      { title: "Nana", imgSrc: "https://i.pinimg.com/736x/70/5d/b4/705db4ad4e5af367b3e5926ad0365867.jpg", author: "Ai Yazawa", description: "Nana Komatsu is a small town girl who goes to Tokyo to follow her boyfriend and college friends, with the hope of having her dream life. ... The series chronicles their friendship and their lives as each chases her dreams.", year: 2000, createdAt: new Date(), updatedAt: new Date() },
      { title: "Fullmetal Alchemist: Brotherhood", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/819gbwpjLcL.jpg", author: "Hiroshi Onogi", description: "The series follows the story of two alchemist brothers, Edward and Alphonse Elric, who want to restore their bodies after a disastrous failed attempt to bring their mother back to life through alchemy.", year: 2001, createdAt: new Date(), updatedAt: new Date() },
      { title:"JoJo's Bizarre Adventure", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/818fOuBHTnL.jpg", author: "Hirohiko Araki", description: "The universe of JoJo's Bizarre Adventure is a reflection of the real world with the added existence of supernatural forces and beings.[2] In this setting, some people are capable of transforming their inner spiritual power into a Stand (スタンド, Sutando); another significant form of energy is Hamon (波紋, Ripple), a martial arts technique that allows its user to focus bodily energy into sunlight via controlled breathing. The narrative of JoJo's Bizarre Adventure is split into parts with independent stories and different characters. Each of the series' protagonists is a member of the Joestar family.", year: 1987, createdAt: new Date(), updatedAt: new Date() },
      { title: "Blue Period", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/914W2qCP5ML.jpg", author: "Tsubasa Yamaguchi", description: "Yatora Yaguchi is a fairly popular student who excels in school, but often deals with inner emptiness and frustrations. One day he became fascinated by a painting at his high school's art club so deeply that it inspired him to try his hand at painting. Later, he was inspired by a friend, Ryuji Yuka Ayukawa, and subsequently joined the art club, becoming more deeply involved, and attempts to apply for the Tokyo University of the Arts as his choice of college.", year: 2017, createdAt: new Date(), updatedAt: new Date() },
      { title: "Chainsaw Man", imgSrc: "https://i.pinimg.com/originals/61/b4/bb/61b4bb7d7c3526a64b8f75b4ac1c8018.jpg", author: "Tatsuki Fujimoto", description: "Denji has a simple dream—to live a happy and peaceful life, spending time with a girl he likes. This is a far cry from reality, however, as Denji is forced by the yakuza into killing devils in order to pay off his crushing debts. Using his pet devil Pochita as a weapon, he is ready to do anything for a bit of cash.", year: 2018, createdAt: new Date(), updatedAt: new Date() },
      { title: "Toilet-Bound Hanako-kun", imgSrc: "https://pbs.twimg.com/media/EQp-pkwWkAIPo0C.jpg", author: "Aidalro", description: "Nene Yashiro, a first-year high-school student who loves the occult and wishes for a boyfriend, summons the Seventh and most famous Wonder, Hanako-san of the Toilet, a girl who allegedly haunts the bathroom and can grant wishes for the right price.", year: 2014, createdAt: new Date(), updatedAt: new Date() },
      { title: "Spy x Family", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/71vMGRog+iL.jpg", author: "Tatsuya Endo", description: "The story follows a spy who has to build a family to execute a mission, not realizing that the girl he adopts as a daughter and the woman he agrees to be in a fake marriage with are a mind reader and an assassin, respectively.", year: 2019 , createdAt: new Date(), updatedAt: new Date() },
      { title: "Kaiju No. 8", imgSrc: "https://images-na.ssl-images-amazon.com/images/I/81IgJ1cGaWS.jpg", author: "Naoya Matsumoto", description: "Following a chain of unfortunate events and an interaction with the junior sweeper, Kafka encounters a parasite-type kaiju that forces its way in through his mouth—turning him into a humanoid monster. With his newfound powers, Kafka aims to give his lifelong dream a final try.", year: 2020, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
