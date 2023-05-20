import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Baseball from './Baseball';
import Football from './Football';
import Tennis from './Tennis';

const Categories = () => {
    const [myToys, setMyToys] = useState([]);
    const [baseball, setBaseball] = useState([]);
    const [football, setFootball] = useState([]);
    const [tennis, setTennis] = useState([]);

    const url = 'https://toy-management-server.vercel.app/allToys';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            });
    }, []);

    useEffect(() => {
        const allBaseball = myToys.filter(toy => toy.subCategory === 'baseball');
        setBaseball(allBaseball.slice(0,4));
        const allFootball = myToys.filter(toy => toy.subCategory === 'football');
        setFootball(allFootball.slice(0,4));
        const allTennis = myToys.filter(toy => toy.subCategory === 'tennis');
        setTennis(allTennis.slice(0,4));
    }, [myToys]);

    return (
        <Tabs>
            <h2 className="text-2xl md:text-5xl font-bold text-center my-4 md:my-8 rounded-md">Shop by category</h2>
            <TabList 
            style={{
                backgroundColor: '#94C7EA', 
                textAlign: 'center', 
                fontSize: '18px', 
                borderRadius: '0.375rem', 
                width: '100%', 
                marginLeft: 'auto', 
                marginRight: 'auto',  
                padding: '1rem',

                
                
                 
                }}>
                <Tab>Baseball</Tab>
                <Tab>Football</Tab>
                <Tab>Table Tennis</Tab>
            </TabList>

            <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 md:w-full mx-auto">
                {baseball.map(singleBaseball => <Baseball
                    key={singleBaseball._id}
                    singleBaseball={singleBaseball}

                ></Baseball>)}
                </div>
            </TabPanel>

            <TabPanel >
                <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 md:w-full mx-auto">
                    {football.map(singleFootball => <Football
                        key={singleFootball._id}
                        singleFootball={singleFootball}
                    ></Football>)}
                </div>
            </TabPanel>

            <TabPanel>
                <div className="grid grid-cols-1 md:grid-cols-2 w-3/4 md:w-full mx-auto">
                {tennis.map(singleTennis => <Tennis
                    key={singleTennis._id}
                    singleTennis={singleTennis}
                ></Tennis>)}
                </div>
            </TabPanel>

        </Tabs >
    );
};

export default Categories;
