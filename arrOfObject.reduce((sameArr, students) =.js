function filterAndAddAge(arrOfObject) {
    if(arrOfObject.length == 0){
        let obj = new Object()
        obj["noOfGroups"]=0;
    }
    let result = arrOfObject.reduce((sameArr, students) => {
    let yearOfBirth = parseInt(students.dob);
    let date = new Date();
    let thisYear = date.getFullYear();
    students.age = thisYear - yearOfBirth;
    sameArr.push(students)
    return sameArr;
  }, []).sort((a, b) => a.age - b.age)
   
  const grouping = [[]]

  for(let i = 0;i<result.length;i++){
     let currentSubGroup = grouping[grouping.length - 1]
     let currentStudent = result[i]
    //  console.log(currentStudent)
     //if the currnt sub group is filled add a new sub group
     if(currentSubGroup.length === 3){
         grouping.push([currentStudent])
     }
     //if subGroup doesnt have any student push a student info to it
     else if(currentSubGroup.length === 0){
         currentSubGroup.push(currentStudent)
     }else {
        let previousStudent = currentSubGroup[currentSubGroup.length -1]
        
        if(currentStudent.age - previousStudent.age <= 5 ){
        // console.log(previousStudent)
        // console.log(currentStudent)
            currentSubGroup.push(currentStudent)
        }else{
            grouping.push([currentStudent])
        }
     }
  }
  
 return grouping.reduce((Obj,arr,index,array) => {
     Obj.noOfGroups = array.length
     Obj[`group${index+1}`] = {}
     Obj[`group${index+1}`].members = arr
     let oldest = arr.reduce((acc,item) => item.age > acc ? acc = item.age:item.age,0)
     Obj[`group${index+1}`].oldest = oldest
     let sum = arr.reduce((acc,item) => item.age + acc,0)
     Obj[`group${index+1}`].sum = sum
     let reg = arr.reduce((acc,item) => {
        acc.push(+item.regNo)
        return acc.sort((a,b)=> a-b)
     },[])
     Obj[`group${index+1}`].regNo = reg
    return Obj 
     
  },{})
  
//   return output
// console.log(grouping)
}  


  

//   console.log(result)

// return {
//     group1: {
//         members: result
//     },
//     oldest: "12",
//     sum: "32",
//     regNos: result[0].age
// }


// function addOtherArrayAndItem(arr){
//   let newArr = [arr]

// }

console.log(
  filterAndAddAge([
    {
      name: 'Hendrick',
      dob: '1853-07-18T00:00:00.000Z',
      regNo: '041',
    },
    {
      name: 'Albert',
      dob: '1879-03-14T00:00:00.000Z',
      regNo: '033',
    },
    {
      name: 'Marie',
      dob: '1867-11-07T00:00:00.000Z',
      regNo: '024',
    },
    {
      name: 'Neils',
      dob: '1885-10-07T00:00:00.000Z',
      regNo: '02',
    },
    {
      name: 'Max',
      dob: '1858-04-23T00:00:00.000Z',
      regNo: '014',
    },
    {
      name: 'Erwin',
      dob: '1887-08-12T00:00:00.000Z',
      regNo: '09',
    },
    {
      name: 'Auguste',
      dob: '1884-01-28T00:00:00.000Z',
      regNo: '08',
    },
    {
      name: 'Karl',
      dob: '1901-12-05T00:00:00.000Z',
      regNo: '120',
    },
    {
      name: 'Louis', //
      dob: '1892-08-15T00:00:00.000Z',
      regNo: '022',
    },
    {
      name: 'Arthur',
      dob: '1892-09-10T00:00:00.000Z',
      regNo: '321',
    },
    {
      name: 'Paul',
      dob: '1902-08-08T00:00:00.000Z',
      regNo: '055',
    },
    {
      name: 'William',
      dob: '1890-03-31T00:00:00.000Z',
      regNo: '013',
    },
    {
      name: 'Owen',
      dob: '1879-04-26T00:00:00.000Z',
      regNo: '052',
    },
    {
      name: 'Martin',
      dob: '1871-02-15T00:00:00.000Z',
      regNo: '063',
    },
    {
      name: 'Guye',
      dob: '1866-10-15T00:00:00.000Z',
      regNo: '084',
    },
    {
      name: 'Charles',
      dob: '1868-02-14T00:00:00.000Z',
      regNo: '091',
    },
  ])
);
