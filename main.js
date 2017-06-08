var formData = [
    {
        "type": "text",
        "label": "First Name",
        "id": "user-first-name",
        "icon": "fa-user",
        "options": []
    },
    {
        "type": "text",
        "label": "Last Name",
        "id": "user-last-name",
        "icon": "fa-user",
        "options": []
    },
    {
        "type": "email",
        "label": "Email Address",
        "id": "user-email",
        "icon": "fa-envelope",
        "options": []
    },
    {
        "type": "text",
        "label": "Current website url",
        "id": "user-website",
        "icon": "fa-globe",
        "options": []
    },
    {
        "type": "select",
        "label": "Select Language",
        "id": "user-language",
        "icon": "",
        "options": [
            {
                "label": "English",
                "value": "EN"
            },
            {
                "label": "French",
                "value": "FR"
            },
            {
                "label": "Spanish",
                "value": "SP"
            },
            {
                "label": "Chinese",
                "value": "CH"
            },
            {
                "label": "Japanese",
                "value": "JP"
            }
        ]
    },
    {
        "type": "textarea",
        "label": "Your Comment",
        "id": "user-comment",
        "icon": "fa-comments",
        "options": []
    },
    {
        "type": "tel",
        "label": "Mobil Number",
        "id": "user-mobile",
        "icon": "fa-mobile-phone",
        "options": []
    },
    {
        "type": "tel",
        "label": "Home Number",
        "id": "user-phone",
        "icon": "fa-phone",
        "options": []
    }
];

function createForm() {
    var form = document.querySelector("#form");

    for (var i = 0; i < formData.length; i++) {
        if (formData[i].type === "text") {
            var newInput = document.createElement("input");
            newInput.type = formData[i].type;
            newInput.id = formData[i].id;
            newInput.placeholder = formData[i].label;
            form.appendChild(newInput);
        }
        else if (formData[i].type === "email") {
            var newInput = document.createElement("input");
            newInput.type = formData[i].type;
            newInput.id = formData[i].id;
            newInput.placeholder = formData[i].label;
            form.appendChild(newInput);
        }
        else if (formData[i].type === "tel") {
            var newInput = document.createElement("input");
            newInput.type = formData[i].type;
            newInput.id = formData[i].id;
            newInput.placeholder = formData[i].label;
            form.appendChild(newInput);
        }
        else if (formData[i].type === "select") {
            var newInput = document.createElement("select");
            var newOption = document.createElement("option");
            newInput.type = formData[i].type;
            newInput.id = formData[i].id;
            newOption.textContent = formData[i].options[0].label;
            newInput.appendChild(newOption);
            form.appendChild(newInput);

            for (var k = 0; k < formData[i].options.length; k++) {
                var newOption = document.createElement("option");
                newOption.value = formData[i].options[k].value;
                newOption.textContent = formData[i].options[k].label;
                newInput.appendChild(newOption);
            }
        }
        else if (formData[i].type === "textarea") {
            var newInput = document.createElement("textarea");
            newInput.type = formData[i].type;
            newInput.id = formData[i].id;
            newInput.placeholder = formData[i].label;
            form.appendChild(newInput);
        }
    }
}

createForm();
