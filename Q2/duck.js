class Duck {
    constructor (name, color, age, weight, image) {
        this.name = name; 
        this.color = color;
        this.age = age; 
        this.weight = weight; 
        this.image = image; 
    }
    Show () {
        console.log(this.image);
        let duckDetailsDiv ="name : " + this.name + "<br>" +
                            "color : " + this.color + "<br>" +
                            "age : " + this.age + "<br> " +
                            "weight : " + this.weight + "<br>"+
                            "Image:<br> <img src='" + this.image.src + "'>"; ;
        if ($('#detailsDiv').length > 0){
            $('#detailsDiv').html(duckDetailsDiv);
        }
        else{
            var detailsDiv = document.createElement('div');
            detailsDiv.id = 'detailsDiv';
            detailsDiv.style.textAlign = 'center';
            detailsDiv.innerHTML = duckDetailsDiv;

            document.body.appendChild(detailsDiv);
        }  
    }

    Quack (){
        let numOfQuacks =  Math.round((this.age * this.weight) / 2);
        let quacks = "";
        for (var i = 0; i < numOfQuacks; i++){
            quacks+="Quack "
        }

        if ($('#detailsDiv').length > 0){
            $('#detailsDiv').text(quacks);
        } 
        else{
            var detailsDiv = document.createElement('div');
            detailsDiv.id = 'detailsDiv';
            detailsDiv.style.textAlign = 'center';
            detailsDiv.innerHTML = quacks;

            document.body.appendChild(detailsDiv);
        }  

        let quackSound = document.getElementById('quackAudio');
        let rounds = 0;

        function playQuack() {
            if (rounds < 3) {
                quackSound.currentTime = 0; // Reset audio to start
                quackSound.play();
                rounds++;
                setTimeout(playQuack, 1000); // Call playQuack function again after 1 second
            }
        }
        playQuack(); // Start the sequence
    }
}

$(document).ready(function () {            
    $("#mainForm").submit(submitToTheServer);
});

function submitToTheServer() {
    $('#showDuckBtn').css('visibility', 'visible');
    $('#quackBtn').css('visibility', 'visible');

    // Hide the button on mouseover/click and change background color
    $('#submit').mouseover(function() {
        $(this).css('backgroundColor', '#FF5A5F');
        $(this).css('color', '#FFFFFF');
    });
    $('#submit').click(function() {
        $(this).css('backgroundColor', '#FF5A5F');
    });
    // Disable the button
    $('#submit').prop('disabled', true);

    //create the duck
    creatDuck();
    return false;
}

let duckObj;
let duckImage = new Image();

function creatDuck() {
    duckName = $('#nameInput').val(); 
    duckColor = $('#colorInput').val(); 
    duckAge = $('#ageInput').val(); 
    duckWeight = $('#weightInput').val(); 
    
    duckObj = new Duck(duckName, duckColor, duckAge,duckWeight,duckImage);
    console.log(duckObj);
}


function ImageUpload(event) {
    var input = event.target;
    var file = input.files[0];

    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            duckImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

$('#showDuckBtn').click(function(){
    duckObj.Show(); 
});

$('#quackBtn').click(function(){
    duckObj.Quack(); 
});