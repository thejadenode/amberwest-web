// Define the lists of words for each part of the title
const higherAdjectives = ["Senior", "Lead", "Head", "Chief"];
const lowerAdjectives = ["Junior", "Associate", "Assistant"];
const fields = ["Web", "Software", "Marketing", "Data", "Business", "SEO", "UI", "UX", "Project"];
const workloads = ["Developer", "Designer", "Specialist", "Engineer", "Analyst", "Manager", "Intern", "Support", "Technician"];

// Function to generate a random element from a list
function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}

// Function to generate a random job title
function generateJobTitle() {
    // Choose random elements from each list
    const higherAdj = getRandomElement(higherAdjectives) || ""; // Allow empty higherAdj
    const lowerAdj = getRandomElement(lowerAdjectives) || ""; // Allow empty lowerAdj
    const field = getRandomElement(fields);
    const workload = getRandomElement(workloads);

    // Build the title string
    let title = "";
    if (higherAdj) {
        title += higherAdj + " ";
    }
    if (lowerAdj) {
        title += lowerAdj + " ";
    }
    title += field + " " + workload;

    return title.trim(); // Remove leading/trailing spaces
}

document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
    populateCareersTable();
  });

// Populate table with id careersTable
function populateCareersTable(){
    let jobCount = 10;
let careersTableBody = document.getElementById("careersTableBody");
for (let i = 0; i <= jobCount; i++) {
    // Create td title
    let tdTitle = document.createElement("td");
    tdTitle.scope = "row";
    tdTitle.innerHTML = generateJobTitle();

    // Create td availability
    let tdAvailability = document.createElement("td");
    tdAvailability.innerHTML = Math.floor(Math.random()*10)+1;

    // Create button
    let btnApply = document.createElement("button")
    btnApply.classList.add("btn", "btn-primary", "btn-sm", "w-100");
    btnApply.innerHTML = "Apply";

    // Create td button and attach button
    let tdApplyBtn = document.createElement("td")
    tdApplyBtn.appendChild(btnApply);

    // Create row and attach all td
    let row = document.createElement("tr");
    row.classList.add("table-primary");
    row.appendChild(tdTitle);
    row.appendChild(tdAvailability);
    row.appendChild(tdApplyBtn);

    // Attach row to careersTableBody
    careersTableBody.appendChild(row);
    console.log("hello")
}
}