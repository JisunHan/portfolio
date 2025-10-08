'use client';

import styled from 'styled-components';

const ProjectsContainer = styled.div`
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

const ProjectCard = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  transition: transform ${({ theme }) => theme.transitions.fast},
    box-shadow ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ProjectDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.textLight};
`;

export default function ProjectsPage() {
  return (
    <ProjectsContainer>
      <Title>Projects</Title>
      <ProjectsGrid>
        <ProjectCard>
          <ProjectTitle>프로젝트 1</ProjectTitle>
          <ProjectDescription>프로젝트 설명을 작성해주세요.</ProjectDescription>
        </ProjectCard>
        <ProjectCard>
          <ProjectTitle>프로젝트 2</ProjectTitle>
          <ProjectDescription>프로젝트 설명을 작성해주세요.</ProjectDescription>
        </ProjectCard>
      </ProjectsGrid>
    </ProjectsContainer>
  );
}
