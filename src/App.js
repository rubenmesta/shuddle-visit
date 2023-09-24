import logo from './logo.svg';
import './App.css';
import { Hero, Card, Section, Button, SearchForm } from 'odyssey-design-system';
import { Box, Typography } from '@mui/material';
import { colors } from './utils/colors';
import { cards, sections } from './data';
import styled from '@emotion/styled';

import Layout from './components/Layout';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <Layout>
      <Hero
        variant="medium"
        backgroundColor={colors.black[800]}
        image={'/img/hero.webp'}
        title={'Explore the Universe'}
        subtitle={'Embark on a Journey Beyond the Stars'}
        primaryCta={'Book Your Adventure'}
        secondaryCta={'Explore'}
        contentAlignment="left"
        search={false}
        overlay
      />
      <SearchForm
        title="Seach your next adventure"
        backgroundColor={colors.secondary[100]}
        height={200}
        buttonVariant={'black'}
        focusColor={colors.black[800]}
        destinationLabel={'Destination'}
        startDateLabel={'From'}
        endDateLabel={'To'}
        travelersLabel={'Travelers'}
      />
      <CardsContainer>
        {cards.map((card) => {
          return (
            <Card
              image={card.image}
              title={card.title}
              body={card.body}
              buttonText={card.buttonText}
              variant={card.variant}
            />
          );
        })}
      </CardsContainer>
      {sections.map((section) => {
        return (
          <Section
            image={section.image}
            title={section.title}
            body={section.body}
            buttonText={section.buttonText}
            flip={section.flip}
            variant={section.variant}
          />
        );
      })}

      <NewsLetter />
    </Layout>
  );
}

const CardsContainer = styled.div({
  display: 'flex',
  margin: '8rem auto',
  gap: '2rem',
  justifyContent: 'center',
});

export default App;
