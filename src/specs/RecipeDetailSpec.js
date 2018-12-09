import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import renderer from 'react-test-renderer';
import RecipeDetail from '../components/RecipeDetail';

const testRecipe = {
  id: 1,
  name: 'Test Recipe',
  category: 'Test Category',
  ingredients: ['ing1', 'ing2'],
  steps: ['step1', 'step2']
}

describe('<RecipeDetail />', () => {

  let testRecipe;

  beforeEach(() => {
    testRecipe = {
      id: 1,
      name: 'Test Recipe',
      category: 'Test Category',
      ingedients: ['ing1', 'ing2'],
      steps: ['step1', 'step2']
    }
  })
  test('Should render zero state', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail/>
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })

  test('Should correctly render a recipe', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe}/>
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })

  test('Should correctly assign a classnName', () => {
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe} className='classname-test'/>
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
  test('Should render a recipe without ingredients', () => {
    delete testRecipe.ingedients
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail recipe={testRecipe}/>
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
  test('Should render a recipe without steps', () => {
    delete testRecipe.steps
    const component = renderer.create(
      <BrowserRouter>
        <RecipeDetail/>
      </BrowserRouter>
    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
})
