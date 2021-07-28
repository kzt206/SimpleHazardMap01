

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

this.canvasPaint.addEventListener("click",(e) => {
    let x = e.offsetX-25;
    let y = e.offsetY-25;

    console.log("x:",x,"y:",y);
    console.log("Penstatus;",penStatus);
      if(penStatus == "home") {
        ctxPaint.drawImage(charaHome,x,y,20,20);
      } else if(penStatus == "school"){
        ctxPaint.drawImage(charaSchool,x,y);
      } else if(penStatus == "evacuation"){
        ctxPaint.drawImage(charaEvacuation,x,y);
      }
})
