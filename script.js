const canvasMap = document.querySelector("#canvasMap");
const ctxMap = canvasMap.getContext("2d");
const canvasPaint = document.querySelector("#canvasPaint");
const ctxPaint = canvasPaint.getContext("2d");

canvasMap.width = 800;
canvasMap.height = 600;

canvasPaint.width = 800;
canvasPaint.height = 600;

// ctx01.fillRect(10,10,30,20);
// ctx02.fillRect(20,30,50,100);

const selectMapFile = document.getElementById("selectMapFile");
selectMapFile.addEventListener("change",function(evt){

    // console.log("file selector");

    let file = evt.target.files;
    let reader = new FileReader();

    reader.readAsDataURL(file[0]);

    console.log(file[0]);

    reader.onload = function(){
        let dataURL = reader.result;
        let img = new Image();

        img.src = dataURL;

        img.onload = function(){
            ctxMap.drawImage(img,0,0,canvasMap.width,canvasMap.height);
        }
        // ctx02.fillRect(50,90,30,20);
    }

},false);