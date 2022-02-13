const input = document.getElementById("input") as HTMLInputElement;

input.addEventListener("input", (event) => {
 //console.log("Digitei");
  const i = event.currentTarget as HTMLInputElement;
  const value = i.value
  console.log(value)
});
  