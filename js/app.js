const loadData = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then( res => res.json())
    .then( data => contries(data))
}


const contries = ( contriesData ) =>{
    // console.log(contriesData[0])
    const elements = document.getElementById('countries');
    const country = contriesData.map( country => getCountryHTML(country) );
    // console.log(country[0]);

    elements.innerHTML  = country.join('');
    
}

const getCountryHTML = country =>{
    return `
        <div class="country">
            <h2> Country Name: ${country.name} </h2> 
            <h4>Capital Name: ${country.capital}</h4>
            <img src="${country.flag}">
        </div>
    `;
}
loadData()