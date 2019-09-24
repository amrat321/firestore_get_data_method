import React from 'react'
import {Firebase} from '../../config/firebase/firebase'
import PrimarySearchAppBar from '../../component/appbar/appbar'
// import FullWidthTabs2 from '../../component/tabs_for_user/tabs_for_user'
// import SmallChips from '../../component/chipses/chipes'
// import ImgMediaCard from '../../component/cards/card'
import img1 from '../../img/download (7).jpg'
import Paper from '@material-ui/core/Paper'
// import SearchBar from '../../component/SearchBox/searchbar'


export default class Restorent_pro extends React.Component{
    constructor(){
        super()
        this.state={
            products: []
        }
        console.log(this.state)
    }

    componentDidMount(){
        let {products} = this.state;
       Firebase.firestore().collection("amarshivani").get()
       .then((data)=>{
           console.log(data)
           data.forEach(value=>{
               let result = value.data();
                products.push(result);
                this.setState({
                    products:products
                })
           })
       }) 
        
    }
    render(){
        console.log(this.state.products)
        return(
            <div>
               <PrimarySearchAppBar profile = 'profile' />

               {this.state.products.map((val,i)=>{

                   return( 
<Paper style={{height: '200px'}}>
    <span>
        <img src={img1} style={{float: 'left'}}/>
    </span>
    <tr>
        <td style={{width: '300px'}}>Product Name</td>
        <td style={{width: '300px'}}>Catagry</td>
        <td>Price</td>
    </tr>

<tr>

                           <td style={{marginRight: '100px'}}>
                          {val.ItemName}
                           </td>
                           <td>
                           {val.AddCatagry}
                           </td>

                           <td>
                           {val.Price}
                           </td>
                       </tr>
                       <button style={{float: 'right', marginTop: '100px', marginRight: '20px' ,backgroundColor: '#891d1b', color: 'white', border: '0'}}>Order Now</button>
</Paper>
                     
                   )
                     
                   
                    
                })}
                

<div>

</div>
          
            </div>

        )
    }
}