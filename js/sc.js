const string =
  "Pengembang Video Game Indie, Mengembangkan Video Game Mobile Untuk Android";
const str = string.split("");
const el = document.getElementById("typing");
(function animate() {
  str.length > 0 ? (el.innerHTML += str.shift()) : clearTimeout(running);
  const running = setTimeout(animate, 50);
})();

const arrLink = [
  "https://media.giphy.com/media/l3vRnoppYtfEbemBO/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXA3dG51ZnM1emduOTF6MzZoaXhrczV5YnJ6NzExMXA1NTBjMWpyaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/U3qYN8S0j3bpK/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3o2NmgxcG9nNW41NHV2Mnpzc3E3M3lkbmM4ZDk4MDM1eHFqbDd0MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohhwNqFMnb7wZgNnq/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmo2Z2E4NjN5ZWw1NTNqcHFhcG44dTUyczFoaW5vbzZncmY3Y293aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xUPGcshrKRahaS8ef6/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDZvemFxa3F5amt1dDRneWF3ZWg1M3c2Yng0Zm5iZ3ZuaGxiYjFyNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hFhygTRHt4jvGQo52q/giphy-downsized-large.gif",
];
function randomSet(arrLink) {
  const randomIndex = Math.floor(Math.random() * arrLink.length);
  const item = arrLink[randomIndex];
  return item;
}
const result = randomSet(arrLink);
document.getElementById("hero").style.backgroundImage = "url(" + result + ")";
