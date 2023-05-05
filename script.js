
fetch('https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json')
    .then(response => response.json())
    .then(data => {const tbbody = document.getElementById("tb-body");

function printDataInHtml(element){
    
    var studentResult = ((element.passing)?"Passing":"Failed");
    var trdata = `<tr>
                        <td>${element.id}</td>
                        <td class="img-name"><img src="${element.img_src}" alt="" class="img-in-tb"> ${element.first_name} ${element.last_name}</td>
                        <td>${element.gender}</td>
                        <td>${element.class}</td>
                        <td>${element.marks}</td>
                        <td>${studentResult}</td>
                        <td>${element.email}</td>
                 </tr>`;
    tbbody.innerHTML+=trdata;
}
data.forEach(element => { printDataInHtml(element);});
const searchInput = document.getElementById("search");
    searchInput.addEventListener("input",()=>{
       const searchBoxValue = searchInput.value.toLowerCase();
       const filterData = data.filter(student=>{
            const nameFull = `${student.first_name}${student.last_name}`.toLowerCase();
            const Email = student.email.toLowerCase();
            return nameFull.includes(searchBoxValue) || Email.includes(searchBoxValue);
            
        });
        tbbody.innerHTML=""
        filterData.forEach(element=>{printDataInHtml(element);});

        console.log(filterData)
    
    });
const maleTable = document.getElementById('male-table');
 const sortAtoZ = document.querySelector(".btn-1");
 const sortZtoA = document.querySelector(".btn-2");
 const sortMarks = document.querySelector(".btn-3");
 const sortPass = document.querySelector(".btn-4");
 const sortByClass = document.querySelector(".btn-5");
 const sortByGender = document.querySelector(".btn-6");

 sortAtoZ.addEventListener("click",()=>{
    tbbody.innerHTML="";
    data.sort((a, b) => a.first_name.localeCompare(b.first_name));
    data.forEach(element => { printDataInHtml(element);});
 });

 sortZtoA.addEventListener("click",()=>{
    tbbody.innerHTML="";
    data.sort((a, b) => b.first_name.localeCompare(a.first_name));
    data.forEach(element => { printDataInHtml(element);});
 });

 sortMarks.addEventListener("click",()=>{
    tbbody.innerHTML="";
    maleTable.style.display="none";

    data.sort((a, b) => a.marks - b.marks);
    data.forEach(element => { printDataInHtml(element);});
   
 });

 sortPass.addEventListener("click",()=>{
    tbbody.innerHTML="";
    maleTable.style.display="none";
    data = data.filter(student => student.passing);
    data.forEach(element => { printDataInHtml(element);});
    console.log("h4");
 });

 sortByClass.addEventListener("click",()=>{
    tbbody.innerHTML="";
    maleTable.style.display="none";
    data.sort((a, b) => a.class - b.class);
    data.forEach(element => { printDataInHtml(element);});
    console.log("h5");
 });

 sortByGender.addEventListener("click",()=>{
     tbbody.innerHTML="";
     maleTable.style.display="none";
    const femaleData = data.filter(student => student.gender === 'Female');
    femaleData.forEach(element => { printDataInHtml(element);});

    // male table
    
    maleTable.style.display="block";
    const maleData = data.filter(student => student.gender === 'Male');

    const tbbodyMale = document.getElementById("tb-body-male");

function printDataInHtmlMale(element){
    
    var studentResult = ((element.passing)?"Passing":"Failed");
    var trdata = `<tr>
                        <td>${element.id}</td>
                        <td class="img-name"><img src="${element.img_src}" alt="" class="img-in-tb"> ${element.first_name} ${element.last_name}</td>
                        <td>${element.gender}</td>
                        <td>${element.class}</td>
                        <td>${element.marks}</td>
                        <td>${studentResult}</td>
                        <td>${element.email}</td>
                 </tr>`;
    tbbodyMale.innerHTML+=trdata;
}
maleData.forEach(element => { printDataInHtmlMale(element);});
 });
  }).catch(error => console.error(error));