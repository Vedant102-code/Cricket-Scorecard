/*const score = {
    runs: 0,
    wickets: 0,
    lastResult: 0
}; //Main Score Storage

document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}`; //Displaying Score

function updateScore(result) //Function to update the score
{
    if(result === 0)
    {
        score.runs+=0;
        score.lastResult=0;
    }
    else if(result === 1)
    {
        score.runs++;
        score.lastResult=1;
    }
    else if(result === 2)
    {
        score.runs+=2;
        score.lastResult=2;
    }
    else if(result === 3)
    {
        score.runs+=3;
        score.lastResult=3;
    }
    else if(result === 4)
    {
        score.runs+=4;
        score.lastResult=4;
    }
    else if(result === 5)
    {
        score.runs+=5;
        score.lastResult=5;
    }
    else if(result === 6)
    {
        score.runs+=6;
        score.lastResult=6;
    }
    else if(result === 7)
    {
        score.runs+=7;
        score.lastResult=7;
    }
    else if(result === 'W')
    {
        score.wickets++;
        score.lastResult='W';
    }
    else if(result === 'WD')
    {
        score.runs++;
        score.lastResult='WD';
    }
    else if(result === 'NB')
    {
        score.runs++;
        score.lastResult === 'NB'
    }


    document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}`;
}

function resetScore() //Function to reset score to 0/0
{
    score.runs = 0;
    score.wickets = 0;

    document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}`;
}

function undoScore(lr) //Function to undo last selection
{
    if(lr === 0)
    {
        score.runs-=0;
    }
    else if(lr === 1)
    {
        score.runs--;
    }
    else if(lr === 2)
    {
        score.runs-=2;
    }
    else if(lr === 3)
    {
        score.runs-=3;
    }
    else if(lr === 4)
    {
        score.runs-=4;
    }
    else if(lr === 5)
    {
        score.runs-=5;
    }
    else if(lr === 6)
    {
        score.runs-=6;
    }
    else if(lr === 7)
    {
        score.runs-=7;
    }
    else if(lr === 'W')
    {
        score.wickets--;
    }
    else if(lr === 'WD')
    {
        score.runs--;
    }
    else if(lr === 'NB')
    {
        score.runs--;
    }

    document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}`;
}/*

/*const score = {
    runs: 0,
    wickets: 0,
    lastResult: 0
}; //Main Score Storage

document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}`; //Displaying Score

function updateScore(result) //Function to update the score
{
    if(result === 0)
    {
        score.runs+=0;
        score.lastResult=0;
    }
    else if(result === 1)
    {
        score.runs++;
        score.lastResult=1;
    }
    else if(result === 2)
    {
        score.runs+=2;
        score.lastResult=2;
    }
    else if(result === 3)
    {
        score.runs+=3;
        score.lastResult=3;
    }
    else if(result === 4)
    {
        score.runs+=4;
        score.lastResult=4;
    }
    else if(result === 5)
    {
        score.runs+=5;
        score.lastResult=5;
    }
    else if(result === 6)
    {
        score.runs+=6;
        score.lastResult=6;
    }
    else if(result === 7)
    {
        score.runs+=7;
        score.lastResult=7;
    }
    else if(result === 'W')
    {
        score.wickets++;
        score.lastResult='W';
    }
    else if(result === 'WD')
    {
        score.runs++;
        score.lastResult='WD';
    }
    else if(result === 'NB')
    {
        score.runs++;
        score.lastResult === 'NB'
    }


    document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}`;
}

function resetScore() //Function to reset score to 0/0
{
    score.runs = 0;
    score.wickets = 0;

    document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}`;
}

function undoScore(lr) //Function to undo last selection
{
    if(lr === 0)
    {
        score.runs-=0;
    }
    else if(lr === 1)
    {
        score.runs--;
    }
    else if(lr === 2)
    {
        score.runs-=2;
    }
    else if(lr === 3)
    {
        score.runs-=3;
    }
    else if(lr === 4)
    {
        score.runs-=4;
    }
    else if(lr === 5)
    {
        score.runs-=5;
    }
    else if(lr === 6)
    {
        score.runs-=6;
    }
    else if(lr === 7)
    {
        score.runs-=7;
    }
    else if(lr === 'W')
    {
        score.wickets--;
    }
    else if(lr === 'WD')
    {
        score.runs--;
    }
    else if(lr === 'NB')
    {
        score.runs--;
    }

    document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}`;
}*/

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
    }
    else if(result === 1)
    {
        score.runs++;
        score.lastResult=1;
    }
    else if(result === 2)
    {
        score.runs+=2;
        score.lastResult=2;
    }
    else if(result === 3)
    {
        score.runs+=3;
        score.lastResult=3;
    }
    else if(result === 4)
    {
        score.runs+=4;
        score.lastResult=4;
    }
    else if(result === 5)
    {
        score.runs+=5;
        score.lastResult=5;
    }
    else if(result === 6)
    {
        score.runs+=6;
        score.lastResult=6;
    }
    else if(result === 7)
    {
        score.runs+=7;
        score.lastResult=7;
    }
    else if(result === 'W')
    {
        score.wickets++;
        score.lastResult='W';
    }
    else if(result === 'WD')
    {
        score.runs++;
        score.lastResult='WD';
    }
    else if(result === 'NB')
    {
        score.runs++;
        score.lastResult = 'NB';
    }
    // ONLY count the ball if it was a legal delivery (not WD or NB)
if (result !== 'WD' && result !== 'NB') {
    score.balls++;
    if (score.balls === 6) {
        score.fullover += 1;
        score.balls = 0;
      }
    }
      score.overs = score.fullover + "." + score.balls;
    
    document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
}

function resetScore() //Function to reset score to 0/0
{
    score.runs = 0;
    score.wickets = 0;
    score.fullover=0;
    score.balls=0;
    score.overs = score.fullover + "." + score.balls;
    document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
}

function undoScore(lr) //Function to undo last selection
{
    if(lr === 0)
    {
        score.runs-=0;
    }
    else if(lr === 1)
    {
        score.runs--;
    }
    else if(lr === 2)
    {
        score.runs-=2;
    }
    else if(lr === 3)
    {
        score.runs-=3;
    }
    else if(lr === 4)
    {
        score.runs-=4;
    }
    else if(lr === 5)
    {
        score.runs-=5;
    }
    else if(lr === 6)
    {
        score.runs-=6;
    }
    else if(lr === 7)
    {
        score.runs-=7;
    }
    else if(lr === 'W')
    {
        score.wickets--;
    }
    else if(lr === 'WD')
    {
        score.runs--;
    }
    else if(lr === 'NB')
    {
        score.runs--;
    }
    if (lr !== 'WD' && lr !== 'NB') {
    if (score.balls === 0 && score.fullover > 0) {
        score.fullover--;
        score.balls = 5;
    } else if (score.balls > 0) {
        score.balls--;
    }
}
    score.overs = `${score.fullover}.${score.balls}`;
    document.querySelector('.js-score').innerHTML=`${score.runs}/${score.wickets}(${score.overs})`;
}


