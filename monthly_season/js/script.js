

let month = 10;

document.querySelector('.form-type').innerHTML = 'Season Detector';
document.querySelector('.month-letter').innerHTML = 'Enter Month in Digits';
document.querySelector('#month').innerHTML =  month;
document.querySelector('button').innerHTML = 'Click for result..';

let season;

    switch (month) {
        case 1:
        case 2:
        case 3:
        case 4:

            season = "Winter...";
            break;

        case 5:
        case 6:
        case 7:
        case 8:

            season = "Summer...";
            break;

        case 9:
        case 10:
        case 11:
        case 12:

            season = "Monsoon...";
            break;

            default:
            season = 'Invalid Detail...';

                
    }

    $(document).ready(function(){

        $('#button').click(function(){
            console.log('click...');
    
            $('#month-show').show("slow");

            document.querySelector('.month-name').innerHTML = 'Season : ' + season;
        })
    
    });
 

