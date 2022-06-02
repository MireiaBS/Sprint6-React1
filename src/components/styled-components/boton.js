import styled from 'styled-components'

export const Button1 = styled.button`
    background: bisque;
    border: 2px solid #f8741;    
    border-radius: 1em;
    margin: 2em;
    padding-left: 20px;
    padding-right: 20px;
    opacity: 80%;

    &:hover {
        background: rgb(450, 42, 80);  
        transition: all .4s ease;   
    }
`
export const Button2 = styled.button`
    background: pink;
    border: 0px solid #f8741; 
    display: flex;    
    padding: 12px;
    padding-right: 30px;
    padding-left: 30px;
    font-size: 1cm;    
    border-radius: 1em;
    margin: 1.5em;
    width: min-content;
    
    &:hover {
        background: rgb(450, 42, 80); 
        transition: all .4s ease;   
    }
`
    
