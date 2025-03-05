document.addEventListener("DOMContentLoaded", function () {
    fetch("courses.json") // Make sure the file is hosted correctly
        .then(response => response.json())
        .then(data => {
            let container = document.getElementById("subjects-container");
            container.innerHTML = ""; // Clear existing content
            
            data.subjects.forEach(semester => {
                let section = document.createElement("div");
                section.classList.add("semester"); // Add a class for styling
                
                let header = document.createElement("h2");
                header.textContent = semester.year_term;
                
                let list = document.createElement("ul");
                
                semester.courses.forEach(course => {
                    let listItem = document.createElement("li");
                    listItem.innerHTML = `<strong>${course.code}</strong> - ${course.title}`;
                    list.appendChild(listItem);
                });
                
                section.appendChild(header);
                section.appendChild(list);
                container.appendChild(section);
            });
        })
        .catch(error => console.error("Error fetching subjects:", error));
});
