import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

describe('test firstScreen', () => {
  const appWithRedux = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );
  test('is a/b test is working for title', () => {
    render(appWithRedux());
    const now = new Date();
    const actualHour = now.getHours();
    let titleElement;
    if (actualHour % 2 === 0) {
      titleElement = screen.getByText(/Easily create or join a local/i);
    } else {
      titleElement = screen.getByText(/Create the childcare you/i);
    }
    expect(titleElement).toBeInTheDocument();
  });

  test('is a/b test is working for subtitle', () => {
    render(appWithRedux());
    const now = new Date();
    const actualHour = now.getHours();
    let titleElement;
    if (actualHour % 2 === 0) {
      titleElement = screen.getByText(
        /Hapu is Airbnb for nanny share. Share your home, nanny and costs and create/i,
      );
    } else {
      titleElement = screen.getByText(
        /Connect with other local families to share a nanny from as low as/i,
      );
    }
    expect(titleElement).toBeInTheDocument();
  });

  test('nanny infos is on page', () => {
    render(appWithRedux());
    const name = screen.getByText(/Sarah/i);
    const days = screen.getByText(/Wednesday, Thursday, Friday/i);
    const times = screen.getByText(/7:30 - 5:30/i);
    expect(name).toBeInTheDocument();
    expect(days).toBeInTheDocument();
    expect(times).toBeInTheDocument();
  });
});

describe('test second Screen', () => {
  const appWithRedux = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  test('title is on page', () => {
    render(appWithRedux());
    const title = screen.getByRole('heading', {
      level: 3,
      name: /Share your home, nanny and costs/i,
    });
    expect(title).toBeInTheDocument();
    const description = screen.getByText(
      /You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be/i,
    );
    expect(description).toBeInTheDocument();
  });
});

describe('test form Screen', () => {
  const appWithRedux = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  test('title form is on page', () => {
    render(appWithRedux());
    const titleForm = screen.getByText(
      /Are you a parent without a nanny and looking to share/i,
    );
    expect(titleForm).toBeInTheDocument();
  });

  test('description form is on page', () => {
    render(appWithRedux());
    const descriptionForm = screen.getByText(
      /Leave us your name and email and we’ll update you as soon as a share becomes available in your area!/i,
    );
    expect(descriptionForm).toBeInTheDocument();
  });
});

describe('test payment Screen', () => {
  const appWithRedux = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  test('title is on page', () => {
    render(appWithRedux());
    const title = screen.getByRole('heading', {
      level: 2,
      name: /Shared payments made simple/i,
    });
    expect(title).toBeInTheDocument();
  });

  test('description is on page', () => {
    render(appWithRedux());
    const description = screen.getByText(
      /Sometimes it’s hard enough just sharing a restaurant bill./i,
    );
    expect(description).toBeInTheDocument();
  });
});

describe('test framework built Screen', () => {
  const appWithRedux = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  test('title is on page', () => {
    render(appWithRedux());
    const title = screen.getByRole('heading', {
      level: 2,
      name: /A framework built for the long term/i,
    });
    expect(title).toBeInTheDocument();
  });

  test('description is on page', () => {
    render(appWithRedux());
    const description = screen.getByText(
      /Childcare is for the long term. And you need a framework you can count on that gives your share long/i,
    );
    expect(description).toBeInTheDocument();
  });
});

describe('test Daily Diary Screen', () => {
  const appWithRedux = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  test('title is on page', () => {
    render(appWithRedux());
    const title = screen.getByRole('heading', {
      level: 2,
      name: /Coming soon: Nanny Share Daily Diary!/i,
    });
    expect(title).toBeInTheDocument();
  });

  test('description is on page', () => {
    render(appWithRedux());
    const description = screen.getByText(
      /With the Hapu daily diary your nanny will be able to update you and your sharers with photos and/i,
    );
    expect(description).toBeInTheDocument();
  });
});


describe('test footer', () => {
  const appWithRedux = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

  test('title is on page', () => {
    render(appWithRedux());
    const title = screen.getByRole('heading', {
      level: 2,
      name: /Become a nanny share host/i,
    });
    expect(title).toBeInTheDocument();
  });

  test('link is on page', () => {
    render(appWithRedux());
    const description = screen.getByText(
      /Or browse local nanny-shares/i,
    );
    expect(description).toBeInTheDocument();
  });

  test('nav bar footer is on page', () => {
    render(appWithRedux());
    const share = screen.getByText(/Share Your Nanny/i);
    const blog = screen.getByText(/Blog/i);
    const terms = screen.getByText(/Terms & Privacy/i);
    expect(share).toBeInTheDocument();
    expect(blog).toBeInTheDocument();
    expect(terms).toBeInTheDocument();
  })
});