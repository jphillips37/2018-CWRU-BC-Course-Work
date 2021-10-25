var friends = require("../data/friends.js");

module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var newFriend = req.body;
    var userDiffArray = [];
    var diff = 0;

    for(i=0; i < friends.length; i++){
      for(j=0; j < friends.scores.length; j++){
        if(newFriend.scroes[j] != friends[i].scores[j]){
          diff += newFriend.scroes[j] - friends[i].scores[j];
        }
      }
      userDiffArray.push(diff)
    }

    var bestMatch = friends[Math.min(userDiffArray)];

    // need to push "bestMatch" values to the survey.html page after the submit button is clicked.
    
    friends.push(newFriend);  
  });
};

