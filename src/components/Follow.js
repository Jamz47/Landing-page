import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Follow.css'
import { faFacebook, faInstagram, faTiktok, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Follow = () => {
  return (
    <div className='Follow' id='contact'>
        <div ><FontAwesomeIcon icon={faInstagram} style={{width:50,height:50,color:'red'}} /></div>
        <div><FontAwesomeIcon icon={faYoutube} style={{width:50,height:50,color: 'red'}}  /></div>
        <div><FontAwesomeIcon icon={faFacebook} style={{width:50,height:50, color:'#3943B7'}} /></div>
        <div><FontAwesomeIcon icon={faTiktok} style={{width:50,height:50,color: 'red'}} /></div>
        <div><FontAwesomeIcon icon={faTwitter} style={{width:50,height:50, color: '#3943B7'}} /></div>


    </div>
  )
}

export default Follow