import React from "react";
import {Container, Photo, Content, Title, Subtitle, User, UserProfile, UserPhoto, UserDetail} from "./styles";

const Article = () => {
    return(
    <Container>
        <Photo/>
        <Content>
            <Title>Shift the overall look and feel by adding these wonderful touches to furniture in your home</Title>
            <Subtitle>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</Subtitle>
            <User>
                <UserProfile>
                    <UserPhoto/>
                    <UserDetail>Michelle Appleton<span>28 Jun 2020</span></UserDetail>
                </UserProfile>
                <i className="fas fa-share"></i>
            </User>
        </Content>
        </Container>
    )
};
export default Article;
