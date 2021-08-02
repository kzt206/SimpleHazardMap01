

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

//消しゴムボタンの設定
const eraserButton = document.getElementById("eraserButton");
eraserButton.addEventListener("click",() => {
    console.log("Eraser is clicked");
    penStatus = "eraser";
})

//canvasをクリックしたときのイベント設定
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


////////////////////////////////////////////////////////////////
// 写真画面の設定
////////////////////////////////////////////////////////////////
//PhotoCanvas1
const photoContainer1 = document.getElementById("photoConatiner1");
const photoCanvas1 = document.getElementById("canvasCamera1");
const ctxPhoto1 = photoCanvas1.getContext("2d");
//canvasサイズの指定 (親要素の大きさに合わせる)
photoCanvas1.width = photoContainer1.clientWidth;
photoCanvas1.height = photoContainer1.clientHeight;

//PhotoCanvas2
const photoContainer2 = document.getElementById("photoConatiner2");
const photoCanvas2 = document.getElementById("canvasCamera2");
const ctxPhoto2 = photoCanvas2.getContext("2d");
//canvasサイズの指定 (親要素の大きさに合わせる)
photoCanvas2.width = photoContainer2.clientWidth;
photoCanvas2.height = photoContainer2.clientHeight;

//PhotoCanvas3
const photoContainer3 = document.getElementById("photoConatiner3");
const photoCanvas3 = document.getElementById("canvasCamera3");
const ctxPhoto3 = photoCanvas3.getContext("2d");
//canvasサイズの指定 (親要素の大きさに合わせる)
photoCanvas3.width = photoContainer3.clientWidth;
photoCanvas3.height = photoContainer3.clientHeight;

//PhotoCanvas4
const photoContainer4 = document.getElementById("photoConatiner4");
const photoCanvas4 = document.getElementById("canvasCamera4");
const ctxPhoto4 = photoCanvas4.getContext("2d");
//canvasサイズの指定 (親要素の大きさに合わせる)
photoCanvas4.width = photoContainer4.clientWidth;
photoCanvas4.height = photoContainer4.clientHeight;

//PhotoCanvas5
const photoContainer5 = document.getElementById("photoConatiner5");
const photoCanvas5 = document.getElementById("canvasCamera5");
const ctxPhoto5 = photoCanvas5.getContext("2d");
//canvasサイズの指定 (親要素の大きさに合わせる)
photoCanvas5.width = photoContainer5.clientWidth;
photoCanvas5.height = photoContainer5.clientHeight;

//画像1の読み込み
const selectPhoto1 = document.getElementById("selectPhoto1");
selectPhoto1.addEventListener("change",function(evt){

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
            ctxPhoto1.drawImage(img,0,0,photoCanvas1.width,photoCanvas1.height);
        }
    }

},false);

//画像2の読み込み
const selectPhoto2 = document.getElementById("selectPhoto2");
selectPhoto2.addEventListener("change",function(evt){
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
            ctxPhoto2.drawImage(img,0,0,photoCanvas2.width,photoCanvas2.height);
        }
    }
},false);

//画像3の読み込み
const selectPhoto3 = document.getElementById("selectPhoto3");
selectPhoto3.addEventListener("change",function(evt){
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
            ctxPhoto3.drawImage(img,0,0,photoCanvas3.width,photoCanvas3.height);
        }
    }
},false);

//画像4の読み込み
const selectPhoto4 = document.getElementById("selectPhoto4");
selectPhoto4.addEventListener("change",function(evt){
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
            ctxPhoto4.drawImage(img,0,0,photoCanvas4.width,photoCanvas4.height);
        }
    }
},false);

//画像5の読み込み
const selectPhoto5 = document.getElementById("selectPhoto5");
selectPhoto5.addEventListener("change",function(evt){
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
            ctxPhoto5.drawImage(img,0,0,photoCanvas5.width,photoCanvas5.height);
        }
    }
},false);


//線を描く
// マウスがドラッグされているか(クリックされたままか)判断するためのフラグ
let isDrag = false;
//線の色の初期設定
let penSize = 4;
ctxPaint.fillStyle = "hotpink";
ctxPaint.strokeStyle = ctxPaint.fillStyle;
//線を描く関数
function draw(x2,y2){
    if(isDrag){
        ctxPaint.beginPath();
        ctxPaint.arc(x2,y2,penSize,0,Math.PI * 2);
        ctxPaint.closePath();
        ctxPaint.fill();
        //draw line
        drawLine(x,y,x2,y2);
    }
    x = x2;
    y = y2;
}
function drawLine(x1,y1,x2,y2){
    ctxPaint.beginPath();
    ctxPaint.moveTo(x1,y1);
    ctxPaint.lineTo(x2,y2);
    ctxPaint.strokeStyle = ctxPaint.fillStyle;
    ctxPaint.lineWidth = penSize * 2;
    ctxPaint.stroke();
}
canvasPaint.addEventListener("mousedown",(e)=>{
    isDrag = true;
    x = e.offsetX;
    y = e.offsetY;

    // console.log(x,y)
});
canvasPaint.addEventListener("mouseup",()=>{
    isDrag = false;
    x = undefined;
    y = undefined;
});
canvasPaint.addEventListener("mousemove",(event)=>{
    draw(event.offsetX,event.offsetY);
});