let addinp = document.getElementById("addinp");
let delinp = document.getElementById("delinp");
let show = document.getElementById("show");
let edi = document.getElementById("edinp");
let num = document.getElementById("numinp");
const page = document.createElement("div");
function index() {
    window.location.href = "index.html";
}
function edit_page() {
    window.location.href = "edit.html";
}
function Show_page() {
    window.location.href = "Show .html";
}
function use_away() {
    window.location.href = "use_away.html";
}
function set() {
    window.location.href = "settings.html";
}
function Contact_me() {
    window.location.href = "Contact_me.html";
}
function lan() {
    window.location.href = "settings ar.html";
}
let array = JSON.parse(localStorage.getItem("array")) || [];
//إضافة المهمة
function add() {
    //التأكد من أن حقل الإدخال ليس فارغاً
    if (!addinp.value.trim()) {
        page.textContent = "Error : The input is Empty";
        page.id = "page";
        const btn = document.createElement("button");
        btn.textContent = "OK";
        btn.id = "btn";
        document.body.appendChild(page);
        page.appendChild(btn);
        btn.onclick = function() {
            page.remove();
            btn.remove;
        }
    } else {
        if (addinp.value === "style.^9[remove];") {
            window.location.href = "index 2.html";
        } else {
            array.push(addinp.value);
            localStorage.setItem("array" , JSON.stringify(array));
            page.textContent = "The Task has been added successfly!";
            page.id = "page";
            document.body.appendChild(page);
            const btn = document.createElement("button");
            btn.textContent = "OK";
            btn.id = "btn";
            document.body.appendChild(page);
            page.appendChild(btn);
            btn.onclick = function() {
                page.remove();
                btn.remove;
            }
        }
    }
}
//حذف المهمة
function remove() {
    let task = delinp.value;
    let index = array.indexOf(task);
    let solve = delinp.value.trim();
    //التحقق من أن حقل الإدخال ليس فارغاً
    if (!delinp.value.trim()) {
        page.textContent = "Error : The input is Empty";
        page.id = "page";
        document.body.appendChild(page);
        const btn = document.createElement("button");
        btn.textContent = "OK";
        btn.id = "btn";
        document.body.appendChild(page);
        page.appendChild(btn);
        btn.onclick = function() {
            page.remove();
            btn.remove;
        }
    //التحقق من أن المهمة موجودة أم لا
    } else if (array.includes(task) === true) {
        if (index !== -1) {
            array.splice(index,1);
            localStorage.setItem("array" , JSON.stringify(array));
            page.textContent = "The Task has been deleted successfly!";
            page.id = "page";
            document.body.appendChild(page);
            const btn = document.createElement("button");
            btn.textContent = "OK";
            btn.id = "btn";
            document.body.appendChild(page);
            page.appendChild(btn);
            btn.onclick = function() {
                page.remove();
                btn.remove;
            }
        }
    } else if (array.includes(task) === false) {
        if (delinp.value === "${allremove}") {
            array = [];
            localStorage.setItem("array" , JSON.stringify(array));
            page.textContent = "The all Task has been deleted successfly!";
            page.id = "page";
            document.body.appendChild(page);
            const btn = document.createElement("button");
            btn.textContent = "OK";
            btn.id = "btn";
            document.body.appendChild(page);
            page.appendChild(btn);
            btn.onclick = function() {
                page.remove();
                btn.remove;
            }
        } else if (delinp.value==="&^*{$}[ST/S];") {
            window.location.href="data.html";
        } else if (delinp.value==="{edit}.task($);") {
            window.location.href="edit.html";
        } else {
            page.textContent = "Error : The Task is not defined";
            page.id = "page";
            document.body.appendChild(page);
            const btn = document.createElement("button");
            btn.textContent = "OK";
            btn.id = "btn";
            document.body.appendChild(page);
            page.appendChild(btn);
            btn.onclick = function() {
                page.remove();
                btn.remove;
            }
        }
    }
}
//تعديل المهمة
function edit() {
    let num2 = num.value-1;
    let solve = edi.value.trim();
    if (num2 >= 0 && solve != "" && num.value <= array.length) {
        array.splice(num2,1);
        let task = edi.value;
        array.splice(num2,0,task);
        page.textContent = "The Task has been edited successfly!";
        page.id = "page";
        document.body.appendChild(page);
        const btn = document.createElement("button");
        btn.textContent = "OK";
           btn.id = "btn";
           document.body.appendChild(page);
           page.appendChild(btn);
           btn.onclick = function() {
               page.remove();
               btn.remove;
           }
           localStorage.setItem("array" , JSON.stringify(array));
    } else if(num.value > array.length) {
        page.textContent = "Error : Check for The number of Task";
        page.id = "page";
        document.body.appendChild(page);
        const btn = document.createElement("button");
        btn.textContent = "OK";
        btn.id = "btn";
        document.body.appendChild(page);
        page.appendChild(btn);
        btn.onclick = function() {
            page.remove();
            btn.remove;
        }
    } else {
        page.textContent = "Error : The Task is not defined";
        page.id = "page";
        document.body.appendChild(page);
        const btn = document.createElement("button");
        btn.textContent = "OK";
        btn.id = "btn";
        document.body.appendChild(page);
        page.appendChild(btn);
        btn.onclick = function() {
            page.remove();
            btn.remove;
        }
    }
}
//عرض المهام
function run() {
    //التحقق من أن القائمة ليست فارغة
    if (array=="") {
        show.innerHTML = "<div class='not-task'>You don't have any Task</div>";
    } else {
        let i = 0;
        let task;
        for (let v = 0;v < array.length;++v) {
            var id = v;
        }
        for (task of array) {
            i++;
            show.innerHTML += `<div class='new'><a>${i}-&nbsp;${task}</a>
            <input type='checkbox' id='${id}' onclick='check(this.id)'/></div>`+"<hr>"
        }
        show.innerHTML += "<div class='end-display'>This is The all Task </div>"
    }
}
//طباعة القائمة في ال console
console.log(array);