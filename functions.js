module.exports = {
    greet: function greet(name){
        return `Hello, ${name}`
    },
    allFromTown:function allFromTown(regNumbers,regStr){
        var items=regNumbers.split(',');
        var regNumbersForTown=[]
        for(var i=0;i<items.length;i++){
          if(items[i].trim().startsWith(regStr)){
            regNumbersForTown.push(items[i].trim())
          }
        }
       return regNumbersForTown;
      },
      isWeekDay:function isWeekday(item){
        if(item==="Monday"){
          return true;
        }else if(item==="Tuesday"){
          return true;
        }else if(item==="Wednesday"){
          return true;
        }else if(item==="Thursday"){
          return true;
        }else if(item==="Friday"){
          return true;
        }else if(item==="Saturday" || item==="Sunday"){
          return false;
        }
      },
      profitableDept:function mostProfitableDepartment(salesData){
        let dept={}
        for(let i=0;i<salesData.length;i++){
          let departments=salesData[i].department
          let sale= salesData[i].sales;
          if(dept[departments]==undefined){
             dept[departments]=sale
             }else{
               dept[departments]=dept[departments]+sale
             }
        }
        let maximum=0;
        let successfulDept="";
        
        for(item in dept){
          if(dept[item]>maximum){
            maximum=dept[item];
            successfulDept=item;
          }
        }
        return successfulDept
      },
      transportFee: function transportFee(shift){
        switch(shift){
          case 'morning':
            return 'R20';
          case 'afternoon':
            return 'R10';
          case 'nightshift':
            return 'free';
                    }
      }
}
