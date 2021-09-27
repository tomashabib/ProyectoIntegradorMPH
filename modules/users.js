const players = {
  list: [
    {
      name: "Lionel",
      surname: "Messi",
      username: "leomessi",
      profilePicture:
        "https://www.soyfutbol.com/__export/1628333569988/sites/debate/img/2021/08/07/messi_psg_contrato_firma_crop1628333423417.jpg_943222218.jpg",
      height: 169,
      weight: 67,
      team: "Paris Saint Germain",
      position: "Forward",
      birthDate: 24 - 7 - 1987,
      age: 34,
      nacionality: "Argentina",
      id: 0,
    },
    {
      name: "Cristiano",
      surname: "Ronaldo dos Santos Aveiro",
      username: "cristiano",
      profilePicture:
        "https://estaticos-cdn.sport.es/clip/24a12ea8-9380-4181-ba6c-dda114a22c30_alta-libre-aspect-ratio_default_0.jpg",
      height: 187,
      weight: 83,
      team: "Manchester United",
      position: "Forward",
      birthDate: 5 - 2 - 1985,
      age: 36,
      nacionality: "Portugal",
      id: 1,
    },
    {
      name: "Neymar",
      surname: "Da Silva Santos Junior",
      username: "neymarjr",
      profilePicture:
        "https://as01.epimg.net/futbol/imagenes/2020/12/19/internacional/1608381295_937891_1608381394_noticia_normal_recorte1.jpg",
      height: 175,
      weight: 68,
      team: "Paris Saint Germain",
      position: "Forward",
      birthDate: 5 - 2 - 1992,
      age: 29,
      nacionality: "Brazil",
      id: 2,
    },
    {
      name: "Kylian",
      surname: "Mbappe",
      username: "k.mbappe",
      height: 178,
      weight: 73,
      team: "Paris Saint Germain",
      position: "Forward",
      birthDate: 20 - 12 - 1998,
      age: 22,
      nacionality: "France",
      id: 3,
    },
    {
      name: "Karim",
      surname: "Benzema",
      username: "karimbenzema",
      height: 185,
      weight: 81,
      team: "Real Madrid",
      position: "Forward",
      birthDate: 19 - 12 - 1987,
      age: 33,
      nacionality: "France",
      id: 4,
    },
    {
      name: "Robert",
      surname: "Lewandowski",
      username: "_rl9",
      height: 185,
      weight: 81,
      team: "Bayern Munchen",
      position: "Forward",
      birthDate: 21 - 8 - 1988,
      age: 33,
      nacionality: "Poland",
      id: 5,
    },
    {
      name: "Erling Braut",
      surname: "Haaland",
      username: "erling.haaland",
      profilePicture:
        "https://e.rpp-noticias.io/normal/2021/06/18/293029_1109573.jpg",
      height: 194,
      weight: 88,
      team: "Borussia Dortmund",
      position: "Forward",
      birthDate: 21 - 7 - 2000,
      age: 21,
      nacionality: "Norway",
      id: 6,
    },
    {
      name: "Romelu Menama",
      surname: "Lukaku Bolingoli",
      username: "romelulukaku",
      height: 191,
      weight: 94,
      team: "Chelsea",
      position: "Forward",
      birthDate: 13 - 5 - 1993,
      age: 28,
      nacionality: "Belgium",
      id: 7,
    },
    {
      name: "Luis Alberto",
      surname: "Suarez Diaz",
      username: "luissuarez9",
      height: 182,
      weight: 86,
      team: "Atletico de Madrid",
      position: "Forward",
      birthDate: 24 - 1 - 1987,
      age: 34,
      nacionality: "Uruguay",
      id: 8,
    },
    {
      name: "Mohamed",
      surname: "Salah Ghaly",
      username: "mosalah",
      profilePicture:
        "https://bolavip.com/__export/1608581891017/sites/bolavip/img/2020/12/21/mohamed_salah_liverpool_crop1608581889973.jpg_242310155.jpg",
      height: 173,
      weight: 70,
      team: "Liverpool",
      position: "Forward",
      birthDate: 15 - 6 - 1992,
      age: 29,
      nacionality: "Egypt",
      id: 9,
    },
    {
      name: "Sergio Leonel",
      surname: "Aguero del Castillo",
      username: "kunaguero",
      height: 173,
      weight: 70,
      team: "Barcelona",
      position: "Forward",
      birthDate: 2 - 6 - 1988,
      age: 33,
      nacionality: "Argentina",
      id: 10,
    },
    {
      name: "Harry",
      surname: "Kane",
      username: "harrykane",
      height: 188,
      weight: 86,
      team: "Tottenham Hotspur",
      position: "Forward",
      birthDate: 28 - 7 - 1993,
      age: 28,
      nacionality: "England",
      id: 11,
    },
    {
      name: "Kevin",
      surname: "De Bruyne",
      username: "kevindebruyne",
      height: 181,
      weight: 76,
      team: "Manchester City",
      position: "Midfielder",
      birthDate: 28 - 6 - 1991,
      age: 30,
      nacionality: "Belgium",
      id: 12,
    },
    {
      name: "Paul Labile",
      surname: "Pogba",
      username: "paulpogba",
      height: 191,
      weight: 84,
      team: "Manchester United",
      position: "Midfielder",
      birthDate: 15 - 3 - 1993,
      age: 28,
      nacionality: "France",
      id: 13,
    },
    {
      name: "Carlos Henrique",
      surname: "Casemiro",
      username: "casemiro",
      height: 185,
      weight: 84,
      team: "Real Madrid",
      position: "Midfielder",
      birthDate: 23 - 2 - 1992,
      age: 29,
      nacionality: "Brazil",
      id: 14,
    },
    {
      name: "Marco",
      surname: "Verratti",
      username: "marco_verratti92",
      height: 165,
      weight: 60,
      team: "Paris Saint Germain",
      position: "Midfielder",
      birthDate: 5 - 11 - 1992,
      age: 28,
      nacionality: "Italy",
      id: 15,
    },
    {
      name: "Luka",
      surname: "Modric",
      username: "lukamodric10",
      height: 172,
      weight: 76,
      team: "Real Madrid",
      position: "Midfielder",
      birthDate: 9 - 9 - 1985,
      age: 35,
      nacionality: "Croatia",
      id: 16,
    },
    {
      name: "Sergio",
      surname: "Busquets Burgos",
      username: "5sergiob",
      height: 189,
      weight: 76,
      team: "Barcelona",
      position: "Midfielder",
      birthDate: 16 - 7 - 1988,
      age: 33,
      nacionality: "Spain",
      id: 17,
    },
    {
      name: "Toni",
      surname: "Kroos",
      username: "toni.kr8s",
      height: 183,
      weight: 78,
      team: "Real Madrid",
      position: "Midfielder",
      birthDate: 4 - 1 - 1990,
      age: 31,
      nacionality: "Germany",
      id: 18,
    },
    {
      name: "Arturo Erasmo",
      surname: "Vidal Pardo",
      username: "kingarturo23oficial",
      height: 180,
      weight: 75,
      team: "Inter Milan",
      position: "Midfielder",
      birthDate: 22 - 5 - 1987,
      age: 34,
      nacionality: "Chile",
      id: 19,
    },
    {
      name: "Frenkie",
      surname: "de Jong",
      username: "frenkiedejong",
      height: 180,
      weight: 74,
      team: "Barcelona",
      position: "Midfielder",
      birthDate: 12 - 5 - 1997,
      age: 24,
      nacionality: "Netherlands",
      id: 20,
    },
    {
      name: "Mason Tony",
      surname: "Mount",
      username: "masonmount",
      height: 178,
      weight: 70,
      team: "Chelsea",
      position: "Midfielder",
      birthDate: 10 - 1 - 1999,
      age: 22,
      nacionality: "England",
      id: "21",
    },
    {
      name: "Jordan Brian",
      surname: "Henderson",
      username: "jhernderson",
      height: 185,
      weight: 80,
      team: "Liverpool",
      position: "Midfielder",
      birthDate: 17 - 6 - 1990,
      age: 31,
      nacionality: "England",
      id: "22",
    },
    {
      name: "Jude",
      surname: "Bellingham",
      username: "judebellingham",
      height: 186,
      weight: 75,
      team: "Borussia Dortmund",
      position: "Midfielder",
      birthDate: 29 - 6 - 2003,
      age: 18,
      nacionality: "England",
      id: "23",
    },
    {
      name: "Virgil",
      surname: "van Dijk",
      username: "virgilvandijk",
      height: 193,
      weight: 92,
      team: "Liverpool",
      position: "Defender",
      birthDate: 8 - 7 - 1991,
      age: 30,
      nacionality: "Netherlands",
      id: "24",
    },
    {
      name: "Raphael",
      surname: "Varane",
      username: "raphaelvarane",
      height: 191,
      weight: 81,
      team: "Manchester United",
      position: "Defender",
      birthDate: 25 - 4 - 1993,
      age: 28,
      nacionality: "France",
      id: "25",
    },
    {
      name: "Sergio",
      surname: "Ramos Garcia",
      username: "sergioramos",
      height: 184,
      weight: 82,
      team: "Paris Saint Germain",
      position: "Defender",
      birthDate: 30 - 3 - 1986,
      age: 35,
      nacionality: "Spain",
      id: "26",
    },
    {
      name: "Giorgio",
      surname: "Chiellini",
      username: "giorgiochiellini",
      height: 187,
      weight: 85,
      team: "Juventus",
      position: "Defender",
      birthDate: 14 - 8 - 1984,
      age: 37,
      nacionality: "Italy",
      id: "27",
    },
    {
      name: "Thiago Emiliano",
      surname: "da Silva",
      username: "thiagosilva",
      height: 182,
      weight: 79,
      team: "Chelsea",
      position: "Defender",
      birthDate: 22 - 9 - 1984,
      age: 36,
      nacionality: "Brazil",
      id: 28,
    },
    {
      name: "Ruben Santos",
      surname: "Alves Dias",
      username: "rubendias",
      height: 187,
      weight: 76,
      team: "Manchester City",
      position: "Defender",
      birthDate: 14 - 5 - 1997,
      age: 24,
      nacionality: "Portugal",
      id: "29",
    },
    {
      name: "Dayot",
      surname: "Upamecano",
      username: "upamecano",
      height: 186,
      weight: 90,
      team: "Bayern Munchen",
      position: "Defender",
      birthDate: 27 - 10 - 1998,
      age: 22,
      nacionality: "France",
      id: "30",
    },
    {
      name: "Reece",
      surname: "James",
      username: "reecejames",
      height: 182,
      weight: 90,
      team: "Chelsea",
      position: "Defender",
      birthDate: 8 - 12 - 1999,
      age: 21,
      nacionality: "England",
      id: "31",
    },
    {
      name: "Cristian Gabriel",
      surname: "Romero",
      username: "cutiromero2",
      height: 185,
      weight: 79,
      team: "Tottenham Hotspur",
      position: "Defender",
      birthDate: 27 - 4 - 1998,
      age: 23,
      nacionality: "Argentina",
      id: "32",
    },
    {
      name: "Gerard",
      surname: "Pique Bernabeu",
      username: "3gerardpique",
      height: 189,
      weight: 85,
      team: "Barcelona",
      position: "Defender",
      birthDate: 2 - 2 - 1987,
      age: 34,
      nacionality: "Spain",
      id: "33",
    },
    {
      name: "David",
      surname: "Alaba",
      username: "davidalaba",
      height: 180,
      weight: 78,
      team: "Real Madrid",
      position: "Defender",
      birthDate: 24 - 6 - 1992,
      age: 29,
      nacionality: "Austria",
      id: "34",
    },
    {
      name: "Milan",
      surname: "Skriniar",
      username: "milanskriniar",
      height: 188,
      weight: 80,
      team: "Inter Milan",
      position: "Defender",
      birthDate: 11 - 2 - 1995,
      age: 26,
      nacionality: "Slovakia",
      id: "35",
    },
    {
      name: "Manuel Peter",
      surname: "Neuer",
      username: "manuelneuer",
      height: 193,
      weight: 93,
      team: "Bayern Munchen",
      position: "Goalkeeper",
      birthDate: 27 - 3 - 1986,
      age: 35,
      nacionality: "Germany",
      id: "36",
    },
    {
      name: "Marc Andre",
      surname: "Ter Stegen",
      username: "mterstegen1",
      height: 187,
      weight: 85,
      team: "Barcelona",
      position: "Goalkeeper",
      birthDate: 30 - 4 - 1992,
      age: 29,
      nacionality: "Germany",
      id: "37",
    },
    {
      name: "Jan",
      surname: "Oblak",
      username: "oblakjan",
      height: 188,
      weight: 87,
      team: "Atletico de Madrid",
      position: "Goalkeeper",
      birthDate: 7 - 1 - 1993,
      age: 28,
      nacionality: "Slovakia",
      id: "38",
    },
    {
      name: "Thibaut",
      surname: "Courtois",
      username: "thibautcourtois",
      height: 200,
      weight: 96,
      team: "Real Madrid",
      position: "Goalkeeper",
      birthDate: 11 - 5 - 1992,
      age: 29,
      nacionality: "Belgium",
      id: "39",
    },
    {
      name: "Keylor Antonio",
      surname: "Navas Gamboa",
      username: "keylornavas1",
      height: 185,
      weight: 79,
      team: "Paris Saint Germain",
      position: "Goalkeeper",
      birthDate: 15 - 12 - 1986,
      age: 34,
      nacionality: "Costa Rica",
      id: "40",
    },
    {
      name: "David",
      surname: "de Gea",
      username: "d_degeaofficial",
      height: 192,
      weight: 76,
      team: "Manchester United",
      position: "Goalkeeper",
      birthDate: 7 - 11 - 1990,
      age: 30,
      nacionality: "Spain",
      id: "41",
    },
    {
      name: "Alisson Ramses",
      surname: "Becker",
      username: "alissonbecker",
      height: 191,
      weight: 88,
      team: "Liverpool",
      position: "Goalkeeper",
      birthDate: 2 - 10 - 1992,
      age: 28,
      nacionality: "Brazil",
      id: "42",
    },
    {
      name: "Hugo Hadrien Dominique",
      surname: "Lloris",
      username: "hugolloris",
      height: 188,
      weight: 80,
      team: "Tottenham Hotspur",
      position: "Goalkeeper",
      birthDate: 26 - 12 - 1986,
      age: 34,
      nacionality: "France",
      id: "43",
    },
    {
      name: "Ederson Santana",
      surname: "de Moraes",
      username: "ederson93",
      height: 188,
      weight: 89,
      team: "Manchester City",
      position: "Goalkeeper",
      birthDate: 17 - 8 - 1993,
      age: 28,
      nacionality: "Brazil",
      id: "44",
    },
    {
      name: "Samir",
      surname: "Handanovic",
      username: "samirhandanovic",
      height: 193,
      weight: 92,
      team: "Inter Milan",
      position: "Goalkeeper",
      birthDate: 14 - 7 - 1984,
      age: 37,
      nacionality: "Slovakia",
      id: "45",
    },
    {
      name: "Gianluigi",
      surname: "Donnarumma",
      username: "gigiodonna99",
      height: 196,
      weight: 90,
      team: "Paris Saint Germain",
      position: "Goalkeeper",
      birthDate: 25 - 2 - 1999,
      age: 22,
      nacionality: "Italy",
      id: "46",
    },
    {
      name: "Rui Pedro",
      surname: "dos Santos Patricio",
      username: "rpatricio1",
      height: 190,
      weight: 86,
      team: "AS Roma",
      position: "Goalkeeper",
      birthDate: 15 - 2 - 1988,
      age: 33,
      nacionality: "Portugal",
      id: "47",
    },
  ],
  // filtrar por username, agarra solo al jugador que tenga mismo username que pasamos a la funcion
  findUsername: function (username) {
    for (let i = 0; i < players.list.length; i++) {
      const element = players.list[i];
      if (element.username == username) {
        return element;
      }
    }
  },
};

module.exports = players;
