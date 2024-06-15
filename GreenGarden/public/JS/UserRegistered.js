
const validUser = (emails, password, arr) =>{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].email == emails) {
            if (arr[i].password == password) {
                return true;
            }
        }
    }
    return false;
};

module.exports = validUser;

