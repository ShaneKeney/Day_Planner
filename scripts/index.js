var timeBlockContainer = $("#timeBlockContainer");
var timeBlockTemplate = $(".timeBlock").clone();

$(document).ready(() => {
    //remove template html (will dyn create in a little)
    $(".timeBlock").remove();

    //create all timeSlots dynamically to keep html clean
    createTimeBlocks();
});

function createTimeBlocks() {
    let startWork = 9;
    let endWork = 5;
    let numberOfHours = (12-startWork) + (12-endWork) - 2;

    //iterate appropriate number of times for work day business hour blocks
    for(let i=startWork; i < (startWork + numberOfHours + 1); i++) {
        let createTimeBlock = timeBlockTemplate.clone();
        let textDescString = militaryTimeConvert[i];

        createTimeBlock.find(".timeSlotDesc").text(textDescString);

        timeBlockContainer.append(createTimeBlock);
    }


}