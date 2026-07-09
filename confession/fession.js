    const button = document.getElementById("send");
        const textarea = document.getElementById("texts");
        const posts = document.getElementById("posts");

        button.addEventListener("click", function(event){

            event.preventDefault();

            let message = textarea.value;

            if(message === ""){
                alert("please write a confession");
                return;
            }

            let texts = document.createElement("div");

            texts.innerHTML = `
            <h3>Anonymous</h3>
            <p>${message}</p>
            <hr>
            `;

            posts.prepend(texts);
            textarea.value="";

        });