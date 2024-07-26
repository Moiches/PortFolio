import styled from "styled-components";

export const Container = styled.section`
  
margin-top: 15rem;
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
.education{
      padding: 2rem 1.8rem;
      background-color: #2b2b2b;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #FFF;
      &:hover{
        transform: translateY(-5px);
        background-color: var(--royal-blue);
    }
}
`