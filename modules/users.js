const players = {
    list: [
        {
            name: 'Lionel',
            surname: 'Messi',
            username: 'leomessi',
            height: 169,
            weight: 67,
            team: 'Paris Saint Germain',
            position: 'Forward',
            birthDate: 24-7-1987,
            age: 34,
            nacionality: 'Argentina',
        },
        {
            name: 'Cristiano',
            surname: 'Ronaldo dos Santos Aveiro',
            username: 'CR7',
            height: 187,
            weight: 83,
            team: 'Manchester United',
            position: 'Forward',
            birthDate: 5-2-1985,
            age: 36,
            nacionality: 'Portugal',
        },
        {
            name: 'Neymar',
            surname: 'Da Silva Santos Junior',
            height: 175,
            weight: 68,
            team: 'Paris Saint Germain',
            position: 'Forward',
            birthDate: 5-2-1992,
            age: 29,
            nacionality: 'Brazil',
        },
        {
            name: 'Kylian',
            surname: 'Mbappe',
            height: 178,
            weight: 73,
            team: 'Paris Saint Germain',
            position: 'Forward',
            birthDate: 20-12-1998,
            age: 22,
            nacionality: 'France',
        },
        {
            name: 'Karim',
            surname: 'Benzema',
            height: 185,
            weight: 81,
            team: 'Real Madrid',
            position: 'Forward',
            birthDate: 19-12-1987,
            age: 33,
            nacionality: 'France',
        },
        {
            name: 'Robert',
            surname: 'Lewandowski',
            height: 185,
            weight: 81,
            team: 'Bayern Munchen',
            position: 'Forward',
            birthDate: 21-8-1988,
            age: 33,
            nacionality: 'Poland',
        },
        {
            name: 'Erling Braut',
            surname: 'Haaland',
            height: 194,
            weight: 88,
            team: 'Borussia Dortmund',
            position: 'Forward',
            birthDate: 21-7-2000,
            age: 21,
            nacionality: 'Norway',
        },
        {
            name: 'Romelu Menama',
            surname: 'Lukaku Bolingoli',
            height: 191,
            weight: 94,
            team: 'Chelsea',
            position: 'Forward',
            birthDate: 13-5-1993,
            age: 28,
            nacionality: 'Belgium',
        },
        {
            name: 'Luis Alberto',
            surname: 'Suarez Diaz',
            height: 182,
            weight: 86,
            team: 'Atletico de Madrid',
            position: 'Forward',
            birthDate: 24-1-1987,
            age: 34,
            nacionality: 'Uruguay',
        },
        {
            name: 'Mohamed',
            surname: 'Salah Ghaly',
            height: 173,
            weight: 70,
            team: 'Liverpool',
            position: 'Forward',
            birthDate: 15-6-1992,
            age: 29,
            nacionality: 'Egypt',
        },
        {
            name: 'Sergio Leonel',
            surname: 'Aguero del Castillo',
            height: 173,
            weight: 70,
            team: 'Barcelona',
            position: 'Forward',
            birthDate: 2-6-1988,
            age: 33,
            nacionality: 'Argentina',
        },
        {
            name: 'Harry',
            surname: 'Kane',
            height: 188,
            weight: 86,
            team: 'Tottenham Hotspur',
            position: 'Forward',
            birthDate: 28-7-1993,
            age: 28,
            nacionality: 'England',
        },
        {
            name: 'Kevin',
            surname: 'De Bruyne',
            height: 181,
            weight: 76,
            team: 'Manchester City',
            position: 'Midfielder',
            birthDate: 28-6-1991,
            age: 30,
            nacionality: 'Belgium',
        },
        {
            name: 'Paul Labile',
            surname: 'Pogba',
            height: 191,
            weight: 84,
            team: 'Manchester United',
            position: 'Midfielder',
            birthDate: 15-3-1993,
            age: 28,
            nacionality: 'France',
        },
        {
            name: 'Carlos Henrique',
            surname: 'Casemiro',
            height: 185,
            weight: 84,
            team: 'Real Madrid',
            position: 'Midfielder',
            birthDate: 23-2-1992,
            age: 29,
            nacionality: 'Brazil',
        },
        {
            name: 'Marco',
            surname: 'Verratti',
            height: 165,
            weight: 60,
            team: 'Paris Saint Germain',
            position: 'Midfielder',
            birthDate: 5-11-1992,
            age: 28,
            nacionality: 'Italy',
        },
        {
            name: 'Luka',
            surname: 'Modric',
            height: 172,
            weight: 76,
            team: 'Real Madrid',
            position: 'Midfielder',
            birthDate: 9-9-1985,
            age: 35,
            nacionality: 'Croatia',
        },
        {
            name: 'Sergio',
            surname: 'Busquets Burgos',
            height: 189,
            weight: 76,
            team: 'Barcelona',
            position: 'Midfielder',
            birthDate: 16-7-1988,
            age: 33,
            nacionality: 'Spain',
        },
        {
            name: 'Toni',
            surname: 'Kroos',
            height: 183,
            weight: 78,
            team: 'Real Madrid',
            position: 'Midfielder',
            birthDate: 4-1-1990,
            age: 31,
            nacionality: 'Germany',
        },
        {
            name: 'Arturo Erasmo',
            surname: 'Vidal Pardo',
            height: 180,
            weight: 75,
            team: 'Inter Milan',
            position: 'Midfielder',
            birthDate: 22-5-1987,
            age: 34,
            nacionality: 'Chile',
        },
        {
            name: 'Frenkie',
            surname: 'de Jong',
            height: 180,
            weight: 74,
            team: 'Barcelona',
            position: 'Midfielder',
            birthDate: 12-5-1997,
            age: 24,
            nacionality: 'Netherlands',
        },
        {
            name: 'Mason Tony',
            surname: 'Mount',
            height: 178,
            weight: 70,
            team: 'Chelsea',
            position: 'Midfielder',
            birthDate: 10-1-1999,
            age: 22,
            nacionality: 'England',
        },
        {
            name: 'Jordan Brian',
            surname: 'Henderson',
            height: 185,
            weight: 80,
            team: 'Liverpool',
            position: 'Midfielder',
            birthDate: 17-6-1990,
            age: 31,
            nacionality: 'England',
        },
        {
            name: 'Jude',
            surname: 'Bellingham',
            height: 186,
            weight: 75,
            team: 'Borussia Dortmund',
            position: 'Midfielder',
            birthDate: 29-6-2003,
            age: 18,
            nacionality: 'England',
        },
        {
            name: 'Virgil',
            surname: 'van Dijk',
            height: 193,
            weight: 92,
            team: 'Liverpool',
            position: 'Defender',
            birthDate: 8-7-1991,
            age: 30,
            nacionality: 'Netherlands',
        },
        {
            name: 'Raphael',
            surname: 'Varane',
            height: 191,
            weight: 81,
            team: 'Manchester United',
            position: 'Defender',
            birthDate: 25-4-1993,
            age: 28,
            nacionality: 'France',
        },
        {
            name: 'Sergio',
            surname: 'Ramos Garcia',
            height: 184,
            weight: 82,
            team: 'Paris Saint Germain',
            position: 'Defender',
            birthDate: 30-3-1986,
            age: 35,
            nacionality: 'Spain',
        },
        {
            name: 'Giorgio',
            surname: 'Chiellini',
            height: 187,
            weight: 85,
            team: 'Juventus',
            position: 'Defender',
            birthDate: 14-8-1984,
            age: 37,
            nacionality: 'Italy',
        },
        {
            name: 'Thiago Emiliano',
            surname: 'da Silva',
            height: 182,
            weight: 79,
            team: 'Chelsea',
            position: 'Defender',
            birthDate: 22-9-1984,
            age: 36,
            nacionality: 'Brazil',
        },
        {
            name: 'Ruben Santos',
            surname: 'Alves Dias',
            height: 187,
            weight: 76,
            team: 'Manchester City',
            position: 'Defender',
            birthDate: 14-5-1997,
            age: 24,
            nacionality: 'Portugal',
        },
        {
            name: 'Dayot',
            surname: 'Upamecano',
            height: 186,
            weight: 90,
            team: 'Bayern Munchen',
            position: 'Defender',
            birthDate: 27-10-1998,
            age: 22,
            nacionality: 'France',
        },
        {
            name: 'Reece',
            surname: 'James',
            height: 182,
            weight: 90,
            team: 'Chelsea',
            position: 'Defender',
            birthDate: 8-12-1999,
            age: 21,
            nacionality: 'England',
        },
        {
            name: 'Cristian Gabriel',
            surname: 'Romero',
            height: 185,
            weight: 79,
            team: 'Tottenham Hotspur',
            position: 'Defender',
            birthDate: 27-4-1998,
            age: 23,
            nacionality: 'Argentina',
        },
        {
            name: 'Gerard',
            surname: 'Pique Bernabeu',
            height: 189,
            weight: 85,
            team: 'Barcelona',
            position: 'Defender',
            birthDate: 2-2-1987,
            age: 34,
            nacionality: 'Spain',
        },
        {
            name: 'David',
            surname: 'Alaba',
            height: 180,
            weight: 78,
            team: 'Real Madrid',
            position: 'Defender',
            birthDate: 24-6-1992,
            age: 29,
            nacionality: 'Austria',
        },
        {
            name: 'Milan',
            surname: 'Skriniar',
            height: 188,
            weight: 80,
            team: 'Inter Milan',
            position: 'Defender',
            birthDate: 11-2-1995,
            age: 26,
            nacionality: 'Slovakia',
        },
        {
            name: 'Manuel Peter',
            surname: 'Neuer',
            height: 193,
            weight: 93,
            team: 'Bayern Munchen',
            position: 'Goalkeeper',
            birthDate: 27-3-1986,
            age: 35,
            nacionality: 'Germany',
        },
        {
            name: 'Marc Andre',
            surname: 'Ter Stegen',
            height: 187,
            weight: 85,
            team: 'Barcelona',
            position: 'Goalkeeper',
            birthDate: 30-4-1992,
            age: 29,
            nacionality: 'Germany',
        },
        {
            name: 'Jan',
            surname: 'Oblak',
            height: 188,
            weight: 87,
            team: 'Atletico de Madrid',
            position: 'Goalkeeper',
            birthDate: 7-1-1993,
            age: 28,
            nacionality: 'Slovakia',
        },
        {
            name: 'Thibaut',
            surname: 'Courtois',
            height: 200,
            weight: 96,
            team: 'Real Madrid',
            position: 'Goalkeeper',
            birthDate: 11-5-1992,
            age: 29,
            nacionality: 'Belgium',
        },
        {
            name: 'Keylor Antonio',
            surname: 'Navas Gamboa',
            height: 185,
            weight: 79,
            team: 'Paris Saint Germain',
            position: 'Goalkeeper',
            birthDate: 15-12-1986,
            age: 34,
            nacionality: 'Costa Rica',
        },
        {
            name: 'David',
            surname: 'de Gea',
            height: 192,
            weight: 76,
            team: 'Manchester United',
            position: 'Goalkeeper',
            birthDate: 7-11-1990,
            age: 30,
            nacionality: 'Spain',
        },
        {
            name: 'Alisson Ramses',
            surname: 'Becker',
            height: 191,
            weight: 88,
            team: 'Liverpool',
            position: 'Goalkeeper',
            birthDate: 2-10-1992,
            age: 28,
            nacionality: 'Brazil',
        },
        {
            name: 'Hugo Hadrien Dominique',
            surname: 'Lloris',
            height: 188,
            weight: 80,
            team: 'Tottenham Hotspur',
            position: 'Goalkeeper',
            birthDate: 26-12-1986,
            age: 34,
            nacionality: 'France',
        },
        {
            name: 'Ederson Santana',
            surname: 'de Moraes',
            height: 188,
            weight: 89,
            team: 'Manchester City',
            position: 'Goalkeeper',
            birthDate: 17-8-1993,
            age: 28,
            nacionality: 'Brazil',
        },
        {
            name: 'Samir',
            surname: 'Handanovic',
            height: 193,
            weight: 92,
            team: 'Inter Milan',
            position: 'Goalkeeper',
            birthDate: 14-7-1984,
            age: 37,
            nacionality: 'Slovakia',
        },
        {
            name: 'Gianluigi',
            surname: 'Donnarumma',
            height: 196,
            weight: 90,
            team: 'Paris Saint Germain',
            position: 'Goalkeeper',
            birthDate: 25-2-1999,
            age: 22,
            nacionality: 'Italy',
        },
        {
            name: 'Rui Pedro',
            surname: 'dos Santos Patricio',
            height: 190,
            weight: 86,
            team: 'AS Roma',
            position: 'Goalkeeper',
            birthDate: 15-2-1988,
            age: 33,
            nacionality: 'Portugal',
        },
    ]

};

module.exports = players;