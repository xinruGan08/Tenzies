export default function Die ({id,value,isHeld,toggle}) {
    function holdDie(){

    }
    const styles = {
        backgroundColor: isHeld? "#59E391": "white"
    }

    return (
        <button className="die" style={styles} onClick={()=>toggle(id)}>{value}</button>
    )
}