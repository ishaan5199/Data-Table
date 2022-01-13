const urlSearchParams = new URLSearchParams(window.location.search);
const params = Object.fromEntries(urlSearchParams.entries());
const docSheet = "https://opensheet.elk.sh/" + (!params["val"] ? "139xIKz3YSN7_ehr6Ha4DwpYynq86YlYm8BJDw8HCQlA" : params["val"]) + "/Sheet1";

const fetchStore = async () => {
    const response = await fetch(docSheet);
    const data = await response.json();

    var arrayData = [];
    var columnData = [];

    arrayData = data;
    keyData = Object.keys(arrayData[0]);
    keyData.forEach(element => {
        columnData.push({"data" : element, "title" : element})
    });

    /* for multidata in last two columns (can be customized) */
    if(keyData.length != 3){
        for (let index = 0; index < arrayData.length; index++) {
            arrayData[index][keyData[keyData.length - 2]] = arrayData[index][keyData[keyData.length - 2]].split(",").join("<br/><hr/>");
            arrayData[index][keyData[keyData.length - 1]] = arrayData[index][keyData[keyData.length - 1]].split(",").join("<br/><hr/>");
        }
        
    }

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
}

fetchStore();
