import { View, Text ,Image, TextInput} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import logo from "../../assets/Img/Logo.png"
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Layer_1 from "../../assets/Img/Layer_1.png"
import Layer_2 from "../../assets/Img/Layer_2.png"
import Layer_3 from "../../assets/Img/Layer_3.png"
import Layer_4 from "../../assets/Img/Layer_4.png"

export default function Home() {
  return (
    <View style={{backgroundColor:"#fff",flex:1}}>
        <ScrollView style={{width:"100%",flexDirection:"column"}} contentContainerStyle={{alignItems:"center"}}>
         <View style={{backgroundColor:"#21252C",height:250,width:"100%",flexDirection:"column",alignItems:"center"}}>
            <View style={{width:"90%",height:50,justifyContent:"space-between",flexDirection:"row",marginTop:15,alignItems:"center"}}>
             <Image source={logo} style={{width:110,height:25}}/>
             <Feather name="bell" size={22} color="#fff"/>
            </View>
            <View style={{width:"90%"}}>
            <Text style={{color:"#fff",fontFamily:"Inter_24pt-SemiBold",fontSize:20}}>Track your parcel</Text>
            <Text style={{marginTop:10,color:"#fff",fontFamily:"Inter_24pt-Medium"}}>Enter your parcel tracking number to track your parcel live</Text>
            </View>
           
           <View style={{width:"90%",height:60,backgroundColor:"#FFFFFF",marginTop:15,borderRadius:10,flexDirection:"row"}}>
            <View style={{width:"20%",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <MaterialIcons name="gps-not-fixed"  size={25} color={"#000"} />
            </View>
            <View style={{width:"60%",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center",}}>
              <TextInput placeholderTextColor={"#CFD5DB"} placeholder='Tracking number' style={{width:"100%"}}/>
            </View>

            <View style={{width:"20%",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <MaterialIcons name="qr-code-scanner"  size={25} color={"#000"} />
           </View>
           </View>
    
         </View>

          <View style={{width:"90%"}}>
          <Text style={{marginTop:10,fontFamily:"Inter_24pt-Bold",color:"#000",fontSize:18}}>Our Services</Text>
          </View>

          <ScrollView style={{flexDirection:"row"}} horizontal={true} showsHorizontalScrollIndicator={false}>

            <View style={{width:100,height:110,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:70,height:70,backgroundColor:"#F1F2F6",borderRadius:10,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                   <Image source={Layer_1}/>
                </View>
                <Text style={{marginTop:5,fontFamily:"Inter_24pt-SemiBold",color:"#000"}}>Ship Parcel</Text>
            </View>

            <View style={{width:100,height:110,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:70,height:70,backgroundColor:"#F1F2F6",borderRadius:10,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                   <Image source={Layer_4}/>
                </View>
                <Text style={{marginTop:5,fontFamily:"Inter_24pt-SemiBold",color:"#000"}}>Logistic</Text>
            </View>
            <View style={{width:100,height:110,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:70,height:70,backgroundColor:"#F1F2F6",borderRadius:10,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                   <Image source={Layer_3}/>
                </View>
                <Text style={{marginTop:5,fontFamily:"Inter_24pt-SemiBold",color:"#000"}}>International</Text>
            </View>

            <View style={{width:100,height:110,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <View style={{width:70,height:70,backgroundColor:"#F1F2F6",borderRadius:10,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                   <Image source={Layer_2}/>
                </View>
                <Text style={{marginTop:5,fontFamily:"Inter_24pt-SemiBold",color:"#000"}}>Bulk Shipping</Text>
            </View>

          </ScrollView>


          <View style={{width:"90%",flexDirection:"row",justifyContent:"space-between"}}>
             <Text style={{marginTop:10,fontFamily:"Inter_24pt-Bold",color:"#000",fontSize:18}}>Shipping History</Text>
          </View>


          <View style={{width:"90%",height:230,flexDirection:"row"}}>
            <View style={{width:"20%",height:"100%",flexDirection:"column",alignItems:"center",}}>
                <View style={{width:50,height:50,backgroundColor:"rgba(233, 255, 229, 1)",marginTop:10,borderRadius:10,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                   <Feather name="box" color="rgba(41, 190, 16, 1)" size={25}/>
                </View>

            </View>
            <View style={{width:"80%",height:"100%",}}>
                <View style={{width:"100%",height:40,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{width:"90%",flexDirection:"row",height:"100%",alignItems:"center"}}>
                        <Text style={{fontFamily:"Inter_24pt-SemiBold",fontSize:18,color:"#000"}}>#5R9G87R</Text>
                        <Text style={{fontSize:20,marginBottom:20,marginLeft:10}}>.</Text>
                        <Text style={{fontFamily:"Inter_24pt-Medium",color:"#BABFC5"}}>14 may 2023</Text>

                    </View>

                <Feather name="more-vertical" size={20} color="rgba(118, 136, 154, 1)"/>

                </View>

                <View style={{flexDirection:"row",height:130}}>
                    <View style={{width:"10%",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <View style={{width:5,height:5,backgroundColor:"#000",borderRadius:100}}/>
                        <View style={{width:5,height:100,borderStyle:"dashed",borderLeftWidth:1,borderColor:"#000",marginLeft:3,marginTop:3}}/>
                        <View style={{width:5,height:5,backgroundColor:"#000",marginTop:5,borderRadius:100}}/>

                    </View>
                    <View style={{flexDirection:"column",justifyContent:"space-between"}}>

                    <View>
                    <Text style={{fontFamily:"Inter_18pt-Light",color:"#BABFC5",fontSize:14}}>From</Text>
                    <Text style={{fontFamily:"Inter_18pt-SemiBold",fontSize:12}}>1234 Elm Street Springfield, IL 62701</Text>
                    </View>

                    <View>
                    <Text style={{fontFamily:"Inter_18pt-Light",color:"#BABFC5"}}>To</Text>
                    <Text style={{fontFamily:"Inter_18pt-SemiBold",fontSize:12}}>1234 Elm Street Springfield, IL 62701</Text>
                    </View>
                   
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>

                <Text style={{color:"#76889A",marginTop:6,fontFamily:"Inter_24pt-Medium"}}>Delivery Status:</Text>
                <View style={{flexDirection:"column",  alignItems:"center",justifyContent:"center",backgroundColor:"rgba(233, 255, 229, 1)",height:30,width:100,marginLeft:10}}>
                <Text style={{color:"#29BE10",fontFamily:"Inter_24pt-Medium",fontSize:13}}>Delivered</Text>
                </View>
                </View>
            </View>

          </View>


          <View style={{width:"90%",height:230,flexDirection:"row"}}>
            <View style={{width:"20%",height:"100%",flexDirection:"column",alignItems:"center",}}>
                <View style={{width:50,height:50,backgroundColor:"rgba(255, 248, 225, 1)",marginTop:10,borderRadius:10,flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                   <Feather name="box" color="#FF8A00" size={25}/>
                </View>

            </View>
            <View style={{width:"80%",height:"100%",}}>
                <View style={{width:"100%",height:40,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                    <View style={{width:"90%",flexDirection:"row",height:"100%",alignItems:"center"}}>
                        <Text style={{fontFamily:"Inter_24pt-SemiBold",fontSize:18,color:"#000"}}>#5R9G87R</Text>
                        <Text style={{fontSize:20,marginBottom:20,marginLeft:10}}>.</Text>
                        <Text style={{fontFamily:"Inter_24pt-Medium",color:"#BABFC5"}}>14 may 2023</Text>

                    </View>

                <Feather name="more-vertical" size={20} color="rgba(118, 136, 154, 1)"/>

                </View>

                <View style={{flexDirection:"row",height:130}}>
                    <View style={{width:"10%",height:"100%",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <View style={{width:5,height:5,backgroundColor:"#000",borderRadius:100}}/>
                        <View style={{width:5,height:100,borderStyle:"dashed",borderLeftWidth:1,borderColor:"#000",marginLeft:3,marginTop:3}}/>
                        <View style={{width:5,height:5,backgroundColor:"#000",marginTop:5,borderRadius:100}}/>

                    </View>
                    <View style={{flexDirection:"column",justifyContent:"space-between"}}>

                    <View>
                    <Text style={{fontFamily:"Inter_18pt-Light",color:"#BABFC5",fontSize:14}}>From</Text>
                    <Text style={{fontFamily:"Inter_18pt-SemiBold",fontSize:12}}>1234 Elm Street Springfield, IL 62701</Text>
                    </View>

                    <View>
                    <Text style={{fontFamily:"Inter_18pt-Light",color:"#BABFC5"}}>To</Text>
                    <Text style={{fontFamily:"Inter_18pt-SemiBold",fontSize:12}}>1234 Elm Street Springfield, IL 62701</Text>
                    </View>
                   
                    </View>
                </View>
                <View style={{flexDirection:"row",marginTop:10}}>

                <Text style={{color:"#76889A",marginTop:6,fontFamily:"Inter_24pt-Medium"}}>Delivery Status:</Text>
                <View style={{flexDirection:"column",  alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255, 249, 225, 1)",height:30,width:100,marginLeft:10}}>
                <Text style={{color:"#FF8A00",fontFamily:"Inter_24pt-Medium",fontSize:13}}>Canceled</Text>
                </View>
                </View>
            </View>

          </View>





        
      </ScrollView>
    </View>
  )
}