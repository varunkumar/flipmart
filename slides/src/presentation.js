// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  ComponentPlayground,
  Deck,
  Heading,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
  Image,
  Layout,
  Fit,
  Table,
  TableBody,
  TableHeader,
  TableHeaderItem,
  TableRow,
  TableItem
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import apollo stuff for live demo
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

// Import snippets
import { ORDER } from './snippets';

// Require CSS
require('normalize.css');

const darkTheme = createTheme(
  {
    primary: '#042B35',
    secondary: '#D2A03E',
    tertiary: '#FD853D',
    quartenary: '#A7A7A7'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const lightTheme = createTheme(
  {
    primary: '#FDF6E3',
    secondary: '#D2A03E',
    tertiary: '#FD853D',
    quartenary: '#657B83'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={darkTheme}
        contentHeight={1000}
      >
        <Slide transition={['zoom', 'slide', 'fade', 'spin']} bgColor="primary">
          <Heading size={1} fit caps textColor="secondary">
            Data exchange technology
          </Heading>
          <Heading size={3} caps textColor="tertiary">
            GraphQL
          </Heading>
          <Text margin="100px 0 0" textColor="quartenary" size={6}>
            Sanket, Varun
          </Text>
        </Slide>
        <Slide
          transition={['zoom', 'fade']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={3} textColor="secondary" caps>
            Contents
          </Heading>
          <List>
            <Appear>
              <ListItem>What? How?</ListItem>
            </Appear>
            <Appear>
              <ListItem>Core concepts</ListItem>
            </Appear>
            <Appear>
              <ListItem>GraphQL client</ListItem>
            </Appear>
            <Appear>
              <ListItem>GraphQL ecosystem</ListItem>
            </Appear>
            <Appear>
              <ListItem>GraphQL @ Arcesium</ListItem>
            </Appear>
            <Appear>
              <ListItem>Our verdict</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide
          transition={['zoom', 'slide', 'fade', 'spin']}
          bgColor="primary"
          textColor="primary"
        >
          <Heading size={3} textColor="secondary" caps>
            Introduction
          </Heading>
          <Text size={6} textColor="tertiary" style={{ marginBottom: 40 }}>
            API-first design model
          </Text>
          <Image src="/images/graphql.png" height={300} width={300} />
        </Slide>
        <Slide
          transition={['fade', 'zoom']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={1} textColor="secondary" caps>
            GraphQL
          </Heading>
          <Text size={6} textColor="tertiary" style={{ marginBottom: 40 }}>
            A query language for API, a runtime for fulfilling queries
          </Text>
          <Image src="/images/graphql-how.png" width={1000} />
        </Slide>
        <Slide
          transition={['zoom', 'fade', 'spin', 'slide']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={6} textColor="tertiary" caps>
            Exploration Scope
          </Heading>
          <Image src="/images/web.png" />
        </Slide>
        <Slide
          transition={['zoom', 'fade']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={6} textColor="tertiary" caps>
            Exploration Scope
          </Heading>
          <Layout>
            <Image src="/images/ios.png" />
            <Image src="/images/android.png" width={428} height={713} />
          </Layout>
        </Slide>
        <Slide
          transition={['zoom', 'fade', 'spin', 'slide']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={6} textColor="secondary" caps>
            Exploration Scope - Reporting infra
          </Heading>
          {
            // TODO: add demo images
          }
        </Slide>
        <Slide
          transition={['zoom', 'fade']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={6} textColor="secondary" caps>
            Core concepts
          </Heading>
          <List>
            <Appear>
              <ListItem>SDL</ListItem>
            </Appear>
            <Appear>
              <ListItem>Query</ListItem>
            </Appear>
            <Appear>
              <ListItem>Mutation</ListItem>
            </Appear>
            <Appear>
              <ListItem>Subscription</ListItem>
            </Appear>
            <Appear>
              <ListItem>Resolver functions</ListItem>
            </Appear>
            <Appear>
              <ListItem>Introspection queries</ListItem>
            </Appear>
          </List>
          {
            // TODO: add SDL image
          }
        </Slide>
        <Slide
          transition={['zoom', 'fade', 'spin', 'slide']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={6} textColor="secondary" caps>
            Core Concepts
          </Heading>
          <Image src="/images/graphql-works.png" width={1000} />
        </Slide>
        <Slide
          transition={['zoom', 'fade', 'spin', 'slide']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={6} textColor="secondary" caps>
            GraphQL client
          </Heading>
          <Text size={6} textColor="tertiary">
            Declarative data fetching
          </Text>
          <ComponentPlayground
            code={ORDER}
            scope={{
              Query,
              gql
            }}
            theme="dark"
          />
        </Slide>
        <Slide
          transition={['zoom', 'fade']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={6} textColor="secondary" caps>
            GraphQL client
          </Heading>
          <Text size={6} textColor="tertiary">
            Local and remote data management
          </Text>
          <Table
            style={{ fontSize: 20, marginTop: 50, marginBottom: 50 }}
            textColor="quartenary"
          >
            <TableHeader>
              <TableRow>
                <TableHeaderItem>Feature</TableHeaderItem>
                <TableHeaderItem>Redux</TableHeaderItem>
                <TableHeaderItem>MobX</TableHeaderItem>
                <TableHeaderItem>GraphQL</TableHeaderItem>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableItem>Data binding</TableItem>
                <TableItem>mapStateToProps</TableItem>
                <TableItem>inject()</TableItem>
                <TableItem>&lt;Query&gt; component</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Actions</TableItem>
                <TableItem>mapDispatchToProps</TableItem>
                <TableItem>@action methods</TableItem>
                <TableItem>&lt;Mutation&gt; component</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Mutation</TableItem>
                <TableItem>Reducers</TableItem>
                <TableItem>@action methods</TableItem>
                <TableItem>Resolver functions</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>Selectors</TableItem>
                <TableItem>reselect library</TableItem>
                <TableItem>@computed</TableItem>
                <TableItem>Resolver functions</TableItem>
              </TableRow>
              <TableRow>
                <TableItem>State</TableItem>
                <TableItem>Store</TableItem>
                <TableItem>@observable</TableItem>
                <TableItem>Cache</TableItem>
              </TableRow>
            </TableBody>
          </Table>
          <Image src="/images/react-redux-graphql.png" height={400} />
        </Slide>
        <Slide
          transition={['zoom', 'fade', 'slide', 'spin']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={6} textColor="secondary" caps>
            GraphQL ecosystem
          </Heading>
          <List>
            <Appear>
              <ListItem>Batching, caching, pagination</ListItem>
            </Appear>
            <Appear>
              <ListItem>Automated persisted queries</ListItem>
            </Appear>
            <Appear>
              <ListItem>Monitoring and tracing</ListItem>
            </Appear>
            <Appear>
              <ListItem>Static type checking and linting</ListItem>
            </Appear>
            <Appear>
              <ListItem>Schema stitching, delegation and binding</ListItem>
            </Appear>
          </List>
          <Appear>
            <Image src="/images/engine.svg" width={400} />
          </Appear>
        </Slide>
        <Slide
          transition={['zoom', 'fade']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={6} textColor="secondary" caps>
            GraphQL @ Arcesium
          </Heading>
          {
            // TODO: add code screenshots
          }
        </Slide>
        <Slide
          transition={['zoom', 'fade', 'slide', 'spin']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={6} textColor="secondary" caps>
            Our verdict
          </Heading>
          <Text size={6} textColor="tertiary" caps fit>
            Go for it
          </Text>
        </Slide>
        <Slide
          transition={['zoom', 'fade']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Image src="/images/summary.png" height={900} />
        </Slide>
        <Slide
          transition={['zoom', 'fade', 'slide', 'spin']}
          bgColor="primary"
          textColor="tertiary"
        >
          <Heading size={6} textColor="secondary" caps>
            Questions?
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
