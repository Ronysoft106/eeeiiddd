import React, { useState } from 'react';

function LibraryManagementSystem() {
  const [books, setBooks] = useState([
    {
      name: 'Python',
      author: 'Mark Lutz',
      pages: 200,
      price: 240,
      issued: true
    },
    {
      name: 'Java',
      author: 'Herbert Schildt',
      pages: 200,
      price: 250,
      issued: true
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    author: '',
    pages: '',
    price: ''
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const addBook = () => {
    const { name, author, pages, price } = formData;
    if (!name || !author || !pages || !price) {
      alert('Please fill all fields.');
      return;
    }

    setBooks([
      ...books,
      {
        name,
        author,
        pages: parseInt(pages),
        price: parseFloat(price),
        issued: false
      }
    ]);

    setFormData({
      name: '',
      author: '',
      pages: '',
      price: ''
    });
  };

  const returnBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].issued = false;
    setBooks(updatedBooks);
  };

  const issueBook = (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].issued = true;
    setBooks(updatedBooks);
  };

  const deleteBook = (index) => {
    const updatedBooks = books.filter((_, i) => i !== index);
    setBooks(updatedBooks);
  };

  return (
    <div style={{ margin: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Welcome Library Management System</h1>

      <h2>All Books</h2>
      <table id="bookTable" style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Book Author</th>
            <th>Book Pages</th>
            <th>Book Price</th>
            <th>Book Availability</th>
            <th>Issue</th>
            <th>Return</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index} className={book.issued ? 'issued' : ''} style={{ backgroundColor: book.issued ? '#eee' : 'transparent' }}>
              <td>{book.name}</td>
              <td>{book.author}</td>
              <td>{book.pages}</td>
              <td>{book.price}</td>
              <td className="availability">{book.issued ? 'Issued' : 'Available'}</td>
              <td>
                <button onClick={() => issueBook(index)} disabled={book.issued}>
                  Issue
                </button>
              </td>
              <td>
                <button onClick={() => returnBook(index)} disabled={!book.issued}>
                  Return
                </button>
              </td>
              <td>
                <button onClick={() => deleteBook(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 style={{ marginTop: '30px' }}>Add Book</h2>
      <div>
        <input
          type="text"
          id="name"
          placeholder="Book Name"
          value={formData.name}
          onChange={handleInputChange}
          style={{ padding: '5px', marginRight: '5px' }}
        />
        <input
          type="text"
          id="author"
          placeholder="Book Author"
          value={formData.author}
          onChange={handleInputChange}
          style={{ padding: '5px', marginRight: '5px' }}
        />
        <input
          type="number"
          id="pages"
          placeholder="Book Pages"
          value={formData.pages}
          onChange={handleInputChange}
          style={{ padding: '5px', marginRight: '5px' }}
        />
        <input
          type="number"
          id="price"
          placeholder="Book Price"
          value={formData.price}
          onChange={handleInputChange}
          style={{ padding: '5px', marginRight: '5px' }}
        />
        <button onClick={addBook} style={{ padding: '5px 10px' }}>
          Add
        </button>
      </div>
    </div>
  );
}

export default LibraryManagementSystem;
