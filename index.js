// starting x and y
        let x = 0;
        let y = 0;

        // used to stop movement
        let intervalId = null;

        // start button function
        function startMoving() {

            // message
            document.getElementById("msg").innerHTML = "Moving";

            // get image
            const img = document.getElementById("memeImage");

            // let it move around
            img.style.position = "absolute";

            // make sure it doesnt start twice
            if (intervalId !== null) {
                return;
            }

            // move image every 20 ms
            intervalId = setInterval(function() {

                // add movement
                x += 3;
                y += 3;

                // set new position
                img.style.left = x + "px";
                img.style.top = y + "px";

            }, 20);
        }

        // stop button function
        function stopMoving() {

            // message
            document.getElementById("msg").innerHTML = "Stopped";

            // stop movement
            clearInterval(intervalId);
            intervalId = null;
        }