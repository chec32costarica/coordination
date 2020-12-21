
fetch("bridges.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");


        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table-bridges');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

       // document.querySelector("div #table-bridges").element.classList.add("table table-striped col-lg-12 text-center");
        
    }
)


fetch("psv.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");


        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table-psv');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

       // document.querySelector("div #table-bridges").element.classList.add("table table-striped col-lg-12 text-center");
        
    }
)

fetch("parada.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");


        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table-bus');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

       // document.querySelector("div #table-bridges").element.classList.add("table table-striped col-lg-12 text-center");
        
    }
)


fetch("uturn.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");


        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table-uturn');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

       // document.querySelector("div #table-bridges").element.classList.add("table table-striped col-lg-12 text-center");
        
    }
)

fetch("access.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");


        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table-access');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

       // document.querySelector("div #table-bridges").element.classList.add("table table-striped col-lg-12 text-center");
        
    }
)

fetch("pedestrian.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");


        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table-pedestrian');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

       // document.querySelector("div #table-bridges").element.classList.add("table table-striped col-lg-12 text-center");
        
    }
)

fetch("box.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");


        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table-box');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

       // document.querySelector("div #table-bridges").element.classList.add("table table-striped col-lg-12 text-center");
        
    }
)

fetch("concrete.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");


        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table-concrete');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

       // document.querySelector("div #table-bridges").element.classList.add("table table-striped col-lg-12 text-center");
        
    }
)

fetch("cycle.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");


        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table-cycle');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

       // document.querySelector("div #table-bridges").element.classList.add("table table-striped col-lg-12 text-center");
        
    }
)

fetch("sideroad.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");


        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table-sideroad');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

       // document.querySelector("div #table-bridges").element.classList.add("table table-striped col-lg-12 text-center");
        
    }
)
fetch("piv.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");


        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table-piv');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

       // document.querySelector("div #table-bridges").element.classList.add("table table-striped col-lg-12 text-center");
        
    }
)
fetch("ic.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");


        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table-ic');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

       // document.querySelector("div #table-bridges").element.classList.add("table table-striped col-lg-12 text-center");
        
    }
)


fetch("exp.json")
.then(response => response.json())
.then(leon => {
    console.log(leon);
    //document.querySelector("#leon").innerHTML = leon[2].inicio

    var col = [];
        for (var i = 0; i < leon.length; i++) {
            for (var key in leon[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        var table = document.createElement("table");
        table.setAttribute("class", "table table-hover table-striped");


        // Create table header row using the extracted headers above.
        var tr = table.insertRow(-1);                   // table row.

        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");      // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);
        }

        // add json data to the table as rows.
        for (var i = 0; i < leon.length; i++) {

            tr = table.insertRow(-1);

            for (var j = 0; j < col.length; j++) {
                var tabCell = tr.insertCell(-1);
                tabCell.innerHTML = leon[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        var divShowData = document.getElementById('table-exp');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

       // document.querySelector("div #table-bridges").element.classList.add("table table-striped col-lg-12 text-center");
        
    }
)
