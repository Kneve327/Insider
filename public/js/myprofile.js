$(document).ready(function () {
    var userData = [];

    getDbInfo();

    function getDbInfo() {
        $.get("/api/users", function (data) {

            userData.push(data);
            // console.log(userData)

            drawUserForm();

        })
    }

    function drawUserForm() {

        $("#fnButton").text(userData[0][0].first_name)
        // console.log(userData[0][0].first_name);
        $("#lnButton").text(userData[0][0].last_name)
        $("#unButton").text(userData[0][0].username)
        $("#emailButton").text(userData[0][0].email)


    }


});