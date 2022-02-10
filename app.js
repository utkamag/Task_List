// Минимальная оптимизация проекта, подгружаем JavaScript после загрузки DOM элементов
document.addEventListener('DOMContentLoaded', function () {

    // Добавляем данные из input в div и создаем новые DOM элементы

    function addTask() {
        let task_input = document.getElementById("task_input").value

        document.getElementById("list").style.visibility = "visible";

        function localStorages() {

        localStorage.setItem("data", task_input) // Local storage (тут не работает)
        let localData = localStorage.getItem("data")
        console.log(localData)
        document.getElementById("list_text").innerHTML += localData
        }
        document.getElementById("task_input").value = ""


        localStorages()
    }

    document.getElementById("task_add").addEventListener("click", addTask)




    // Удаляем все задачи

    function deleteTasks() {
        document.getElementById("task_delete").addEventListener("click", function () {
            document.location.reload()
        })
    }

    deleteTasks()

    // Все задачи выполнены!

    function listImg() {
        document.getElementById("task_ready").addEventListener("click", function () {
            document.getElementById("list_img").src = "Img/true.png"
        })
    }

    listImg()

    // Задача выполнена

    function listDone() {
        document.getElementById("list_done").addEventListener("click", function () {
            document.getElementById("list_img").src = "Img/true.png"
        })
    }

    listDone()

    // Задача не выполнена

    function listNotDone() {
        document.getElementById("list_not_done").addEventListener("click", function () {
            document.getElementById("list_img").src = "Img/false.png"
        })
    }

    listNotDone()

    // Удалить задачу

    function deleteElement() {
        document.getElementById("list_delete").addEventListener("click", function () {
            document.location.reload()
            document.getElementById("")
        })
    }

    deleteElement()

});


