import logo from './logo.svg';
import './App.css';
import { Hero, Card, Section, Button, SearchForm } from 'odyssey-design-system';
import { Box, Typography } from '@mui/material';
import { colors } from './utils/colors';
import { cards, cards2, sections } from './data';
import styled from '@emotion/styled';

import Layout from './components/Layout';
import NewsLetter from './components/NewsLetter';

function App() {
  return (
    <Layout>
      {/* <Box
        sx={{
          padding: '5rem',
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <Button label="Primary" variant="primary" withArrow fullwidth />
        <Button label="Secondary" variant="secondary" withArrow fullwidth />
        <Button label="Purple" variant="purple" withArrow fullwidth />
        <Button label="Black" variant="black" withArrow fullwidth />
        <Box sx={{ background: '#000', padding: '1rem' }}>
          {' '}
          <Button
            label="Outlined White"
            variant="outlineWhite"
            withArrow
            fullwidth
          />
        </Box>
        <Box sx={{ background: '#000', padding: '1rem' }}>
          {' '}
          <Button
            label="Outlined Primary"
            variant="outlinePrimary"
            withArrow
            fullwidth
          />
        </Box>
      </Box> */}
      <Hero
        variant="medium"
        backgroundColor={colors.black[800]}
        image={'/img/hero2.jpg'}
        title={'Explore the Universe'}
        subtitle={'Embark on a Journey Beyond the Stars'}
        primaryCta={'Book Your Adventure'}
        secondaryCta={'Explore'}
        primaryCtaVariant={'secondary'}
        contentAlignment="left"
        search={false}
        overlay
        backgroundPosition="bottom"
      />
      <SearchForm
        title="Seach your next adventure"
        backgroundColor={colors.secondary[900]}
        height={200}
        buttonVariant={'secondary'}
        focusColor={colors.purple[900]}
        destinationLabel={'Destination'}
        startDateLabel={'From'}
        endDateLabel={'To'}
        travelersLabel={'Travelers'}
        labelColor={'white'}
      />
      <CardsWrapper>
        <Typography
          variant="h3"
          fontFamily={'IBM Plex Serif'}
          ml={'2.5rem'}
          fontWeight={700}
        >
          Most Popular Destinatoins
        </Typography>

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
      </CardsWrapper>
      {/* <CardsContainer>
        {cards2.map((card) => {
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
      </CardsContainer> */}
      {sections.map((section) => {
        return (
          <Section
            image={section.image}
            title={section.title}
            body={section.body}
            buttonText={section.buttonText}
            flip={section.flip}
            variant={section.variant}
            background={colors.neutrals[200]}
          />
        );
      })}

      <NewsLetter />
    </Layout>
  );
}

const CardsContainer = styled.div({
  display: 'flex',
  margin: '1rem auto',
  gap: '2rem',
  justifyContent: 'center',
});

const CardsWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  margin: '8rem auto',
  gap: '2rem',
  justifyContent: 'center',
  maxWidth: '1200px',
});

export default App;
