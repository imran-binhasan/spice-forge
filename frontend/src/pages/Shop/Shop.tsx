import { Helmet } from "react-helmet-async";
import Cover from "../../components/Cover";
import shopBg from "../../assets/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import MenuCard from "../../components/MenuCard";
import { useParams } from "react-router-dom";

const Shop = () => {
    const[menu] = useMenu();
    const categories = ['salad','pizza','soup','dessert','drink'];
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const[tabIndex,setTabIndex] = useState(initialIndex);
    const salads = menu.filter(menu => menu.category == 'salad');
    const pizzas = menu.filter(menu => menu.category == 'pizza');
    const desserts = menu.filter(menu => menu.category == 'dessert');
    const soups = menu.filter(menu => menu.category == 'soup');
    const drinks = menu.filter(menu => menu.category == 'drink');

    console.log(category)
    return (
        <div>
            <Helmet>
                <title>Spice Forge | Shop</title>
            </Helmet>
            <Cover img={shopBg} title='OUR SHOP' subTitle='WOULD YOU LIKE TO TRY OUR SHOP' />
            <Tabs defaultIndex={tabIndex} onSelect={(index)=> setTabIndex(index)}>
                <TabList>
                    <Tab>SALADS</Tab>
                    <Tab>PIZZAS</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {salads.map(eachMenu => <MenuCard key={eachMenu._id} eachMenu={eachMenu}/>)}
                </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {pizzas.map(eachMenu => <MenuCard key={eachMenu._id} eachMenu={eachMenu}/>)}
                </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {desserts.map(eachMenu => <MenuCard key={eachMenu._id} eachMenu={eachMenu}/>)}
                </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {soups.map(eachMenu => <MenuCard key={eachMenu._id} eachMenu={eachMenu}/>)}
                </div>
                </TabPanel>
                <TabPanel>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {drinks.map(eachMenu => <MenuCard key={eachMenu._id} eachMenu={eachMenu}/>)}
                </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Shop;