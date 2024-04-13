// Define the Employee constructor function
function Employee(FullName, Department, Level, ImageURL) {
    // Ensure employeeId is defined before calling it
    this.EmployeeID = this.employeeId();
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    // Calculate the salary based on the level
    this.Salary = this.CalcSalary(Level);
}

// Define the employeeId method
Employee.prototype.employeeId = function () {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
}

// Define the CalcSalary method
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

// Static employees data
let staticEmployees = [
    { FullName: "Ghazi Samer", Department: "Administration", Level: "Senior", ImageURL: "assets/Ghazi.jpg", EmployeeID: 0 },
    { FullName: "Lana Ali", Department: "Finance", Level: "Senior", ImageURL: "assets/Lana.jpg", EmployeeID: 0 },
    { FullName: "Tamara Ayoub", Department: "Marketing", Level: "Senior", ImageURL: "assets/Tamara.jpg", EmployeeID: 0 },
    { FullName: "Safi Walid", Department: "Administration", Level: "Mid-Senior", ImageURL: "assets/Safi.jpg", EmployeeID: 0 },
    { FullName: "Omar Zaid", Department: "Development", Level: "Senior", ImageURL: "assets/Omar.jpg", EmployeeID: 0 },
    { FullName: "Rana Saleh", Department: "Development", Level: "Junior", ImageURL: "assets/Rana.jpg", EmployeeID: 0 },
    { FullName: "Hadi Ahmad", Department: "Finance", Level: "Mid-Senior", ImageURL: "assets/Hadi.jpg", EmployeeID: 0 }
];

// Calculate and set salary for each static employee
staticEmployees.forEach((emp, index) => {
    emp.Salary = new Employee(emp.FullName, emp.Department, emp.Level, emp.ImageURL).Salary;
});

// Store static employee data in local storage
staticEmployees.forEach((emp, index) => {
    let key = "staticEmployee" + (index + 1);
    localStorage.setItem(key + "_Name", emp.FullName);
    localStorage.setItem(key + "_Department", emp.Department);
    localStorage.setItem(key + "_Level", emp.Level);
    localStorage.setItem(key + "_ImageURL", emp.ImageURL);
    localStorage.setItem(key + "_Salary", emp.Salary); // Add salary to local storage
    localStorage.setItem(key + "_ID", emp.EmployeeID);
});

// Retrieve the total number of static employees
let totalStaticEmployees = staticEmployees.length;

// Define the render method for Employee
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

// Define the saveData method for Employee
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

// Event listener for adding new employees
let empForm = document.getElementById("addEmployee");
empForm.addEventListener('click', addNewEmployee);

// Initialize the total employees counter
let click = parseInt(localStorage.getItem("totalEmployees")) || 0;

// Function to add a new employee
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
