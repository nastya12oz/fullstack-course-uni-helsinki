import { useState, useEffect } from 'react';
import Filter from './Filter';
import PersonsList from './PersonsList';
import PersonsForm from './PersonsForm';
import phonebookService from './services/phonebook'; 
import { Notification } from './Notification';
import './phonebook.css'
import { Footer } from './Footer'; 


const App = () => {
  const [notes, setNotes] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [notification, setNotification] = useState({ message: null, type: null });

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => {
      setNotification({ message: null, type: null });
    }, 5000); 
  };

  
  const addPerson = (event) => {
    event.preventDefault();
    const existingPerson = notes.find(person => person.name === newName);
    if (existingPerson) {
      const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`);
      if (confirmUpdate) {
        const updatedPerson = { ...existingPerson, number: newNumber };
        phonebookService.update(existingPerson.id, updatedPerson)
          .then(response => {
            setNotes(notes.map(note => note.id !== existingPerson.id ? note : response.data));
            setNewName('');
            setNewNumber('');
            showNotification(`Updated ${newName}`, 'info');
          })
          .catch(error => {
            alert(`Information of '${newName}' has already been removed from the server`);
            setNotes(notes.filter(n => n.id !== existingPerson.id));
            showNotification(`Information of '${newName}' has already been removed from the server`, error);
          });
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber
      };
      phonebookService.create(personObject)
        .then(response => {
          setNotes(notes.concat(response.data));
          setNewName('');
          setNewNumber('');
          showNotification(`Added ${newName}`, 'info');
        })
    }
  };
  

  const deletePerson = id => {
    const person = notes.find(n => n.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      phonebookService.remove(id)
        .then(() => {
          setNotes(notes.filter(n => n.id !== id));
        })
    }
  };

  useEffect(() => {
    let timer;
    if (notification.message) {
      timer = setTimeout(() => {
        setNotification({ message: null, type: null });
      }, 5000);
    }
    return () => clearTimeout(timer);
  }, [notification]);

  useEffect(() => {
    phonebookService.getAll()
      .then(response => {
        setNotes(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch notes:', error);
      });
  }, []);
  

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter searchTerm={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} /> 

      <h3>add a new</h3>
      <PersonsForm addPerson={addPerson} newName={newName} newNumber={newNumber} setNewName={setNewName} setNewNumber={setNewNumber} />
      
      <h3>Numbers</h3>
      <PersonsList persons={notes} searchTerm={searchTerm} onDelete={deletePerson} />
      <Footer />
    </div>
  );
};

export default App;
