function superbowlWin(record) {
    
    if (record.result === "W") {
     return (record.year)
    } else {
     return undefined 
    }
 }
 const result = record.find(superbowlWin)

 