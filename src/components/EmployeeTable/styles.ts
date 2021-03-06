import styled from "styled-components";
 

export const Container = styled.div`
  display: flex;
  flex-direction: column;

 span {
   display: flex;
   align-items: center;
   justify-content: center;
 }
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    

    

    th {
      color: #FFFF;
      font-weight: 500;
      padding: 1rem 0 1.5rem;
      text-align: center;
      justify-content: center;
      line-height: 0.90rem;
      background: #A6A3A3;
      border-radius: 0.09rem;
      align-items: center;
      justify-content: center;
    }

    td {
      padding: 0.8rem 1.2rem;
      border: 0;
      background: #D8D8D8;
      color: #000;
      border-radius: 0.09rem;
      align-items: center;
      justify-content: center;
     
    }

   
    button[type="submit"] {
      width: 80px;
      border-radius: 5px;
      border: none;
      margin-top: -3px;
      cursor: pointer;
      color: #fff;
      box-shadow: 0px 1px 3px 0px #222;
      font-size: 12px;
      font-weight: bold !important;
      height: 30px;


      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.8);
        /* filter: opacity(10); */
      }
    }


    #btnEdit {
      background-color: #E49B2E;

      
    }

   


    
    #btnView {
      background-color: #68BBBB;
    }
    #btnDelet {
      background-color: #B95151;
    }
    
  }

  
`
export const DivButton = styled.div`
 display: flex;
 justify-content: flex-end;

 button { 
    font-size: 1rem; // 16 pixels de font
    color: #FFFFFF;  // 
    background: #6CC356; //
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
