var arrayData = [];
var columnData = [];
const urlSearchParams = new URLSearchParams(window.location.search);

const params = Object.fromEntries(urlSearchParams.entries());

const docSheet = "https://opensheet.vercel.app/" + params["val"] + "/Sheet1";

fetch(docSheet).then(res => res.json()).then(data => {
    arrayData = data;
    keyData = Object.keys(arrayData[0]);

    keyData.forEach(element => {
        columnData.push({"data" : element, "title" : element})
    });

    if(keyData.length != 3){
        for (let index = 0; index < arrayData.length; index++) {
            arrayData[index][keyData[keyData.length - 2]] = arrayData[index][keyData[keyData.length - 2]].split(",").join("<br/><hr/>");
            arrayData[index][keyData[keyData.length - 1]] = arrayData[index][keyData[keyData.length - 1]].split(",").join("<br/><hr/>");
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
