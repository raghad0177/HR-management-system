let staticEmployees = [
    { FullName: "Ghazi Samer", Department: "Administration", Level: "Senior", ImageURL: "assets/Ghazi.jpg" },
    { FullName: "Lana Ali", Department: "Finance", Level: "Senior", ImageURL: "assets/Lana.jpg" },
    { FullName: "Tamara Ayoub", Department: "Marketing", Level: "Senior", ImageURL: "assets/Tamara.jpg" },
    { FullName: "Safi Walid", Department: "Administration", Level: "Mid-Senior", ImageURL: "assets/Safi.jpg" },
    { FullName: "Omar Zaid", Department: "Development", Level: "Senior", ImageURL: "assets/Omar.jpg" },
    { FullName: "Rana Saleh", Department: "Development", Level: "Junior", ImageURL: "assets/Rana.jpg" },
    { FullName: "Hadi Ahmad", Department: "Finance", Level: "Mid-Senior", ImageURL: "assets/Hadi.jpg" }
];

// Store the static employee data in local storage
staticEmployees.forEach((emp, index) => {
    let key = "staticEmployee" + (index + 1);
    localStorage.setItem(key + "_Name", emp.FullName);
    localStorage.setItem(key + "_Department", emp.Department);
    localStorage.setItem(key + "_Level", emp.Level);
    localStorage.setItem(key + "_ImageURL", emp.ImageURL);
});

// Retrieve the total number of static employees
let totalStaticEmployees = staticEmployees.length;

// Define the employee constructor function
function Employee(FullName, Department, Level, ImageURL) {
    this.EmployeeID = this.employeeId();
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = this.CalcSalary(Level);
}

Employee.prototype.employeeId = function () {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
}

Employee.prototype.CalcSalary = function (Level) {
    let salary;
    let netSalary;
    if (Level == "Senior") {
        salary = Math.floor(Math.random() * (2000 - 1500 + 1) + 1500);
        netSalary = salary - ((salary * 7.5) / 100);
    } else if (Level == "Mid-Senior") {
        salary = Math.floor(Math.random() * (1500 - 1000 + 1) + 1000);
        netSalary = salary - ((salary * 7.5) / 100);
    } else if (Level == "Junior") {
        salary = Math.floor(Math.random() * (1000 - 500 + 1) + 500);
        netSalary = salary - ((salary * 7.5) / 100);
    }
    return netSalary;
}

Employee.prototype.render = function () {
    let section;
    if (this.Department === "Administration") {
        section = document.getElementById('administrationDep');
    } else if (this.Department === "Marketing") {
        section = document.getElementById('marketingDep');
    } else if (this.Department === "Development") {
        section = document.getElementById('developmentDep');
    } else if (this.Department === "Finance") {
        section = document.getElementById('financeDep');
    }
    let div1 = document.createElement('div');
    div1.classList.add('card');
    section.appendChild(div1);
    let img1 = document.createElement('img');
    img1.setAttribute('src', this.ImageURL);
    div1.appendChild(img1);
    let div2 = document.createElement('div');
    div2.classList.add('container');
    div1.appendChild(div2);
    let h41 = document.createElement('h3');
    div2.appendChild(h41);
    h41.textContent = "ID: " + this.EmployeeID;
    let h42 = document.createElement('h3');
    div2.appendChild(h42);
    h42.textContent = "Name: " + this.FullName;
    let h31 = document.createElement('h4');
    div2.appendChild(h31);
    h31.textContent = "Department: " + this.Department;
    let h32 = document.createElement('h4');
    div2.appendChild(h32);
    h32.textContent = "Level: " + this.Level;
    let h33 = document.createElement('h4');
    div2.appendChild(h33);
    h33.textContent = "Salary: " + this.Salary;
}

Employee.prototype.saveData = function(){
    click++;
    localStorage.setItem("eID" + click, this.EmployeeID);
    localStorage.setItem("eName" + click, this.FullName);
    localStorage.setItem("eDepartment" + click,this.Department);
    localStorage.setItem("eLevel" + click, this.Level);
    localStorage.setItem("eSalary" + click, this.Salary);
    localStorage.setItem("eImageURL" + click, this.ImageURL);
    localStorage.setItem("totalEmployees", click); // Update totalEmployees value
}

let empForm = document.getElementById("addEmployee");
empForm.addEventListener('click', addNewEmployee);

let click = parseInt(localStorage.getItem("totalEmployees")) || 0;

function addNewEmployee(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let department = document.getElementById('department').value;
    let level = document.getElementById('level').value;
    let imageURL = document.getElementById('img').value;
    if (imageURL == "") {
        imageURL = "assets/default.jpg";
    }
    let newEmployee = new Employee(name, department, level, imageURL);
    newEmployee.render();
    newEmployee.saveData();
}

// Render all static employees
for (let i = 1; i <= totalStaticEmployees; i++) {
    let emp = new Employee(
        localStorage.getItem("staticEmployee" + i + "_Name"),
        localStorage.getItem("staticEmployee" + i + "_Department"),
        localStorage.getItem("staticEmployee" + i + "_Level"),
        localStorage.getItem("staticEmployee" + i + "_ImageURL")
    );
    emp.render();
}

// Render all dynamic employees stored in local storage
for (let i = 1; i <= click; i++) {
    let emp = new Employee(
        localStorage.getItem("eName" + i),
        localStorage.getItem("eDepartment" + i),
        localStorage.getItem("eLevel" + i),
        localStorage.getItem("eImageURL" + i)
    );
    emp.render();
}
