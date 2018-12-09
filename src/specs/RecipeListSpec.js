import React from 'react';
import renderer from 'react-test-renderer';
import RecipeList from '../components/RecipeList';


const testRecipes = [
  {
    id: 1,
    name: 'recipe 1',
    category: 'category 1'
  }
]

describe('<RecipeList />', () => {
  test('Should not break when no recipes are passed', () => {
    const component = renderer.create(

        <RecipeList/>

    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
  test('Should render correctly', () => {
    const component = renderer.create(

        <RecipeList recipes={testRecipes}/>

    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
  test('Should render favorited state correctly', () => {
    const component = renderer.create(

        <RecipeList recipes={testRecipes} favorited={true}/>

    );
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  })
})
