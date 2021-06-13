var t = document.getElementsByClassName('box');
var s = document.getElementsByClassName('sbox');
var index = 0;
var score =0;
var hscore= localStorage.getItem("hscore");
if(hscore=== null)
{   hscore=999;
    localStorage.setItem("hscore", JSON.stringify(hscore))
}
else{
    hscore = JSON.parse(hscore);
    hscoretab.innerHTML= "hiscore: " + hscore;
}


function reload() {
    index = 0;
    score=0;
    starttime();
    scoretab.innerHTML="score :"+score;
    for (let i = 0; i < 36; i++) {
        if (i < 16) {
            t[i].style.backgroundColor = "#FFFFFF";
            s[i].style.backgroundColor = t[i].style.backgroundColor;

        }
        else
            s[i].style.backgroundColor = "#FFFFFF";
    }
    s[0].style.backgroundColor="#000000";
    arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24','25','26','27','28','29','30','31','32','33','34','35'];
    arr = shuffleArray(arr);
    // console.log(arr);

    for (let i = 0; i < 36; i++) {
        if (i < 16) {
            t[i].style.backgroundColor = Random();
            s[arr[i]].style.backgroundColor = t[i].style.backgroundColor;

        }
        else
            s[arr[i]].style.backgroundColor = Random();
    }
    s[0].style.backgroundColor="#000000";
    return console.log("the index is at:", index);
}
function Random() {
    let colors = ['#FF0000', '#0000FF', '#00FF00', '#FFFF00', '#00FFFF', '#FF00FF'];
    let rcolor = colors[Math.floor(Math.random() * 6)];
    console.log(rcolor);
    return rcolor;
}


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(arr);
    return arr;
}


function swap(id) {
    // console.log(s[index].style.backgroundColor,s[index].style.backgroundColor)
    // console.log(s[0],s[5])
    var f = s[index].style.backgroundColor;
    s[index].style.backgroundColor = s[id].style.backgroundColor;
    s[id].style.backgroundColor = f;
    index = id;
    score =score+1;
    if(score==1)
    starttime();
    console.log(score);
    scoretab.innerHTML ="score: " + score;
       check();
    // console.log(s[0].style.backgroundColor,s[5].style.backgroundColor)
    console.log(index);
    return 0;
}


function move(id) {
    if (id == index + 1 && id != 6 && id != 12 && id != 18 && id != 24 && id != 30 ) {
        click.play();
        swap(id);
        console.log("move right");        
        index = id;
        console.log("the index is at:", index);

    }
    else if (id == index - 1 && id != 5 && id != 11 && id != 17 && id != 23 && id!=29) {
        click.play();
        swap(id);
        console.log("move left");
        
        index = id;
        console.log("the index is at:", index);
    }
    else if (id == index - 6) {
        click.play();
        swap(id);
        console.log("move up");
        
        index = id;
        console.log("the index is at:", index);
    }
    else if (id == index + 6) {
        click.play();
        swap(id);
        console.log("move down");
        
        index = id;
        console.log("the index is at:", index);
    }
    else{
        console.log("ntg");
        noc.play();
    }
}

function check() {
    if (t[0].style.backgroundColor == s[7].style.backgroundColor&&t[1].style.backgroundColor == s[8].style.backgroundColor&&t[2].style.backgroundColor == s[9].style.backgroundColor&&t[3].style.backgroundColor == s[10].style.backgroundColor&&t[4].style.backgroundColor == s[13].style.backgroundColor&&t[5].style.backgroundColor == s[14].style.backgroundColor&&t[6].style.backgroundColor == s[15].style.backgroundColor&&t[7].style.backgroundColor == s[16].style.backgroundColor&&t[8].style.backgroundColor == s[19].style.backgroundColor&&t[9].style.backgroundColor == s[20].style.backgroundColor&&t[10].style.backgroundColor == s[21].style.backgroundColor&&t[11].style.backgroundColor == s[22].style.backgroundColor&&t[12].style.backgroundColor == s[25].style.backgroundColor&&t[13].style.backgroundColor == s[26].style.backgroundColor&&t[14].style.backgroundColor == s[27].style.backgroundColor&&t[15].style.backgroundColor == s[28].style.backgroundColor)
    {   if(score<hscore){
        hscore=score;
        localStorage.setItem("hscore", JSON.stringify(hscore));
        hscoretab.innerHTML= "hiscore: " + hscore;
    }
        console.log("u win");
        audio.play();
        clearInterval(tm);
    }
    else 
    console.log("keep going");        
}

// function print() {
//     console.log("u win");
// }
var tm;
var m=0,se=0,ms=0
function starttime()
{
    if(score == 0)
    {   
        clearInterval(tm);
        timer.innerHTML="00:00:00";
    }
    else
    {
        tm=setInterval(() => 
        {
            
        timer.innerHTML = (m<10?"0"+m:m) + ":" + (se<10?"0"+se:se)+ ":" + (ms<10?"0"+ms:ms);
        ms++;
        if(ms==100){
            se++;
            ms=0
        }
        if(se==60){
            m++;
            se=0;
        }
            
        }, 10);
    }
}
 

