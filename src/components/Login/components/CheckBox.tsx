import React from "react";
import styled from "styled-components";

interface CheckBoxInputProps {
    label: string;
}

const CheckBoxInput: React.FC<CheckBoxInputProps> = ({ label, ...props }) => {
    return (
        <Container>            
            <input type="checkbox" />
            <span>Yes! I would like to receive special offers and updates about Disney+ and other products and services from <a href="#">The Walt Disney Family of Companies</a> by email.</span>            
        </Container>
    );
};

const Container = styled.div`{
    display: flex;
    align-items: center;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #666;

    input[type="checkbox"] {
        display: flex;
        align-items: flex-start;
        cursor: pointer;
        width: 60px;
        height: 60px;
        margin-right: 10px;
        position: relative;
        border: 10px solid #000;
    }

    input[type="checkbox"]:checked ::before {        
        display: inline-block;
        width: 20px;
        height: 20px;
        background-color: #000;        
        text-align: center;
        line-height: 18px;
        font-size: 10px;
    }

    a {
        color: #0000ee;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }

}`;

export default CheckBoxInput;