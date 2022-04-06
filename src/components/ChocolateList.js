import React, {useState} from 'react';

const ChocolateList = (props) => {

  //data
  const chocolateData = [
    "Cadbury Chocolate Bar",
    "Lindt 90% Dark Chocolate",
    "Hershey's Special Dark",
    "Lily's Sugar Free Chocolate",
    "Crunch",
    "Toblerone"
  ]

  //function section
  const [ chocolateVisibility , setChocolateVisibility ] = useState(true)

  const chocolateClick = () => {
    if(chocolateVisibility === false) {
      setChocolateVisibility(true)
    } else if (chocolateVisibility === true) {
      setChocolateVisibility(false)
    }
    console.log(chocolateVisibility)
    // console.log("hear ye, hear ye, chocolate is the greatest!")
  }
  
    let chocolateMessage = null
    let chocolateListItemHandler = null
  
    if(chocolateVisibility){
      chocolateMessage = "CHOCOLATE ONLY CABINET"
      chocolateListItemHandler = chocolateListItems
    } else {
      chocolateMessage = "Chocolate?  What chocolate?  No chocolate here..."
      chocolateListItemHandler = "Noting but sadness here..."
    }

  //Provide material for rendering
  let chocolateListItems = chocolateData.map((chocolate) => {
    return(
      <li>
        {chocolate}
      </li>
    )
  })
    
  return(
      <div className="chocolate-app">
        <h1 
          onClick={chocolateClick}>
          {chocolateMessage}
        </h1>
        <ul>
          {chocolateListItemHandler}
        </ul>
    </div>
    )

}

export default ChocolateList;
