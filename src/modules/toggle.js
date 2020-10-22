import convertToF from './converterToF';

const toggleBtn = document.getElementById('toggle');

const toggleTemp = (temp, inCels) => {
  toggleBtn.addEventListener('click', () => {
    if (temp.textContent === `Temperature: ${inCels}\xB0C`) {
      temp.textContent = `Temperature: ${convertToF(inCels)}\xB0F`;
    } else {
      temp.textContent = `Temperature: ${inCels}\xB0C`;
    }
  });
};

export default toggleTemp;
