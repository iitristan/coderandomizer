var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charactersLength = 16;
var result = "";
var x = 0;

for (var x = 0; x < 20; x++) { //loop 20x
    result = "";
    for (var i = 0; i < charactersLength; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log("https://discord.gift/" + result);
}

// 4.767240170682353e+28 number of combinations 