
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

            const container = document.querySelector("#container");
            const dropdown = document.createElement("div");
            const button = document.createElement("button");
            const ul = document.createElement("ul");
            const li_1 = document.createElement("li");
            const li_2 = document.createElement("li");
            const li_3 = document.createElement("li");
            const a_1 = document.createElement("a");
            const a_2 = document.createElement("a");
            const delebtn = document.createElement("button");

            dropdown.id = keys[i];
            dropdown.classList.add("dropdown", "my-3");
            button.classList.add("btn", "btn-dark", "dropdown-toggle");
            button.type = "button";
            button.setAttribute("data-bs-toggle", "dropdown");
            button.setAttribute("aria-expanded", "true");
            button.style.width = "100%";
            button.innerText = "User - " + (i + 1);
            ul.classList.add("dropdown-menu", "w-100", "text-center", "bg-dark");
            a_1.classList.add("dropdown-item", "text-light");
            a_1.href = "#";
            a_1.innerHTML = "ID : " + id;
            a_2.classList.add("dropdown-item", "text-light");
            a_2.href = "#";
            a_2.innerHTML = "Password : " + pass;
            delebtn.innerText = "Delete";
            delebtn.classList.add("btn","btn-danger","my-3");
            delebtn.addEventListener("click",()=>{
                var idToDelete = dropdown.id;
                database.ref('users/' + idToDelete).remove();
                dropdown.remove();
            });

            dropdown.append(button);
            dropdown.append(ul);
            ul.append(li_1);
            li_1.append(a_1);
            ul.append(li_2);
            li_2.append(a_2);
            ul.append(delebtn);

            container.append(dropdown);
        }

        console.log(keys.length);
    }

    function errData(err) {
        console.log('Error');
        console.log(err);
    }
}
