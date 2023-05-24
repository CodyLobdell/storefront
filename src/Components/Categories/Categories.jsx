import { useSelector, useDispatch } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import './Categories.css';

function Categories() {
  const categories = useSelector(currentState => currentState.categoryReducer.categories)
  const dispatch = useDispatch();
  // console.log('5sd', categories);
  const handleClick = (category) => {
    dispatch({
      type: 'FILTER_CATEGORY',
      payload: category
    });
  }

  return (
    <>
      {/* <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        >
        {categories.map((category) => <Item onClick={() => handleClick(category)} >{category}</Item>)}
      </Stack> */}
      <Nav fill variant="tabs">
        {categories.map((category, idx) => <Nav.Item id={idx}><Nav.Link onClick={() => handleClick(category)} >{category}</Nav.Link></Nav.Item>)}
      </Nav>
      {/* <ul>
        {categories.map((category) => <li onClick={() => handleClick(category)} >{category}</li>)}
      </ul> */}
    </>
  );
}

export default Categories;


