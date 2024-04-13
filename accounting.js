let adminC = 0;
let markC = 0;
let devC = 0;
let finC = 0;

let adminSal = 0;
let markSal = 0;
let devSal = 0;
let finSal = 0;

let totalNum = 0;
let totalSal = 0;

// Loop through localStorage to gather dynamic employee data
for (let i = 1; i <= localStorage.length; i++) {
    let dep = localStorage.getItem("eDepartment" + i);
    let sal = parseFloat(localStorage.getItem("eSalary" + i));

    if (!isNaN(sal)) {
        if (dep === "Administration") {
            adminC++;
            adminSal += sal;
        } else if (dep === "Marketing") {
            markC++;
            markSal += sal;
        } else if (dep === "Development") {
            devC++;
            devSal += sal;
        } else if (dep === "Finance") {
            finC++;
            finSal += sal;
        }
    }
}

// Include static employee data in the calculations
for (let i = 1; i <= 7; i++) {
    let staticDep = localStorage.getItem("staticEmployee" + i + "_Department");
    let staticSal = parseFloat(localStorage.getItem("staticEmployee" + i + "_Salary"));

    if (!isNaN(staticSal)) {
        if (staticDep === "Administration") {
            adminC++;
            adminSal += staticSal;
        } else if (staticDep === "Marketing") {
            markC++;
            markSal += staticSal;
        } else if (staticDep === "Development") {
            devC++;
            devSal += staticSal;
        } else if (staticDep === "Finance") {
            finC++;
            finSal += staticSal;
        }
    }
}

// Calculate total number of employees and total salary
totalNum = adminC + devC + finC + markC;
totalSal = adminSal + devSal + finSal + markSal;

// Calculate average salaries (handle division by zero)
let adminAvg = adminC > 0 ? adminSal / adminC : 0;
let markAvg = markC > 0 ? markSal / markC : 0;
let devAvg = devC > 0 ? devSal / devC : 0;
let finAvg = finC > 0 ? finSal / finC : 0;
let totalAvg = totalNum > 0 ? totalSal / totalNum : 0;

// Output the results to the console
console.log("Department\tNumber of employees\tAverage salary\tTotal salary");
console.log("Administration\t" + adminC + "\t" + adminAvg.toFixed(2) + "\t" + adminSal.toFixed(2));
console.log("Marketing\t" + markC + "\t" + markAvg.toFixed(2) + "\t" + markSal.toFixed(2));
console.log("Development\t" + devC + "\t" + devAvg.toFixed(2) + "\t" + devSal.toFixed(2));
console.log("Finance\t" + finC + "\t" + finAvg.toFixed(2) + "\t" + finSal.toFixed(2));
console.log("Total\t" + totalNum + "\t" + totalAvg.toFixed(2) + "\t" + totalSal.toFixed(2));

// Display statistics in the HTML table
// Your code to update the HTML table goes here...


// Display statistics in the HTML table
document.getElementById("adminNum").textContent = adminC;
document.getElementById("adminAvg").textContent = adminAvg.toFixed(2);
document.getElementById("adminSal").textContent = adminSal.toFixed(2);

document.getElementById("markNum").textContent = markC;
document.getElementById("markAvg").textContent = markAvg.toFixed(2);
document.getElementById("markSal").textContent = markSal.toFixed(2);

document.getElementById("devNum").textContent = devC;
document.getElementById("devAvg").textContent = devAvg.toFixed(2);
document.getElementById("devSal").textContent = devSal.toFixed(2);

document.getElementById("finNum").textContent = finC;
document.getElementById("finAvg").textContent = finAvg.toFixed(2);
document.getElementById("finSal").textContent = finSal.toFixed(2);

document.getElementById("totalN").textContent = totalNum;
document.getElementById("totalA").textContent = totalAvg.toFixed(2);
document.getElementById("totalS").textContent = totalSal.toFixed(2);
