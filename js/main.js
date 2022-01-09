const library = {
  energy: ["jang", "jin"],
  balance: ["strong", "weak", "imbalace", "balance"],
  action: [
    "burify your body",
    "rest",
    "do vigorous exercises",
    "study",
    "bonder your life",
  ],
};

const getIndex = (maxLength) => Math.floor(Math.random() * maxLength);

const createMessage = () => {
  const energy = library.energy[getIndex(library.energy.length)];
  const balance = library.balance[getIndex(library.balance.length)];
  const action = library.action[getIndex(library.action.length)];
  const message = `Your energy is ${energy} and it is ${balance} now. Your should ${action}.`;
  return message;
};

const showMessage = () => {
  document.getElementById("message").innerHTML = createMessage();
};

showMessage();
