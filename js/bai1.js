let scores = [10,8,9,9,9,4,5,3,2,7,8];

function findMax(scores){
    let maxScore = scores[0];
    for(let index = 0 ; index < scores.length;index++){
        if(scores[index]>maxScore){
            maxScore = scores[index];
        }
    }
    return maxScore;
}

alert(findMax(scores));