import { useState } from "react"

function ModulusFormula() {

    const [apparentMag, setApparentMag] = useState('');
    const [absoluteMag, setAbsoluteMag] = useState('');
    const [distanceParsecs, setDistanceParsecs] = useState('');

    let calcApparent = apparentMag;
    let calcAbsolute = absoluteMag;
    let calcDistance = distanceParsecs;
    let modulusText = "Enter two values to calculate the third...";

    if (apparentMag !== '' && absoluteMag !== '' && distanceParsecs === '') {
        const m = parseFloat(apparentMag);
        const M = parseFloat(absoluteMag);
        const exponent = (m - M + 5) / 5;
        calcDistance = Math.pow(10, exponent).toFixed(2);
        modulusText = `Distance Modulus (m - M) = ${(m - M).toFixed(2)}`;
    } else if (absoluteMag !== '' && distanceParsecs !== '' && apparentMag === '') {
        const M = parseFloat(absoluteMag);
        const d = parseFloat(distanceParsecs);
        if (d > 0) {
            calcApparent = (M + 5 * Math.log10(d) - 5).toFixed(2);
            modulusText = `Distance Modulus (m - M) = ${(parseFloat(calcApparent) - M).toFixed(2)}`;
        }
    } else if (apparentMag !== '' && distanceParsecs !== '' && absoluteMag === '') {
        const m = parseFloat(apparentMag);
        const d = parseFloat(distanceParsecs);
        if (d > 0) {
            calcAbsolute = (m - 5 * Math.log10(d) + 5).toFixed(2);
            modulusText = `Distance Modulus (m - M) = ${(m - parseFloat(calcAbsolute)).toFixed(2)}`;
        }
    } else if (apparentMag !== '' && absoluteMag !== '') {
        const m = parseFloat(apparentMag);
        const M = parseFloat(absoluteMag);
        modulusText = `Distance Modulus (m - M) = ${(m - M).toFixed(2)}`;
    }

    const handleClear = () => {
        setApparentMag('');
        setAbsoluteMag('');
        setDistanceParsecs('');
    }

    return (
    <div style={{backgroundColor: `#2d2d35`, padding: `20px`, borderRadius: `8px`, marginTop: `20px`}}>
        <h3>Distance Modulus Calculator</h3>
        <p style={{fontStyle: `italic`, color: `#a0a0b0`}}>{modulusText}</p>
        
        <div style={{display: `flex`, flexDirection: `column`, gap: `15px`, marginTop: `15px`}}>
            <div>
                <label style={{display: 'block', marginBottom: `5px`}}>Apparent Magnitude (m): </label>
                <input 
                    type="number" 
                    step="0.01"
                    value={apparentMag}
                    onChange={(e) => setApparentMag(e.target.value)}
                    style={{width: `100%`, padding: `8px`, borderRadius: `4px`, border: `1px solid #444`, backgroundColor: `#1e1e24`, color: `#fff`}}
                />
            </div>

            <div>
                <label style={{display: 'block', marginBottom: `5px`}}>Absolute Magnitude (M): </label>
                <input 
                    type="number" 
                    step="0.01"
                    value={absoluteMag}
                    onChange={(e) => setAbsoluteMag(e.target.value)}
                    style={{width: `100%`, padding: `8px`, borderRadius: `4px`, border: `1px solid #444`, backgroundColor: `#1e1e24`, color: `#fff`}}
                />
            </div>

            <div>
                <label style={{display: 'block', marginBottom: `5px`}}>Distance (d) in Parsecs: </label>
                <input 
                    type="number" 
                    step="0.01"
                    value={distanceParsecs}
                    onChange={(e) => setDistanceParsecs(e.target.value)}
                    style={{width: `100%`, padding: `8px`, borderRadius: `4px`, border: `1px solid #444`, backgroundColor: `#1e1e24`, color: `#fff`}}
                />
            </div>

            <div style={{backgroundColor: `#1e1e24`, padding: `15px`, borderRadius: `6px`, marginTop: `10px`}}>
                <h4>Calculated System Values:</h4>
                <p>Apparent Magnitude: <strong>{calcApparent || '--'}</strong></p>
                <p>Absolute Magnitude: <strong>{calcAbsolute || '--'}</strong></p>
                <p>Distance: <strong>{calcDistance ? `${calcDistance} parsecs` : "--"}</strong></p>
            </div>

            <button
                onClick={handleClear}
                style={{padding: `10px`, backgroundColor: `#ff4d4d`, color: `#fff`, border: `none`, borderRadius: `4px`, cursor: `pointer`, fontWeight: `bold`}}
            >
                Reset Fields
            </button>
        </div>
    </div>
    )
}

export default ModulusFormula