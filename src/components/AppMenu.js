import React from 'react';
import { Menu } from 'antd';
import {
    BarChartOutlined,
    CalculatorOutlined,
    UnorderedListOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const AppMenu = () => {
    return (
        <>
            <Menu mode="horizontal" defaultSelectdJeys={['1']} theme={'dark'}>
                
                    <Menu.Item
                        key='1'
                        icon={<CalculatorOutlined />}
                         >
                        <Link to="/">
                        Calculadora
                        </Link>
                    </Menu.Item>               
                
                
                    <Menu.Item
                        key='2'
                        icon={<BarChartOutlined />}
                    >
                        <Link to="/imc">
                        IMC
                        </Link>
                    </Menu.Item>

                    <Menu.Item
                        key='3'
                        icon={<UnorderedListOutlined/>}
                    >
                        <Link to="/todo">
                        Todo
                        </Link>
                    </Menu.Item>

                    </Menu>
        </>
    )
};


export default AppMenu;