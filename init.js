var arrayData = [];
var columnData = [];
const urlSearchParams = new URLSearchParams(window.location.search);

const params = Object.fromEntries(urlSearchParams.entries());
console.log(params["val"]);

const docSheet = "https://opensheet.vercel.app/" + params["val"] + "/Sheet1"
fetch(docSheet).then(res => res.json()).then(data => {
    arrayData = data;
    keyData = Object.keys(arrayData[0]);

    keyData.forEach(element => {
        columnData.push({"data" : element, "title" : element})
    });

}).then(() => {
    $(document).ready(function(){
        $('#table').DataTable( {
            data: arrayData,
            "columns": columnData,
            columnDefs:[
                {"width": "20%" ,"targets": 0}
            ],
            "dom":'<"top"if><"table"t><"bottom"p>',
            lengthChange: false,
        } );
    })
})

