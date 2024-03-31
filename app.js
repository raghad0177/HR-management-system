function employee(FullName, Department, Level, ImageURL) {
    this.EmployeeID = this.employeeId();
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = this.CalcSalary(Level);
}

employee.prototype.employeeId = function () {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
}

employee.prototype.CalcSalary = function (Level) {
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

employee.prototype.render = function () {
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
    img1.width = "150";
    img1.height = "150";
    div1.append(img1);
    let div2 = document.createElement('div');
    div2.classList.add('container'); 
    div1.append(div2);
    let h41 = document.createElement('h3');
    div2.append(h41);
    h41.textContent = "Name : " + this.FullName + " ID :" + this.EmployeeID;
    let h31 = document.createElement('h4');
    div2.append(h31);
    h31.textContent = "Department : " + this.Department;
    let h32 = document.createElement('h4');
    div2.append(h32);
    h32.textContent = " Level :" + this.Level;
    let h33 = document.createElement('h4');
    div2.append(h33);
    h33.textContent = "Salary : " + this.Salary;
   
}


let emp1 = new employee("Ghazi Samer", "Administration", "Senior", "assets/Ghazi.jpg");
let emp2 = new employee("Lana Ali", "Finance", "Senior",  "assets/Lana.jpg");
let emp3 = new employee("Tamara Ayoub", "Marketing", "Senior",  "assets/Tamara.jpg");
let emp4 = new employee("Safi Walid", "Administration", "Mid-Senior",  "assets/Safi.jpg");
let emp5 = new employee("Omar Zaid", "Development", "Senior",  "assets/Omar.jpg");
let emp6 = new employee("Rana Saleh", "Development", "Junior",  "assets/Rana.jpg");
let emp7 = new employee("Hadi Ahmad", "Finance", "Mid-Senior",  "assets/Hadi.jpg");


let empForm = document.getElementById("addEmployee");
empForm.addEventListener('click', addNewEmployee);

function addNewEmployee(event){
    event.preventDefault();
    let name = document.getElementById('name').value;
           let department = document.getElementById('department').value;
             let level = document.getElementById('level').value;
             let imageURL = document.getElementById('img').value;
             if (imageURL == "") {
                imageURL = "assets/defult.jpg";
            } 
                 let newEmployee = new employee(name, department, level, imageURL);
                 newEmployee.render();
}

emp1.render()
emp2.render()
emp3.render()
emp4.render()
emp5.render()
emp6.render()
emp7.render()