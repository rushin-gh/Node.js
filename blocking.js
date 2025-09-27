console.log("Execution Started");

const crypto = require("crypto");

crypto.pbkdf2("password", "salt", 1000001, 50, "sha512", (err, key) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("Generated async key = " + key.toString("hex"));
});

const syncKey = crypto.pbkdf2Sync("password", "salt", 1000001, 50, "sha512");
console.log("Generated sync key = " + syncKey.toString("hex"));

console.log("Execution Ended");
