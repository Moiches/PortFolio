import styled from "styled-components";

export const Container = styled.section`
  
margin-top: 15rem;
  h2{
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
  }
  h3{
   color: var(--green);
    font-size: 2rem;
    margin-bottom: 1rem;

  }


.experience{
      padding: 2rem 1.8rem;
      // background-color: #e5efee;
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;

      &:hover{
        h3{
        color:white;
        }
        transform: translateY(-5px);
        background-color: var(--green);
    }
}

          footer{
        margin-top: auto;
        .tech-list{
          display: flex;
          align-items: center;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
        }
      }
`