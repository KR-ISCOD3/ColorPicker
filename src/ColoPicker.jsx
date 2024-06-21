import React, {useState} from 'react';

function ColorPicker(){
    const [color,setColor] = useState("#FFFFFF"); 

    function handleColorChange(event){
        // setColor to color and the value of color
        // get from value in input field
        setColor(event.target.value);
    }
    return (
    <div className="color_container">
        <h1>Color Picker</h1>
        <div className="color_display" style={{backgroundColor: color}}>
            <p>{color}</p>
        </div>
        <label>Select Color</label>
        <input type="color" value={color} onChange={handleColorChange}/>
    </div> )
    
}

export default ColorPicker;