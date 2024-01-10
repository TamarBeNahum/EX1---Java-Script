class Counter {
    constructor (count) {
        this.count = count; 
    }

    Initialize (value) {
        this.count = value;
    }

    Increment (){
        return ++this.count;
    }

    Go (){
        let strCount = "";
        for (let i = 0; i <= this.count;i++){
            strCount = strCount + `  ${i}`;
        }
        if ($('#numDivID').length > 0){
            $('#numDivID').text(strCount);
        }
        else{
            var numDiv = document.createElement('div');
            numDiv.id = 'numDivID';
            numDiv.textContent = strCount;
            document.body.appendChild(numDiv);
        }             
    }
}

let counterObj;

$('#startBtn').click(function(){
    inputCount = $('#inputCount').val();
    //check if the input is not a number on an empty string
    if (isNaN(inputCount) || inputCount == ""){
        alert("Please enter a number only");
    }
    else{
        counterObj = new Counter(inputCount);
    }

});

$('#plusBtn').click(function(){
    if(counterObj) //Only if there is a 'counter' object
    {
        $('#inputCount').val(counterObj.Increment());
    }   
});

$('#goBtn').click(function(){
    if(counterObj){
        counterObj.Go();
    }
});