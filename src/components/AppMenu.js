import React from 'react';
import { Menu } from 'antd';
import {
    BarChartOutlined,
    CalculatorOutlined,
    UnorderedListOutlined,
    PieChartOutlined
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const AppMenu = ({selectedKey}) => {
    return (
        <>
            <Menu mode="horizontal" defaultSelectedKeys={[selectedKey]} theme={'dark'}>
                
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


                    <Menu.Item
                        key='4'
                        icon={<PieChartOutlined/>}
                    >
                        <Link to="/getpizzas">
                        GetPizzas
                        </Link>
                    </Menu.Item>

                    </Menu>
        </>
    )
};


export default AppMenu;