import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 287px 1fr;
  justify-content: center;
  align-items: center;
  width: 733px;
  height: 282px;
  //background-color: #fff;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`
export const Photo = styled.div`
  display: flex;
  background-image: url("https://thankfulsnarlingdoom.jordymasani94.repl.co/images/drawers.jpg");
  background-size: cover;
  height: 282px;
  width: auto;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
`
export const Content = styled.div`
  display: flex;
  background-color: #fff;
  height: 282px;
  width: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const Title = styled.div`
  display: flex;
  font-size: 20px;
  color: #6d7f97;
  padding: 10px;
`
export const Subtitle = styled.div`
  display: flex;
  font-size: 13px;
  color: #6d7f97;
  padding: 30px;
`
export const User = styled.div`
  display: flex;
  width: 400px;
  justify-content: space-between;
  align-items: center;
  i{
    color: #6d7f97;
    border-radius: 50%;
    background-color: #edf1fa;
    padding: 10px 12px;
    cursor: pointer;
  }
`
export const UserProfile = styled.div`
  display: flex;
`
export const UserPhoto = styled.div`
  display: flex;
  background-image: url("https://thankfulsnarlingdoom.jordymasani94.repl.co/images/avatar-michelle.jpg");
  background-size: cover;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 10px;
`
export const UserDetail = styled.div`
  display: flex;
  color: #48556a;
  font-size: 13px;
  font-weight: 700;
  flex-direction: column;
  span{
    font-size: 13px;
    color: #6d7f97;
    font-weight: 400;
  }
`
