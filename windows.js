function parentDiv() {
    const container = document.createElement('div');
    container.id = 'windowcontainer';

    const leftDiv = document.createElement('div');
    leftDiv.id = 'leftDiv';
    leftDiv.classList.add('window-left');

    const rightDiv = document.createElement('div');
    rightDiv.id = 'rightDiv';
    rightDiv.classList.add('window-right');

    container.appendChild(leftDiv);
    container.appendChild(rightDiv);

    return container;
}

function populateWindow(level, id){ 
    switch(level){
        case 0: buildwindow0(); break;
        case 1: buildwindow1(id); break;
        case 2: buildwindow2(id); break;
        case 3: buildwindow3(id); break;
        case 4: buildwindow4(id); break;
        case 5: buildwindow5(id); break;
        case 6: buildwindow6(id); break;
        default: console.log("Invalid level: " + level);
    }
}

function buildwindow0() {
    const mainHeader = document.getElementById('mainheader');
    mainHeader.textContent = "Global Competitions";
    mainHeader.dataset.id=0;

    let parent = parentDiv();
    let left = parent.querySelector('#leftDiv');
    let right = parent.querySelector('#rightDiv');

    // Create the settings div using createSettingsDiv with competitionid 0
    const settingsDiv = createSettingsDiv(0);

    // Create the competitions list div using createCompetitionsListDiv with parent 0
    const competitionsListDiv = createCompetitionsListDiv(0);

    const weatherDiv = createWeatherDiv(0);

    // Create the button
    const button = document.createElement('button');
    button.textContent = "Create New International Competition";
    button.classList.add('create-button'); // Add any classes you need for styling
    button.style.marginTop = '12px'; // Correctly set margin-top using style property

    // Add event listener for the button
    button.addEventListener('click', function() {
        createNewInternationalCompetition();
    });

    // Clear any existing content and append the header, settings div, competitions list, and button
    const contentElement = document.getElementById('level-0-content');
    contentElement.innerHTML = ''; // Clear existing content
    contentElement.appendChild(mainHeader);
    contentElement.appendChild(parent);

    left.appendChild(competitionsListDiv);
    left.appendChild(weatherDiv);
    right.appendChild(settingsDiv);
    contentElement.appendChild(button);
    
}

function buildwindow1(id) {
    const mainHeader = document.getElementById('mainheader');
    mainHeader.textContent = mainHeader.textContent = getCompetitionNameById(id) + " (" + id + ")";
    mainHeader.dataset.id=id;

    let parent = parentDiv();
    let left = parent.querySelector('#leftDiv');
    let right = parent.querySelector('#rightDiv');

    // Create the settings div using createSettingsDiv 
    const settingsDiv = createSettingsDiv(id);

    // Create the competitions list div using createCompetitionsListDiv 
    const competitionsListDiv = createCompetitionsListDiv(id);

    // Create the weather div 
    const weatherDiv = createWeatherDiv(id);

    // Create the button
    const button = document.createElement('button');
    button.textContent = "Create New International Competition";
    button.classList.add('create-button'); // Add any classes you need for styling
    button.style.marginTop = '12px'; // Correctly set margin-top using style property

    // Add event listener for the button
    button.addEventListener('click', function() {
        createNewInternationalCompetition();
    });

    // Clear any existing content and append the header, settings div, competitions list, and button
    const contentElement = document.getElementById('level-1-content');
    contentElement.innerHTML = ''; // Clear existing content
    contentElement.appendChild(mainHeader);
    contentElement.appendChild(parent);

    left.appendChild(competitionsListDiv);
    right.appendChild(settingsDiv);
    left.appendChild(weatherDiv);
    contentElement.appendChild(button);

}

function buildwindow2(id) {
    const mainHeader = document.getElementById('mainheader');
    mainHeader.textContent = getNationNameById(id);
    mainHeader.dataset.id=id;

    let parent = parentDiv();
    let left = parent.querySelector('#leftDiv');
    let right = parent.querySelector('#rightDiv');

    // Create the settings div using createSettingsDiv 
    const settingsDiv = createSettingsDiv(id);

    // Create the competitions list div using createCompetitionsListDiv 
    const competitionsListDiv = createCompetitionsListDiv(id);

    // Create the weather div 
    const weatherDiv = createWeatherDiv(id);

    // Clear any existing content and append the header, settings div, competitions list, and button
    const contentElement = document.getElementById('level-2-content');
    contentElement.innerHTML = ''; // Clear existing content
    contentElement.appendChild(mainHeader);
    contentElement.appendChild(parent);

    
    left.appendChild(competitionsListDiv);
    left.appendChild(settingsDiv);
    right.appendChild(weatherDiv);

}

