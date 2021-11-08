import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpectApp = () =>{
    
    //const categories = ['One piece', 'Hunter x Hunter', 'Dragon Ball'];
    const [categories, setCategories] = useState(['One piece'])

    // const handleAdd = () =>{
    //     // setCategories([...categories, 'Hunter'])
    //     setCategories(cats =>[...cats, 'Hunter']);
    // }

    return(
        <>
            <h2>GifExpectApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category=> (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    );
}

export default GifExpectApp;