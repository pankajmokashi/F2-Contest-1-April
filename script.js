/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function get_developer(item){
    if(item.profession == "developer")
        console.log(item)
  }

  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(get_developer)
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(get_developer)
  }
  
  function addData() {
    // Write your code here, just console.log
    arr.push( {id:4,name:"susan",age:"20",profession:"intern"} )
    console.log(arr)
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(elem => elem.profession != "admin")
    console.log(arr)
  }
  
  function concatenateArray(){
    //Write your code here, just console.log
    let sec_arr=[
      { id: 5, name: "wick", age: "21", profession: "developer" },
      { id: 6, name: "josh", age: "22", profession: "admin" },
      { id: 7, name: "kiran", age: "23", profession: "intern" },
    ]
    arr = arr.concat(sec_arr)
    console.log(arr)
  }