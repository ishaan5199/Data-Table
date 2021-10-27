var arrayData = [];
const urlSearchParams = new URLSearchParams(window.location.search);

const params = Object.fromEntries(urlSearchParams.entries());
console.log(params["val"]);

const docSheet = "https://opensheet.vercel.app/" + params["val"] + "/Sheet1"
fetch(docSheet).then(res => res.json()).then(data => {
    for (let index = 0; index < data.length; index++) {
        arrayData.push([data[index]["Position"], data[index]["Name"], data[index]["Institute"]])
    }
}).then(() => {
    $(document).ready(function(){
        $('#table').DataTable( {
            data: arrayData,
            columns:[
                {title : "Position"},
                {title : "Name"},
                {title : "Institute"}
            ],
            columnDefs:[
                {"width": "20%" ,"targets": 0}
            ],
            "dom":'<"top"if><"table"t><"bottom"p>',
            lengthChange: false,
        } );
    })
})

