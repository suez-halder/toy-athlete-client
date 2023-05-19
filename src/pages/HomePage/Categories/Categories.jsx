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

    const url = 'http://localhost:3000/allToys';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data);
            });
    }, []);

    useEffect(() => {
        const allBaseball = myToys.filter(toy => toy.subCategory === 'baseball');
        setBaseball(allBaseball);
        const allFootball = myToys.filter(toy => toy.subCategory === 'football');
        setFootball(allFootball);
        const allTennis = myToys.filter(toy => toy.subCategory === 'tennis');
        setTennis(allTennis);
    }, [myToys]);

    return (
        <Tabs>
            <h2 className="text-2xl md:text-5xl font-bold text-center my-4 md:my-8">Shop by category</h2>
            <TabList>
                <Tab>Baseball</Tab>
                <Tab>Football</Tab>
                <Tab>Table Tennis</Tab>
            </TabList>

            <TabPanel>
                {baseball.map(singleBaseball => <Baseball
                key={singleBaseball._id}
                singleBaseball={singleBaseball}
                
                ></Baseball>)}
            </TabPanel>
            <TabPanel>
                {football.map(singleFootball => <Football
                key={singleFootball._id}
                singleFootball={singleFootball}
                
                ></Football>)}  
            </TabPanel>
            <TabPanel>
                    {tennis.map(singleTennis => <Tennis
                    key={singleTennis._id}
                    singleTennis={singleTennis}
                    ></Tennis>)}
                </TabPanel>
            
        </Tabs>
    );
};

export default Categories;
