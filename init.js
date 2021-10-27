/* $(document).ready(function() {
    fetch('https://opensheet.vercel.app/1OzpHafZbyBR4HhL0AFzZCxE9wLFvQt5KVvifp2PrxIE/Sheet1')
        .then(res => res.json())
        .then(data => {
        //console.log(data);
            
        arrayData = data.map(({Position, Name, Institute}) => ([Position, Name, Institute]))

        $('#table').DataTable( {
            data: arrayData,
            columns:[
                {title : "Position"},
                {title : "Name"},
                {title : "Institute"}
            ]
        } );
    })
    
} ); */

var arrayData;
const urlSearchParams = new URLSearchParams(window.location.search);

const params = Object.fromEntries(urlSearchParams.entries());
//console.log(params["val"]);

const docSheet = "https://opensheet.vercel.app/" + params["val"] + "/Sheet1"
fetch(docSheet).then(res => res.json()).then(data => {
    arrayData = data.map(({Position, Name, Institute}) => ([Position, Name, Institute]))
}).then(() => {
    $(document).ready(function(){
        $('#table').DataTable( {
            data: arrayData,
            columns:[
                {title : "Position"},
                {title : "Name"},
                {title : "Institute"}
            ]
        } );
    })
})

