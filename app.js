 const images = ['imgs/1.png', 'imgs/2.png', 'imgs/3.png', 'imgs/4.png', 'imgs/5.png', 'imgs/6.png', 'imgs/7.png','imgs/8.png', 'imgs/9.png', 'imgs/10.png', 'imgs/11.png','imgs/12.png','imgs/13.png' ]
  let i = 0;
  const progressLegth = images.length;
  let intervalTime = 220;

  let interval = setInterval(() => {
      i++;
      if (i <= images.length) {
          document.getElementById('imgPlayer').src = images[i-1];
          document.getElementById('progressColorLine').style.width = `${(i/progressLegth)*100}%`;
      } else {
          // clearInterval(interval);
          i = 0;
      }
  }, intervalTime);

  progressClick = () => {
      
      const progressLine = document.getElementById('progressLine');
      const progressColorLine = document.getElementById('progressColorLine');
      const progressLinePosition = progressLine.getBoundingClientRect();
      const progressLineX = progressLinePosition.x;
      const progressLineWidth = progressLinePosition.width;
      const progressLineClickedPosition = event.clientX;
      const progressLineClickedPositionX = progressLineClickedPosition - progressLineX;
      const progressLineClickedPositionPercentage = (progressLineClickedPositionX/progressLineWidth)*100;
      const progressLineClickedPositionPercentageRounded = Math.round(progressLineClickedPositionPercentage);
      const progressLineClickedPositionPercentageRoundedIndex = Math.round((progressLineClickedPositionPercentageRounded/100)*progressLegth);
      console.log("progressLineClickedPositionPercentageRoundedIndex: ", progressLineClickedPositionPercentageRoundedIndex);
      
      document.getElementById('imgPlayer').src = images[progressLineClickedPositionPercentageRoundedIndex-1];
      
      progressColorLine.style.width = `${progressLineClickedPositionPercentageRounded}%`;
      
      i = progressLineClickedPositionPercentageRoundedIndex;
      justStop();

  }

  let intervalStatus = true;

  justStop = () => {
      clearInterval(interval);
      intervalStatus = false;
      document.getElementById('intervalStatusText').innerHTML = "Continue";
  }

  stopOrContinue = () => {
      // stop or continue the interval
      if (intervalStatus) {
          clearInterval(interval);
          intervalStatus = false;
      } else {
          intervalStatus = true;
          interval = setInterval(() => {
              i++;
              if (i <= images.length) {
                  document.getElementById('imgPlayer').src = images[i-1];
                  document.getElementById('progressColorLine').style.width = `${(i/progressLegth)*100}%`;
              } else {
                  // clearInterval(interval);
                  i = 0;
              }
              console.log("i: ", i);
          }, intervalTime);
      }

      if (intervalStatus) {
          document.getElementById('intervalStatusText').innerHTML = "Stop";
      } else {
          document.getElementById('intervalStatusText').innerHTML = "Continue";
      }
  }

