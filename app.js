function employee(EmployeeID, FullName, Department, Level, ImageURL,Salary) {
    this.EmployeeID = EmployeeID;
    this.FullName = FullName;
    this.Department = Department;
    this.Level = Level;
    this.ImageURL = ImageURL;
    this.Salary = this.CalcSalary(Level);
}

employee.prototype.CalcSalary = function (Level) {
    let salary;
    let netSalary;
    if (Level == "Senior") {
        //( max - min +1 )+ min 
        salary = Math.floor(Math.random()*(2000 - 1500 +1) + 1500)
        netSalary = salary - ((salary * 7.5) / 100);
    } else if (Level == "Mid-Senior") {
        salary = Math.floor(Math.random(1000, 1500) * 10);
        netSalary = salary - ((salary * 7.5) / 100);
    } else if (Level == "Junior") {
        salary = Math.floor(Math.random(500, 1000) * 10);
        netSalary = salary - ((salary * 7.5) / 100);
    }
    return netSalary;
}

 
let emp1 = new employee(1000, "Ghazi Samer", "Administration", "Senior", "ghazi1.jpg");
let emp2 = new employee(1001, "Lana Ali", "Finance", "Senior", "lana1.jpg");
let emp3 = new employee(1002, "Tamara Ayoub", "Marketing", "Senior", "tamara.jpg")
let emp4 = new employee(1003, "Safi Walid", "Administration", "Mid-Senior", "safi.jpg");
let emp5 = new employee(1004, "Omar Zaid", "Development", "Senior", "omar.jpg");
let emp6 = new employee(1005, "Rana Saleh", "Development", "Junior", "rana.jfif");
let emp7 = new employee(1006, "Hadi Ahmad", "Finance", "Mid-Senior", "hadi.jpg");

employee.prototype.render=function(fullname,salary){
    fullname=this.FullName; 
    salary = this.Salary;
    let result = document.createElement('p');
    result.textContent=fullname +":"+salary;
    document.body.appendChild(result);
    let footer = document.querySelector('footer');
    document.body.insertBefore(result, footer);
}
emp1.render() 
emp2.render()
emp3.render()
emp4.render()
emp5.render()
emp6.render()
emp7.render()