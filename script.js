function addStudent() {
    const name = document.getElementById("studentName").value;

    if (name === "") {
        alert("Please enter a student name");
        return;
    }

    const list = document.getElementById("studentList");

    const student = document.createElement("li");
    student.textContent = name;

    list.appendChild(student);

    document.getElementById("studentName").value = "";
}