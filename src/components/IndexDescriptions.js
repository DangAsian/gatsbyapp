import React from 'react'
import IndexDescription from './IndexDescription'
import IndexDescriptionTKD from './IndexDescriptionTKD'
import IndexDescriptionScary from './IndexDescriptionScary'
import IndexDescriptionBug from './IndexDescriptionBug'
import IndexDescriptionSprout from './IndexDescriptionSprout'

class IndexDescriptions extends React.Component {
constructor(props){
  super(props)

  // this.state={
  //   attribute: ""
  // }
}
  render(){
    console.log(typeof this.props.attribute)
    let description;

{
  if (this.props.attribute === "1") {
    return <IndexDescriptionTKD />
  } else if (this.props.attribute === "2") {
    return <IndexDescriptionScary />
  } else if (this.props.attribute === "3") {
    return <IndexDescriptionBug />
  } else if (this.props.attribute === "4") {
    return <IndexDescriptionSprout />
  } else {
    return <IndexDescription />
  }
}
  return (
    <div className="container-description">
      {description}
    </div>
  )
}
}

export default IndexDescriptions