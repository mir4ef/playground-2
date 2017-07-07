/**
 * Created by miroslav.georgiev on 2/8/17.
 */

(function () {
    'use strict';

    class Country {
        constructor (country, continent) {
            this.country = country;
            this.continent = continent;
        }

        print() {
            console.log(`${this.country} is in ${this.continent}.`);
        }

        // unnecessary, but is here as an example
        get countryName() {
            return this.country;
        }
    }

    class League extends Country {
        constructor (league, country) {
            super(country.country, country.continent);

            this.league = league;
        }

        print() {
            console.log(`${this.league} is ${this.country}'s top division.`);
            super.print();
        }
    }

    class Team extends League {
        constructor (team, city, league) {
            const countryInfo = {
                'country': league.country,
                'continent': league.continent
            };

            super(league.league, countryInfo);

            this.team = team;
            this.city = city;
        }

        print() {
            console.log(`${this.team} is from ${this.country} and its home games are in ${this.city}.`);
            super.print();
        }
    }

    const country = new Country('Bulgaria', 'Europe');
    const league = new League('A PFL', country);
    const team = new Team('CSKA Sofia', 'Sofia', league);
    team.print();
})();