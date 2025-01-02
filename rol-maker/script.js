//get the container element
const containerElement = document.querySelector('.container');
// create an array of careers
const careers = ["Software Developer", "Web Developer", "Data Scientist", "Data Analyst", "Machine Learning Engineer", "DevOps Engineer", "Cyber Security Analyst", "Network Engineer", "Database Administrator", "Cloud Engineer", "IT Support Specialist", "IT Manager", "IT Consultant", "IT Sales Professional", "IT Trainer", "IT Recruiter", "IT Project Manager", "IT Business Analyst", "IT Auditor", "IT Systems Analyst", "IT Security"];
let careersindex = 0;
let caracterIndex = 0;
//call the function
updateText();


//create the fuction
function updateText() {
    caracterIndex = caracterIndex + 1;
    //create an element and if the first letter of the career is a vowel, use 'an' else use 'a'
    containerElement.innerHTML = `<p>I am  ${careers[careersindex].slice(0, 1) === 'I' ? "an" : 'a'} ${careers[careersindex].slice(0, caracterIndex)}</p>`;

    //if the caracterIndex is equal to the length of the career, increment the careersindex and reset the caracterIndex
    if (caracterIndex === careers[careersindex].length) {
        careersindex++;
        caracterIndex = 0;
    }
    if (careersindex === careers.length) {
        careersindex = 0;
    }

    setTimeout(updateText, 400);

}
