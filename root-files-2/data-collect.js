// Fetch HPB Public Covid-19 API


// Update Time

const update_date_time = document.getElementById('update_date_time');

// Local Information 

const local_new_cases = document.getElementById('local_new_cases');
const local_total_cases = document.getElementById('local_total_cases');
const local_total_number_of_individuals_in_hospitals = document.getElementById('local_total_number_of_individuals_in_hospitals');
const local_deaths = document.getElementById('local_deaths');
const local_recovered = document.getElementById('local_recovered');

// World Information

const global_new_cases = document.getElementById('global_new_cases');
const global_total_cases = document.getElementById('global_total_cases');
const global_deaths = document.getElementById('global_deaths');
const global_new_deaths = document.getElementById('global_new_deaths');
const global_recovered = document.getElementById('global_recovered');
const total_pcr_testing_count = document.getElementById('total_pcr_testing_count');


// Date & Time

let getupdate_date_time = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        update_date_time.innerHTML = data["data"].update_date_time;
        
    })

}

getupdate_date_time(); 


// Local Data

// Local New Cases

let getlocal_new_cases = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        local_new_cases.innerHTML = data["data"].local_new_cases;

    })

}

 getlocal_new_cases();


 // Local Total Cases

let getlocal_total_cases = () => {

fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
.then(response => {
return response.json()
})
.then(data => {
console.log(data);
local_total_cases.innerHTML = data["data"].local_total_cases;

})

}

getlocal_total_cases();


// Local Active Cases

let getlocal_total_number_of_individuals_in_hospitals = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    local_total_number_of_individuals_in_hospitals.innerHTML = data["data"].local_total_number_of_individuals_in_hospitals;
    
    })
    
    }
    
getlocal_total_number_of_individuals_in_hospitals();


// Local Total Deaths

let getlocal_deaths = () => {

        fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
        .then(response => {
        return response.json()
        })
        .then(data => {
        console.log(data);
        local_deaths.innerHTML = data["data"].local_deaths;
        
        })
        
        }
        
getlocal_deaths();


// Local Recovered

let getlocal_recovered = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    local_recovered.innerHTML = data["data"].local_recovered;
    
    })
    
    }
    
getlocal_recovered();



// End of the Local Data



// Global Data


// Global New Cases

let getglobal_new_cases = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    global_new_cases.innerHTML = data["data"].global_new_cases;
    
    })
    
    }
    
getglobal_new_cases();


// Global Total Cases

let getglobal_total_cases = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    global_total_cases.innerHTML = data["data"].global_total_cases;
    
    })
    
    }
    
getglobal_total_cases();


// Global Deaths

let getglobal_deaths = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    global_deaths.innerHTML = data["data"].global_deaths;
    
    })
    
    }
    
getglobal_deaths();


// Global Recoverded

let getglobal_recovered = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    global_recovered.innerHTML = data["data"].global_recovered;
    
    })
    
    }
    
getglobal_recovered();


// Glbal PCR Test

let gettotal_pcr_testing_count = () => {

    fetch(`https://hpb.health.gov.lk/api/get-current-statistical`)
    .then(response => {
    return response.json()
    })
    .then(data => {
    console.log(data);
    total_pcr_testing_count.innerHTML = data["data"].total_pcr_testing_count;
    
    })
    
    }
    
gettotal_pcr_testing_count();

