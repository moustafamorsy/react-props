
import propTypes from "prop-types"

function Profile({FullName , bio , profession , children , data}) {


    return(
 
 <section style={{color: 'white',textAlign: 'center' , fontSize: '13px' , backgroundColor:'#201e57' ,maxWidth: '300px',margin: '250px auto '}}>

{data(FullName)}

 {children}

<h1>{FullName}</h1>

<p>{bio}</p>

<h2 style={{paddingBottom: '25px'}}>{profession}</h2>


 </section>

    )
    
}

Profile.propTypes ={
 FullName : propTypes.string.isRequired,
 bio : propTypes.string.isRequired,
 profession : propTypes.string.isRequired,
}

Profile.defaultProps = {
FullName : "profile name",

bio : "profile bio",

profession : "profile profession",
}

export default Profile ;