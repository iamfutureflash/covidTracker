import React, {
    useEffect
} from 'react'

const Covid = () => {

    const getCovidData = async () => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getCovidData();
    }, []);
    return ( 
        <>
                <h1> LIVE UPDATE </h1> 
                <h2> COVID - 19 CORONAVIRUS TRACKER </h2> 
        </>
    )
}

export default Covid