function buildwindow3(id){
    const mainHeader = document.getElementById('mainheader');
    mainHeader.textContent = getTrophyNameById(id) + " (" + id + ")";
    mainHeader.dataset.id=id;

    let parent = parentDiv();
    let left = parent.querySelector('#leftDiv');
    let right = parent.querySelector('#rightDiv');

    const settingsDiv = createSettingsDiv(id);
    const tasksDiv = createTasksDiv(id);

    // Clear any existing content and append the header, settings div, competitions list, and button
    const contentElement = document.getElementById('level-3-content');
    contentElement.innerHTML = ''; // Clear existing content
    contentElement.appendChild(mainHeader);
    contentElement.appendChild(parent);

    left.appendChild(settingsDiv);
    right.appendChild(tasksDiv);
}

function buildwindow4(id){
    const mainHeader = document.getElementById('mainheader');
    mainHeader.textContent = getTrophyNameById(id) + " (" + id + ")";
    mainHeader.dataset.id=id;

    let parent = parentDiv();
    let left = parent.querySelector('#leftDiv');
    let right = parent.querySelector('#rightDiv');

    const settingsDiv = createSettingsDiv(id);
    const scheduleDiv = createScheduleDiv(id);
    const advancementDiv = createAdvancementDiv(id);
    const competitionDiv = createGroupListDiv(id);

    // Clear any existing content and append the header, settings div, competitions list, and button
    const contentElement = document.getElementById('level-4-content');
    contentElement.innerHTML = ''; // Clear existing content
    contentElement.appendChild(mainHeader);
    contentElement.appendChild(parent);

    left.appendChild(competitionDiv);
    left.appendChild(settingsDiv);
    left.appendChild(scheduleDiv);
    right.appendChild(advancementDiv);
    
}

function buildwindow5(id){
    const mainHeader = document.getElementById('mainheader');
    mainHeader.textContent = getRoundData(id) + " (" + id + ")";
    mainHeader.dataset.id=id;

    let parent = parentDiv();
    let left = parent.querySelector('#leftDiv');
    let right = parent.querySelector('#rightDiv');

    const settingsDiv = createSettingsDiv(id);
    const scheduleDiv = createScheduleDiv(id);
    const objectivesDiv = createObjectivesDiv(id);
    const standingsDiv = createStandingsDiv(id);
    const advancementDiv = createAdvancementDiv(id);

    // Clear any existing content and append the header, settings div, competitions list, and button
    const contentElement = document.getElementById('level-5-content');
    contentElement.innerHTML = ''; // Clear existing content
    contentElement.appendChild(mainHeader);
    contentElement.appendChild(parent);

    
    left.appendChild(standingsDiv);
    left.appendChild(advancementDiv);
    left.appendChild(settingsDiv);
    left.appendChild(objectivesDiv);
    right.appendChild(scheduleDiv);
    
    
}

function buildwindow6(id){

    const mainHeader = document.getElementById('mainheader');
    mainHeader.textContent = getRoundData(id) + " (" + id + ")";
    mainHeader.dataset.id=id;

    let parent = parentDiv();
    let left = parent.querySelector('#leftDiv');
    let right = parent.querySelector('#rightDiv');

    const settingsDiv = createSettingsDiv(id);
    const advancementDiv = createAdvancementDiv(id);
    const tasksDiv = createTasksDiv(id);

    // Clear any existing content and append the header, settings div, competitions list, and button
    const contentElement = document.getElementById('level-5-content');
    contentElement.innerHTML = ''; // Clear existing content
    contentElement.appendChild(mainHeader);
    contentElement.appendChild(parent);

    left.appendChild(settingsDiv);
    right.appendChild(advancementDiv);
    right.appendChild(tasksDiv);

}
