import React from 'react'

export default ( WrappedComponent, Consumer ) => {
    return class extends React.Component {
        render(){
            return(
                <Consumer>
                    {ctx =>(
                        <WrappedComponent {...ctx} />
                    )}
                </Consumer>
            )
        }
    }
}

{/** 
 function Bar(WrappedComponent){
    return class BarExtended extends React.Component {
     addThisFunction(){
       console.log('I extended the wrapped component with functionality')
     }
     render (
       return (
        <WrappedComponent addThisFunction={this.addThisFunction}/>
       )
     )
    }
   }
*/}