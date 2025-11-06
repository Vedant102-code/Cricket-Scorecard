const score = {
    runs: 0,
    wickets: 0,
    lastResult: 0,
    fullover: 0,
    balls: 0,
    overs: 0

}; //Main Score Storage


document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`; //Displaying Score

function updateScore(result) //Function to update the score
{
    if(result === 0)
    {
        score.runs+=0;
        score.lastResult=0;
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 1)
    {
        score.runs++;
        score.lastResult=1;
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 2)
    {
        score.runs+=2;
        score.lastResult=2;
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 3)
    {
        score.runs+=3;
        score.lastResult=3;
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 4)
    {
        score.runs+=4;
        score.lastResult=4;
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 5)
    {
        score.runs+=5;
        score.lastResult=5;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 6)
    {
        score.runs+=6;
        score.lastResult=6;
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 7)
    {
        score.runs+=7;
        score.lastResult=7;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 'W')
    {
        score.wickets++;
        score.lastResult='W';
        score.balls++;
        if (score.balls===6){
            score.fullover++;
            score.balls=0;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(result === 'WD')
    {
        score.runs++;
        score.lastResult='WD';
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
        
    }
    else if(result === 'NB')
    {
        score.runs++;
        score.lastResult = 'NB'
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }


    
}

function resetScore() //Function to reset score to 0/0
{
    score.runs = 0;
    score.wickets = 0;
    score.balls = 0;
    score.fullover = 0;
    score.overs = 0;
    document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
}

function undoScore(lr) //Function to undo last selection
{
    if(lr === 0)
    {
        score.runs-=0;;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
        
    }
    else if(lr === 1)
    {
        score.runs--;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(lr === 2)
    {
        score.runs-=2;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(lr === 3)
    {
        score.runs-=3;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(lr === 4)
    {
        score.runs-=4;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(lr === 5)
    {
        score.runs-=5;
    }
    else if(lr === 6)
    {
        score.runs-=6;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(lr === 7)
    {
        score.runs-=7; 
    }
    else if(lr === 'W')
    {
        score.wickets--;
        if (score.balls===0 && score.fullover>0){
            score.fullover--;
            score.balls=0;
        }
        else if(score.balls>0){
            score.balls--;
        }
        score.overs = `${score.fullover}.${score.balls}`;
        document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
    }
    else if(lr === 'WD')
    {
        score.runs--;
    }
    else if(lr === 'NB')
    {
        score.runs--;
    }

    document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
}
