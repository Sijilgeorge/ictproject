import React, { useState } from 'react';
import { Typography, Table, TableHead, TableBody, TableRow, TableCell, Button, FormControl, Select, MenuItem, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(2),
  },
  formControl: {
    marginRight: theme.spacing(2),
    minWidth: 120,
  },
  addButton: {
    marginRight: theme.spacing(2),
  },
  actionsCell: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const AdminDashboard = () => {
  const classes = useStyles();

  // Sample book data
  const [books, setBooks] = useState([
    { id: 1, title: 'Book 1', rentalStatus: 'Rented' },
    { id: 2, title: 'Book 2', rentalStatus: 'Available' },
    { id: 3, title: 'Book 3', rentalStatus: 'Available' },
  ]);

  const [selectedBook, setSelectedBook] = useState('');
  const [rentalStatus, setRentalStatus] = useState('');
  const [newBookTitle, setNewBookTitle] = useState('');

  const handleStatusUpdate = () => {
    const updatedBooks = books.map((book) =>
      book.id === selectedBook ? { ...book, rentalStatus } : book
    );
    setBooks(updatedBooks);
    setSelectedBook('');
    setRentalStatus('');
  };

  const handleDelete = () => {
    const filteredBooks = books.filter((book) => book.id !== selectedBook);
    setBooks(filteredBooks);
    setSelectedBook('');
  };

  const handleAddBook = () => {
    const newBook = { id: Date.now(), title: newBookTitle, rentalStatus: 'Available' };
    setBooks([...books, newBook]);
    setNewBookTitle('');
  };

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.header}>Admin Dashboard</Typography>

      <Table className="dashboard-river">
        <TableHead>
          <TableRow>
            <TableCell>Book Title</TableCell>
            <TableCell>Rental Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book) => (
            <TableRow key={book.id}>
              <TableCell>{book.title}</TableCell>
              <TableCell>{book.rentalStatus}</TableCell>
              <TableCell className={classes.actionsCell}>
                <FormControl className={classes.formControl}>
                  <Select
                    value={selectedBook === book.id ? rentalStatus : ''}
                    onChange={(e) => setRentalStatus(e.target.value)}
                  >
                    <MenuItem value="Available">Available</MenuItem>
                    <MenuItem value="Rented">Rented</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setSelectedBook(book.id);
                    setRentalStatus(book.rentalStatus);
                  }}
                >
                  Update
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => setSelectedBook(book.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <FormControl className={classes.formControl}>
        <TextField
          label="Book Title"
          value={newBookTitle}
          onChange={(e) => setNewBookTitle(e.target.value)}
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        className={classes.addButton}
        onClick={handleAddBook}
      >
        Add New Book
      </Button>
      <Button variant="contained" color="default">
        Logout
      </Button>
    </div>
  );
};

export default AdminDashboard;
