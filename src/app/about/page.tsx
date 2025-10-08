'use client';

import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  min-height: calc(100vh - 200px);
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.primary};
`;

const Content = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textLight};
`;

export default function AboutPage() {
  return (
    <AboutContainer>
      <Title>About Me</Title>
      <Content>
        <p>저에 대한 소개를 작성해주세요.</p>
      </Content>
    </AboutContainer>
  );
}
