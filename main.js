function startClassification(){
    navigator.mediaDevices.getUserMedia({
  audio:true
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Vno_uxZGB/model.json",modelLoaded);
}

function modelLoaded(){
    console.log("model has benn loaded");
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255);
        g=Math.floor(Math.random()*255);
        b=Math.floor(Math.random()*255);
        document.getElementById("result_label").innerHTML="I can hear-"+results[0].label;
        document.getElementById("result_confidence").innerHTML="Accuracy-"+Math.round((results[0].confidence*100))+"%";
    document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";
    
    img1=document.getElementById("animal");

    if(results[0].label=="barking"){
img1.src="dog.png";
    }
else if(results[0].label=="meow"){
    img1.src="cat.png";
        }
        else if(results[0].label=="moo"){
            img1.src="cow.png";
                }
                else{
            img1.src="ear.png";
                }
    }
}


