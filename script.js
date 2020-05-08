var score = 4;
var score1 = 1;
var score2 = 1;
var score3 = 1;
var score4 = 1;
var rank_name;

function onChanged(n,ab){
    document.getElementById('btn'+n).disabled = false;
    if(n==1){
        if(ab=='A'){ score1 = 1;
        } else { score1 = 0;}
    }
    if(n==2){
        if(ab=='B'){ score2 = 1;
        } else { score2 = 0;}
    }
    if(n==3){
        if(ab=='B'){ score3 = 1;
        } else { score3 = 0;}
    }
    if(n==4){
        if(ab=='B'){ score4 = 1;
        } else { score4 = 0;}
    }
    score = score1 + score2 + score3 + score4;
}

function clickBtn0(){
    document.getElementById('entry0').style.display = "none";
    document.getElementById('entry1').style.display = "block";
}
function clickBtn(m){
    document.getElementById('entry'+m).style.display = "none";
    document.getElementById('answer'+m).style.display = "block";
    displayRank(score);
    scrollTo(0, 0);
}
function clickNext(n){
    document.getElementById('answer'+n).style.display = "none";
    document.getElementById('entry'+(n+1)).style.display = "block";
    displayRank(-1);
}
function exchange(o,srcs){
    document.getElementById('pict'+o).src = srcs;
}
function submitForm(){
    document.kakudukeform.submit();
    document.getElementById('answer4').style.display = "none";
    document.getElementById('results').style.display = "block";
    document.getElementById('heading_results').style.display = "block";
}

function displayRank(x) {
    document.getElementById('rank0').style.display = "none";
    document.getElementById('rank1').style.display = "none";
    document.getElementById('rank2').style.display = "none";
    document.getElementById('rank3').style.display = "none";
    document.getElementById('rank4').style.display = "none";
    document.getElementById('rank'+x).style.display = "block";

    switch(score) {
        case 4:	rank_name = "一流メイプラー";
                break;
        case 3:	rank_name = "二流メイプラー";
                break;
        case 2:	rank_name = "三流メイプラー";
                break;
        case 1:	rank_name = "そっくりさん";
                break;
        case 0:	rank_name = "映す価値なし";
                break;
    }
    document.getElementById('rank_name').innerHTML = rank_name;
}
