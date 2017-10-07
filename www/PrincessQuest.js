	//Variables Section
	//Knight Variables
	var knight; // name of my image holder
	var sWidth = 147;
	var sHeight = 300;
	var cFrame = 0; // the current frame it is on
	var knightX = 0;
	var knightY = 175;
	var knightFront = knightX + 150;
	var knightBack = knightX - 5;
	var speech1X = 600;
	var speech1Y = 600;

	//Other Character variables
	var princess;
	var wizard;
	var sWidth2 = 204;
	var sHeight2 = 212;
	var sWidth3 = 29;
	var sHeight3 = 130;
	var tFrame = 10; // total frames
	var princessX = 340;
	var princessY = 160;
	var wizardX = 450;
	var wizardY = 145;
	var speech1;
	var speech1Width = 200;
	var speech1Height = 120;
	var speech2;
	var speech2X = 600;
	var speech2Y = 600;
	var speech2Width = 350;
	var speech2Height = 150;
	var p = 0;
	var cFrame2Number = 7;
	var cFrame3Number = 44;


	//Wizard Room Variables
	var wAlert = 0;
	var w = 0;
	var wizardComplete = false;

	//Dial Room Variables
	var cr1complete = false
	var currentdial = 1;
	var cFrame2 = 0;
	var cFrame3 = 0;
	var cFrame4 = 0;
	var dial2;
	var dial3;
	var dial4;
	var dialAlert = 0;
	var dialSuccess = 0;
	var dialWidth = 127;
	var dialHeight = 300;
	var dialtFrame = 10;
	var dialcFrame = 0;
	var dial1;
	var dial2;
	var dial3;
	var dial4;
	var dialX = 110;
	var dialY = 40;
	var interval = 33
	var currentdial = 1;
	var dialcFrame2 = 0;
	var dialcFrame3 = 0;
	var dialcFrame4 = 0;
	var underDial = 0;
	var Q1;
	var Q1Y = 700;
	var Q2;
	var Q3;
	var Q4;

	//Memory Room Variables
	var memoryAlert = 0;
	var memorySuccess = 0;
	var memoryAlert = 0;
	var memorySuccess = 0;
	var memoryRoomComplete = false;
	var axe;
	var axe1Y = 50
	var axe2Y = 175
	var hammer;
	var hammer1Y = 50
	var hammer2Y = 175
	var sword;
	var sword1Y = 50
	var sword2Y = 175
	var mace;
	var mace1Y = 50
	var mace2Y = 175
	var desiredX = 0;
	var desiredY = 0;
	var back1;
	var back2;
	var back3;
	var back4;
	var back5;
	var back6;
	var back7;
	var back8;
	var back1X = 150;
	var back2X = 255;
	var back3X = 360;
	var back4X = 465;
	var back5X = 150;
	var back6X = 255;
	var back7X = 360;
	var back8X = 465;
	var clickCount = 0;
	var card1Clicked = false;
	var card2Clicked = false;
	var card3Clicked = false;
	var card4Clicked = false;
	var card5Clicked = false;
	var card6Clicked = false;
	var card7Clicked = false;
	var card8Clicked = false;
	var swordsFound = false;
	var axesFound = false;
	var hammersFound = false;
	var macesFound = false;
	var pairsFound = 0;
	var turnedCard = 0;

	//Princess Room Variables
	var princessAlert = 0
	var princessSuccess = 0;
	var princessWidth = 104;
	var princessHeight = 161;
	var princessCFrameTotal = 9
	var princessComplete = false;
	var PriAnswer1;
	var incorrectAnswer = 0;

	//Date Room Variables
	var dateAlert = 0;
	var dateSuccess = 0;
	var dateFailure = 0
	var dateFailed = false;
	var datesRoomComplete = false;
	var berlin;
	var berlinX = 150;
	var berlinXRedge = 220
	var berlinXLedge = 135
	var berlinY = 150;
	var berlinW = 100;
	var berlinH = 120;
	var BoH;
	var BoHX = 255;
	var BoHXRedge = 330
	var BoHXLedge = 240
	var BoHY = 150;
	var BoHW = 100;
	var BoHH = 120;
	var london;
	var londonX = 360;
	var londonXRedge = 440
	var londonXLedge = 345
	var londonY = 150;
	var londonW = 100;
	var londonH = 120;
	var moon;
	var moonX = 465;
	var moonXRedge = 535
	var moonXLedge = 450
	var moonY = 150;
	var moonW = 100;
	var moonH = 120;
	var timeline;
	var underDate = 0;
	var pickedup = false;
	var banner;

	//Other Game Play Variables
	var interval = 10;
	var background;
	var backgroundX = 0;
	var backgroundY = 0;
	var backgroundWidth = 800;
	var backgroundHeight = 450;
	var exit;
	var closedDoor;
	var closedDoorX = 600;
	var closedDoorY = 145;
	var openDoorLeft;
	var openDoorLeftX = 600;
	var openDoorLeftY = 600;
	var openDoorRight;
	var openDoorRightX = 750;
	var openDoorRightY = 600;
	var finalDoor;
	var room = 0;
	var exitX = 480;
	var exitY = 95;
	var entranceX = -15;
	var entranceY = 160;



	window.onload = function() {
	    // Init canvas and graphics context
	    canvas = document.getElementById("myCanvas");
	    gc = canvas.getContext("2d");
	    knight = document.getElementById("knightR");
	    princess = document.getElementById("princessCry");
	    wizard = document.getElementById("wizardIdle");
	    speech1 = document.getElementById("knightSpeech0");
	    speech2 = document.getElementById("knightSpeech0");
	    background = document.getElementById("background");
	    closedDoor = document.getElementById("closedDoor");
	    openDoorLeft = document.getElementById("openDoorLeft");
	    openDoorRight = document.getElementById("openDoorRight");
	    entrance = document.getElementById("exitDoor");
	    document.addEventListener("keydown", keyDownHandler, false);
	    document.addEventListener("keyup", keyUpHandler, false);
	    document.addEventListener("click", handleClick, false);
	    window.setInterval(render, interval);
	    dial1 = document.getElementById("dial1");
	    dial2 = document.getElementById("dial2");
	    dial3 = document.getElementById("dial3");
	    dial4 = document.getElementById("dial4");
	    arrow = document.getElementById("arrow");
	    Q1 = document.getElementById("math1");
	    Q2 = document.getElementById("math2");
	    Q3 = document.getElementById("math3");
	    Q4 = document.getElementById("math4");
	    axe = document.getElementById("axe");
	    sword = document.getElementById("sword");
	    mace = document.getElementById("mace");
	    hammer = document.getElementById("hammer");
	    back1 = document.getElementById("back1");
	    back2 = document.getElementById("back2");
	    back3 = document.getElementById("back3");
	    back4 = document.getElementById("back4");
	    back5 = document.getElementById("back5");
	    back6 = document.getElementById("back6");
	    back7 = document.getElementById("back7");
	    back8 = document.getElementById("back8");
	    berlin = document.getElementById("berlin");
	    BoH = document.getElementById("BoH");
	    london = document.getElementById("london");
	    moon = document.getElementById("moon");
	    timeline = document.getElementById("timeline");
	    banner = document.getElementById("success1");
	}

	function render() {

	    gc.drawImage(background, backgroundX, backgroundY, backgroundWidth, backgroundHeight);
	    if (room == 1) {
	        gc.drawImage(Q1, 110, Q1Y, 127, 110);
	        gc.drawImage(Q2, 240, Q1Y, 127, 110);
	        gc.drawImage(Q3, 370, Q1Y, 127, 110);
	        gc.drawImage(Q4, 500, Q1Y, 127, 110);
	    }
	    gc.drawImage(openDoorLeft, openDoorLeftX, openDoorLeftY, 180, 200);
	    gc.drawImage(knight, cFrame * sWidth, 0, sWidth, sHeight, knightX, knightY, sWidth, sHeight);
	    gc.drawImage(entrance, entranceX, entranceY, 50, 180);
	    gc.drawImage(speech1, speech1X, speech1Y, speech1Width, speech1Height);
	    gc.drawImage(speech2, speech2X, speech2Y, speech2Width, speech2Height);
	    gc.drawImage(closedDoor, closedDoorX, closedDoorY, 180, 200);
	    gc.drawImage(openDoorRight, openDoorRightX, openDoorRightY, 70, 200);
	    cFrame3++;

	    //Recycles Sprite 2 after the max number of frames in Sprite 2
	    if (cFrame2 > cFrame2Number) {
	        cFrame2 = 0
	    }
	    if (cFrame3 > cFrame3Number) {
	        cFrame3 = 0
	    }
	    //--------------------------------------------Room Selection------------------------------------------



	    //--------------------------------------------Wizard Room---------------------------------------------
	    if (room == 0) {
	        gc.drawImage(wizard, cFrame2 * sWidth2, 0, sWidth2, sHeight2, wizardX, wizardY, sWidth2, sHeight2);

	        //Changes the Wizard from looking away to looking at the knight when he gets close enough
	        if (knightX > 100) {
	            if (wizardComplete == false) {
	                wizard = document.getElementById("wizardIdle2");
	                wizardY = 140;
	                document.getElementById("debug").innerHTML = "Press Enter to talk to the Wizard";
	                if (knightX > 285) {
	                    knightX = 285;
	                }
	            } else if (wizardComplete == true) {

	                wizardY = 135;
	                wizard = document.getElementById("wizardIdle3");
	                closedDoorY = 600;
	                openDoorLeftY = 145;
	                openDoorRightY = 145;
	            }

	        }

	        //Instructions pop up
	        while (wAlert < 2) {
	            wizardInstructions();
	            wAlert++;
	        }

	        function wizardInstructions() {
	            swal("Instructions", "You must talk to the Wizard to escape from this room.")
	        }
	    }
	    //--------------------------------------------Challenge Room 1------------------------------------------
	    if (room == 1) {
	        closedDoorY = 145;
	        Q1Y = 200;
	        document.getElementById("debug").innerHTML = "Use UP and DOWN keys to change the number on the dial that you are stood under. Press Enter when you are ready to submit your answer.";
	        gc.drawImage(dial1, dialcFrame * dialWidth, 0, dialWidth, dialHeight, dialX, dialY, dialWidth, dialHeight);
	        gc.drawImage(dial2, dialcFrame2 * dialWidth, 0, dialWidth, dialHeight, 240, dialY, dialWidth, dialHeight);
	        gc.drawImage(dial3, dialcFrame3 * dialWidth, 0, dialWidth, dialHeight, 370, dialY, dialWidth, dialHeight);
	        gc.drawImage(dial4, dialcFrame4 * dialWidth, 0, dialWidth, dialHeight, 500, dialY, dialWidth, dialHeight);
	        gc.drawImage(arrow, 145, 10, 60, 30);
	        gc.drawImage(arrow, 275, 10, 60, 30);
	        gc.drawImage(arrow, 405, 10, 60, 30);
	        gc.drawImage(arrow, 535, 10, 60, 30);


	        if (cr1complete == false) {
	            closedDoorX = 620;
	            openDoorLeftY = 700;
	            openDoorRightY = 700;
	            if (knightX > 500) {
	                knightX = 500;
	            }

	            //Working out which dial the knight is stood under
	            if (knightX > 75 && knightX < 190) {
	                underDial = 1;
	            } else if (knightX > 191 && knightX < 310) {
	                underDial = 2;
	            } else if (knightX > 331 && knightX < 430) {
	                underDial = 3;
	            } else if (knightX > 431 && knightX < 535) {
	                underDial = 4;
	            }
	        } else if (cr1complete == true) {
	            closedDoorY = 900;
	            openDoorLeftY = 145;
	            openDoorRightY = 145;
	            desiredX = 0;
	            desiredY = 0;
	            while (dialSuccess < 2) {
	                swal("Well Done!", "Your code is correct", "success")
	                dialSuccess++;
	            }
	        }

	        //Instruction pop up
	        while (dialAlert < 2) {
	            dialInstructions();
	            dialAlert++;
	        }

	        function dialInstructions() {
	            swal("Instructions", "You need to answer the maths question under each dial. <br> To change the dial stand underneath it and use the up and down keys to move the dial.")
	        }

	    }

	    //--------------------------------------------Memory Room ---------------------------------------------
	    if (room == 2) {

	        if (memoryRoomComplete == false) {
	            closedDoorY = 145;
	            openDoorLeftY = 900;
	            openDoorRightY = 900;
	            gc.drawImage(sword, 150, sword1Y, 100, 120);
	            gc.drawImage(axe, 255, axe1Y, 100, 120);
	            gc.drawImage(mace, 360, mace1Y, 100, 120);
	            gc.drawImage(hammer, 465, hammer1Y, 100, 120);
	            gc.drawImage(mace, 150, mace2Y, 100, 120);
	            gc.drawImage(hammer, 255, hammer2Y, 100, 120);
	            gc.drawImage(axe, 360, axe2Y, 100, 120);
	            gc.drawImage(sword, 465, sword2Y, 100, 120);
	            document.getElementById("debug").innerHTML = "Click a card to reveal its image. Match all pairs to escape this room"

	            if (knightX > 515) {
	                knightX = 515;
	            }

	            //Drawing the backs of the cards depending if they have been found or not. 
	            if (card1Clicked == false && swordsFound == false) {
	                gc.drawImage(back1, back1X, 50, 100, 120);
	            }
	            if (card2Clicked == false && axesFound == false) {
	                gc.drawImage(back2, back2X, 50, 100, 120);
	            }
	            if (card3Clicked == false && macesFound == false) {
	                gc.drawImage(back3, back3X, 50, 100, 120);
	            }
	            if (card4Clicked == false && hammersFound == false) {
	                gc.drawImage(back4, back4X, 50, 100, 120);
	            }
	            if (card5Clicked == false && macesFound == false) {
	                gc.drawImage(back5, back5X, 175, 100, 120);
	            }
	            if (card6Clicked == false && hammersFound == false) {
	                gc.drawImage(back6, back6X, 175, 100, 120);
	            }
	            if (card7Clicked == false && axesFound == false) {
	                gc.drawImage(back7, back7X, 175, 100, 120);
	            }
	            if (card8Clicked == false && swordsFound == false) {
	                gc.drawImage(back8, back8X, 175, 100, 120);
	            }
	            cardClicked();
	        } else if (memoryRoomComplete == true) {
	            closedDoorY = 900;
	            openDoorLeftY = 145;
	            openDoorRightY = 145;
	            while (memorySuccess < 2) {
	                swal("Well Done!", "You found all the pairs", "success")
	                memorySuccess++;

	            }

	        }

	        //Instructions Pop up
	        while (memoryAlert < 2) {
	            memoryInstructions();
	            memoryAlert++;
	        }

	        function memoryInstructions() {
	            swal("Instructions", "There are four pairs of cards hidden here. <br> You need to click on two at a time. <br> To escape this room you need to find all the pairs.")
	        }
	    }

	    //--------------------------------------------Princess Room---------------------------------------------
	    if (room == 3) {
	        gc.drawImage(princess, cFrame2 * sWidth2, 0, sWidth2, sHeight2, princessX, princessY, sWidth2, sHeight2);
	        cFrame2++;
	        sWidth2 = 133;
	        sHeight2 = 156;
	        cFrame2Number = 49;
	        princessY = 190;
	        closedDoorY = 145;
	        openDoorLeftY = 600;
	        openDoorRightY = 600;
	        document.getElementById("debug").innerHTML = ""

	        //Changing the priness from crying to not crying depending on how close the knight is. 
	        if (knightX > 150) {
	            cFrame2Number = princessCFrameTotal;
	            sWidth2 = princessWidth;
	            sHeight2 = princessHeight;
	            princessX = 355;

	            if (princessComplete == false) {
	                princess = document.getElementById("princessLstand");
	                closedDoorY = 145;
	                openDoorLeftY = 600;
	                openDoorRightY = 600;
	                if (knightX > 190) {
	                    knightX = 190;
	                }

	            }

	            //Completeting the room if the user answers more than 2 questions correctly
	            if (princessComplete == true && incorrectAnswer < 3) {
	                princessWidth = 102;
	                princessHeight = 156;
	                princess = document.getElementById("princessLove");
	                closedDoorY = 900;
	                openDoorLeftY = 145;
	                openDoorRightY = 145;
	                while (memorySuccess < 2) {
	                    swal("Well Done!", "You answered at least 2 of the questions correctly", "success")
	                    memorySuccess++;
	                }
	            }
	            //Completeting the room if the user did not answer more than 2 questions correctly
	            if (princessComplete == true && incorrectAnswer >= 3) {
	                princess = document.getElementById("princessCry");
	                sWidth2 = 133;
	                sHeight2 = 156;
	                cFrame2Number = 49;
	                princessY = 190;

	                closedDoorY = 900;
	                openDoorLeftY = 145;
	                openDoorRightY = 145;
	                while (memorySuccess < 2) {
	                    swal("Ooops!", "You answered at least 2 of the questions incorrectly, the Princess lets you go but you do not have her heart", "error")
	                    memorySuccess++;
	                }


	            }
	            document.getElementById("debug").innerHTML = "Press Enter to talk to the Princess";
	        }
	        while (princessAlert < 2) {
	            princessInstructions();
	            princessAlert++;
	        }

	        function princessInstructions() {
	            swal("Instructions", "You need to talk to the Princess to escape this room.")
	        }
	    }
	    if (knightX > 800) {
	        knightX = -20;
	        room++;
	    }
	    if (knightX < -45) {
	        knightX = 800;
	        room--;
	    }

	    //-------------------------Dates Room---------------------------------------------

	    if (room == 4) {
	        speech2X = 1000;
	        gc.drawImage(berlin, berlinX, berlinY, berlinW, berlinH);
	        gc.drawImage(BoH, BoHX, BoHY, BoHW, BoHH);
	        gc.drawImage(london, londonX, londonY, londonW, londonH);
	        gc.drawImage(moon, moonX, moonY, moonW, moonH);
	        gc.drawImage(timeline, 180, 70, 350, 80)
	        document.getElementById("debug").innerHTML = "Move the dates into chronological order. Press space to pick up a date and move it, press space to put it down again. Press enter when you're ready to submit your order.";
	        if (datesRoomComplete == false) {
	            closedDoorY = 145;
	            openDoorLeftY = 600;
	            openDoorRightY = 600;
	            if (knightX > 515) {
	                knightX = 515;
	            }

	            //Working out which event the knight is stood under. 
	            if (pickedup == true) {
	                if (underDate == 1) {
	                    berlinX = knightX;
	                    berlinXRedge = berlinX + 50;
	                    berlinXLedge = berlinX - 30;
	                }
	                if (underDate == 2) {
	                    BoHX = knightX;
	                    BoHXRedge = BoHX + 50;
	                    BoHXLedge = BoHX - 30
	                }
	                if (underDate == 3) {
	                    londonX = knightX;
	                    londonXRedge = londonX + 50;
	                    londonXLedge = londonX - 30
	                }
	                if (underDate == 4) {
	                    moonX = knightX;
	                    moonXRedge = moonX + 50;
	                    moonXLedge = moonX - 30

	                }
	            }
	        } else if (datesRoomComplete == true) {
	            closedDoorY = 900;
	            openDoorLeftY = 145;
	            openDoorRightY = 145;
	            while (dateSuccess < 2) {
	                swal("Well done!", "That is the correct order", "success")
	                dateSuccess++;
	            }
	        }

	        //Instructions Pop Up
	        while (dateAlert < 2) {
	            dateInstructions();
	            dateAlert++;
	        }

	        function dateInstructions() {
	            swal("Instructions", "There are four historical events on the wall. <br> You need to put them in chronological order to escape this room. <br> To pick up a date stand underneath it and press the space bar. When you are ready press the space bar to put it back down again. <br> When you think they are in the right order press enter.")
	        }

	    }

	    if (knightX > 800) {
	        knightX = -20;
	        room++;
	    }
	    if (knightX < -45) {
	        knightX = 800;
	        room--;
	    }


	    //Final Room --------------------------------------------------------------------------------------

	    if (room == 5) {
	        closedDoorY = 145;
	        closedDoor = document.getElementById("finalDoor")
	        openDoorLeftY = 900;
	        openDoorRightY = 900;
	        document.getElementById("debug").innerHTML = "";


	        if (incorrectAnswer < 3) {
	            gc.drawImage(banner, 150, 20, 500, 275);

	        } else if (incorrectAnswer > 2) {
	            banner = document.getElementById("success2");
	            gc.drawImage(banner, 150, 20, 500, 275);
	        }

	        if (knightX > 30) {
	            knightX = 30;
	        }
	    }

	}

	//--------------------------------------Functions------------------------------------------------
	//Function working out which card has been clicked by the user. It takes the location of the mouse click and compares it to the settings here. 
	function cardClicked() {

	        if (desiredX >= 150 && desiredX <= 250 && desiredY >= 50 && desiredY <= 170) {

	            card1Clicked = true;
	        }

	        if (desiredX >= 255 && desiredX <= 355 && desiredY >= 50 && desiredY <= 170) {

	            card2Clicked = true;

	        }
	        if (desiredX >= 360 && desiredX <= 460 && desiredY >= 50 && desiredY <= 170) {

	            card3Clicked = true;

	        }

	        if (desiredX >= 465 && desiredX <= 565 && desiredY >= 50 && desiredY <= 170) {

	            card4Clicked = true;

	        }

	        if (desiredX >= 150 && desiredX <= 250 && desiredY >= 175 && desiredY <= 295) {

	            card5Clicked = true;

	        }
	        if (desiredX >= 255 && desiredX <= 355 && desiredY >= 175 && desiredY <= 295) {

	            card6Clicked = true;


	        }
	        if (desiredX >= 360 && desiredX <= 460 && desiredY >= 175 && desiredY <= 295) {

	            card7Clicked = true;


	        }
	        if (desiredX >= 465 && desiredX <= 565 && desiredY >= 175 && desiredY <= 295) {

	            card8Clicked = true;
	        }

	        //If the sword cards are clicked
	        if (card1Clicked == true && card8Clicked == true) {
	            sword = document.getElementById("swordFound");
	            window.setTimeout('deleteSwordCards()', 1000);
	            swordsFound = true;
	        }
	        //If the sword cards are not clicked
	        if (card1Clicked == true && (card2Clicked == true || card3Clicked == true || card4Clicked == true || card5Clicked == true || card6Clicked == true || card7Clicked == true)) {
	            window.setTimeout('flipBackCards()', 1000);
	        }

	        //If the Axe cards are clicked
	        if (card2Clicked == true && card7Clicked == true) {
	            axe = document.getElementById("axeFound");
	            window.setTimeout('deleteAxeCards()', 1000);
	            axesFound = true;
	        }
	        //If the Axe cards are not clicked
	        if (card2Clicked == true && (card3Clicked == true || card4Clicked == true || card5Clicked == true || card6Clicked == true || card8Clicked == true)) {
	            window.setTimeout('flipBackCards()', 1000);
	        }

	        //If the Mace cards are clicked
	        if (card3Clicked == true && card5Clicked == true) {
	            mace = document.getElementById("maceFound");
	            window.setTimeout('deleteMaceCards()', 1000);
	            macesFound = true;
	        }
	        //If the Mace cards are not clicked
	        if (card3Clicked == true && (card4Clicked == true || card6Clicked == true || card7Clicked == true || card8Clicked == true)) {
	            window.setTimeout('flipBackCards()', 1000);
	        }
	        //If the Hammer cards are clicked
	        if (card4Clicked == true && card6Clicked == true) {
	            hammer = document.getElementById("hammerFound");
	            window.setTimeout('deleteHammerCards()', 1000);
	            hammersFound = true;
	        }
	        //If the Hammer cards are not clicked
	        if (card4Clicked == true && (card5Clicked == true || card7Clicked == true || card8Clicked == true)) {
	            window.setTimeout('flipBackCards()', 1000);
	        }
	        //Checking if all pairs have been found
	        if (axesFound == true && swordsFound == true && macesFound == true && hammersFound == true) {
	            memoryRoomComplete = true;
	        }

	    }
	    //Flips all cards back over
	function flipBackCards() {
	        card1Clicked = false;
	        card2Clicked = false;
	        card3Clicked = false;
	        card4Clicked = false;
	        card5Clicked = false;
	        card6Clicked = false;
	        card7Clicked = false;
	        card8Clicked = false;
	        desiredX = 0;
	        desiredY = 0;
	    }
	    //Removes the sword cards from view
	function deleteSwordCards() {

	        sword1Y = 1000;
	        sword2Y = 1000;
	        back1X = 1000;
	        back8X = 1000;
	        card1Clicked = false;
	        card2Clicked = false;
	        card3Clicked = false;
	        card4Clicked = false;
	        card5Clicked = false;
	        card6Clicked = false;
	        card7Clicked = false;
	        card8Clicked = false;


	    }
	    //Removes the mace cards from view
	function deleteMaceCards() {

	        mace1Y = 1000;
	        mace2Y = 1000;
	        back3X = 1000;
	        back5X = 1000;
	        card1Clicked = false;
	        card2Clicked = false;
	        card4Clicked = false;
	        card6Clicked = false;
	        card7Clicked = false;
	        card8Clicked = false;


	    }
	    //Removes the hammer cards from view
	function deleteHammerCards() {

	        hammer1Y = 1000;
	        hammer2Y = 1000;
	        back4X = 1000;
	        back6X = 1000;
	        card1Clicked = false;
	        card2Clicked = false;
	        card3Clicked = false;
	        card5Clicked = false;
	        card7Clicked = false;
	        card8Clicked = false;


	    }
	    //Removes the axecards from view
	function deleteAxeCards() {

	    axe1Y = 1000;
	    axe2Y = 1000;
	    back2X = 1000;
	    back7X = 1000;
	    card1Clicked = false;
	    card3Clicked = false;
	    card4Clicked = false;
	    card5Clicked = false;
	    card6Clicked = false;
	    card8Clicked = false;

	}


	//--------------------------------------Knight Movement------------------------------------------
	//Moved the knigt right
	function goRight() {
	        knight = document.getElementById("knightR");
	        knightX = knightX + 5;
	        cFrame++;
	        if (cFrame > 9) {
	            cFrame = 0
	        }
	    }
	    //Moved the knigt left
	function goLeft() {
	        knight = document.getElementById("knightL");
	        knightX = knightX - 5;
	        cFrame--;
	        if (cFrame < 0) {
	            cFrame = 9
	        }
	    }
	    //Sets the knight to idle
	function idleLeft() {
	        cFrame = 0;
	        knight = document.getElementById("knightIL");
	    }
	    //Sets the knight to idle
	function idleRight() {
	    cFrame = 0;
	    knight = document.getElementById("knightIR");
	}



	//--------------------------------------Dial Movements------------------------------------------
	//function to move the dial up depending on which dial the knight is stood under. 
	function dialUp() {
	    if (underDial == 1) {

	        dialcFrame = (dialcFrame + 1);
	        if (dialcFrame > 9) {
	            dialcFrame = 0
	        }
	    }
	    if (underDial == 2) {

	        dialcFrame2 = (dialcFrame2 + 1);
	        if (dialcFrame2 > 9) {
	            dialcFrame2 = 0
	        }
	    }
	    if (underDial == 3) {
	        dialcFrame3 = (dialcFrame3 + 1);
	        if (dialcFrame3 > 9) {
	            dialcFrame3 = 0
	        }
	    }
	    if (underDial == 4) {
	        dialcFrame4 = (dialcFrame4 + 1);
	        if (dialcFrame4 > 9) {
	            dialcFrame4 = 0
	        }
	    }
	}

	//function to move the dial down depending on which dial the knight is stood under. 
	function dialDown() {
	    if (underDial == 1) {
	        dialcFrame = (dialcFrame - 1);
	        if (dialcFrame < 0) {
	            dialcFrame = 9
	        }
	    }
	    if (underDial == 2) {
	        dialcFrame2 = (dialcFrame2 - 1);
	        if (dialcFrame2 < 0) {
	            dialcFrame2 = 9
	        }
	    }
	    if (underDial == 3) {
	        dialcFrame3 = (dialcFrame3 - 1);
	        if (dialcFrame3 < 0) {
	            dialcFrame3 = 9
	        }
	    }
	    if (underDial == 4) {
	        dialcFrame4 = (dialcFrame4 - 1);
	        if (dialcFrame4 < 0) {
	            dialcFrame4 = 9
	        }
	    }
	}


	//---------------------------------------------Talking to the Wizard------------------------------------
	//Function to move the speech bubbles of the knight and the wizard to simulate conversation flow
	function wizTalk() {

	        if (w == 0) {
	            speech1X = 270;
	            speech1Y = 90;
	            speech1Width = 220;
	            speech1Height = 100;

	            speech1 = document.getElementById("KN2WIZ1");

	            w++;
	        } else if (w == 1) {
	            speech1X = 600;
	            speech1Y = 600;
	            speech2X = 300;
	            speech2Y = 60;
	            speech2Width = 250;
	            speech2Height = 110;
	            speech2 = document.getElementById("WIZ2KN1");
	            w++;
	        } else if (w == 2) {
	            speech2X = 200;
	            speech2Y = 0;
	            speech2Width = 350;
	            speech2Height = 154;
	            speech2 = document.getElementById("WIZ2KN2");
	            w++;
	        } else if (w == 3) {
	            speech1X = 270;
	            speech1Y = 90;
	            speech1Width = 220;
	            speech1Height = 100;
	            speech1 = document.getElementById("KN2WIZ2");
	            speech2X = 600;
	            speech2Y = 600;

	            w++
	        } else if (w == 4) {
	            speech1X = 600;
	            speech1Y = 600;
	            speech2X = 300;
	            speech2Y = 60;
	            speech2Width = 250;
	            speech2Height = 110;

	            speech2 = document.getElementById("WIZ2KN3");
	            w++;
	        } else if (w == 6) {
	            speech2 = document.getElementById("WIZ2KN3");
	            w++;
	        } else if (w == 8) {
	            speech2 = document.getElementById("WIZ2KN3");
	            w++;
	        } else if (w == 20) {
	            speech2X = 600;
	            speech2Y = 600;
	            wizard = document.getElementById("wizardIdle3");
	            wizardComplete = true;
	        }
	    }
	    //Function to check if the provided answer is correct and if the incorrect answer count is below 3 give the user a clue
	function wizAnswer() {
	    if (w == 5) {
	        var answer = prompt("What am I?");


	        if (answer == "fire" || answer == "Fire") {
	            speech2Y = 10;
	            speech2Height = 150;
	            speech2Width = 300;
	            speech2 = document.getElementById("WizCorrect");
	            w = 20;
	        }
	        //If incorrect
	        else {
	            speech2 = document.getElementById("WizIncorrect1");
	            w++;
	        }
	    }
	    if (w == 7) {
	        var answer = prompt("What am I?");

	        if (answer == "fire" || answer == "Fire") {
	            speech2Y = 10;
	            speech2Height = 150;
	            speech2Width = 300;
	            speech2 = document.getElementById("WizCorrect");
	            w = 20;
	        }
	        //If incorrect
	        else {
	            speech2 = document.getElementById("WizIncorrect2");
	            w++;
	        }
	    }
	    if (w == 9) {
	        var answer = prompt("What am I?");

	        if (answer == "fire" || answer == "Fire") {
	            speech2Y = 10;
	            speech2Height = 150;
	            speech2Width = 300;
	            speech2 = document.getElementById("WizCorrect");
	            w = 20;
	        }
	        //If incorrect
	        else {
	            speech2 = document.getElementById("WizIncorrect3");


	        }

	    }

	}


	//-------------------------------------Challange Room 1 Functions---------------------------------------
	//Checks if the numbers selected on the dials are correct
	function crSubmitAnswer() {
	    if (dialcFrame == 7 && dialcFrame2 == 2 && dialcFrame3 == 8 && dialcFrame4 == 3) {
	        cr1complete = true;
	    } else {
	        document.getElementById("failedMusic").play();
	    }
	}


	//-------------------------------------Talking to the Princess----------------------------------------
	//Function to move the speech bubbles of the knight and the princess to simulate conversation flow

	function priTalk() {

	        if (p == 0) {
	            speech1X = 200;
	            speech1Y = 50;
	            speech1 = document.getElementById("knightSpeech1");
	            p++;
	        } else if (p == 1) {
	            speech1X = 600;
	            speech1Y = 600;
	            speech2X = 150;
	            speech2Y = 20;
	            speech2 = document.getElementById("PR2KN1");
	            p++;
	        } else if (p == 2) {
	            speech1X = 200;
	            speech1Y = 50;
	            speech2X = 600;
	            speech2Y = 600;
	            speech1 = document.getElementById("knightSpeech2");
	            p++;
	        } else if (p == 3) {
	            speech1X = 600;
	            speech1Y = 600;
	            speech2X = 130;
	            speech2Y = 20;
	            speech2 = document.getElementById("PR2KN2");
	            p++
	        } else if (p == 4) {
	            speech1X = 200;
	            speech1Y = 50;
	            speech2X = 600;
	            speech2Y = 600;
	            speech1 = document.getElementById("knightSpeech3");
	            p++;
	        } else if (p == 5) {
	            speech1X = 600;
	            speech1Y = 600;
	            speech2X = 130;
	            speech2Y = 20;
	            speech2 = document.getElementById("PR2KN3");
	            p++;
	        } else if (p == 7) {
	            speech2 = document.getElementById("PR2KN4");
	            p++;
	        } else if (p == 9) {
	            speech2 = document.getElementById("PR2KN5");
	            p++;
	        } else if (incorrectAnswer >= 2 && p == 11) {
	            speech2 = document.getElementById("PR2KN6");
	            princessComplete = true;
	            p++;
	        } else if (incorrectAnswer < 2 && p == 11) {
	            speech2 = document.getElementById("PR2KN7");
	            p++;
	        } else if (p == 12) {
	            speech2X = 600;
	            speech2Y = 600;
	            princessComplete = true;
	        }

	    }
	    //Checking the answers given to the princess' questions
	function priAnswer() {

	    if (p == 6) {
	        var PriAnswer1 = prompt("Which City?");

	        if (PriAnswer1 == "La Paz" || PriAnswer1 == "la paz" || PriAnswer1 == "La paz" || PriAnswer1 == "la Paz") {
	            speech2 = document.getElementById("PRKNcorrect");
	            p++;
	        }
	        //If incorrect
	        else {
	            speech2 = document.getElementById("PRKNincorrect");
	            incorrectAnswer++;
	            p++;
	        }
	    } else if (p == 8) {

	        var PriAnswer1 = prompt("Which mountain?");

	        //If correct
	        if (PriAnswer1 == "Everest" || PriAnswer1 == "everest") {
	            speech2 = document.getElementById("PRKNcorrect");
	            p++;
	        }

	        //If incorrect
	        else {
	            speech2 = document.getElementById("PRKNincorrect");
	            incorrectAnswer++;
	            p++;
	        }
	    } else if (p == 10) {
	        var PriAnswer1 = prompt("Which River?");

	        //If correct
	        if (PriAnswer1 == "The Nile" || PriAnswer1 == "Nile" || PriAnswer1 == "nile" || PriAnswer1 == "the nile" || PriAnswer1 == "The nile" || PriAnswer1 == "the Nile") {
	            speech2 = document.getElementById("PRKNcorrect");
	            p++;
	        }

	        //If incorrect
	        else {
	            speech2 = document.getElementById("PRKNincorrect");
	            incorrectAnswer++;
	            p++;
	        }
	    }
	}

	//---------------------------------Dates Room functions-----------------------------

	//Function to pick up the date that the user is stood under
	function pickup() {
	    if (pickedup == false) {
	        if (knightX > berlinXLedge && knightX < berlinXRedge) {
	            underDate = 1;
	            pickedup = true;

	            if (underDate == 1 && pickedup == true) {
	                berlinH = 125;
	                berlinW = 105;
	            }
	        } else if (knightX > BoHXLedge && knightX < BoHXRedge) {
	            underDate = 2;
	            pickedup = true;
	            if (underDate == 2 && pickedup == true) {
	                BoHH = 125;
	                BoHW = 105;
	            }

	        } else if (knightX > londonXLedge && knightX < londonXRedge) {
	            underDate = 3;
	            pickedup = true;
	            if (underDate == 3 && pickedup == true) {
	                londonH = 125;
	                londonW = 105;
	            }

	        } else if (knightX > moonXLedge && knightX < moonXRedge) {
	            underDate = 4;
	            pickedup = true;
	            if (underDate == 4 && pickedup == true) {
	                moonH = 125;
	                moonW = 105;
	            }

	        }
	    } else if (pickedup == true) {
	        if (underDate == 1) {
	            berlinH = 120;
	            berlinW = 100;
	            pickedup = false;
	        } else if (underDate == 2) {
	            BoHH = 120;
	            BoHW = 100;
	            pickedup = false;
	        } else if (underDate == 3) {
	            londonH = 120;
	            londonW = 100;
	            pickedup = false;
	        } else if (underDate == 4) {
	            moonH = 120;
	            moonW = 100;
	            pickedup = false;
	        }
	    }
	}

	//Function to check the events are in the right order. 

	function drSubmitAnswer() {
	    if (BoHX < londonX && londonX < moonX && moonX < berlinX) {
	        datesRoomComplete = true;
	    } else {
	        document.getElementById("failedMusic").play();
	    }
	}

	//Keydown event listener
	function keyDownHandler(event) {

	        if (event.which == 37) {
	            goLeft();
	        } else if (event.which == 37) {
	            arrowLeft();
	        } else if (event.which == 39) {
	            goRight();
	        } else if (event.which == 39) {
	            arrowRight();
	        } else if (event.which == 38 && room == 1) {
	            dialUp();
	        } else if (event.which == 40 && room == 1) {
	            dialDown();

	        } else if (event.which == 13 && room == 1 && knightX > 50) {
	            crSubmitAnswer();
	        } else if (event.which == 13 && room == 0 && knightX > 150) {
	            wizTalk();
	        } else if (event.which == 13 && room == 3 && knightX > 150) {
	            priTalk();
	        } else if (event.which == 13 && room == 4 && knightX > 50) {
	            drSubmitAnswer();
	        } else if (event.which == 65 && room == 0) {
	            wizAnswer();
	        } else if (event.which == 65 && room == 3) {
	            priAnswer();
	        } else if (event.which == 76 && room == 1) {
	            challengeRoom1();
	        } else if (event.which == 32 && room == 4) {
	            pickup();
	        }


	    }
	    //Keydown up listener
	function keyUpHandler(event) {
	        if (event.which == 37) {
	            idleLeft();
	        } else if (event.which == 39) {
	            idleRight();
	        }

	    }
	    //Click event listener
	function handleClick(event) {
	    if (event.button == 0) {
	        desiredX = event.clientX;
	        desiredY = event.clientY;
	        clickCount++;

	    }

	}