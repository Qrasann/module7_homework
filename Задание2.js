//Задание2
const games = {
  single:"TheWitcher",
  online:"Battlefield",
}
function check(str, games){
  return (str in games);
}
check("online", games);
