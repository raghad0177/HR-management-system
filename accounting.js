
let adminC = 0;
let markC = 0;
let devC = 0;
let finC = 0;

let adminSal = 0;
let markSal = 0;
let devSal = 0;
let finSal = 0;

let adminAvg = 0;
let markAvg = 0;
let devAvg = 0;
let finAvg = 0;

let totalNum=0;
let totalAvg=0;
let totalSal=0;

for (let i = 1; i < localStorage.length; i++) {
    let dep = localStorage.getItem("eDepartment" + i);
    if (dep === "Administration") {
        adminC++;
        adminSal += parseFloat(localStorage.getItem("eSalary" + i));
    }
    if (dep === "Marketing") {
        markC++;
        markSal += parseFloat(localStorage.getItem("eSalary" + i));
    }
    if (dep === "Development") {
        devC++;
        devSal += parseFloat(localStorage.getItem("eSalary" + i));
    }
    if (dep === "Finance") {
        finC++;
        finSal += parseFloat(localStorage.getItem("eSalary" + i));
    }

}



adminAvg = adminSal / adminC;
markAvg = markSal / markC;
devAvg = devSal / devC;
finAvg = finSal / finC;


totalNum=adminC+devC+finC+markC;
totalAvg=(adminAvg+devAvg+finAvg+markAvg)/4;
totalSal=adminSal+devSal+finSal+markSal;


let Admin1 =document.getElementById("adminNum");
Admin1.textContent=adminC;
let Admin2 =document.getElementById("adminAvg");
Admin2.textContent=adminAvg;
let Admin3 =document.getElementById("adminSal");
Admin3.textContent=adminSal;


let Mark1 =document.getElementById("markNum");
Mark1.textContent=markC;
let Mark2 =document.getElementById("markAvg");
Mark2.textContent=markAvg;
let Mark3 =document.getElementById("markSal");
Mark3.textContent=markSal;


let Dev1 =document.getElementById("devNum");
Dev1.textContent=devC;
let Dev2 =document.getElementById("devAvg");
Dev2.textContent=devAvg;
let Dev3 =document.getElementById("devSal");
Dev3.textContent=devSal;


let Fin1 =document.getElementById("finNum");
Fin1.textContent=finC;
let Fin2 =document.getElementById("finAvg");
Fin2.textContent=finAvg;
let Fin3 =document.getElementById("finSal");
Fin3.textContent=finSal;


let totalN =document.getElementById("totalN");
totalN.textContent=totalNum;
let totalA =document.getElementById("totalA");
totalA.textContent=totalAvg;
let totalS =document.getElementById("totalS");
totalS.textContent=totalSal;