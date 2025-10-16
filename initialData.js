// initialData.js

const initialCharacters = {
    // Personagens Iniciais
    'Tanjiro': { owned: true, attack: 10, health: 100, level: 1, xp: 0, img: 'https://i.pinimg.com/736x/12/e4/81/12e48138a93418dac4ba6a3d968baea7.jpg', skill: { name: 'Dança do Deus do Fogo', multiplier: 2.5, cooldown: 4 } },
    'Nezuko': { owned: true, attack: 12, health: 120, level: 1, xp: 0, img: 'https://i.pinimg.com/736x/34/34/33/34343335aa0214db26a547659b3c1043.jpg', skill: { name: 'Kekkijutsu Explosão de Sangue', multiplier: 2.2, cooldown: 4 } },
    // Compráveis
    'Zenitsu': { owned: false, cost: 500, attack: 15, health: 80, level: 1, xp: 0, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgTgxSdJ8HOs4jO1mh0orAMZvvBz_DrLnV1Q&s', skill: { name: 'Respiração do Trovão: Hekireki Issen', multiplier: 3.5, cooldown: 5 } },
    'Inosuke': { owned: false, cost: 800, attack: 18, health: 110, level: 1, xp: 0, img: 'https://i.pinimg.com/736x/26/cc/0e/26cc0e1ec11026146be2ca54afb32465.jpg', skill: { name: 'Respiração da Fera: Caninos Dilacerantes', multiplier: 2.0, cooldown: 3 } },
    'Kanao': { owned: false, cost: 1500, attack: 22, health: 130, level: 1, xp: 0, img: 'https://i.pinimg.com/originals/31/32/a3/3132a3931b60973335cac328833c1626.jpg', skill: { name: 'Respiração da Flor: Olho Escarlate Equinocial', multiplier: 3.0, cooldown: 5 } },
    'Genya': { owned: false, cost: 1800, attack: 25, health: 160, level: 1, xp: 0, img: 'https://i.pinimg.com/736x/9e/f1/a2/9ef1a253a29b23f813a8a755644b8b6c.jpg', skill: { name: 'Absorção Demoníaca', multiplier: 2.8, cooldown: 4 } },
    // Hashiras
    'Giyu Tomioka': { owned: false, cost: 3000, attack: 35, health: 180, level: 1, xp: 0, img: 'https://i.pinimg.com/736x/dc/47/53/dc475355a013101b2e5e26a1ba31b7fe.jpg', skill: { name: 'Respiração da Água: Lull', multiplier: 2.5, cooldown: 4 } },
    'Rengoku': { owned: false, cost: 3500, attack: 40, health: 160, level: 1, xp: 0, img: 'https://i.pinimg.com/736x/f2/bc/af/f2bcafb4cfb561bb1558be0049433940.jpg', skill: { name: 'Respiração das Chamas: Nona Forma', multiplier: 3.2, cooldown: 5 } },
    'Shinobu Kocho': { owned: false, cost: 2800, attack: 28, health: 140, level: 1, xp: 0, img: 'https://i.pinimg.com/736x/9e/87/33/9e87334237452a2f3f987d2b921312b3.jpg', skill: { name: 'Respiração do Inseto: Dança da Centopeia', multiplier: 2.0, cooldown: 2 } },
    'Tengen Uzui': { owned: false, cost: 3200, attack: 38, health: 190, level: 1, xp: 0, img: 'https://i.pinimg.com/736x/d9/26/62/d92662a5609b5836c1369b52f0b93eda.jpg', skill: { name: 'Respiração do Som: Quinta Forma', multiplier: 2.8, cooldown: 4 } },
    'Muichiro Tokito': { owned: false, cost: 3300, attack: 36, health: 170, level: 1, xp: 0, img: 'https://i.pinimg.com/736x/77/7c/41/777c412e682240a2d5e873b8803b87a8.jpg', skill: { name: 'Respiração da Névoa: Sétima Forma', multiplier: 3.0, cooldown: 5 } },
    'Mitsuri Kanroji': { owned: false, cost: 3100, attack: 34, health: 200, level: 1, xp: 0, img: 'https://i.pinimg.com/736x/05/e6/09/05e609a3152f22a3637733038c5f45e9.jpg', skill: { name: 'Respiração do Amor: Sexta Forma', multiplier: 2.6, cooldown: 3 } },
    'Obanai Iguro': { owned: false, cost: 3400, attack: 39, health: 165, level: 1, xp: 0, img: 'https://i.pinimg.com/736x/0d/e1/eb/0de1eb699153a5273f449b9956f4a390.jpg', skill: { name: 'Respiração da Serpente: Quinta Forma', multiplier: 3.1, cooldown: 5 } },
    'Sanemi Shinazugawa': { owned: false, cost: 3600, attack: 42, health: 175, level: 1, xp: 0, img: 'https://i.pinimg.com/736x/0b/e3/33/0be33380f32219a1f8295133c6a43588.jpg', skill: { name: 'Respiração do Vento: Sétima Forma', multiplier: 3.3, cooldown: 4 } },
    'Gyomei Himejima': { owned: false, cost: 4000, attack: 45, health: 220, level: 1, xp: 0, img: 'https://i.pinimg.com/736x/31/d1/1c/31d11c3f871510e18f2f26e38a53b0f7.jpg', skill: { name: 'Respiração da Pedra: Quarta Forma', multiplier: 2.9, cooldown: 4 } },
    // Personagem Secreto
    'Yoriichi': { owned: false, mission_unlock: 'defeat_kokushibo', attack: 100, health: 500, level: 1, xp: 0, img: 'https://i.pinimg.com/1200x/64/af/39/64af394d081295dfa2c4f88df49144cc.jpg', skill: { name: 'Respiração do Sol: Décima Terceira Forma', multiplier: 5.0, cooldown: 6 } },
};

module.exports = { initialCharacters };