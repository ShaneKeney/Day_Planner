var timeBlockContainer = $("#timeBlockContainer");
var timeBlockTemplate = $(".timeBlock").clone();
var todayDateDisplay = $("body").find("#datePlaceholder");

$(document).ready(() => {
    //remove template html (will dyn create in a little)
    $(".timeBlock").remove();

    let dt = moment();
    todayDateDisplay.text(dt.format("dddd, MMMM Do"));

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
        let timeBlockElID = timeText[i] + `timeBlock`;
        let timeTextInputID = timeText[i] + `textInput`;
        let timeButtonID = timeText[i] + `button`;

        createTimeBlock.find(".timeSlotDesc").text(textDescString);
        createTimeBlock.attr("id", timeBlockElID);
        createTimeBlock.find(".toDoTextArea").attr("id", timeTextInputID);
        createTimeBlock.find(".saveButton").attr("id", timeButtonID);

        //pull from localStorage current time plans
        createTimeBlock.find(`#${timeTextInputID}`).val(localStorage.getItem(timeTextInputID));

        createTimeBlock.find(".saveButton").on("click", saveNotes);

        timeBlockContainer.append(createTimeBlock);
    }


}

//function for saving notes using id of sibling textarea and value=text
function saveNotes() {
    let buttonPressed = $(this);
    let textAreaEl = buttonPressed.parent().siblings(".textInputContainer").find("textarea");
    let textInputID = textAreaEl.attr("id");

    localStorage.setItem(textInputID, textAreaEl.val());
}