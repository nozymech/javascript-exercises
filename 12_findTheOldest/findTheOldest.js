const findTheOldest = function(people) {
    for (let j=0; j<people.length; j++ ){
        if (people[j].yearOfDeath == undefined){
            const d = new Date();
            people[j].yearOfDeath = d.getFullYear();
        }
    }
    people[0].livingTime = people[0].yearOfDeath - people[0].yearOfBirth ;
    people[1].livingTime = people[1].yearOfDeath - people[1].yearOfBirth ;
    people[2].livingTime = people[2].yearOfDeath - people[2].yearOfBirth ;
        let oldestMan = people[0];
        for (let i=1 ; i< people.length ; i++) {
            if(people[i].livingTime > oldestMan.livingTime) {
                oldestMan = people[i]; 
            }
        }
  return oldestMan;
};

// Do not edit below this line
module.exports = findTheOldest;
