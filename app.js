let dobDay = prompt ("Day")
let dobMonth = prompt ("Month Name")
let dobYear = prompt ("Year")



let dateOfbirth = (dobMonth+ " ," +dobDay+ " " +dobYear)


function days (){
let currentDate = new Date
let dob = new Date (dateOfbirth);

let currentTime = currentDate.getTime()
let dobTime = dob.getTime()

let difference = currentDate-dob
let result = difference/(1000*60*60*24)
let totalDays= Math.round(result);
alert(totalDays)
}

function months (){
    let currentDate = new Date
    let dob = new Date (dateOfbirth);
    
    let currentTime = currentDate.getTime()
    let dobTime = dob.getTime()
    
    let difference = currentDate-dob
    let result = difference/(1000*60*60*24*30.416666666666667)
    let totalMonths= Math.floor(result);
    alert(totalMonths)
    }


    function years (){
        let currentDate = new Date
        let dob = new Date (dateOfbirth);
        
        let currentTime = currentDate.getTime()
        let dobTime = dob.getTime()
        
        let difference = currentDate-dob
        let result = difference/(1000*60*60*24*30.416666666666667*12)
        let totalYears= Math.floor(result);
        alert(totalYears)
        }


