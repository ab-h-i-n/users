
var database = firebase.database();

window.onload = function () {

    var ref = database.ref('users');
    ref.on('value', gotData, errData);

    function gotData(data) {
        
        var users = data.val();
        var keys = Object.keys(users);

        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var id = users[k].id;
            var pass = users[k].Password;
            var time = users[k].time;

            const container = document.querySelector("#container");


            const card = document.createElement("div");
            const cardBody = document.createElement("div");
            const h4 = document.createElement("h4");
            const p1 = document.createElement("p");
            const hr= document.createElement("hr");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");
            const delebtn = document.createElement("button");

            card.id = keys[i];
            card.classList.add("card", "text-white" ,"bg-dark", "position-relative","my-3");
            cardBody.classList.add("card-body");
            h4.classList.add("card-title", "text-center");
            p1.classList.add("card-text", "text-center", "fs-6");
            hr.classList.add("border-top");
            p2.classList.add("card-text");
            p3.classList.add("card-text");
            delebtn.classList.add("btn", "btn-danger", "w-100");

            h4.innerText = "User-"+(i+1);
            p1.innerText =  time;
            p2.innerText = "ID : " + id;
            p3.innerText = "Pass : " + pass;
            delebtn.innerText = "Delete";

            container.append(card);
            card.append(cardBody);
            cardBody.append(h4,p1,hr,p2,p3,delebtn);

            delebtn.addEventListener("click",()=>{
                var idToDelete = card.id;
                database.ref('users/' + idToDelete).remove();
                card.remove();

                window.location.reload();
            });
              
        }

        console.log(keys.length);
    }

    function errData(err) {
        console.log('Error');
        console.log(err);
    }
}

