import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";

it('renders without crashing App', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing HomePage', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomePage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing MovieDetailPage', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MovieDetailPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('search is correct' ,() => {

});

it('filter is correct' ,() => {

});

it('send request get with movie api' ,() => {

});