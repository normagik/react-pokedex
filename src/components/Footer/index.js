import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { CgPokemon } from 'react-icons/cg';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                    <SocialLogo to="/">Pokedex
                    </SocialLogo>
                    <WebsiteRights>
                        Pokémon © {new Date().getFullYear()} All rights reserved.
                    </WebsiteRights>
                    <SocialIcons>
                    <SocialIconLink href="https://www.facebook.com/PokemonOficialLatAm/?brand_redir=230809307041021" target="_blank" aria-label="Facebook" rel="noopener">
                        <FaFacebook/>
                    </SocialIconLink>
                    <SocialIconLink href="https://www.instagram.com/pokemon" target="_blank" aria-label="Instagram" rel="noopener">
                        <FaInstagram/>
                    </SocialIconLink>
                    <SocialIconLink href="https://twitter.com/pokemon/" target="_blank" aria-label="Twitter" rel="noopener">
                        <FaTwitter/>
                    </SocialIconLink>
                    <SocialIconLink href="https://www.pokemon.com/us/" target="_blank" aria-label="Website" rel="noopener">
                        <CgPokemon/>
                    </SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
               </SocialMedia>
            </FooterWrap>
            </FooterContainer>
    )
};

export default Footer;
