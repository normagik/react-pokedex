import React from 'react';
import { SidebarContainer, SidebarMenu, SidebarLink, Icon, CloseIcon, SideBtnWrap } from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle} >
            <Icon>
                <CloseIcon/>
            </Icon>
        <SidebarMenu>
        <SidebarLink to="/">Home</SidebarLink>
        <SidebarLink to="/favoritos">Favoritos</SidebarLink>
        <SidebarLink to="/capturados">Capturados</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
        </SideBtnWrap>
        </SidebarContainer>
        
        
    )
};

export default Sidebar;
