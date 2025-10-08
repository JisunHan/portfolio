'use client';

import styled from 'styled-components';

const CareerContainer = styled.div`
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

const Timeline = styled.div`
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

const TimelineItem = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  border-left: 3px solid ${({ theme }) => theme.colors.primary};
  padding-left: ${({ theme }) => theme.spacing.xl};
`;

const Period = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Company = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Position = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textLight};
`;

export default function CareerPage() {
  return (
    <CareerContainer>
      <Title>Career</Title>
      <Timeline>
        <TimelineItem>
          <Period>2024.01 - 현재</Period>
          <Company>회사명</Company>
          <Position>직책 / 포지션</Position>
        </TimelineItem>
        <TimelineItem>
          <Period>2023.01 - 2023.12</Period>
          <Company>이전 회사명</Company>
          <Position>직책 / 포지션</Position>
        </TimelineItem>
      </Timeline>
    </CareerContainer>
  );
}
