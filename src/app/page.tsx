'use client';

import styled from 'styled-components';

const HomeContainer = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing['2xl']};
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  max-width: 600px;
`;

export default function Home() {
  return (
    <HomeContainer>
      <Title>안녕하세요 👋</Title>
      <Description>포트폴리오 웹사이트에 오신 것을 환영합니다.</Description>
    </HomeContainer>
  );
}
