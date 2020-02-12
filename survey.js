const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let profile = {};
rl.question("What's your name? Nicknames are also acceptable :)", answer => {
  profile["name"] = answer;
  rl.question("What's an activity you like doing?", answer => {
    profile["activity"] = answer;
    rl.question("What do you listen to while doing that?", answer => {
      profile["fav-music"] = answer;
      rl.question(
        "Which meal is your favourite (eg: dinner, brunch, etc.)",
        answer => {
          profile["fav-meal"] = answer;
          rl.question(
            "What's your favourite thing to eat for that meal?",
            answer => {
              profile["fav-food"] = answer;
              rl.question("Which sport is your absolute favourite?", answer => {
                profile["fav-sport"] = answer;
                rl.question(
                  "What is your superpower? In a few words, tell us what you are amazing at!",
                  answer => {
                    profile["superpower"] = answer;
                    console.log(
                      `My name is: ${profile["name"]}\nMy activity: ${profile["activity"]}\nMy favourite music: ${profile["fav-music"]}\nMy favourite meal: ${profile["fav-meal"]}\nMy favourite food: ${profile["fav-food"]}\nMy favourite sport: ${profile["fav-sport"]}\nSuper Power: ${profile["superpower"]}`
                    );
                    rl.close();
                  }
                );
              });
            }
          );
        }
      );
    });
  });
});
