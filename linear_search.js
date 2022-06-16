// const friends = [
//   "Spidernam",
//   "Ironman",
//   "Antman",
//   "Goatman",
//   "Cowman",
//   "Snackman",
// ];
const friends = [12, 23, 34, 45, 56, 67, 78, 789];

for (let i = 0; i < friends.length; i++) {
  const element = friends[i];
  if (element == 78) {
    return i;
  }
}
