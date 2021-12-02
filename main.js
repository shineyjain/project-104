//https://teachablemachine.withgoogle.com/models/qWGiTLT58/
Webcam.set({
    width:350,
    height: 300,
    image_format:'png',
    png_quality:90   
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
    }
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qWGiTLT58/model.json',modelLoaded)
    
    function modelLoaded(){
    console.log("modelLoaded")
    }
    