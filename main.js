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
        if (formData[i].type === "text" || formData[i] === "tel" || formData[i] === 'email') {
            var newInput = document.createElement("input");
            newInput.type = formData[i].type;
            newInput.id = formData[i].id;
            newInput.placeholder = formData[i].label;
            form.appendChild(newInput);
        }
        else if (formData[i] === "select") {
            var newSelect = document.createElement("select");
            newSelect.type = formData[i].id;

            // else if (formData[i] === textarea)
        }
    }
}
console.log(formData[0].type);
console.log(formData[0].id);
createForm();
