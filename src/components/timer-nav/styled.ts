import styled from "styled-components";

export const SC_TimerNav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 73px;
`

export const SC_TimerNavTitle = styled.h1`
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.03;
  text-transform: uppercase;
  color: #fff;
  margin-bottom: 10px;
`

export const SC_TimerNavItems = styled.ul`
  display: flex;
`

export const SC_TimerNavItem = styled.li`
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.03;
  text-transform: uppercase;
  color: #fffb800;
  border-bottom: 10px;

  &:first-child {
    a{
      color: #ffb800;
      border-bottom: 2px #ffb800 solid;
    }
  }

  &:not(:last-child){
    margin-right: 46px;
  }

  a {
    padding-bottom: 9px;
    &:hover {
      color: #FFB800;
    }
  }
`