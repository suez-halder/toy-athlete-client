import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Categories = () => {
    const [myToys, setMyToys] = useState([])

    const url = `http://localhost:3000/allToys`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [url])
    
    
    return (
        <Tabs>
            <h2 className="text-2xl md:text-5xl font-bold text-center my-4 md:my-8">Shop by category</h2>
            <TabList>
                <Tab>Football</Tab>
                <Tab>Baseball</Tab>
                <Tab>Table Tennis</Tab>
            </TabList>

            <TabPanel>
                {
                    myToys.map(categoryToy => console.log(categoryToy))
                }
            </TabPanel>
            
            
        </Tabs>
    );
};

export default Categories;