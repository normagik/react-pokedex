import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


export const Nav= styled.nav `
background: #dd1c1a;
height: 80px;
display: flex;
justify-content: center;
font-weight: 700;
`;

export const NavLink= styled(Link)`
color: #f0c808;
font-size: 3rem;
font-family: 'Bangers', cursive;
display: flex;
align-items: center;
text-decoration:none;
cursor:pointer;
letter-spacing: 2px;

@media screen and (max-width: 400px){
  position: absolute;
    top: 25px;
    left:25px;
    font-size: 1rem;
};
`;

export const NavIcon= styled.div`
display: block;
position: absolute;
top: 0;
right: 0;
cursor: pointer;
color: #fff;

p{
transform: translate(-175%, 100%);
font-weight: bold;    
}
`;

export const Bars = styled(FaBars)`
font-size: 2rem;
transform: translate(-50%, -65%);
`;