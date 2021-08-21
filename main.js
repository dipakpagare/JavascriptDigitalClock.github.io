const DigitalClock = () => {
  function updateClock() {
    //initiating and assigning javascript  date function to CurrentDate variable
    let CurrentDate = new Date();

    //Code for showing current hours
    let Hour = CurrentDate.getHours().toLocaleString();

    //Code for showing current minutes
    let Minute = CurrentDate.getMinutes().toLocaleString();

    //Code for showing current seconds
    let Second = CurrentDate.getSeconds().toLocaleString();

    //Initiating Hour, Minute and Second
    let getHour = document.getElementById("hourid");
    let getMinute = document.getElementById("minuteid");
    let getSecond = document.getElementById("secondid");

    //Showing the time in the html elements by targetting their id's
    if (Hour <= 9) {
      getHour.innerHTML = `${0 + Hour}:`;
    } else if (Minute <= 9) {
      getMinute.innerText = `${0 + Minute}:`;
    } else if (Second <= 9) {
      getSecond.innerText = `${0 + Second}`;
    } else {
      getHour.innerHTML = `${Hour}:`;
      getMinute.innerText = `${Minute}:`;
      getSecond.innerText = `${Second}`;
    }
  }
  updateClock();
  //code for update the clock every second
  let oneSecond = 1000;
  setInterval(updateClock, oneSecond);

  const tickingSound = () => {
   
    let volOn = document.getElementById("volume_on");
    let volOff = document.getElementById("volume_off");
   
    volOn.addEventListener("click", function () {
      document.querySelector("audio").play();
    });
    volOff.addEventListener("click", function () {
      document.querySelector("audio").pause();
    });
  };

  tickingSound();
};
DigitalClock();
