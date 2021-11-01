var arrayData = [];
var columnData = [];
const urlSearchParams = new URLSearchParams(window.location.search);

const params = Object.fromEntries(urlSearchParams.entries());

const docSheet = "https://opensheet.vercel.app/" + params["val"] + "/Sheet1"
fetch(docSheet).then(res => res.json()).then(data => {
    arrayData = data;
    keyData = Object.keys(arrayData[0]);

    keyData.forEach(element => {
        columnData.push({"data" : element, "title" : element})
    });

    if(Object.keys(arrayData[0]).length != 3){
        for (let index = 0; index < arrayData.length; index++) {
            arrayData[index]["Team Members"] = arrayData[index]["Team Members"].split(",").join("<br/><hr/>");
            arrayData[index]["Institute"] = arrayData[index]["Institute"].split(",").join("<br/><hr/>");
        }
    }

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
            searching: false,
            paging: false,
            info: false,
            ordering: false
        } );
    })

})
