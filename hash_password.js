const bcrypt = require('bcryptjs');

const plainPassword = "King@526691"; // 🔴 Replace with your real password

bcrypt.hash(plainPassword, 10, (err, hash) => {
  if (err) {
    console.error("Error hashing password:", err);
  } else {
    console.log("New Hashed Password:", hash);
  }
});
