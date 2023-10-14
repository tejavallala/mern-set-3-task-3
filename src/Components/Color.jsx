import React, { useState } from 'react';
const ColorPicker = ({ colors }) => {
    const [selectedColor, setSelectedColor] = useState(null);
    const getColorName = (hexColor) => {
        const index = colors.findIndex(color => color.toLowerCase() === hexColor.toLowerCase());
        return index !== -1 ? colors[index] : 'Unknown Color';
    };
    const handleColorClick = (color) => {
        document.body.style.backgroundColor = color;
        setSelectedColor(getColorName(color));
    };
    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="card p-5 mb-3">
                <h5 className="card-title bg-dark text-white p-2 mb-4" style={{ textAlign: 'center' }}>
                    Color Picker
                </h5>
                <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px' }}>
                    {colors.map((color, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundColor: color,
                                width: '50px',
                                height: '50px',
                                margin: '0 10px 10px 0',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleColorClick(color)}
                        />
                    ))}
                </div>


                {selectedColor && <div className="mt-3 h3" style={{ textAlign: "center" }}>Selected Color: {selectedColor}</div>}
            </div>
        </div>

    );
};
export default ColorPicker;
