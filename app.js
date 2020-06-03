var movies = [
  {
    name: "Dhoom1",
    rating: 4,
    isWatched: true,
  },
  {
    name: "Dhoom2",
    rating: 4.5,
    isWatched: false,
  },
];

console.log(movies[0].name);
for (x of movies) {
  var tp = x.isWatched ? "seen" : "not seen";
  console.log(`you have ${tp} ${x["name"]} rating - '${x.rating}'`);
}
