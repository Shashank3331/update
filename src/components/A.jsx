import B from "./B";

function A(getItem){
    const {myFood} = getItem;
    return(
        

        <div>
           <B finalDestination={myFood}/>
        </div>
    )
}

export default A;