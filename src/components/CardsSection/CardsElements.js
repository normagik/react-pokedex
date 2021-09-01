import styled from 'styled-components';

export const Container= styled.div`
background: #fff;
width: 100%;
height: auto;
min-height: 100vh;
padding: 0 auto;
`; 

export const Content= styled.div`
height: calc(100vh-80px);
max-height: 100%;
width: 100%;
padding: 0 auto;

`;

export const Items= styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 2rem auto;
`;

export const ContainerP= styled.p`
font-size:clamp(3rem, 3.5vw, 4rem);
margin-bottom: 2rem;
font-family: 'Yanone Kaffeesatz', sans-serif;
color: #000;

`;
export const SearchLabel= styled.label`
font-size:2.5rem;
color: #000;
font-family: 'Yanone Kaffeesatz', sans-serif;
margin-left:2rem;
`;

export const SearchInput= styled.input`
margin: 1rem;
padding: 16px 16px 5px 16px;
border: 1px solid #000;
border-radius:4px;
font-size: 1rem;
`;

export const PokemonCard= styled.div`
margin: 1rem 1rem;
padding: .2rem 2rem;
border: 1px solid #000;
border-radius: 12px;
line-height: 2rem;
width: 200px;
background-color: #fff;
`;

export const PokemonImg= styled.img`
height: 200px;
min-width: 200px;
max-width: 100%;
`;


export const PokemonName= styled.h2`
font-weight: 400;
font-size: 1.8rem;
font-family: 'VT323', monospace;
text-align: center;
`;

export const PokemonTypes= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
`;
export const PokemonInfoContainer= styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align:center;
margin-bottom: .5rem;
`;
export const PokemonInfo= styled.div`
color: #000;
height: 280px;
`;

export const TypeContainer= styled.div`
margin:0;
`;

export const PokemonP= styled.p`
margin: 0;
font-size: 1rem;

`;

export const FavoriteButton= styled.button`
font-size: 1rem;
font-weight: bold;
padding:1rem 1.2rem;
border:none;
border-radius: 12px;
background: #F0C808;
color: #000;
transition: 0.2s ease-out;
margin-bottom: .5rem;

&:hover{
    background: #9E8505;
    transition: 0.2s ease-out;
    cursor:pointer;
    color: #fff;
    
};
`;
export const CatchButton= styled.button`
font-size: 1.2rem;
padding: .6rem 2rem;
border:none;
border-radius: 12px;
background: #07a0c3;
color: #fff;
transition: 0.2s ease-out;



&:hover{
    background: #086788;
    transition: 0.2s ease-out;
    cursor:pointer;
    color: #000;
    
};
`;
