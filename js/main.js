const textPeas = document.getElementById("peas");
const textSausage = document.getElementById("sausage");
const textEggs = document.getElementById("eggs");
const textPotato = document.getElementById("potato");
const textPickle = document.getElementById("pickles");
const textCarrot = document.getElementById("carrot");
const textMayo = document.getElementById("mayo");

const portionPeas = 37.5;
const portionSausage = 75;
const portionEggs = 0.8;
const portionPotato = 0.8;
const portionPickle = 0.5;
const portionCarrot = 0.3;
const portionMayo = 0.8;

let weight = document.getElementById("salad-weight");

const CountAmountOfIngradients = () => {
  const guestCount = Number(document.getElementById("guests-count").value);
  if (guestCount > 0) {
    textPeas.innerHTML = (portionPeas * guestCount).toFixed(0) + "g";
    textSausage.innerHTML = (portionSausage * guestCount).toFixed(0) + "g";
    textEggs.innerHTML = (portionEggs * guestCount).toFixed(1) + " pcs";
    textPotato.innerHTML = (portionPotato * guestCount).toFixed(1) + " pcs";
    textPickle.innerHTML = (portionPickle * guestCount).toFixed(1) + " pcs";
    textCarrot.innerHTML = (portionCarrot * guestCount).toFixed(1) + " pcs";
    textMayo.innerHTML = (portionMayo * guestCount).toFixed(1) + " tbsp";

    let sumWeight = (
      (portionCarrot +
        portionEggs +
        portionMayo +
        portionPeas +
        portionPickle +
        portionPotato +
        portionPotato +
        portionSausage) *
      guestCount
    ).toFixed(0);

    weight.innerHTML = `Summary salad's weight is: <br> ${sumWeight}g`;
    console.log("h");
  } else {
    textPeas.innerHTML = 0 + "g";
    textSausage.innerHTML = 0 + "g";
    textEggs.innerHTML = 0 + " pcs";
    textPotato.innerHTML = 0 + " pcs";
    textPickle.innerHTML = 0 + " pcs";
    textCarrot.innerHTML = 0 + " pcs";
    textMayo.innerHTML = 0 + " tbsp";
    document.getElementById("guests-count").value = 0;
    weight.innerHTML = `Summary salad's weight is: <br> 0g`;
  }
};
