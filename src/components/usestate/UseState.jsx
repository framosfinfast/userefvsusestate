import React, { useState } from 'react';
import JSONPretty from 'react-json-pretty';

const UseState = () => {

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [persona, setPersona] = useState({}); 

    const OnSubmit = () => {
        setPersona({ nombre, apellido });
    }
    return (
        <div className='container mt-4'>
            <div className='card p-5 w-100'>

                <h2>UseState</h2>
                <form>
                    <div className='row'>
                        <div className='form-group col-6'>
                            <label className='form-label' htmlFor="nombre">Nombre</label>
                            <input className='form-control' type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </div>
                        <div className='form-group col-6'>
                            <label className='form-label' htmlFor="apellido">Apellido</label>
                            <input className='form-control' type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        </div>
                    </div>
                    <div className='mt-4 d-flex justify-content-center'>
                        <button type='button' className='btn btn-success' onClick={OnSubmit}>Guardar</button>
                    </div>

                </form>

                <JSONPretty data={persona} className='mt-5 text-left' />
            </div>

        </div>
    );
}

export default UseState;
