import React, { useRef, useState } from 'react';
import JSONPretty from 'react-json-pretty';

const UseRef = () => {
    const nombreRef = useRef();
    const apellidoRef = useRef();
    const [persona, setPersona] = useState({});

    const OnSubmit = () => {
        const nombre = nombreRef.current.value;
        const apellido = apellidoRef.current.value;
        setPersona({ nombre, apellido });
    }

    return (
        <div className='container'>
            <div className='card p-5 w-100'>

                <h2>UseRef</h2>
                <form>
                    <div className='row'>
                        <div className='form-group col-6'>
                            <label className='form-label' htmlFor="nombre">Nombre</label>
                            <input className='form-control' type="text" name='nombre' ref={nombreRef} />
                        </div>
                        <div className='form-group col-6'>
                            <label className='form-label' htmlFor="apellido">Apellido</label>
                            <input className='form-control' type="text" name='apellido' ref={apellidoRef} />
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

export default UseRef;