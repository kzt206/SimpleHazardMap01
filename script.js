

//キャンバスの設定
const canvasMap = document.querySelector("#canvasMap");
const ctxMap = canvasMap.getContext("2d");
const canvasPaint = document.querySelector("#canvasPaint");
const ctxPaint = canvasPaint.getContext("2d");

canvasMap.width = 800;
canvasMap.height = 600;

canvasPaint.width = 800;
canvasPaint.height = 600;

//マップ画像の読み込み
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


//スタンプの設置
//スタンプ画像の設定
const charaHome = new Image();
charaHome.src = "home.png"
const charaSchool = new Image();
charaSchool.src = "school.png"
const charaEvacuation = new Image();
charaEvacuation.src = "evacuation.png"
const charaCamera1 = new Image();
charaCamera1.src = "camera1.png"
const charaCamera2 = new Image();
charaCamera2.src = "camera2.png"
const charaCamera3 = new Image();
charaCamera3.src = "camera3.png"
const charaCamera4 = new Image();
charaCamera4.src = "camera4.png"
const charaCamera5 = new Image();
charaCamera5.src = "camera5.png"


//スタンプを選択
let penStatus = "pen";
const homeButton = document.getElementById("homeButton");
homeButton.addEventListener("click",()=>{
    penStatus = "home";
    console.log("Home Stamp selected");
})
const schoolButton = document.getElementById("schoolButton");
schoolButton.addEventListener("click",()=>{
    penStatus = "school";
    console.log("School Stamp selected");
})
const evacuationButton = document.getElementById("evacuationButton");
evacuationButton.addEventListener("click",()=>{
    penStatus = "evacuation";
    console.log("Evacuation Stamp selected");
})
const camera1Button = document.getElementById("camera1Button");
camera1Button.addEventListener("click",()=>{
    penStatus = "camera1";
    console.log("camera1 stamp selected");
})
const camera2Button = document.getElementById("camera2Button");
camera2Button.addEventListener("click",()=>{
    penStatus = "camera2";
    console.log("camera2 stamp selected");
})
const camera3Button = document.getElementById("camera3Button");
camera3Button.addEventListener("click",()=>{
    penStatus = "camera3";
    console.log("camera3 stamp selected");
})
const camera4Button = document.getElementById("camera4Button");
camera4Button.addEventListener("click",()=>{
    penStatus = "camera4";
    console.log("camera4 stamp selected");
})
const camera5Button = document.getElementById("camera5Button");
camera5Button.addEventListener("click",()=>{
    penStatus = "camera5";
    console.log("camera5 stamp selected");
})


//消しゴムの設定
const eraserButton = document.getElementById("eraserButton");
eraserButton.addEventListener("click",() => {
    console.log("Eraser is clicked");
    penStatus = "eraser";
})

//canvasをクリックしたときのイベント
this.canvasPaint.addEventListener("click",(e) => {
    let x = e.offsetX-25;
    let y = e.offsetY-25;

    console.log("x:",x,"y:",y);
    //penStatusの状態に応じて挙動変更
    console.log("Penstatus;",penStatus);
      if(penStatus == "home") {
        ctxPaint.drawImage(charaHome,x,y);
      } else if(penStatus == "school"){
        ctxPaint.drawImage(charaSchool,x,y);
      } else if(penStatus == "evacuation"){
        ctxPaint.drawImage(charaEvacuation,x,y);
      } else if(penStatus == "camera1"){
        ctxPaint.drawImage(charaCamera1,x,y);
      } else if(penStatus == "camera2"){
        ctxPaint.drawImage(charaCamera2,x,y);
      } else if(penStatus == "camera3"){
        ctxPaint.drawImage(charaCamera3,x,y);
      } else if(penStatus == "camera4"){
        ctxPaint.drawImage(charaCamera4,x,y);
      } else if(penStatus == "camera5"){
        ctxPaint.drawImage(charaCamera5,x,y);
      } else if(penStatus == "eraser"){
        ctxPaint.clearRect(e.offsetX-10,e.offsetY-10,20,20);
      }
})

//clearbuttonの設定
const clearButon = document.getElementById("clearButton");
clearButton.addEventListener("click",()=>{
  console.log("Clear is clicked");
  ctxPaint.clearRect(0,0,canvasPaint.width,canvasPaint.height);
})


