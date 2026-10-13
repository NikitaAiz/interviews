//Interview Questions

// 1 - Based on a employee email and the following object that represent all employees email and their Manager email {employee: manager}
//     Find the CEO of the company and return is First and Last name
//     Each email is based on the following structure: firstName.lastName@example.com

const companyEmployeesMap = {
    'yossi.dan@company.com': 'may.hen@company.com',
    'may.hen@company.com': 'dani.gidon@company.com',
    'sarit.choen@company.com': 'moshe.amor@company.com',
    'amit.landu@company.com': 'moshe.amor@company.com',
    'moshe.amor@company.com': 'sivan.amor@company.com',
    'dani.gidon@company.com': 'sivan.amor@company.com',
    'amir.hen@company.com': 'moshe.amor@company.com',
    'sivan.amor@company.com': null
}

const keys = [
    'yossi.dan@company.com',
    'may.hen@company.com',
    'sarit.choen@company.com',
    'amit.landu@company.com',
    'moshe.amor@company.com',
    'dani.gidon@company.com',
    'amir.hen@company.com',
    'sivan.amor@company.com'
]; //Object.keys(companyEmployeesMap)

const findCEO = (companyEmployeesMap, keys) => {
    // Implement

}