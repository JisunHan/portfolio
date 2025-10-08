'use client';

import styled from 'styled-components';

const ContactContainer = styled.div`
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

const ContactInfo = styled.div`
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`;

const ContactItem = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Label = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Value = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.primary};
  transition: opacity ${({ theme }) => theme.transitions.fast};

  &:hover {
    opacity: 0.8;
  }
`;

export default function ContactPage() {
  return (
    <ContactContainer>
      <Title>Contact</Title>
      <ContactInfo>
        <ContactItem>
          <Label>Email</Label>
          <Value href="mailto:your.email@example.com">your.email@example.com</Value>
        </ContactItem>
        <ContactItem>
          <Label>GitHub</Label>
          <Value href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            github.com/yourusername
          </Value>
        </ContactItem>
        <ContactItem>
          <Label>LinkedIn</Label>
          <Value
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin.com/in/yourprofile
          </Value>
        </ContactItem>
      </ContactInfo>
    </ContactContainer>
  );
}
