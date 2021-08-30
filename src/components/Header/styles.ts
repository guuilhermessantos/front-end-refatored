import styled from 'styled-components'

export const Container = styled.header`
  background: #BAB8B8;
  /* display: flex; */


`;

export const Content = styled.div`
  display: flex;

  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 0rem 5rem; // 16 pixels nas laterais 
  display: flex;
  align-items: center; // quero que a logo e o botão estejam  alinhados
  justify-content: center; // quero que aja um espaço entre a logo e o botão

  span {
   display: flex;
   align-items: center;
   justify-content: center;
   color: #FFFF
 }
   button { 
    font-size: 1rem; // 16 pixels de font
    color: #FFFFFF;  // 
    background: var(--green); //
    border: 0;
    padding: 0 2rem; // 32 pixels na direita e esquerda
    border-radius: 0.25rem;
    height: 3rem;
    cursor: pointer;

    transition: filter 0.2s; // deixa mais leve a transição do brightness

    &:hover {
      filter: brightness(0.9) // vai levemente escurecer o botão ao passar por cima
    }
  }

`;
