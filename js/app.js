 

function numCounter(tagId,maxCount,speed){
    var initialNumber = 0;
    function counter(){
        jobs-for-fresher-blog-details.html
        ++initialNumber;
    }
    var counterDelay = setInterval(counter,speed);
    function totalTime(){
        clearInterval(counterDelay);
    }
    var totalPeriod = speed * (maxCount);  
    setTimeout(totalTime, totalPeriod);
}

numCounter("Projects",634,10);
numCounter("Clients",589,10);
