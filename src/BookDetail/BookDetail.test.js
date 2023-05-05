import { render } from "@testing-library/react";
import BookDetail from "./BookDetail";
describe('BookDetail', () => {
  it('renders title', () => {
    const props = {
      book: {
        name: 'Refactoring'
      }
    }
    const { container } = render(<BookDetail {...props} />);
    const title = container.querySelector('.book-title');
    expect(title.innerHTML).toEqual(props.book.name);
  })

  it('renders description', () => {
    // given or arrange
    const props = {
      book: {
        name: 'Refactoring',
        description: `Martin Fowler's
            Refactoring defined core ideas and techniques
            that hundreds of thounsands of developers have
            used to improve their software`
      }
    }
    const { container } = render(<BookDetail {...props} />);
    //when or act
    const description = container.querySelector('p.book-description');

    //then or assert
    expect(description.innerHTML).toEqual(props.book.description);
  })
})
