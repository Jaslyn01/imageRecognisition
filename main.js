Webcam.set({
    width:350,
    height:350,
    image_quality:'png',
    png_quality: 90
});
camara=document.getElementById("camara");
Webcam.attach("#camara");

function take_snapshot(){
    Webcam.snap(function(data_uri) /* data_uri stores my still picture*/{
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'"/>';
      });


}
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sUU7MqsOT/model.json", model_loaded); //image classifier  is a predefined function which is used to compare the images//
function model_loaded(){
    console.log("the model is loaded") 
}

function identify(){
    img=document.getElementById("selfie_image");
    classifier.classify(img, got_result);
}
function got_result(error,results){
    if(error){
        console.error(error);
        
    }
    else{
       console.log(results);
       document.getElementById("result_object").innerHTML=results[0].label;
       document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(2);
    }
}