function DessertsList(props) {
 
  let outList = props.data.filter(item => item.calories < 500)
  .sort((a, b) => { 
    return a.calories - b.calories; 
  }) 

  console.log(outList)
  let outList2 = outList.map((item) => (
    <li>{`${item.name} - ${item.calories}`}</li>
  ));

  return <ul>{outList2}</ul>;
}

export default DessertsList;
