$(document).ready(function () {

    var post = [];

    // ************************************** move inside other functionnnnn

    $.get("/api/post", function (data) {
        console.log(data);
        post.push(data);
    }).then(function (data) {

        $("#get-header").empty();

        for (var i = 0; i < data.length; i++) {
            console.log(data[i])

            printPost(data)

            function printPost(data) {

               
                var showPost = $("<div>")
                showPost.addClass("view-post")
                showPost.append("<div>" + data[i].post_header + "</div>")
                showPost.append("<div>" + data[i].post_body + "</div>")
                showPost.append("<div>" + data[i].giphy_URL + "</div>")

                $("#get-header").append(showPost)

            }

        }

    })

    // ****************************************

    $("#post-button").on("click", function (event) {
        event.preventDefault();


        var postInfo = {
            post_header: $("#post-textHeader").val(),
            post_body: $("#post-textBody").val(),
            giphy_URL: $("#giphy-search").val()
        };

        console.log(postInfo)


       


        // if (!postInfo.post_header || !postInfo.post_body) {
        //     return;
        // }
        // If we have a header and body, run the postForm function


        $.post("/api/post", postInfo, function (data) {


            console.log(data)

            getPosts();

            $.get("/api/post", function (data) {
                console.log(data);
                post.push(data);
            }).then(function (data) {

                $("#get-header").empty();

                for (var i = 0; i < data.length; i++) {
                    console.log(data[i])

                    printPost(data)

                    function printPost(data) {

                        
                        var showPost = $("<div>")
                        showPost.addClass("view-post")
                        showPost.append("<div>" + data[i].post_header + "</div>")
                        showPost.append("<div>" + data[i].post_body + "</div>")
                        showPost.append("<div>" + data[i].giphy_URL + "</div>")

                        $("#get-header").append(showPost)

                    }

                }

            })

        });


        $(".post-container").hide();



        

    });
    

    function getPosts() {


    }
});