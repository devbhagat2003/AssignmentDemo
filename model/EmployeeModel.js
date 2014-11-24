Assignment.service('EmployeeModel', function () {
    //debugger;
    this.getEmployees = function () {
        return [
            {
                id: 0,
                name: 'Dev Bhagat',
                location: 'Chandigath, Sector 37A',
                dateOfBirth: '12/02/1979',
                joiningDate: '1/1/2014'
            } 
        ];
    }
});