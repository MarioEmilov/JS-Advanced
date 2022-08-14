class SmartHike {
    constructor(username, goals, listOfHikes, resourses) {
        this.username = username;
        this.goals = goals;
        this.goals = {};
        this.listOfHikes = listOfHikes;
        this.listOfHikes = [];
        this.resourses = resourses;
        this.resourses = 100;
    }

    addGoal(peak, altitude) {
        if (this.goals.hasOwnProperty(peak) == true) {
            return `${peak} has already been added to your goals`;
        } else {
            this.goals[peak] = altitude;
            return `You have successfully added a new goal - ${peak}`;
        }
    }

    hike(peak, time, difficultyLevel) {
        time = Number(time);
        if (this.goals.hasOwnProperty(peak) == false) {
            throw new Error(`${peak} is not in your current goals`);
        }
        if (this.resourses <= 0) {
            throw new Error("You don't have enough resources to start the hike");
        }

        let neededResources = time * 10;
        this.resourses -= neededResources;
        if (this.resourses < 0) {
            return "You don't have enough resources to complete the hike";
        }

        let currectHike = { peak, time, difficultyLevel };
        this.listOfHikes.push(currectHike);

        return `You hiked ${peak} peak for ${time} hours and you have ${this.resourses}% resources left`;
    }

    rest(time) {
        let newRecourses = time * 10;
        this.resourses += newRecourses;
        if (this.resourses >= 100) {
            this.resourses = 100;
            return `Your resources are fully recharged. Time for hiking!`;
        }

        return `You have rested for ${time} hours and gained ${time * 10}% resources`;
    }

    showRecord(criteria) {
        if (this.listOfHikes.length < 0) {
            return `${this.username} has not done any hiking yet`;
        }

        if (criteria == 'hard') {
            if (this.listOfHikes.filter(x => x.difficultyLevel == criteria).length < 0) {
                return `${this.username} has not done any ${criteria} hiking yet`
            }

            let listOfHardOnly = this.listOfHikes.filter(x => x.difficultyLevel == 'hard');
            let listOfOnlyValues = listOfHardOnly.filter(x => x.time);
            let lowestNum = Math.min(listOfOnlyValues);

            for (let el of this.listOfHikes) {
                if (el.time == lowestNum) {
                    return `${this.username}'s best ${criteria} hike is ${this.peak} peak, for ${this.time} hours`
                }
            }

        } else if (criteria == 'easy') {
            let newList = [];
            for (const el of this.listOfHikes) {
                if (el.difficultyLevel == criteria) {
                    newList.push(el);
                }
            }

            if (newList.length < 0) {
                return `${this.username} has not done any ${criteria} hiking yet`;
            }

            let listOfHardOnly = this.listOfHikes.filter(x => x.difficultyLevel == 'easy');
            let listOfOnlyValues = listOfHardOnly.filter(x => x.time);
            let lowestNum = Math.min(listOfOnlyValues);

            for (let el of this.listOfHikes) {
                if (el.time == lowestNum) {
                    return `${this.username}'s best ${criteria} hike is ${this.peak} peak, for ${this.time} hours`
                }
            }

        } else if (criteria == 'all') {
            let result = 'All hiking records:\n';
            for (let el of this.listOfHikes) {
                result += `${this.username} hiked ${el.peak} for ${el.time} hours\n`;

            }

            return result;
        }
    }
}